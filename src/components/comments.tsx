"use client";

import { useEffect, useState, useCallback } from "react";
import type { Dictionary } from "@/lib/i18n";

type Comment = { id: string; name: string; body: string; createdAt: string };

export default function Comments({
  slug,
  dict,
}: {
  slug: string;
  dict: Dictionary;
}) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [sent, setSent] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data.comments ?? []);
      }
    } catch {}
  }, [slug]);

  useEffect(() => {
    load();
  }, [load]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!body.trim()) return;
    try {
      await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, name: name.trim() || "Anonymous", body: body.trim() }),
      });
    } catch {}
    setBody("");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-bold">
        💬 {dict.tip.comments}{" "}
        {comments.length > 0 && (
          <span className="text-muted">({comments.length})</span>
        )}
      </h2>

      <form
        onSubmit={submit}
        className="mb-6 rounded-2xl border border-border bg-surface p-4"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={dict.tip.comment_name}
          className="mb-3 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-ms-blue"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={dict.tip.comment_placeholder}
          rows={3}
          className="mb-3 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-ms-blue"
        />
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-lg bg-ms-blue px-4 py-2 text-sm font-medium text-white hover:bg-ms-blue-2 transition"
          >
            {dict.tip.comment_submit}
          </button>
          {sent && (
            <span className="text-sm text-end-user">{dict.tip.comment_pending}</span>
          )}
        </div>
      </form>

      {comments.length === 0 ? (
        <p className="text-sm text-muted">{dict.tip.comment_empty}</p>
      ) : (
        <ul className="space-y-3">
          {comments.map((c) => (
            <li key={c.id} className="rounded-2xl border border-border bg-surface p-4">
              <div className="mb-1 flex items-center gap-2 text-sm">
                <span className="font-semibold">{c.name}</span>
                <span className="text-xs text-muted">
                  {new Date(c.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-foreground/90">{c.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
