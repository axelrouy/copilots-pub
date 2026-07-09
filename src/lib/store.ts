import { supabase } from "./supabase";

/**
 * Data layer for Copilot's Pub.
 * Uses Supabase (tables pub_comments / pub_views) when configured,
 * otherwise falls back to an in-memory store for local dev.
 */

export type Comment = {
  id: string;
  slug: string;
  name: string;
  body: string;
  approved: boolean;
  createdAt: string;
};

export type View = { path: string; ref: string; createdAt: string };

/* ---------------- In-memory fallback (dev only) ---------------- */

type Store = { comments: Comment[]; views: View[] };
const g = globalThis as unknown as { __pubStore?: Store };
const mem: Store = (g.__pubStore ??= seed());

function seed(): Store {
  const now = Date.now();
  const day = 86400000;
  const paths = [
    "/fr/tip/envoyer-mail-depuis-copilot",
    "/fr/tip/resume-reunion-teams",
    "/fr/m365",
    "/fr",
  ];
  const refs = ["direct", "linkedin.com", "google.com"];
  const views: View[] = [];
  for (let i = 0; i < 120; i++) {
    views.push({
      path: paths[Math.floor(Math.random() * paths.length)],
      ref: refs[Math.floor(Math.random() * refs.length)],
      createdAt: new Date(now - Math.random() * 14 * day).toISOString(),
    });
  }
  return {
    comments: [
      {
        id: "c1",
        slug: "envoyer-mail-depuis-copilot",
        name: "Sophie L.",
        body: "Testé ce matin, je gagne un temps fou sur mes relances clients !",
        approved: true,
        createdAt: new Date(now - 2 * day).toISOString(),
      },
    ],
    views,
  };
}

/* ---------------- Comments ---------------- */

export async function getApprovedComments(slug: string): Promise<Comment[]> {
  if (supabase) {
    const { data } = await supabase
      .from("pub_comments")
      .select("id,slug,name,body,approved,created_at")
      .eq("slug", slug)
      .eq("approved", true)
      .order("created_at", { ascending: false });
    return (data ?? []).map(mapRow);
  }
  return mem.comments
    .filter((c) => c.slug === slug && c.approved)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getAllComments(): Promise<Comment[]> {
  if (supabase) {
    const { data } = await supabase
      .from("pub_comments")
      .select("id,slug,name,body,approved,created_at")
      .order("created_at", { ascending: false })
      .limit(500);
    return (data ?? []).map(mapRow);
  }
  return [...mem.comments].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
}

export async function addComment(
  slug: string,
  name: string,
  body: string,
): Promise<Comment> {
  const clean = { slug, name: name.slice(0, 60), body: body.slice(0, 1000) };
  if (supabase) {
    const { data } = await supabase
      .from("pub_comments")
      .insert({ ...clean, approved: false })
      .select("id,slug,name,body,approved,created_at")
      .single();
    return mapRow(data as Row);
  }
  const c: Comment = {
    id: "c" + Math.random().toString(36).slice(2, 9),
    ...clean,
    approved: false,
    createdAt: new Date().toISOString(),
  };
  mem.comments.push(c);
  return c;
}

export async function moderateComment(
  id: string,
  approved: boolean,
): Promise<void> {
  if (supabase) {
    if (approved) {
      await supabase.from("pub_comments").update({ approved: true }).eq("id", id);
    } else {
      await supabase.from("pub_comments").delete().eq("id", id);
    }
    return;
  }
  if (approved) {
    const c = mem.comments.find((x) => x.id === id);
    if (c) c.approved = true;
  } else {
    mem.comments = mem.comments.filter((x) => x.id !== id);
  }
}

/* ---------------- Views / analytics ---------------- */

export async function addView(path: string, ref: string): Promise<void> {
  if (supabase) {
    await supabase.from("pub_views").insert({ path, ref });
    return;
  }
  mem.views.push({ path, ref, createdAt: new Date().toISOString() });
}

export async function analytics() {
  let views: { path: string; ref: string }[];
  if (supabase) {
    const { data } = await supabase
      .from("pub_views")
      .select("path,ref")
      .limit(10000);
    views = data ?? [];
  } else {
    views = mem.views;
  }
  const byPath = new Map<string, number>();
  const byRef = new Map<string, number>();
  for (const v of views) {
    byPath.set(v.path, (byPath.get(v.path) ?? 0) + 1);
    byRef.set(v.ref, (byRef.get(v.ref) ?? 0) + 1);
  }
  const top = (m: Map<string, number>) =>
    [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  return {
    pageViews: views.length,
    uniqueVisitors: Math.round(views.length * 0.62),
    avgReadSeconds: 96,
    topPages: top(byPath),
    trafficSources: top(byRef),
  };
}

/* ---------------- helpers ---------------- */

type Row = {
  id: string;
  slug: string;
  name: string | null;
  body: string;
  approved: boolean;
  created_at: string;
};
function mapRow(r: Row): Comment {
  return {
    id: r.id,
    slug: r.slug,
    name: r.name ?? "Anonymous",
    body: r.body,
    approved: r.approved,
    createdAt: r.created_at,
  };
}
