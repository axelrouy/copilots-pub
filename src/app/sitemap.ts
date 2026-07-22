import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { tips } from "@/data/tips";

const BASE = "https://ai-tips-pub.com";

// Pages statiques par langue (chemins relatifs sans locale)
const STATIC_PATHS = [
  "",
  "/m365",
  "/chat",
  "/it",
  "/prompts",
  "/explorer",
  "/about",
  "/legal",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${BASE}/${locale}${path}`,
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1 : 0.7,
      });
    }
    for (const tip of tips) {
      if (tip.draft) continue;
      entries.push({
        url: `${BASE}/${locale}/tip/${tip.slug}`,
        lastModified: tip.date ? new Date(tip.date) : undefined,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
