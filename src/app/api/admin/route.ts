import { NextRequest, NextResponse } from "next/server";
import { analytics, getAllComments, moderateComment } from "@/lib/store";
import { tips } from "@/data/tips";

export async function GET() {
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
  try {
    const { id, approved } = await req.json();
    if (!id) return NextResponse.json({ error: "missing id" }, { status: 400 });
    await moderateComment(String(id), Boolean(approved));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
}
