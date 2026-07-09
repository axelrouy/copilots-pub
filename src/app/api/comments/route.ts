import { NextRequest, NextResponse } from "next/server";
import { addComment, getApprovedComments } from "@/lib/store";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug") ?? "";
  const comments = (await getApprovedComments(slug)).map((c) => ({
    id: c.id,
    name: c.name,
    body: c.body,
    createdAt: c.createdAt,
  }));
  return NextResponse.json({ comments });
}

export async function POST(req: NextRequest) {
  try {
    const { slug, name, body } = await req.json();
    if (!slug || !body) {
      return NextResponse.json({ error: "missing fields" }, { status: 400 });
    }
    const c = await addComment(String(slug), String(name ?? "Anonymous"), String(body));
    return NextResponse.json({ ok: true, id: c.id });
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
}
