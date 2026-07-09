"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

type Side = "bar" | "counter";

export default function BarPub({ dict }: { dict: Dictionary }) {
  const [side, setSide] = useState<Side>("bar");
  const t = dict.barpub;

  return (
    <section className="mt-10">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          🍻 {t.kicker}
        </h2>
        <div
          role="tablist"
          aria-label={t.kicker}
          className="inline-flex rounded-xl border border-border bg-surface-2 p-1"
        >
          <button
            role="tab"
            aria-selected={side === "bar"}
            onClick={() => setSide("bar")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              side === "bar"
                ? "brand-gradient text-white shadow"
                : "text-muted hover:text-foreground"
            }`}
          >
            🍸 {t.tab_bar}
          </button>
          <button
            role="tab"
            aria-selected={side === "counter"}
            onClick={() => setSide("counter")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              side === "counter"
                ? "brand-gradient text-white shadow"
                : "text-muted hover:text-foreground"
            }`}
          >
            🍺 {t.tab_counter}
          </button>
        </div>
      </div>

      {side === "bar" ? (
        <div className="grid gap-6 rounded-3xl border border-border bg-surface p-6 sm:grid-cols-[1fr_auto] sm:p-8">
          <div>
            <h3 className="text-2xl font-bold">{t.bar_title}</h3>
            <p className="mt-3 text-muted">{t.bar_body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {t.bar_chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">{t.bar_note}</p>
          </div>
          <div className="grid place-items-center">
            <div className="grid h-28 w-28 place-items-center rounded-3xl brand-gradient text-6xl shadow-lg shadow-copilot/20">
              🍸
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 rounded-3xl border border-border bg-surface p-6 sm:grid-cols-[auto_1fr] sm:p-8">
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-3xl border border-border sm:h-48 sm:w-48">
            <Image
              src="/axel-barman.jpg"
              alt={t.counter_title}
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-copilot">
              {t.counter_kicker}
            </p>
            <h3 className="mt-1 text-2xl font-bold">{t.counter_title}</h3>
            <p className="mt-3 text-muted">{t.counter_body}</p>
            <p className="mt-4 text-sm italic text-muted">{t.counter_quote}</p>
          </div>
        </div>
      )}
    </section>
  );
}
