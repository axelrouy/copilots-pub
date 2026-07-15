import type { Bilingual } from "./tips";
import { tips, getTip, type Tip } from "./tips";

export type AdoptionBlock = {
  heading?: Bilingual;
  items: Bilingual[];
};

export type AdoptionStep = {
  n: number;
  emoji: string;
  title: Bilingual;
  objective: Bilingual;
  intro?: Bilingual;
  blocks: AdoptionBlock[];
  example?: { bad: Bilingual; good: Bilingual };
  note?: Bilingual;
  articleSlugs: string[];
  resources: { label: Bilingual; url: string }[];
};

export const ADOPTION_MISTAKE: Bilingual = {
  fr: "La plus grosse erreur des programmes d'adoption : vouloir montrer tout Copilot en 2 heures.",
  en: "The biggest mistake in adoption programs: trying to show all of Copilot in 2 hours.",
};

export const ADOPTION_INTRO: Bilingual = {
  fr: "Un parcours en 6 étapes progressives (de l'étape 0 à l'étape 6), avec le blog AI Tip's Pub comme fil rouge entre chaque étape. On construit la confiance d'abord, les réflexes ensuite, la création et les agents seulement quand les bases sont acquises.",
  en: "A journey in 6 progressive steps (from step 0 to step 6), with the AI Tip's Pub blog as the common thread between each step. Build trust first, habits next, creation and agents only once the basics are in place.",
};

export const ADOPTION_STEPS: AdoptionStep[] = [
  {
    n: 0,
    emoji: "🧭",
    title: { fr: "Comprendre ce qu'est Copilot", en: "Understand what Copilot is" },
    objective: { fr: "Créer la confiance.", en: "Build trust." },
    intro: {
      fr: "L'utilisateur doit comprendre l'essentiel avant de se lancer.",
      en: "Users must understand the essentials before diving in.",
    },
    blocks: [
      {
        heading: { fr: "Ce qu'il faut comprendre", en: "What to understand" },
        items: [
          { fr: "Où Copilot fonctionne", en: "Where Copilot works" },
          { fr: "Quelles données il utilise", en: "What data it uses" },
          { fr: "Ce qu'il peut faire", en: "What it can do" },
          { fr: "Ce qu'il ne peut pas faire", en: "What it cannot do" },
          { fr: "Pourquoi c'est sécurisé", en: "Why it is secure" },
        ],
      },
      {
        heading: { fr: "À découvrir", en: "To discover" },
        items: [
          { fr: "Copilot Chat", en: "Copilot Chat" },
          { fr: "Microsoft 365 Copilot", en: "Microsoft 365 Copilot" },
          { fr: "Security & Compliance", en: "Security & Compliance" },
          { fr: "Work vs Web grounding", en: "Work vs Web grounding" },
        ],
      },
    ],
    articleSlugs: [
      "confiance-securite-m365-copilot",
      "gpt-5-6-arrive-dans-copilot",
      "ressources-gratuites-montee-competence",
    ],
    resources: [
      {
        label: { fr: "Découvrir Copilot Chat", en: "Discover Copilot Chat" },
        url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/learn-copilot-chat-today",
      },
      {
        label: { fr: "Microsoft 365 Copilot Adoption", en: "Microsoft 365 Copilot Adoption" },
        url: "https://adoption.microsoft.com/fr-fr/copilot/",
      },
    ],
  },
  {
    n: 1,
    emoji: "🤝",
    title: {
      fr: "Utiliser l'IA avant d'utiliser Copilot",
      en: "Using AI before using Copilot",
    },
    objective: {
      fr: "Comprendre comment collaborer avec une IA, avant même les produits.",
      en: "Learn how to collaborate with an AI, before even touching the products.",
    },
    blocks: [
      {
        heading: { fr: "Les 4 habitudes à prendre", en: "The 4 habits to build" },
        items: [
          { fr: "✅ Donner du contexte", en: "✅ Give context" },
          { fr: "✅ Décrire le résultat attendu", en: "✅ Describe the expected result" },
          { fr: "✅ Itérer", en: "✅ Iterate" },
          { fr: "✅ Demander une critique", en: "✅ Ask for a critique" },
        ],
      },
      {
        heading: { fr: "Exercices", en: "Exercises" },
        items: [
          { fr: "Réécrire un texte", en: "Rewrite a text" },
          { fr: "Résumer un document", en: "Summarize a document" },
          { fr: "Générer une liste d'idées", en: "Generate a list of ideas" },
          { fr: "Préparer une réunion", en: "Prepare a meeting" },
        ],
      },
    ],
    example: {
      bad: { fr: "Fais-moi un mail.", en: "Write me an email." },
      good: {
        fr: "Fais-moi un mail de remerciement après un atelier client. Ton professionnel mais chaleureux. 150 mots maximum.",
        en: "Write me a thank-you email after a client workshop. Professional yet warm tone. 150 words maximum.",
      },
    },
    articleSlugs: ["prompt-engineering-framework", "prompts-organisation-reutilisation"],
    resources: [
      {
        label: { fr: "Microsoft Scenario Library", en: "Microsoft Scenario Library" },
        url: "https://adoption.microsoft.com/en-us/scenario-library/",
      },
    ],
  },
  {
    n: 2,
    emoji: "⚡",
    title: { fr: "Les quick wins quotidiens", en: "Daily quick wins" },
    objective: {
      fr: "Faire gagner 15 minutes par jour. Pas plus. Les utilisateurs doivent créer leur première habitude.",
      en: "Save 15 minutes a day. No more. Users need to build their first habit.",
    },
    blocks: [
      {
        heading: { fr: "Outlook", en: "Outlook" },
        items: [
          { fr: "Résumer un fil de mails", en: "Summarize an email thread" },
          { fr: "Préparer une réponse", en: "Draft a reply" },
          { fr: "Retrouver une information", en: "Find information" },
        ],
      },
      {
        heading: { fr: "Teams", en: "Teams" },
        items: [
          { fr: "Résumer une réunion", en: "Summarize a meeting" },
          { fr: "Identifier les actions", en: "Identify action items" },
        ],
      },
      {
        heading: { fr: "Copilot Chat", en: "Copilot Chat" },
        items: [
          { fr: "Préparer une réunion", en: "Prepare a meeting" },
          { fr: "Créer une ToDo", en: "Create a to-do list" },
          { fr: "Résumer un document", en: "Summarize a document" },
        ],
      },
    ],
    note: {
      fr: "KPI d'adoption : « J'utilise Copilot tous les jours ». Pas : « Je connais toutes les fonctionnalités ».",
      en: "Adoption KPI: “I use Copilot every day.” Not: “I know every feature.”",
    },
    articleSlugs: ["resumer-boite-mail", "resume-reunion-teams", "organiser-sa-journee-chat"],
    resources: [],
  },
  {
    n: 3,
    emoji: "🎯",
    title: { fr: "Les scénarios par persona", en: "Scenarios by persona" },
    objective: {
      fr: "Relier Copilot au métier. C'est ici que beaucoup de clients décollent.",
      en: "Connect Copilot to the job. This is where many clients take off.",
    },
    blocks: [
      {
        heading: { fr: "Manager", en: "Manager" },
        items: [
          { fr: "Préparation des 1:1", en: "1:1 preparation" },
          { fr: "Synthèse des réunions", en: "Meeting summaries" },
          { fr: "Priorisation", en: "Prioritization" },
        ],
      },
      {
        heading: { fr: "Commercial", en: "Sales" },
        items: [
          { fr: "Préparation rendez-vous", en: "Meeting preparation" },
          { fr: "Compte-rendu client", en: "Client reports" },
          { fr: "Rédaction de mails", en: "Email drafting" },
        ],
      },
      {
        heading: { fr: "RH", en: "HR" },
        items: [
          { fr: "Création d'annonces", en: "Job posting creation" },
          { fr: "Synthèse d'entretiens", en: "Interview summaries" },
          { fr: "Communication interne", en: "Internal communication" },
        ],
      },
      {
        heading: { fr: "Chef de projet", en: "Project manager" },
        items: [
          { fr: "Plans d'actions", en: "Action plans" },
          { fr: "CR de réunions", en: "Meeting minutes" },
          { fr: "Suivi des risques", en: "Risk tracking" },
        ],
      },
    ],
    articleSlugs: ["prompts-organisation-manager", "deep-research-chat"],
    resources: [
      {
        label: { fr: "Microsoft Scenario Library", en: "Microsoft Scenario Library" },
        url: "https://adoption.microsoft.com/en-us/scenario-library/",
      },
    ],
  },
  {
    n: 4,
    emoji: "✍️",
    title: { fr: "Créer avec Copilot", en: "Create with Copilot" },
    objective: {
      fr: "Passer de la consommation à la création.",
      en: "Move from consuming to creating.",
    },
    blocks: [
      {
        heading: { fr: "Word", en: "Word" },
        items: [
          { fr: "Brouillon de document", en: "Document draft" },
          { fr: "Réécriture", en: "Rewriting" },
          { fr: "Synthèse", en: "Summarizing" },
        ],
      },
      {
        heading: { fr: "PowerPoint", en: "PowerPoint" },
        items: [
          { fr: "Génération depuis un document", en: "Generation from a document" },
          {
            fr: "Transformation d'un document en présentation",
            en: "Turning a document into a presentation",
          },
        ],
      },
    ],
    note: {
      fr: "« Edit with Copilot » : à ce stade uniquement. Les utilisateurs maîtrisent déjà le contexte, les prompts et l'itération. Ils comprennent donc réellement la valeur de l'édition assistée, sans attendre un résultat parfait du premier coup.",
      en: "“Edit with Copilot”: at this stage only. Users already master context, prompts and iteration. They then truly grasp the value of assisted editing, without expecting a perfect result on the first try.",
    },
    articleSlugs: ["analyse-excel-copilot", "creer-un-brand-kit", "utiliser-brand-kit-powerpoint"],
    resources: [],
  },
  {
    n: 5,
    emoji: "♻️",
    title: {
      fr: "Les modèles, prompts et réutilisation",
      en: "Templates, prompts and reuse",
    },
    objective: { fr: "Industrialiser les usages.", en: "Industrialize usage." },
    blocks: [
      {
        heading: { fr: "Ce que les utilisateurs apprennent", en: "What users learn" },
        items: [
          { fr: "Prompts favoris", en: "Favorite prompts" },
          { fr: "Documents modèles", en: "Template documents" },
          { fr: "Présentations modèles", en: "Template presentations" },
          { fr: "Brand Kit", en: "Brand Kit" },
        ],
      },
    ],
    note: {
      fr: "Concept à introduire : ne repartez jamais de zéro. Ici, le blog AI Tip's Pub devient la bibliothèque de référence.",
      en: "Concept to introduce: never start from scratch. Here, the AI Tip's Pub blog becomes the reference library.",
    },
    articleSlugs: [
      "deployer-brand-kit-officiel-it",
      "creer-un-brand-kit",
      "utiliser-brand-kit-powerpoint",
      "prompts-organisation-reutilisation",
    ],
    resources: [],
  },
  {
    n: 6,
    emoji: "🤖",
    title: { fr: "Les agents Microsoft", en: "Microsoft agents" },
    objective: {
      fr: "Montrer que Copilot peut agir comme un spécialiste. Uniquement lorsque les utilisateurs sont déjà à l'aise.",
      en: "Show that Copilot can act like a specialist. Only once users are already comfortable.",
    },
    blocks: [
      {
        heading: { fr: "Agents 1P (découverte)", en: "1P agents (discovery)" },
        items: [
          { fr: "Prompt Coach", en: "Prompt Coach" },
          { fr: "Facilitator", en: "Facilitator" },
          { fr: "Analyst", en: "Analyst" },
          { fr: "Researcher", en: "Researcher" },
        ],
      },
      {
        heading: { fr: "Scénarios métier", en: "Business scenarios" },
        items: [
          { fr: "Agent RH", en: "HR agent" },
          { fr: "Agent Support IT", en: "IT Support agent" },
          { fr: "Agent Commercial", en: "Sales agent" },
          { fr: "Agent Projet", en: "Project agent" },
        ],
      },
    ],
    note: {
      fr: "Puis seulement après : Copilot Studio, pour les champions et ambassadeurs. Pas pour tous les utilisateurs.",
      en: "Then, and only then: Copilot Studio, for champions and ambassadors. Not for every user.",
    },
    articleSlugs: ["creer-un-agent-metier", "deep-research-chat", "prompts-organisation-manager"],
    resources: [],
  },
];

export const ADOPTION_WEEKS: { week: number; topic: Bilingual }[] = [
  { week: 1, topic: { fr: "Comprendre Copilot et la sécurité", en: "Understand Copilot and security" } },
  { week: 2, topic: { fr: "Les bases du prompting", en: "Prompting basics" } },
  { week: 3, topic: { fr: "Outlook + Teams", en: "Outlook + Teams" } },
  { week: 4, topic: { fr: "Copilot Chat", en: "Copilot Chat" } },
  { week: 5, topic: { fr: "Cas d'usage métier", en: "Business use cases" } },
  {
    week: 6,
    topic: {
      fr: "Word + Excel + PowerPoint + Edit with Copilot",
      en: "Word + Excel + PowerPoint + Edit with Copilot",
    },
  },
  { week: 7, topic: { fr: "Templates et réutilisation", en: "Templates and reuse" } },
  {
    week: 8,
    topic: {
      fr: "Agents 1P et découverte Copilot Studio",
      en: "1P agents and Copilot Studio discovery",
    },
  },
];

/**
 * Classe automatiquement un article dans une ou plusieurs semaines du parcours
 * d'adoption, à partir de ses métadonnées (product / section / governance / tags).
 * Un article peut forcer son placement via le champ `adoptionWeeks`.
 * Quand un nouvel article est ajouté à `tips`, il apparaît tout seul dans les
 * bonnes semaines sans intervention manuelle.
 */
export function weeksForTip(tip: Tip): number[] {
  // Les articles Cowork restent hors du programme d'adoption (rubrique à part).
  if (tip.product === "cowork") return [];
  if (tip.adoptionWeeks && tip.adoptionWeeks.length > 0) return tip.adoptionWeeks;

  const weeks = new Set<number>();
  const tags = tip.tags.map((t) => t.toLowerCase());
  const has = (...keys: string[]) =>
    keys.some(
      (k) => tip.slug.includes(k) || tags.some((tag) => tag.includes(k)),
    );

  // Semaine 1 : Comprendre Copilot et la sécurité
  if (tip.governance || has("sécur", "securit", "confiance", "trust", "conformit", "protection"))
    weeks.add(1);

  // Semaine 2 : Les bases du prompting
  if (has("prompt")) weeks.add(2);

  // Semaine 3 : Outlook + Teams
  if (tip.product === "outlook" || tip.product === "teams" || has("outlook", "teams"))
    weeks.add(3);

  // Semaine 4 : Copilot Chat (découverte du chat)
  if (
    tip.section === "chat" &&
    (tip.product === "general" || tip.product === "notebooks" || tip.product === "scout")
  )
    weeks.add(4);
  if (tip.product === "notebooks") weeks.add(4);

  // Semaine 5 : Cas d'usage métier (personas, scénarios)
  if (
    tip.product === "excel" ||
    has("métier", "metier", "entretien", "1:1", "management", "commercial", "vente", "projet")
  )
    weeks.add(5);

  // Semaine 6 : Word + Excel + PowerPoint + Edit with Copilot
  if (
    tip.product === "powerpoint" ||
    tip.product === "word" ||
    tip.product === "excel" ||
    has("word", "document")
  )
    weeks.add(6);

  // Semaine 7 : Templates et réutilisation
  if (has("brand", "template", "gabarit", "réutilis", "reutilis")) weeks.add(7);

  // Semaine 8 : Agents 1P et Copilot Studio
  if (tip.product === "agents" || has("agent", "copilot studio")) weeks.add(8);

  return [...weeks].sort((a, b) => a - b);
}

/** Retourne les articles rattachés à une semaine donnée du parcours. */
export function articlesForWeek(week: number): Tip[] {
  return tips.filter((t) => weeksForTip(t).includes(week));
}

/** Résout et dédoublonne les articles fil rouge d'une étape (chips). */
export function stepArticles(articleSlugs: string[]): Tip[] {
  const seen = new Set<string>();
  const out: Tip[] = [];
  for (const slug of articleSlugs) {
    const t = getTip(slug);
    if (t && !seen.has(t.slug)) {
      seen.add(t.slug);
      out.push(t);
    }
  }
  return out;
}
