# 🍻 Copilot's Pub

> Le comptoir des astuces Microsoft Copilot — *Where pros gather for real-world Microsoft Copilot tips.*

Le référentiel pratique des fonctionnalités, prompts et scénarios Copilot pour **IT Pros** et **End Users**.
Répond à une question simple : **« Qu'est-ce que je peux faire aujourd'hui avec Copilot ? »**

## ✨ Fonctionnalités

- **Bilingue FR / EN** — routing `/fr/...` et `/en/...`, tout le contenu est traduit.
- **Thème clair / sombre** — bascule instantanée, sans flash, mémorisée.
- **2 sections** : 💎 Copilot M365 (Premium) et 💬 Copilot Chat (Basic).
- **Badges publics** : 🔵 IT PRO / 🟢 END USER pour distinguer IT et utilisateurs.
- **Recherche & filtres** : par section, audience, produit (Outlook, Teams, Excel, Notebooks, Agents…).
- **Explorer Copilot** (différenciant) : rôle + niveau + produit → scénarios recommandés.
- **Pages astuce** : étapes numérotées, prompt copiable en un clic, tags, astuces liées.
- **Commentaires** modérés (anti-spam via modération manuelle).
- **Console Admin** (`/admin`) : analytics (visiteurs, pages vues, temps de lecture, sources de trafic), contenu, modération.

## 🚀 Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000  (redirige vers /fr)
npm run build    # build de production
npm start        # servir le build
```

## ✍️ Éditer le contenu à la main

Tout le contenu vit dans **`src/data/tips.ts`** — un tableau `tips[]` typé et bilingue.
Ajouter une astuce = ajouter un objet :

```ts
{
  slug: "mon-astuce",
  section: "m365",              // "m365" (Premium) | "chat" (Basic)
  audience: ["user"],           // "it" | "user"
  product: "outlook",           // outlook | teams | word | excel | powerpoint | notebooks | agents | scout | general
  roles: ["Manager"],           // pour l'Explorer
  level: "beginner",            // beginner | intermediate | advanced
  icon: "📧",
  date: "2026-07-09",
  isNew: true, trending: true,  // flags optionnels (+ tipOfDay, featured)
  readMinutes: 2,
  title:   { fr: "…", en: "…" },
  summary: { fr: "…", en: "…" },
  steps:   { fr: ["…"], en: ["…"] },
  prompt:  { fr: "…", en: "…" },
  tags: ["email"],
}
```

Les textes d'interface se modifient dans `src/lib/dictionaries/fr.json` et `en.json`.

## 🌍 Déployer sur le web (Vercel)

1. Pousser ce dossier sur un repo GitHub.
2. Sur [vercel.com](https://vercel.com) → New Project → importer le repo.
3. Framework détecté automatiquement (Next.js). Deploy. ✅

## 🗄️ Passer en production (Supabase) — Phase 2

L'analytics et les commentaires utilisent aujourd'hui un **store en mémoire** (`src/lib/store.ts`),
idéal pour la démo mais réinitialisé à chaque redémarrage serverless.

Pour du réel, créer 2 tables Supabase et remplacer le corps des fonctions de `store.ts` :

```sql
create table comments (
  id uuid default gen_random_uuid() primary key,
  slug text not null,
  name text,
  body text not null,
  approved boolean default false,
  created_at timestamptz default now()
);
create table views (
  id uuid default gen_random_uuid() primary key,
  path text not null,
  ref text,
  created_at timestamptz default now()
);
```

Variables d'environnement : `SUPABASE_URL`, `SUPABASE_ANON_KEY` (+ ajouter l'auth admin).

## 🗺️ Roadmap

- **Phase 1** (actuelle) : articles, prompts, astuces, admin démo.
- **Phase 2** : Supabase (commentaires/analytics réels), auth admin, vidéos, newsletter.
- **Phase 3** : communauté, contributions externes.
- **Phase 4** : annuaire d'agents Copilot, bibliothèque de prompts certifiés.

---

Construit avec Copilot par **Axel**. Projet personnel, non affilié officiellement à Microsoft.
