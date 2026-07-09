import { NextRequest, NextResponse } from "next/server";
import { addView } from "@/lib/store";

export async function POST(req: NextRequest) {
  try {
    const { path, ref } = await req.json();
    if (path) await addView(String(path), String(ref ?? "direct"));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
