"use client";

import { useMemo, useState } from "react";
import type { Section, Tip, Audience, Product } from "@/data/tips";
import { PRODUCTS } from "@/data/tips";
import { pick, type Dictionary, type Locale } from "@/lib/i18n";
import TipCard from "./tip-card";
import ProductIcon from "./product-icon";

export default function FilterableTips({
  tips,
  locale,
  dict,
  showSectionFilter = true,
}: {
  tips: Tip[];
  locale: Locale;
  dict: Dictionary;
  showSectionFilter?: boolean;
}) {
  const [q, setQ] = useState("");
  const [section, setSection] = useState<Section | "all">("all");
  const [audience, setAudience] = useState<Audience | "all">("all");
  const [product, setProduct] = useState<Product | "all">("all");

  const availableProducts = useMemo(() => {
    const set = new Set(tips.map((t) => t.product));
    return PRODUCTS.filter((p) => set.has(p.id));
  }, [tips]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return tips.filter((t) => {
      if (section !== "all" && t.section !== section) return false;
      if (audience !== "all" && !t.audience.includes(audience)) return false;
      if (product !== "all" && t.product !== product) return false;
      if (!needle) return true;
      const hay = [
        pick(t.title, locale),
        pick(t.summary, locale),
        t.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(needle);
    });
  }, [tips, q, section, audience, product, locale]);

  const chip = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition border ${
      active
        ? "border-ms-blue bg-ms-blue text-white"
        : "border-border bg-surface text-muted hover:text-foreground"
    }`;

  return (
    <div>
      <div className="mb-5 rounded-2xl border border-border bg-surface p-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={dict.nav.search_placeholder}
          className="mb-4 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-ms-blue"
        />

        <div className="flex flex-wrap items-center gap-2">
          {showSectionFilter && (
            <>
              <button className={chip(section === "all")} onClick={() => setSection("all")}>
                {dict.filters.all}
              </button>
              <button className={chip(section === "m365")} onClick={() => setSection("m365")}>
                💎 {dict.filters.premium}
              </button>
              <button className={chip(section === "chat")} onClick={() => setSection("chat")}>
                💬 {dict.filters.chat}
              </button>
              <span className="mx-1 h-5 w-px bg-border" />
            </>
          )}
          <button className={chip(audience === "it")} onClick={() => setAudience(audience === "it" ? "all" : "it")}>
            🔵 {dict.filters.it}
          </button>
          <button className={chip(audience === "user")} onClick={() => setAudience(audience === "user" ? "all" : "user")}>
            🟢 {dict.filters.user}
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button className={chip(product === "all")} onClick={() => setProduct("all")}>
            {dict.explorer.any}
          </button>
          {availableProducts.map((p) => (
            <button
              key={p.id}
              className={chip(product === p.id)}
              onClick={() => setProduct(product === p.id ? "all" : p.id)}
            >
              <ProductIcon icon={p.icon} label={pick(p.label, locale)} size={20} className="mr-1" /> {pick(p.label, locale)}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-border bg-surface p-8 text-center text-muted">
          {dict.explorer.no_results}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TipCard key={t.slug} tip={t} locale={locale} dict={dict} />
          ))}
        </div>
      )}
    </div>
  );
}
