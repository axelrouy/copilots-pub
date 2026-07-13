"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import dict from "@/lib/dictionaries/fr.json";

type Analytics = {
  pageViews: number;
  uniqueVisitors: number;
  avgReadSeconds: number;
  topPages: [string, number][];
  trafficSources: [string, number][];
};
type Comment = {
  id: string;
  slug: string;
  name: string;
  body: string;
  approved: boolean;
  createdAt: string;
};
type Content = {
  slug: string;
  title: string;
  section: string;
  status: string;
  date: string;
};

export default function AdminPage() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState<Content[]>([]);
  const [tab, setTab] = useState<"analytics" | "content" | "comments">(
    "analytics",
  );
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin");
    if (res.ok) {
      const d = await res.json();
      setAnalytics(d.analytics);
      setComments(d.comments);
      setContent(d.content);
      setAuthed(true);
    } else if (res.status === 401) {
      setAuthed(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoginError(false);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setPassword("");
      load();
    } else {
      setLoginError(true);
    }
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setAuthed(false);
    setAnalytics(null);
  }

  async function moderate(id: string, approved: boolean) {
    await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, approved }),
    });
    load();
  }

  const a = dict.admin;
  const pending = comments.filter((c) => !c.approved);

  const card =
    "rounded-2xl border border-border bg-surface p-5";
  const tabBtn = (active: boolean) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition ${
      active ? "bg-ms-blue text-white" : "text-muted hover:bg-surface-2"
    }`;

  if (authed === false) {
    return (
      <div className="grid min-h-screen place-items-center bg-background px-4">
        <form
          onSubmit={login}
          className="w-full max-w-sm rounded-2xl border border-border bg-surface p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl brand-gradient">
              🍻
            </span>
            <h1 className="text-lg font-bold">{a.title}</h1>
          </div>
          <label className="mb-1.5 block text-sm text-muted" htmlFor="pwd">
            Mot de passe
          </label>
          <input
            id="pwd"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ms-blue"
          />
          {loginError && (
            <p className="mt-2 text-sm text-pub">Mot de passe incorrect.</p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-ms-blue px-4 py-2 text-sm font-medium text-white"
          >
            Se connecter
          </button>
        </form>
      </div>
    );
  }

  if (authed === null) {
    return (
      <div className="grid min-h-screen place-items-center bg-background">
        <p className="text-sm text-muted">…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4">
          <span className="grid h-9 w-9 place-items-center rounded-xl brand-gradient">
            🍻
          </span>
          <h1 className="text-lg font-bold">{a.title}</h1>
          <button
            onClick={logout}
            className="ml-auto text-sm text-muted hover:text-foreground"
          >
            Déconnexion
          </button>
          <Link
            href="/fr"
            className="text-sm text-muted hover:text-foreground"
          >
            ← AI Tip&apos;s Pub
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6">
        <p className="mb-4 rounded-xl border border-pub/30 bg-pub/10 px-4 py-2.5 text-sm text-pub">
          ⚠️ {a.demo_notice}
        </p>

        <div className="mb-6 flex gap-1 rounded-xl border border-border bg-surface p-1">
          <button className={tabBtn(tab === "analytics")} onClick={() => setTab("analytics")}>
            📈 {a.analytics}
          </button>
          <button className={tabBtn(tab === "content")} onClick={() => setTab("content")}>
            📝 {a.content}
          </button>
          <button className={tabBtn(tab === "comments")} onClick={() => setTab("comments")}>
            💬 {a.comments}
            {pending.length > 0 && (
              <span className="ml-1.5 rounded-full bg-pub px-1.5 text-xs text-white">
                {pending.length}
              </span>
            )}
          </button>
        </div>

        {tab === "analytics" && analytics && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className={card}>
                <p className="text-sm text-muted">{a.unique_visitors}</p>
                <p className="mt-1 text-3xl font-extrabold">
                  {analytics.uniqueVisitors}
                </p>
              </div>
              <div className={card}>
                <p className="text-sm text-muted">{a.page_views}</p>
                <p className="mt-1 text-3xl font-extrabold">{analytics.pageViews}</p>
              </div>
              <div className={card}>
                <p className="text-sm text-muted">{a.avg_read}</p>
                <p className="mt-1 text-3xl font-extrabold">
                  {Math.floor(analytics.avgReadSeconds / 60)}m
                  {analytics.avgReadSeconds % 60}s
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className={card}>
                <h3 className="mb-3 font-semibold">{a.top_pages}</h3>
                <BarList items={analytics.topPages} />
              </div>
              <div className={card}>
                <h3 className="mb-3 font-semibold">{a.traffic_sources}</h3>
                <BarList items={analytics.trafficSources} />
              </div>
            </div>
          </div>
        )}

        {tab === "content" && (
          <div className={card}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">{a.content}</h3>
              <span className="text-xs text-muted">
                Édition manuelle : <code>src/data/tips.ts</code>
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  {content.map((c) => (
                    <tr key={c.slug} className="border-t border-border">
                      <td className="py-2.5 pr-4 font-medium">{c.title}</td>
                      <td className="py-2.5 pr-4 text-muted">
                        {c.section === "m365" ? "💎 Premium" : "💬 Chat"}
                      </td>
                      <td className="py-2.5 pr-4 text-muted">{c.date}</td>
                      <td className="py-2.5">
                        <span className="rounded-full bg-end-user/15 px-2 py-0.5 text-xs font-medium text-end-user">
                          {a.status_published}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "comments" && (
          <div className="space-y-3">
            {comments.length === 0 && (
              <p className={card}>{dict.tip.comment_empty}</p>
            )}
            {comments.map((c) => (
              <div key={c.id} className={card}>
                <div className="mb-1 flex items-center gap-2">
                  <span className="font-semibold">{c.name}</span>
                  <span className="text-xs text-muted">→ {c.slug}</span>
                  {c.approved ? (
                    <span className="ml-auto rounded-full bg-end-user/15 px-2 py-0.5 text-xs text-end-user">
                      {a.status_published}
                    </span>
                  ) : (
                    <span className="ml-auto rounded-full bg-pub/15 px-2 py-0.5 text-xs text-pub">
                      {a.status_draft}
                    </span>
                  )}
                </div>
                <p className="mb-3 text-sm">{c.body}</p>
                <div className="flex gap-2">
                  {!c.approved && (
                    <button
                      onClick={() => moderate(c.id, true)}
                      className="rounded-lg bg-end-user px-3 py-1.5 text-sm font-medium text-white"
                    >
                      ✓ {a.approve}
                    </button>
                  )}
                  <button
                    onClick={() => moderate(c.id, false)}
                    className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted hover:text-foreground"
                  >
                    ✕ {a.reject}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BarList({ items }: { items: [string, number][] }) {
  const max = Math.max(1, ...items.map((i) => i[1]));
  return (
    <ul className="space-y-2">
      {items.map(([label, value]) => (
        <li key={label}>
          <div className="mb-0.5 flex justify-between text-xs">
            <span className="truncate pr-2 text-foreground/80">{label}</span>
            <span className="text-muted">{value}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full brand-gradient"
              style={{ width: `${(value / max) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
