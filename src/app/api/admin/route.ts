import { NextRequest, NextResponse } from "next/server";
import { analytics, getAllComments, moderateComment } from "@/lib/store";
import { tips } from "@/data/tips";
import { isAuthed } from "@/lib/admin-auth";

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const [analyticsData, comments] = await Promise.all([
    analytics(),
    getAllComments(),
  ]);
  return NextResponse.json({
    analytics: analyticsData,
    comments,
    content: tips.map((t) => ({
      slug: t.slug,
      title: t.title.fr,
      section: t.section,
      status: "published",
      date: t.date,
    })),
  });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  try {
    const { id, approved } = await req.json();
    if (!id) return NextResponse.json({ error: "missing id" }, { status: 400 });
    await moderateComment(String(id), Boolean(approved));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
}
