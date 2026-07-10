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
  stepImages?: (string | null)[];
  imageWidth?: "xs" | "md" | "full";
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
    slug: "utiliser-brand-kit-powerpoint",
    section: "m365",
    audience: ["user"],
    product: "powerpoint",
    roles: ["Marketing", "Consultant", "Manager", "Sales"],
    level: "beginner",
    icon: "🎨",
    date: "2026-07-10",
    isNew: true,
    readMinutes: 3,
    title: {
      fr: "Utiliser un brand kit depuis Copilot dans PowerPoint",
      en: "Use a brand kit from Copilot in PowerPoint",
    },
    summary: {
      fr: "Une fois votre kit de marque disponible, appliquez-le en un clic dans PowerPoint via le volet Copilot : couleurs, polices, images et voix de marque s'appliquent automatiquement à vos slides.",
      en: "Once your brand kit is available, apply it in one click in PowerPoint via the Copilot pane: colors, fonts, images and brand voice are applied automatically to your slides.",
    },
    steps: {
      fr: [
        "Ouvrez le volet Copilot dans PowerPoint (bouton Copilot dans le ruban Accueil), sur Windows, Mac ou le web, au moment de créer ou de mettre en forme une présentation.",
        "Lancez « Créer une présentation » (ou « Mettre en forme »), puis ouvrez le menu « + » : le volet propose l'option Sélectionner une marque (Select brand).",
        "Choisissez votre kit dans la liste — Personnel, Partagé ou Officiel. Le bouton « Gérer les kits » permet d'en créer ou d'en modifier un.",
        "Copilot génère les slides à partir de votre template et applique automatiquement couleurs, polices, images et voix de marque.",
        "💡 Bon à savoir : Copilot s'appuie en priorité sur les slides d'exemple de votre template. Plus votre modèle contient de dispositions variées (Titre, Sommaire, Contenu, Data-viz, Q&R, Conclusion…), plus le résultat est fidèle à votre marque.",
      ],
      en: [
        "Open the Copilot pane in PowerPoint (Copilot button in the Home ribbon), on Windows, Mac or the web, when creating or formatting a presentation.",
        "Start “Create a presentation” (or “Format”), then open the “+” menu: the pane offers the Select brand option.",
        "Pick your kit from the list — Personal, Shared or Official. The “Manage brand kits” button lets you create or edit one.",
        "Copilot generates the slides from your template and automatically applies colors, fonts, images and brand voice.",
        "💡 Good to know: Copilot relies first on the example slides in your template. The more varied layouts your template contains (Title, Agenda, Content, Data-viz, Q&A, Conclusion…), the more faithful the result is to your brand.",
      ],
    },
    stepImages: [
      null,
      "/articles/ppt-brandkit-menu.png",
      "/articles/ppt-brandkit-selector.png",
      null,
      null,
    ],
    imageWidth: "xs",
    prompt: {
      fr: "Crée une présentation de 8 slides sur [sujet] en appliquant mon brand kit [nom du kit] : une slide de titre, un sommaire, 4 slides de contenu avec un visuel, une slide data-viz et une conclusion avec appel à l'action.",
      en: "Create an 8-slide presentation about [topic] applying my brand kit [kit name]: a title slide, an agenda, 4 content slides with a visual, one data-viz slide and a conclusion with a call to action.",
    },
    tags: ["powerpoint", "brand kit", "marque", "présentation", "design"],
  },
  {
    slug: "gpt-5-6-arrive-dans-copilot",
    section: "chat",
    audience: ["user", "it"],
    product: "general",
    roles: ["Manager", "Consultant", "Sales", "IT Admin"],
    level: "beginner",
    icon: "🚀",
    date: "2026-07-10",
    isNew: true,
    trending: true,
    readMinutes: 3,
    title: {
      fr: "GPT-5.6 arrive dans Microsoft 365 Copilot",
      en: "GPT-5.6 arrives in Microsoft 365 Copilot",
    },
    summary: {
      fr: "GPT-5.6 devient le modèle par défaut de Copilot : raisonnement renforcé, intégration native Work IQ et meilleure qualité dans Word, Excel et PowerPoint. Voici où le sélectionner et ce qui change concrètement.",
      en: "GPT-5.6 becomes Copilot's default model: stronger reasoning, native Work IQ integration and better quality in Word, Excel and PowerPoint. Here's where to select it and what actually changes.",
    },
    steps: {
      fr: [
        "Où choisir le modèle ? Dans Copilot Chat, en haut de la conversation, cliquez sur le sélecteur de mode (à côté de « Work IQ »). C'est ici que vous basculez entre les modes de raisonnement et les modèles.",
        "Ce qui est disponible aujourd'hui :\n➞ Auto — Copilot décide du temps de réflexion (et du modèle le plus adapté).\n➞ Quick response — réponse immédiate.\n➞ Think deeper — réflexion plus longue pour de meilleures réponses.\n➞ Opus — Claude (Anthropic).\n➞ GPT (OpenAI) → GPT 5.6 Think deeper, GPT 5.5 Quick response, GPT 5.5 Think deeper.",
        "✨ Ce qui change concrètement :\n➞ GPT-5.6 remplace GPT-5.5 comme modèle par défaut dans Copilot Chat.\n➞ Raisonnement renforcé, notamment pour les tâches agentiques et les workflows multi-étapes : Copilot gère des scénarios plus complexes avec davantage d'efficacité.\n➞ Intégration native avec Work IQ : combine les capacités de raisonnement du modèle avec les données de travail de votre organisation.\n➞ Le résultat : une amélioration tangible de la qualité du travail quotidien dans Word, Excel et PowerPoint.",
        "💻 Dans les applications :\n➞ Copilot Cowork : exécute les tâches plus efficacement et produit des résultats plus complets et directement exploitables.\n➞ Excel : analyse des problématiques plus complexes et transforme plus rapidement une demande en résultat, avec moins d'interventions manuelles.\n➞ Word : aide à transformer des idées en documents plus complets, mieux structurés et plus fluides, tout en améliorant la qualité rédactionnelle.\n➞ PowerPoint : génère des présentations plus riches, avec un contenu de meilleure qualité, un meilleur équilibre visuel et une plus grande flexibilité dans les styles.",
        "📅 Disponibilité :\n➞ Le déploiement de GPT-5.6 est actuellement en cours dans l'ensemble des applications Microsoft 365 Copilot.\n➞ Copilot pourra utiliser automatiquement GPT-5.6 lorsqu'il est le modèle le plus adapté à la tâche, en devenant le modèle par défaut.",
      ],
      en: [
        "Where do you pick the model? In Copilot Chat, at the top of the conversation, click the mode selector (next to “Work IQ”). This is where you switch between reasoning modes and models.",
        "What's available today:\n➞ Auto — Copilot decides how long to think (and the best-fit model).\n➞ Quick response — answers right away.\n➞ Think deeper — thinks longer for better answers.\n➞ Opus — Claude (Anthropic).\n➞ GPT (OpenAI) → GPT 5.6 Think deeper, GPT 5.5 Quick response, GPT 5.5 Think deeper.",
        "✨ What actually changes:\n➞ GPT-5.6 replaces GPT-5.5 as the default model in Copilot Chat.\n➞ Stronger reasoning, especially for agentic tasks and multi-step workflows: Copilot handles more complex scenarios more efficiently.\n➞ Native Work IQ integration: combines the model's reasoning with your organization's work data.\n➞ The result: a tangible improvement in everyday work quality in Word, Excel and PowerPoint.",
        "💻 Across the apps:\n➞ Copilot Cowork: runs tasks more efficiently and produces more complete, directly actionable results.\n➞ Excel: analyzes more complex problems and turns a request into a result faster, with less manual work.\n➞ Word: helps turn ideas into more complete, better-structured and smoother documents, while improving writing quality.\n➞ PowerPoint: generates richer presentations, with higher-quality content, better visual balance and more flexibility in styles.",
        "📅 Availability:\n➞ GPT-5.6 is currently rolling out across all Microsoft 365 Copilot apps.\n➞ Copilot will automatically use GPT-5.6 when it's the best-fit model for the task, becoming the default model.",
      ],
    },
    stepImages: [
      "/articles/gpt56-model-selector.png",
      null,
      null,
      null,
      null,
    ],
    prompt: {
      fr: "Passe en GPT-5.6 (Think deeper), puis : à partir de [document / données], propose un plan d'action en 5 étapes avec, pour chaque étape, les risques, les dépendances et le livrable attendu.",
      en: "Switch to GPT-5.6 (Think deeper), then: from [document / data], propose a 5-step action plan with, for each step, the risks, dependencies and expected deliverable.",
    },
    tags: ["gpt-5.6", "modèles", "nouveautés", "copilot chat", "work iq"],
  },
  {
    slug: "creer-notebook-copilot-veille",
    section: "m365",
    audience: ["user"],
    product: "notebooks",
    roles: ["Manager", "Consultant", "Marketing"],
    level: "beginner",
    icon: "📓",
    date: "2026-07-10",
    isNew: true,
    trending: true,
    readMinutes: 3,
    title: {
      fr: "Créer un Notebook Copilot pour organiser sa veille",
      en: "Create a Copilot Notebook to organize your watch",
    },
    summary: {
      fr: "Regroupez fichiers, chats, réunions et e-mails d'un même sujet dans un Notebook Copilot : un espace dédié où Copilot raisonne uniquement sur vos sources de veille.",
      en: "Bundle files, chats, meetings and emails on one topic into a Copilot Notebook: a dedicated space where Copilot reasons only over your curated sources.",
    },
    steps: {
      fr: [
        "Dans Microsoft 365 Copilot, ouvrez l'onglet « Notebooks » dans le volet de gauche. Vous y voyez vos notebooks existants (personnels « Just you » ou « Shared »).",
        "Cliquez sur le « + » pour créer un notebook, donnez-lui un nom parlant lié à votre veille (ex. « Nouveautés Microsoft Copilot 2026 »), puis validez.",
        "Ajoutez vos sources via « Add » : basculez sur l'onglet « References » pour piocher dans vos Chats, Files, Meetings, Emails et Sites — ou « Copilot Chats » pour réutiliser d'anciennes conversations.",
        "Recherchez et sélectionnez chaque source à suivre (documents, fils d'e-mails, notes de réunion, pages SharePoint). Le notebook devient le périmètre de raisonnement de Copilot.",
        "Posez vos questions dans le notebook : Copilot répond en s'appuyant UNIQUEMENT sur les sources ajoutées — parfait pour synthétiser votre veille, comparer des versions ou générer un récapitulatif.",
        "Enrichissez le notebook au fil de l'eau : chaque nouvelle source ou réunion ajoutée met à jour le contexte. Besoin d'aller plus loin ? « Open in OneNote » exporte le contenu.",
      ],
      en: [
        "In Microsoft 365 Copilot, open the “Notebooks” tab in the left pane. You'll see your existing notebooks (personal “Just you” or “Shared”).",
        "Click “+” to create a notebook, give it a clear name tied to your topic (e.g. “Microsoft Copilot 2026 news”), then confirm.",
        "Add your sources via “Add”: switch to the “References” tab to pull from your Chats, Files, Meetings, Emails and Sites — or “Copilot Chats” to reuse past conversations.",
        "Search and select each source to track (documents, email threads, meeting notes, SharePoint pages). The notebook becomes Copilot's reasoning scope.",
        "Ask your questions inside the notebook: Copilot answers based ONLY on the added sources — ideal to synthesize your watch, compare versions or generate a recap.",
        "Grow the notebook over time: every new source or meeting added updates the context. Need more? “Open in OneNote” exports the content.",
      ],
    },
    stepImages: [
      "/articles/notebook-list.png",
      "/articles/notebook-create.png",
      "/articles/notebook-references.png",
      null,
      "/articles/notebook-overview.png",
      null,
    ],
    prompt: {
      fr: "À partir des sources de ce notebook, fais-moi une synthèse des nouveautés clés, classées par thème, avec pour chacune : ce qui change, l'impact pour l'utilisateur et le lien vers la source.",
      en: "Using this notebook's sources, give me a synthesis of the key updates, grouped by theme, with for each: what changes, the user impact and the source link.",
    },
    tags: ["notebooks", "veille", "organisation", "productivité", "m365"],
  },
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
    stepImages: [
      "/articles/mail-copilot-draft.png",
      null,
      null,
      null,
    ],
    prompt: {
      fr: "Envoi un e-mail professionnel et concis à [destinataire] pour [objectif]. Ton : chaleureux mais direct. Ajoute un objet accrocheur et un appel à l'action clair.",
      en: "Send a concise, professional email to [recipient] about [goal]. Tone: warm but direct. Add a catchy subject line and a clear call to action.",
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
      fr: "Résumer sa boîte mail et répondre à un mail",
      en: "Summarize your inbox and reply to an email",
    },
    summary: {
      fr: "Demandez à Copilot un digest de vos mails non lus triés par priorité, puis laissez-le rédiger vos réponses directement dans Outlook.",
      en: "Ask Copilot for a digest of your unread mail sorted by priority, then let it draft your replies right inside Outlook.",
    },
    steps: {
      fr: [
        "Ouvrez Copilot Chat (mode Work) et demandez un résumé : « Résume mes e-mails non lus des dernières 24 heures. Regroupe par priorité (urgent / à traiter / info), indique l'expéditeur et l'action attendue de ma part. » Copilot renvoie un digest trié par priorité (À traiter, Information…) avec, pour chaque mail, l'expéditeur, l'objet et l'action attendue.",
        "Ouvrez le mail auquel vous souhaitez répondre : Copilot en affiche un résumé en haut (Summary by Copilot) pour se remettre dans le contexte en un coup d'œil.",
        "Dans le volet Copilot, demandez « Aide-moi à répondre à ce mail » : Copilot rédige une réponse claire et professionnelle, prête à être insérée dans le brouillon.",
        "Affinez la réponse en un clic grâce aux suggestions proposées — « Rends-la plus directe », « Ajoute des points critiques », « Inclue des détails spécifiques » — puis relisez et envoyez.",
      ],
      en: [
        "Open Copilot Chat (Work mode) and ask for a summary: “Summarize my unread emails from the last 24 hours. Group by priority (urgent / to handle / FYI), show the sender and the action expected from me.” Copilot returns a digest sorted by priority (To handle, Information…) with, for each email, the sender, subject and expected action.",
        "Open the email you want to reply to: Copilot shows a summary at the top (Summary by Copilot) so you can get the context at a glance.",
        "In the Copilot pane, ask “Help me reply to this email”: Copilot drafts a clear, professional reply, ready to drop into the draft.",
        "Refine the reply in one click with the suggested chips — “Make it more direct”, “Add critical points”, “Include specific details” — then review and send.",
      ],
    },
    stepImages: [
      "/articles/mail-summary-chat.png",
      null,
      "/articles/mail-reply-copilot.png",
      null,
    ],
    imageWidth: "md",
    prompt: {
      fr: "Résume mes e-mails non lus des dernières 24 heures. Regroupe par priorité (urgent / à traiter / info), indique l'expéditeur et l'action attendue de ma part.",
      en: "Summarize my unread emails from the last 24 hours. Group by priority (urgent / to handle / FYI), show the sender and the action expected from me.",
    },
    tags: ["email", "outlook", "triage", "productivité"],
  },
  {
    slug: "resume-reunion-teams",
    section: "m365",
    audience: ["user"],
    product: "teams",
    roles: ["Manager", "Consultant", "Sales"],
    level: "beginner",
    icon: "/teams.png",
    date: "2026-07-06",
    featured: true,
    readMinutes: 3,
    title: {
      fr: "Obtenir le récapitulatif d'une réunion Teams",
      en: "Get the recap of a Teams meeting",
    },
    summary: {
      fr: "Après une réunion, Teams et Copilot génèrent le récapitulatif complet : résumé, décisions, intervenants — que vous pouvez personnaliser, partager et même écouter.",
      en: "After a meeting, Teams and Copilot produce the full recap: summary, decisions, speakers — which you can customize, share and even listen to.",
    },
    steps: {
      fr: [
        "Ouvrez la réunion dans Teams › onglet Récapitulatif : vous y retrouvez l'enregistrement vidéo, la chronologie des intervenants et les fichiers partagés (transcription activée requise).",
        "Cliquez sur Résumé IA (ou demandez à Copilot « Résume la réunion et liste les décisions ») : Copilot génère un résumé structuré de la réunion, thème par thème, avec les décisions prises.",
        "Besoin d'un angle précis ? Choisissez Résumé personnalisé et un modèle comme « Résumé de l'intervenant » pour un récap ciblé — ou créez votre propre modèle.",
        "Partagez le récapitulatif : bouton Partager › ajoutez des destinataires. Ils reçoivent le lien et l'accès au récap directement dans Teams.",
        "Pressé ? Générez un Résumé audio : choisissez le style (Exécutif…) et la langue, et Copilot produit un récap audio/vidéo à écouter à la volée.",
      ],
      en: [
        "Open the meeting in Teams › Recap tab: you'll find the video recording, the speaker timeline and the shared files (transcription must be on).",
        "Click AI summary (or ask Copilot “Summarize the meeting and list the decisions”): Copilot generates a structured, topic-by-topic recap with the decisions taken.",
        "Need a specific angle? Pick Custom summary and a template such as “Speaker summary” for a targeted recap — or create your own template.",
        "Share the recap: Share button › add recipients. They get the link and access to the recap directly in Teams.",
        "In a hurry? Generate an Audio summary: choose the style (Executive…) and the language, and Copilot produces an audio/video recap to listen to on the go.",
      ],
    },
    stepImages: [
      "/articles/teams-recap-overview.png",
      "/articles/teams-summary-chat.png",
      "/articles/teams-custom-summary.png",
      "/articles/teams-share.png",
      "/articles/teams-audio-summary.png",
    ],
    imageWidth: "md",
    prompt: {
      fr: "Résume cette réunion en 5 points, liste les décisions prises, puis génère un tableau des tâches avec colonnes : action, responsable, échéance.",
      en: "Summarize this meeting in 5 bullets, list the decisions taken, then generate a task table with columns: action, owner, due date.",
    },
    tags: ["teams", "réunion", "récapitulatif", "productivité"],
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
      fr: "Définissez logos, couleurs, polices et voix de marque une fois depuis l'app Microsoft 365 Copilot : Copilot génère ensuite des présentations qui respectent votre charte.",
      en: "Define logos, colors, fonts and brand voice once from the Microsoft 365 Copilot app: Copilot then generates presentations that respect your brand.",
    },
    steps: {
      fr: [
        "Depuis l'app Microsoft 365 Copilot, cliquez sur Create (Créer) dans le menu de gauche.",
        "Cliquez sur More… (Autres…), puis sélectionnez Brand kits (Kits de marque).",
        "Cliquez sur + New Brand kit, donnez un nom à votre kit, configurez les éléments, puis Enregistrez / Publiez.",
        "Configurer les éléments du kit :\n➞ Logos — Logo principal, logos secondaires et variantes (couleur, blanc…).\n➞ Color — Couleurs officielles avec leurs codes HEX précis.\n➞ Fonts — Typographies (titres, corps), fichiers .ttf / .otf.\n➞ Images & Icons — Photos, graphiques et icônes approuvés, alignés au style de marque.\n➞ Templates — Modèles PowerPoint (.pptx) avec slides d'exemple représentatives.\n➞ Brand voice — Personnalité et ton de la marque.\n➞ Brand guidelines — Charte de marque au format PDF (extraction auto possible).\n➞ Style — Style d'images/icônes/illustrations (exemples ou description).",
        "💡 Astuce IA : en uploadant un template et une charte PDF, Copilot extrait automatiquement couleurs, polices et règles — vous n'avez plus qu'à relire et ajuster.",
        "Point information :\n➞ Kit Personnel / Partagé — vos modifications sont enregistrées automatiquement. Un kit Partagé se diffuse via le bouton Partager (choix des personnes au moment du partage).\n➞ Kit Officiel — le bouton Publish le rend visible à toute l'organisation, réservé aux Brand managers (délai d'activation ≤ 24 h après désignation par l'admin).",
      ],
      en: [
        "From the Microsoft 365 Copilot app, click Create in the left-hand menu.",
        "Click More…, then select Brand kits.",
        "Click + New Brand kit, name your kit, configure the elements, then Save / Publish.",
        "Configure the kit elements:\n➞ Logos — Primary logo, secondary logos and variants (color, white…).\n➞ Color — Official colors with their precise HEX codes.\n➞ Fonts — Typography (headings, body), .ttf / .otf files.\n➞ Images & Icons — Approved photos, graphics and icons, aligned to the brand style.\n➞ Templates — PowerPoint templates (.pptx) with representative example slides.\n➞ Brand voice — The brand's personality and tone.\n➞ Brand guidelines — Brand guidelines as a PDF (auto-extraction possible).\n➞ Style — Style of images/icons/illustrations (examples or description).",
        "💡 AI tip: by uploading a template and a PDF guideline, Copilot automatically extracts colors, fonts and rules — you just review and adjust.",
        "Information point:\n➞ Personal / Shared kit — your changes are saved automatically. A Shared kit is distributed via the Share button (pick the people when sharing).\n➞ Official kit — the Publish button makes it visible to the whole organization, reserved for Brand managers (activation ≤ 24 h after designation by the admin).",
      ],
    },
    stepImages: [
      "/articles/brandkit-create-menu.png",
      "/articles/brandkit-more-menu.png",
      "/articles/brandkit-config-page.png",
      null,
      null,
      null,
    ],
    imageWidth: "md",
    prompt: {
      fr: "Crée une présentation de 8 slides sur [sujet] en respectant notre brand kit. Structure : titre, contexte, 3 messages clés, preuve/chiffres, cas client, prochaines étapes, contact.",
      en: "Create an 8-slide deck about [topic] using our brand kit. Structure: title, context, 3 key messages, proof/figures, customer case, next steps, contact.",
    },
    tags: ["powerpoint", "branding", "design", "présentation"],
  },
  {
    slug: "deployer-brand-kit-officiel-it",
    section: "m365",
    audience: ["it"],
    product: "powerpoint",
    roles: ["IT Admin", "Cloud Architect"],
    level: "advanced",
    icon: "🏢",
    date: "2026-07-09",
    isNew: true,
    trending: true,
    readMinutes: 6,
    title: {
      fr: "Déployer les Brand Kits officiels (côté IT)",
      en: "Deploy official Brand Kits (IT side)",
    },
    summary: {
      fr: "Activez les Brand Kits « Official » au niveau tenant : créez le groupe de sécurité Brand Managers et configurez la policy dans config.office.com.",
      en: "Enable tenant-wide “Official” Brand Kits: create the Brand Managers security group and configure the policy in config.office.com.",
    },
    steps: {
      fr: [
        "Prérequis : une licence Microsoft 365 Copilot (Premium) assignée à chaque futur Brand Manager, et des droits admin pour créer un groupe et configurer config.office.com. Sans la policy, personne ne voit le terme « Official » ni le bouton « Publish ».",
        "Dans admin.microsoft.com › Teams et groupes › Équipes et groupes actifs, ouvrez l'onglet « Groupes de sécurité », puis cliquez sur « + Ajouter un groupe de sécurité à extension de messagerie » (mail-enabled). ⚠️ Un Team / Groupe M365, un groupe de sécurité simple ou une liste de distribution ne fonctionnent PAS (message « policy has been incorrectly configured »).",
        "Nommez le groupe (ex. « Brand Managers »), ajoutez tous les comptes qui devront publier/éditer en tant que MEMBRES (les owners n'ont PAS le droit de publier), puis notez l'adresse e-mail primaire du groupe.",
        "Dans config.office.com › Customization › Policy Management, créez ou ouvrez une configuration avec le scope « Apply to all users » (Tenant).",
        "Onglet Policies › recherchez « Brand Manager » › ouvrez « Elevated role for enterprise brand managers ». Passez Configuration setting sur « Enabled » et collez l'adresse e-mail exacte du groupe dans « Security group email address », puis Apply.",
        "Review and Publish › Done. Laissez Priority = 1 (priorité maximale avec une seule config ; « 0 » n'est pas assignable). Comptez jusqu'à 24 h de propagation — chaque modification relance le délai, évitez de retoucher pendant l'attente.",
        "Vérification : microsoft365.com › Create › More… › Brand kits. Pour un membre du groupe, le terme « Official » et le bouton « Publish » doivent apparaître.",
        "Dépannage : « Policy has been incorrectly configured » → mauvais type de groupe, scope ≠ Tenant ou e-mail erroné. « You do not have permission to publish » → compte owner mais pas membre, ou propagation < 24 h. Aucun « Official » → policy non Enabled, licence Copilot manquante, ou propagation en cours.",
      ],
      en: [
        "Prerequisites: a Microsoft 365 Copilot (Premium) license assigned to each future Brand Manager, and admin rights to create a group and configure config.office.com. Without the policy, no one sees the “Official” term or the “Publish” button.",
        "In admin.microsoft.com › Teams & groups › Active teams & groups, open the “Security groups” tab, then click “+ Add a mail-enabled security group”. ⚠️ A Team / M365 group, a plain security group or a distribution list will NOT work (you'll get “policy has been incorrectly configured”).",
        "Name the group (e.g. “Brand Managers”), add every account that will publish/edit as MEMBERS (owners do NOT get publish rights), then note the group's primary email address.",
        "In config.office.com › Customization › Policy Management, create or open a configuration with the scope “Apply to all users” (Tenant).",
        "Policies tab › search “Brand Manager” › open “Elevated role for enterprise brand managers”. Set Configuration setting to “Enabled” and paste the exact group email into “Security group email address”, then Apply.",
        "Review and Publish › Done. Leave Priority = 1 (highest priority with a single config; “0” isn't assignable). Allow up to 24 h of propagation — each change restarts the timer, so avoid re-editing while waiting.",
        "Verify: microsoft365.com › Create › More… › Brand kits. For a group member, the “Official” term and the “Publish” button should now appear.",
        "Troubleshooting: “Policy has been incorrectly configured” → wrong group type, scope ≠ Tenant or wrong email. “You do not have permission to publish” → account is owner but not member, or propagation < 24 h. No “Official” → policy not Enabled, missing Copilot license, or propagation in progress.",
      ],
    },
    stepImages: [
      null,
      "/articles/brandkit-security-group.png",
      null,
      "/articles/brandkit-policy-config.png",
      "/articles/brandkit-elevated-role.png",
      null,
      "/articles/brandkit-verify-publish.png",
      null,
    ],
    tags: ["powerpoint", "brand kit", "it", "policy", "config.office.com", "gouvernance"],
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
