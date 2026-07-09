"use client";

import { useEffect } from "react";

export default function PageTracker({ path }: { path: string }) {
  useEffect(() => {
    try {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, ref: document.referrer || "direct" }),
        keepalive: true,
      });
    } catch {}
  }, [path]);
  return null;
}
