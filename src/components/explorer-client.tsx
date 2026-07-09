"use client";

import { useMemo, useState } from "react";
import { tips, ROLES, PRODUCTS, type Level, type Product } from "@/data/tips";
import { pick, type Dictionary, type Locale } from "@/lib/i18n";
import TipCard from "./tip-card";

export default function ExplorerClient({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [role, setRole] = useState<string>("any");
  const [level, setLevel] = useState<Level | "any">("any");
  const [product, setProduct] = useState<Product | "any">("any");

  const results = useMemo(() => {
    return tips
      .map((t) => {
        let score = 0;
        if (role !== "any") score += t.roles.includes(role) ? 3 : -1;
        if (level !== "any") score += t.level === level ? 2 : 0;
        if (product !== "any") score += t.product === product ? 3 : -2;
        return { t, score };
      })
      .filter((x) => x.score > 0 || (role === "any" && level === "any" && product === "any"))
      .sort((a, b) => b.score - a.score)
      .map((x) => x.t);
  }, [role, level, product]);

  const levels: { id: Level; label: string }[] = [
    { id: "beginner", label: dict.explorer.beginner },
    { id: "intermediate", label: dict.explorer.intermediate },
    { id: "advanced", label: dict.explorer.advanced },
  ];

  const sel =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-ms-blue";

  return (
    <div>
      <div className="mb-6 grid gap-4 rounded-3xl border border-border bg-surface p-6 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">{dict.explorer.role}</span>
          <select className={sel} value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="any">{dict.explorer.any}</option>
            {ROLES.map((r) => (
              <option key={r.en} value={r.en}>
                {pick(r, locale)}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">{dict.explorer.level}</span>
          <select
            className={sel}
            value={level}
            onChange={(e) => setLevel(e.target.value as Level | "any")}
          >
            <option value="any">{dict.explorer.any}</option>
            {levels.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">{dict.explorer.product}</span>
          <select
            className={sel}
            value={product}
            onChange={(e) => setProduct(e.target.value as Product | "any")}
          >
            <option value="any">{dict.explorer.any}</option>
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.id}>
                {pick(p.label, locale)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <h2 className="mb-4 text-lg font-bold">
        {dict.explorer.results}{" "}
        <span className="text-muted">({results.length})</span>
      </h2>

      {results.length === 0 ? (
        <p className="rounded-2xl border border-border bg-surface p-8 text-center text-muted">
          {dict.explorer.no_results}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((t) => (
            <TipCard key={t.slug} tip={t} locale={locale} dict={dict} />
          ))}
        </div>
      )}
    </div>
  );
}
