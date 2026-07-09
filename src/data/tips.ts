export type Section = "m365" | "chat";
export type Audience = "it" | "user";
export type Product =
  | "outlook"
  | "teams"
  | "word"
  | "excel"
  | "powerpoint"
  | "notebooks"
  | "agents"
  | "scout"
  | "general";
export type Level = "beginner" | "intermediate" | "advanced";

export type Bilingual = { fr: string; en: string };
export type BilingualList = { fr: string[]; en: string[] };

export type Tip = {
  slug: string;
  section: Section;
  audience: Audience[];
  product: Product;
  roles: string[];
  level: Level;
  icon: string;
  date: string; // ISO
  featured?: boolean;
  trending?: boolean;
  tipOfDay?: boolean;
  isNew?: boolean;
  readMinutes: number;
  title: Bilingual;
  summary: Bilingual;
  steps: BilingualList;
  prompt?: Bilingual;
  tags: string[];
};

export const PRODUCTS: { id: Product; label: Bilingual; icon: string }[] = [
  { id: "outlook", label: { fr: "Outlook", en: "Outlook" }, icon: "/outlook.png" },
  { id: "teams", label: { fr: "Teams", en: "Teams" }, icon: "/teams.png" },
  { id: "excel", label: { fr: "Excel", en: "Excel" }, icon: "/excel.png" },
  { id: "powerpoint", label: { fr: "PowerPoint", en: "PowerPoint" }, icon: "/powerpoint.png" },
  { id: "notebooks", label: { fr: "Notebooks", en: "Notebooks" }, icon: "📓" },
  { id: "agents", label: { fr: "Agents", en: "Agents" }, icon: "/agents.png" },
  { id: "scout", label: { fr: "Word", en: "Word" }, icon: "/word.png" },
  { id: "general", label: { fr: "Général", en: "General" }, icon: "/general.png" },
];

export const ROLES: Bilingual[] = [
  { fr: "Cloud Architect", en: "Cloud Architect" },
  { fr: "Manager", en: "Manager" },
  { fr: "Commercial / Sales", en: "Sales" },
  { fr: "IT Admin", en: "IT Admin" },
  { fr: "Consultant", en: "Consultant" },
  { fr: "Marketing", en: "Marketing" },
  { fr: "RH", en: "HR" },
];

export const tips: Tip[] = [
  {
    slug: "envoyer-mail-depuis-copilot",
    section: "m365",
    audience: ["user"],
    product: "outlook",
    roles: ["Manager", "Sales", "Consultant"],
    level: "beginner",
    icon: "📧",
    date: "2026-07-08",
    tipOfDay: true,
    trending: true,
    isNew: true,
    readMinutes: 2,
    title: {
      fr: "Envoyer un mail directement depuis Copilot",
      en: "Send an email straight from Copilot",
    },
    summary: {
      fr: "Rédigez et envoyez un e-mail sans quitter Copilot : dictez l'intention, laissez Copilot proposer le texte, ajustez le ton, envoyez.",
      en: "Draft and send an email without leaving Copilot: describe the intent, let Copilot draft it, tweak the tone, send.",
    },
    steps: {
      fr: [
        "Ouvrez Copilot (Chat M365) et décrivez votre demande : « Écris un mail à Marie pour reporter la réunion de jeudi à lundi 10h ».",
        "Copilot génère un brouillon ; demandez un ajustement : « Rends-le plus chaleureux » ou « plus court ».",
        "Dans Outlook, Copilot peut aussi partir de votre boîte : « Réponds à ce fil en confirmant ma présence ».",
        "Validez le destinataire et l'objet, puis envoyez.",
      ],
      en: [
        "Open Copilot (M365 Chat) and describe the ask: “Write an email to Marie to move Thursday's meeting to Monday 10am.”",
        "Copilot drafts it; refine: “Make it warmer” or “shorter”.",
        "In Outlook, Copilot can start from your inbox: “Reply to this thread confirming I'll attend.”",
        "Check recipient and subject, then send.",
      ],
    },
    prompt: {
      fr: "Rédige un e-mail professionnel et concis à [destinataire] pour [objectif]. Ton : chaleureux mais direct. Ajoute un objet accrocheur et un appel à l'action clair.",
      en: "Write a concise, professional email to [recipient] about [goal]. Tone: warm but direct. Add a catchy subject line and a clear call to action.",
    },
    tags: ["email", "outlook", "productivité", "rédaction"],
  },
  {
    slug: "resumer-boite-mail",
    section: "m365",
    audience: ["user"],
    product: "outlook",
    roles: ["Manager", "Sales", "Consultant", "HR"],
    level: "beginner",
    icon: "📥",
    date: "2026-07-07",
    trending: true,
    readMinutes: 2,
    title: {
      fr: "Résumer sa boîte mail en 30 secondes",
      en: "Summarize your inbox in 30 seconds",
    },
    summary: {
      fr: "Demandez à Copilot un digest de vos mails non lus, triés par priorité, avec les actions à faire.",
      en: "Ask Copilot for a digest of your unread mail, sorted by priority, with action items.",
    },
    steps: {
      fr: [
        "Dans Outlook ou Copilot Chat, demandez : « Résume mes mails non lus des dernières 24h par priorité ».",
        "Demandez les actions : « Liste ce qui attend une réponse de ma part ».",
        "Enchaînez : « Prépare une réponse pour les deux plus urgents ».",
      ],
      en: [
        "In Outlook or Copilot Chat, ask: “Summarize my unread mail from the last 24h by priority.”",
        "Ask for actions: “List what needs a reply from me.”",
        "Chain it: “Draft a reply for the two most urgent ones.”",
      ],
    },
    prompt: {
      fr: "Résume mes e-mails non lus des dernières 24 heures. Regroupe par priorité (urgent / à traiter / info), indique l'expéditeur et l'action attendue de ma part.",
      en: "Summarize my unread emails from the last 24 hours. Group by priority (urgent / to handle / FYI), show the sender and the action expected from me.",
    },
    tags: ["email", "outlook", "triage", "productivité"],
  },
  {
    slug: "resume-reunion-teams",
    section: "m365",
    audience: ["user", "it"],
    product: "teams",
    roles: ["Manager", "Consultant", "Sales"],
    level: "beginner",
    icon: "🎥",
    date: "2026-07-06",
    featured: true,
    readMinutes: 3,
    title: {
      fr: "Obtenir le résumé et les tâches d'une réunion Teams",
      en: "Get the recap and tasks from a Teams meeting",
    },
    summary: {
      fr: "Après (ou pendant) une réunion, Copilot génère le résumé, les décisions et les actions avec responsables.",
      en: "After (or during) a meeting, Copilot produces the recap, decisions and action items with owners.",
    },
    steps: {
      fr: [
        "Ouvrez la réunion dans Teams › onglet Récap (transcription activée requise).",
        "Demandez à Copilot : « Résume la réunion et liste les décisions ».",
        "Puis : « Génère les tâches avec le responsable et l'échéance ».",
        "Copiez les actions dans Planner ou envoyez-les par mail au groupe.",
      ],
      en: [
        "Open the meeting in Teams › Recap tab (transcription must be on).",
        "Ask Copilot: “Summarize the meeting and list the decisions.”",
        "Then: “Generate tasks with owner and due date.”",
        "Copy the actions into Planner or email them to the group.",
      ],
    },
    prompt: {
      fr: "Résume cette réunion en 5 points, liste les décisions prises, puis génère un tableau des tâches avec colonnes : action, responsable, échéance.",
      en: "Summarize this meeting in 5 bullets, list the decisions taken, then generate a task table with columns: action, owner, due date.",
    },
    tags: ["teams", "réunion", "tâches", "productivité"],
  },
  {
    slug: "creer-un-notebook",
    section: "m365",
    audience: ["user"],
    product: "notebooks",
    roles: ["Consultant", "Manager", "Marketing"],
    level: "intermediate",
    icon: "📓",
    date: "2026-07-05",
    featured: true,
    isNew: true,
    readMinutes: 4,
    title: {
      fr: "Créer un Notebook Copilot pour organiser sa veille",
      en: "Create a Copilot Notebook to organize your research",
    },
    summary: {
      fr: "Les Notebooks regroupent fichiers, liens et notes dans un espace où Copilot raisonne sur VOS sources.",
      en: "Notebooks group files, links and notes into a space where Copilot reasons over YOUR sources.",
    },
    steps: {
      fr: [
        "Dans Copilot, ouvrez Notebooks › Nouveau notebook.",
        "Ajoutez vos sources : documents SharePoint, pages, notes collées.",
        "Posez des questions transverses : « Quelles tendances reviennent dans ces 6 documents ? ».",
        "Demandez une synthèse structurée que vous réutiliserez chaque semaine.",
      ],
      en: [
        "In Copilot, open Notebooks › New notebook.",
        "Add your sources: SharePoint docs, pages, pasted notes.",
        "Ask cross-cutting questions: “Which trends recur across these 6 documents?”",
        "Ask for a structured synthesis you'll reuse every week.",
      ],
    },
    prompt: {
      fr: "À partir des sources de ce notebook, crée une synthèse de veille : 3 tendances clés, 3 signaux faibles, et 3 actions recommandées pour mon équipe.",
      en: "From this notebook's sources, build a research digest: 3 key trends, 3 weak signals, and 3 recommended actions for my team.",
    },
    tags: ["notebooks", "veille", "connaissance", "organisation"],
  },
  {
    slug: "creer-un-brand-kit",
    section: "m365",
    audience: ["user"],
    product: "powerpoint",
    roles: ["Marketing", "Consultant", "Sales"],
    level: "intermediate",
    icon: "🎨",
    date: "2026-07-04",
    trending: true,
    readMinutes: 4,
    title: {
      fr: "Créer un Brand Kit pour des présentations on-brand",
      en: "Create a Brand Kit for on-brand presentations",
    },
    summary: {
      fr: "Définissez couleurs, polices et logos une fois : Copilot génère ensuite des slides respectant votre charte.",
      en: "Define colors, fonts and logos once: Copilot then generates slides that respect your brand.",
    },
    steps: {
      fr: [
        "Dans PowerPoint, ouvrez Copilot › Manage Brand Kits.",
        "Chargez logo, palette (hex), polices titre/corps et un template.",
        "Demandez : « Crée une présentation de 8 slides sur [sujet] avec notre brand kit ».",
        "Copilot applique automatiquement le style à chaque slide.",
      ],
      en: [
        "In PowerPoint, open Copilot › Manage Brand Kits.",
        "Upload logo, palette (hex), title/body fonts and a template.",
        "Ask: “Create an 8-slide deck about [topic] using our brand kit.”",
        "Copilot applies the style to every slide automatically.",
      ],
    },
    prompt: {
      fr: "Crée une présentation de 8 slides sur [sujet] en respectant notre brand kit. Structure : titre, contexte, 3 messages clés, preuve/chiffres, cas client, prochaines étapes, contact.",
      en: "Create an 8-slide deck about [topic] using our brand kit. Structure: title, context, 3 key messages, proof/figures, customer case, next steps, contact.",
    },
    tags: ["powerpoint", "branding", "design", "présentation"],
  },
  {
    slug: "analyse-excel-copilot",
    section: "m365",
    audience: ["user"],
    product: "excel",
    roles: ["Manager", "Consultant", "Sales"],
    level: "intermediate",
    icon: "📊",
    date: "2026-07-03",
    readMinutes: 3,
    title: {
      fr: "Analyser un tableau Excel en langage naturel",
      en: "Analyze an Excel table in plain language",
    },
    summary: {
      fr: "Posez vos questions métier ; Copilot crée formules, tableaux croisés et graphiques sans syntaxe.",
      en: "Ask business questions; Copilot builds formulas, pivots and charts with no syntax.",
    },
    steps: {
      fr: [
        "Convertissez vos données en tableau (Ctrl+T), puis ouvrez Copilot dans Excel.",
        "Demandez : « Quelles régions dépassent l'objectif ce trimestre ? ».",
        "Enchaînez : « Ajoute une colonne d'écart à l'objectif et surligne les négatifs ».",
        "Demandez un graphique et une synthèse en 3 points.",
      ],
      en: [
        "Convert your data to a table (Ctrl+T), then open Copilot in Excel.",
        "Ask: “Which regions beat target this quarter?”",
        "Chain it: “Add a variance-to-target column and highlight negatives.”",
        "Ask for a chart and a 3-bullet takeaway.",
      ],
    },
    prompt: {
      fr: "Analyse ce tableau : identifie les 3 tendances majeures, ajoute une colonne d'écart vs objectif, et propose un graphique adapté. Termine par 3 recommandations.",
      en: "Analyze this table: surface the top 3 trends, add a variance-vs-target column, and suggest a fitting chart. End with 3 recommendations.",
    },
    tags: ["excel", "analyse", "données", "reporting"],
  },
  {
    slug: "creer-un-agent-metier",
    section: "m365",
    audience: ["it", "user"],
    product: "agents",
    roles: ["Cloud Architect", "IT Admin", "Consultant"],
    level: "advanced",
    icon: "🤖",
    date: "2026-07-02",
    featured: true,
    isNew: true,
    readMinutes: 5,
    title: {
      fr: "Créer un agent Copilot pour un cas d'usage métier",
      en: "Build a Copilot agent for a business use case",
    },
    summary: {
      fr: "Avec Copilot Studio, créez un agent qui répond sur vos sources (SharePoint, connecteurs) avec des instructions dédiées.",
      en: "With Copilot Studio, build an agent that answers over your sources (SharePoint, connectors) with dedicated instructions.",
    },
    steps: {
      fr: [
        "Ouvrez Copilot Studio › Nouvel agent.",
        "Décrivez le rôle : « Assistant onboarding qui répond aux nouveaux arrivants ».",
        "Ajoutez les sources (site SharePoint RH, FAQ) et rédigez les instructions/ton.",
        "Testez, ajoutez des sujets déclencheurs, puis publiez dans Teams.",
      ],
      en: [
        "Open Copilot Studio › New agent.",
        "Describe the role: “Onboarding assistant answering new joiners.”",
        "Add sources (HR SharePoint site, FAQ) and write instructions/tone.",
        "Test, add trigger topics, then publish to Teams.",
      ],
    },
    prompt: {
      fr: "Rôle : assistant d'onboarding. Réponds uniquement à partir des sources fournies. Ton : accueillant et clair. Si l'info manque, oriente vers le contact RH. Termine chaque réponse par une action concrète.",
      en: "Role: onboarding assistant. Answer only from the provided sources. Tone: welcoming and clear. If info is missing, point to the HR contact. End each answer with a concrete next step.",
    },
    tags: ["agents", "copilot studio", "métier", "automatisation"],
  },
  {
    slug: "gouvernance-securite-copilot",
    section: "m365",
    audience: ["it"],
    product: "general",
    roles: ["Cloud Architect", "IT Admin"],
    level: "advanced",
    icon: "🛡️",
    date: "2026-07-01",
    readMinutes: 5,
    title: {
      fr: "Sécuriser et gouverner le déploiement de Copilot",
      en: "Secure and govern your Copilot rollout",
    },
    summary: {
      fr: "Avant d'ouvrir Copilot largement : maîtrisez oversharing, labels de sensibilité et périmètre d'accès.",
      en: "Before opening Copilot widely: control oversharing, sensitivity labels and access scope.",
    },
    steps: {
      fr: [
        "Auditez l'oversharing SharePoint/OneDrive (SharePoint Advanced Management, rapports d'accès).",
        "Appliquez les labels de sensibilité (MIP) et le chiffrement sur les données critiques.",
        "Déployez par vagues avec un groupe pilote et mesurez l'adoption.",
        "Cadrez les agents autorisés et les connecteurs approuvés.",
      ],
      en: [
        "Audit SharePoint/OneDrive oversharing (SharePoint Advanced Management, access reports).",
        "Apply sensitivity labels (MIP) and encryption to critical data.",
        "Roll out in waves with a pilot group and measure adoption.",
        "Scope allowed agents and approved connectors.",
      ],
    },
    prompt: {
      fr: "Établis une checklist de gouvernance Copilot pour un déploiement de 500 utilisateurs : sécurité des données, oversharing, labels, adoption, mesure. Priorise par risque.",
      en: "Draft a Copilot governance checklist for a 500-user rollout: data security, oversharing, labels, adoption, measurement. Prioritize by risk.",
    },
    tags: ["gouvernance", "sécurité", "IT", "adoption", "data"],
  },
  {
    slug: "organiser-sa-journee-chat",
    section: "chat",
    audience: ["user"],
    product: "general",
    roles: ["Manager", "Consultant", "Sales", "HR"],
    level: "beginner",
    icon: "📅",
    date: "2026-07-08",
    trending: true,
    readMinutes: 2,
    title: {
      fr: "Organiser sa journée en 2 minutes",
      en: "Plan your day in 2 minutes",
    },
    summary: {
      fr: "Donnez votre agenda et vos priorités : Copilot Chat propose un plan de journée réaliste et time-blocké.",
      en: "Share your agenda and priorities: Copilot Chat builds a realistic, time-blocked day plan.",
    },
    steps: {
      fr: [
        "Ouvrez Copilot Chat et collez vos rendez-vous et vos 3 priorités.",
        "Demandez un plan time-blocké avec créneaux de deep work.",
        "Ajustez : « Réserve 45 min avant midi pour la préparation client ».",
      ],
      en: [
        "Open Copilot Chat and paste your meetings and top 3 priorities.",
        "Ask for a time-blocked plan with deep-work slots.",
        "Adjust: “Reserve 45 min before noon for client prep.”",
      ],
    },
    prompt: {
      fr: "Voici mes réunions du jour et mes 3 priorités. Propose un planning time-blocké réaliste, avec des créneaux de concentration, des pauses, et une marge pour l'imprévu.",
      en: "Here are today's meetings and my top 3 priorities. Propose a realistic time-blocked schedule with focus slots, breaks, and buffer for the unexpected.",
    },
    tags: ["productivité", "organisation", "temps", "chat"],
  },
  {
    slug: "deep-research-chat",
    section: "chat",
    audience: ["user", "it"],
    product: "scout",
    roles: ["Consultant", "Cloud Architect", "Marketing"],
    level: "intermediate",
    icon: "🔎",
    date: "2026-07-06",
    featured: true,
    isNew: true,
    readMinutes: 3,
    title: {
      fr: "Mener une recherche approfondie (Deep Research)",
      en: "Run a Deep Research investigation",
    },
    summary: {
      fr: "Pour un sujet complexe, demandez une recherche structurée : sources, comparaison et synthèse actionnable.",
      en: "For a complex topic, ask for a structured investigation: sources, comparison and actionable synthesis.",
    },
    steps: {
      fr: [
        "Formulez une question précise et le livrable attendu (note, tableau comparatif).",
        "Demandez à Copilot de citer ses sources et de distinguer faits vs hypothèses.",
        "Itérez : « Approfondis le point 2 » ou « Compare les 3 options en tableau ».",
      ],
      en: [
        "State a precise question and the expected deliverable (brief, comparison table).",
        "Ask Copilot to cite sources and separate facts from assumptions.",
        "Iterate: “Go deeper on point 2” or “Compare the 3 options in a table.”",
      ],
    },
    prompt: {
      fr: "Réalise une recherche approfondie sur [sujet]. Livrable : synthèse structurée avec contexte, 3 options comparées (tableau), risques, et recommandation argumentée. Cite tes sources.",
      en: "Run a deep research on [topic]. Deliverable: structured brief with context, 3 compared options (table), risks, and a reasoned recommendation. Cite your sources.",
    },
    tags: ["recherche", "scout", "deep research", "analyse"],
  },
  {
    slug: "prompt-engineering-framework",
    section: "chat",
    audience: ["user", "it"],
    product: "general",
    roles: ["Consultant", "Cloud Architect", "Marketing", "Manager"],
    level: "intermediate",
    icon: "🧭",
    date: "2026-07-05",
    trending: true,
    readMinutes: 3,
    title: {
      fr: "Le framework RTCF pour de meilleurs prompts",
      en: "The RTCF framework for better prompts",
    },
    summary: {
      fr: "Rôle, Tâche, Contexte, Format : la structure qui transforme un prompt vague en résultat exploitable.",
      en: "Role, Task, Context, Format: the structure that turns a vague prompt into a usable result.",
    },
    steps: {
      fr: [
        "Rôle : dites à Copilot qui il doit être (« Agis comme un architecte cloud »).",
        "Tâche : l'action précise attendue.",
        "Contexte : audience, contraintes, ton, données.",
        "Format : la forme du livrable (tableau, e-mail, 5 bullets).",
      ],
      en: [
        "Role: tell Copilot who to be (“Act as a cloud architect”).",
        "Task: the precise action expected.",
        "Context: audience, constraints, tone, data.",
        "Format: the shape of the deliverable (table, email, 5 bullets).",
      ],
    },
    prompt: {
      fr: "Rôle : [expert]. Tâche : [action]. Contexte : [audience, contraintes, ton]. Format : [livrable attendu]. Si une information manque, pose-moi une question avant de répondre.",
      en: "Role: [expert]. Task: [action]. Context: [audience, constraints, tone]. Format: [expected deliverable]. If information is missing, ask me a question before answering.",
    },
    tags: ["prompt engineering", "framework", "chat", "productivité"],
  },
  {
    slug: "prompts-organisation-manager",
    section: "chat",
    audience: ["user"],
    product: "general",
    roles: ["Manager"],
    level: "beginner",
    icon: "🧑‍💼",
    date: "2026-07-03",
    readMinutes: 2,
    title: {
      fr: "5 prompts de pilotage d'équipe pour managers",
      en: "5 team-leadership prompts for managers",
    },
    summary: {
      fr: "Des prompts prêts à l'emploi pour préparer 1:1, feedback, points d'équipe et suivi d'objectifs.",
      en: "Ready-to-use prompts to prep 1:1s, feedback, team syncs and objective tracking.",
    },
    steps: {
      fr: [
        "1:1 : « Prépare un ordre du jour de 1:1 pour [personne] à partir de nos derniers échanges ».",
        "Feedback : « Aide-moi à formuler un feedback constructif sur [situation] (méthode SBI) ».",
        "Point d'équipe : « Résume les avancées de la semaine et les points bloquants ».",
        "Objectifs : « Reformule ces objectifs en OKR mesurables ».",
      ],
      en: [
        "1:1: “Prepare a 1:1 agenda for [person] from our recent exchanges.”",
        "Feedback: “Help me phrase constructive feedback on [situation] (SBI method).”",
        "Team sync: “Summarize this week's progress and blockers.”",
        "Objectives: “Rewrite these goals as measurable OKRs.”",
      ],
    },
    prompt: {
      fr: "Prépare un ordre du jour de 1:1 de 30 min pour [personne]. Inclure : suivi des actions précédentes, points de développement, charge de travail, et une question ouverte pour ouvrir le dialogue.",
      en: "Prepare a 30-min 1:1 agenda for [person]. Include: follow-up on prior actions, development points, workload check, and one open question to spark dialogue.",
    },
    tags: ["management", "prompts", "équipe", "leadership"],
  },
];

/* ---------- Helpers ---------- */

export function getTip(slug: string): Tip | undefined {
  return tips.find((t) => t.slug === slug);
}

export function tipsBySection(section: Section): Tip[] {
  return tips.filter((t) => t.section === section);
}

export function tipOfTheDay(): Tip {
  return tips.find((t) => t.tipOfDay) ?? tips[0];
}

export function trendingTips(limit = 4): Tip[] {
  return tips.filter((t) => t.trending).slice(0, limit);
}

export function newTips(limit = 4): Tip[] {
  return [...tips]
    .filter((t) => t.isNew)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

export function relatedTips(tip: Tip, limit = 3): Tip[] {
  return tips
    .filter((t) => t.slug !== tip.slug)
    .map((t) => ({
      t,
      score:
        (t.section === tip.section ? 2 : 0) +
        (t.product === tip.product ? 2 : 0) +
        t.tags.filter((tag) => tip.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.t);
}
