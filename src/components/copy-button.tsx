"use client";

import { useState } from "react";

export default function CopyButton({
  text,
  labelCopy,
  labelCopied,
}: {
  text: string;
  labelCopy: string;
  labelCopied: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg bg-ms-blue px-3 py-1.5 text-sm font-medium text-white hover:bg-ms-blue-2 transition"
    >
      {copied ? "✓ " + labelCopied : "⧉ " + labelCopy}
    </button>
  );
}
