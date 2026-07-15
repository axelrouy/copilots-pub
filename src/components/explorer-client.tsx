"use client";

import { useMemo, useState } from "react";
import { tips, ROLES, PRODUCTS, type Product } from "@/data/tips";
import { pick, type Dictionary, type Locale } from "@/lib/i18n";
import TipCard from "./tip-card";

export default function ExplorerClient({
  locale,
  dict,
  initialProduct,
}: {
  locale: Locale;
  dict: Dictionary;
  initialProduct?: string;
}) {
  const validProduct = PRODUCTS.some((p) => p.id === initialProduct)
    ? (initialProduct as Product)
    : "any";
  const [role, setRole] = useState<string>("any");
  const [product, setProduct] = useState<Product | "any">(validProduct);

  const results = useMemo(() => {
    return tips.filter((t) => {
      if (role !== "any" && !t.roles.includes(role)) return false;
      if (product !== "any" && t.product !== product) return false;
      return true;
    });
  }, [role, product]);

  const sel =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-ms-blue";

  return (
    <div>
      <div className="mb-6 grid gap-4 rounded-3xl border border-border bg-surface p-6 sm:grid-cols-2">
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
