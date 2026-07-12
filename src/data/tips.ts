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
  video?: string;
  videoPoster?: string;
  prompt?: Bilingual;
  tags: string[];
};

export const PRODUCTS: { id: Product; label: Bilingual; icon: string }[] = [
  { id: "outlook", label: { fr: "Outlook", en: "Outlook" }, icon: "/outlook.png" },
  { id: "teams", label: { fr: "Teams", en: "Teams" }, icon: "/teams.png" },
  { id: "excel", label: { fr: "Excel", en: "Excel" }, icon: "/excel.png" },
  { id: "powerpoint", label: { fr: "PowerPoint", en: "PowerPoint" }, icon: "/powerpoint.png" },
  { id: "notebooks", label: { fr: "Notebooks", en: "Notebooks" }, icon: "/notebooks.png" },
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
    icon: "/powerpoint.png",
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
    icon: "/copilot.png",
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
    icon: "/notebooks.png",
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
    icon: "/outlook.png",
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
    icon: "/outlook.png",
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
    icon: "/powerpoint.png",
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
    icon: "/powerpoint.png",
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
    icon: "/excel.png",
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
    icon: "/agent-builder.png",
    date: "2026-07-02",
    featured: true,
    isNew: true,
    readMinutes: 5,
    title: {
      fr: "Créer un agent Copilot pour un cas d'usage métier",
      en: "Build a Copilot agent for a business use case",
    },
    summary: {
      fr: "Avec Agent Builder, tout collaborateur crée son propre agent — sans code : décrivez-le en langage naturel, ajoutez vos instructions, activez les options (images, sources) ou partez d'un template prêt à l'emploi.",
      en: "With Agent Builder, anyone can create their own agent — no code: describe it in natural language, add your instructions, enable options (images, sources) or start from a ready-made template.",
    },
    steps: {
      fr: [
        "Accédez à Agent Builder depuis Copilot (m365copilot.com, l'app Teams ou l'app Microsoft 365 Copilot) : menu de gauche › Create › New agent.",
        "Créez par langage conversationnel : dans l'onglet Describe, Agent Builder vous accueille avec « Hi, I'm here to help you build an agent ». Décrivez en langage naturel ce que doit faire l'agent — il se construit automatiquement à partir de votre description.",
        "Passez sur l'onglet Configure pour rédiger les Instructions : nom, description, puis le rôle, le ton, les règles et les limites de l'agent. C'est la « fiche de cadrage » qui pilote son comportement.",
        "Réglez les options à disposition : choisissez les sources (sites web, SharePoint…), activez « Create images » pour que l'agent génère des visuels, ou « Create documents, charts and code » (Word/Excel/PowerPoint), et ajoutez des prompts de démarrage.",
        "Pas envie de partir de zéro ? Choisissez un Template : Agent Builder propose une bibliothèque prête à l'emploi (Plan My Day, Executive Briefing, Text Translator, Quiz Tutor…).",
        "Sélectionnez un template, personnalisez-le (instructions, sources, ton) et testez-le en direct dans l'aperçu avant de cliquer sur Create.",
        "💡 Conseil : en manque d'inspiration ? Lancez d'abord l'agent Idea Coach (gratuit, dans Copilot Chat) pour brainstormer le périmètre, le rôle et les cas d'usage de votre futur agent avant de le construire.",
      ],
      en: [
        "Open Agent Builder from Copilot (m365copilot.com, the Teams app or the Microsoft 365 Copilot app): left menu › Create › New agent.",
        "Create it through conversation: in the Describe tab, Agent Builder greets you with “Hi, I'm here to help you build an agent.” Describe in natural language what the agent should do — it builds itself from your description.",
        "Switch to the Configure tab to write the Instructions: name, description, then the agent's role, tone, rules and boundaries. This is the “spec sheet” that drives its behavior.",
        "Set the available options: choose the sources (websites, SharePoint…), turn on “Create images” so the agent can generate visuals, or “Create documents, charts and code” (Word/Excel/PowerPoint), and add starter prompts.",
        "Don't want to start from scratch? Pick a Template: Agent Builder offers a ready-to-use library (Plan My Day, Executive Briefing, Text Translator, Quiz Tutor…).",
        "Select a template, customize it (instructions, sources, tone) and test it live in the preview before clicking Create.",
        "💡 Tip: out of ideas? First launch the Idea Coach agent (free, in Copilot Chat) to brainstorm the scope, role and use cases of your future agent before building it.",
      ],
    },
    stepImages: [
      "/articles/agent-access.png",
      "/articles/agent-describe.png",
      "/articles/agent-instructions.png",
      "/articles/agent-options.png",
      "/articles/agent-templates.png",
      "/articles/agent-template-example.png",
      null,
    ],
    imageWidth: "md",
    prompt: {
      fr: "Tu es un assistant [métier, ex : onboarding RH]. Réponds uniquement à partir des sources fournies. Ton : accueillant et clair. Si l'info manque, oriente vers le bon contact. Termine chaque réponse par une action concrète.",
      en: "You are a [role, e.g. HR onboarding] assistant. Answer only from the provided sources. Tone: welcoming and clear. If info is missing, point to the right contact. End each answer with a concrete next step.",
    },
    tags: ["agents", "agent builder", "no-code", "métier", "automatisation"],
  },
  {
    slug: "gouvernance-securite-copilot",
    section: "m365",
    audience: ["it"],
    product: "general",
    roles: ["Cloud Architect", "IT Admin"],
    level: "advanced",
    icon: "/copilot-m365.png",
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
    icon: "/outlook.png",
    date: "2026-07-12",
    trending: true,
    readMinutes: 2,
    video: "/articles/plan-day-outlook.mp4",
    videoPoster: "/articles/plan-day-outlook-poster.jpg",
    title: {
      fr: "Organiser sa journée dans Outlook, sans licence Copilot",
      en: "Plan your day in Outlook, without a Copilot license",
    },
    summary: {
      fr: "Avec Copilot Chat (inclus, sans licence), raisonnez sur l'ensemble de votre boîte mail et préparez une to-do calée sur vos rendez-vous du jour.",
      en: "With Copilot Chat (included, no license), reason across your whole inbox and build a to-do list aligned with the day's meetings.",
    },
    steps: {
      fr: [
        "Ouvrez Copilot Chat (l'icône Copilot dans Outlook ou sur Microsoft365.com) — pas besoin de licence Copilot payante : il raisonne déjà sur le contenu de vos e-mails.",
        "Demandez-lui de balayer l'ensemble de votre boîte : « Parcours mes mails récents et repère ce qui attend une action ou une réponse de ma part ».",
        "Croisez avec l'agenda du jour : « À partir de mes rendez-vous d'aujourd'hui et de ces mails, prépare-moi une to-do priorisée pour préparer chaque réunion ».",
        "Affinez : demandez de regrouper par réunion, d'estimer le temps de chaque tâche, ou de mettre en avant les échéances les plus urgentes.",
      ],
      en: [
        "Open Copilot Chat (the Copilot icon in Outlook or on Microsoft365.com) — no paid Copilot license needed: it already reasons over your email content.",
        "Ask it to scan your whole inbox: “Go through my recent emails and flag anything awaiting an action or a reply from me.”",
        "Cross-reference with today's calendar: “From today's meetings and these emails, build me a prioritised to-do list to prepare for each meeting.”",
        "Refine: ask it to group by meeting, estimate time per task, or surface the most urgent deadlines.",
      ],
    },
    prompt: {
      fr: "Parcours ma boîte mail récente et mes rendez-vous d'aujourd'hui. Identifie tout ce qui attend une action ou une réponse de ma part, puis prépare une to-do priorisée pour préparer chacune de mes réunions du jour : regroupe par réunion, indique l'échéance et une estimation de temps, et signale les urgences en premier.",
      en: "Go through my recent inbox and today's meetings. Identify everything awaiting an action or reply from me, then build a prioritised to-do list to prepare each of today's meetings: group by meeting, add the deadline and a time estimate, and flag urgent items first.",
    },
    tags: ["outlook", "productivité", "organisation", "sans licence", "chat"],
  },
  {
    slug: "deep-research-chat",
    section: "chat",
    audience: ["user", "it"],
    product: "scout",
    roles: ["Consultant", "Cloud Architect", "Marketing"],
    level: "intermediate",
    icon: "/copilot.png",
    date: "2026-07-06",
    featured: true,
    isNew: true,
    readMinutes: 5,
    title: {
      fr: "Mener une recherche approfondie (Deep Research)",
      en: "Run a Deep Research investigation",
    },
    summary: {
      fr: "Sur un sujet complexe, faites « réfléchir » Copilot plus longtemps : choisissez le bon mode de raisonnement (Quick response vs Think deeper) pour obtenir une synthèse sourcée et actionnable.",
      en: "On a complex topic, let Copilot “think” longer: pick the right reasoning mode (Quick response vs Think deeper) to get a sourced, actionable synthesis.",
    },
    steps: {
      fr: [
        "La recherche approfondie, c'est quoi ?\nCe n'est pas une simple question-réponse : vous demandez à Copilot d'explorer un sujet sous plusieurs angles, de croiser des sources, de comparer des options et de restituer une synthèse structurée (contexte, faits, hypothèses, recommandation). Utile pour une décision, un benchmark, une note de cadrage ou une veille.",
        "Choisir la puissance de raisonnement — le sélecteur de mode.\nEn haut à gauche de Copilot Chat, un sélecteur (« Auto » par défaut) décide combien de temps Copilot « réfléchit » avant de répondre. C'est ce réglage qui fait la différence entre une réponse express et une vraie analyse en profondeur.",
        "Comprendre les 3 modes :\n➞ Auto — Copilot décide seul du temps de réflexion selon la question. Le bon choix par défaut au quotidien.\n➞ Quick response (GPT-5.5) — répond immédiatement, sans étape de raisonnement longue. Pensé pour la vitesse.\n➞ Think deeper (GPT-5.6) — Copilot réfléchit plus longtemps pour construire un raisonnement structuré et plus fiable. Pensé pour la qualité sur les sujets complexes.",
        "Quel mode pour quelle demande ?\n➞ Prenez Quick response pour : une question factuelle, une définition, une reformulation, un e-mail court, un brainstorming rapide — quand la vitesse prime et l'enjeu est faible.\n➞ Prenez Think deeper (ou Auto) pour : une analyse, une comparaison multi-critères, une stratégie, une synthèse à partir de plusieurs sources, un raisonnement en plusieurs étapes — quand la qualité prime et que quelques secondes d'attente sont acceptables.\nRègle simple : enjeu faible + besoin de vitesse → Quick response ; enjeu élevé + besoin de fiabilité → Think deeper.",
        "Lancer la recherche approfondie.\nSélectionnez Think deeper (via GPT ➞ « GPT 5.6 Think deeper »), puis formulez une question précise ET le livrable attendu (note de synthèse, tableau comparatif, recommandation argumentée).",
        "Cadrer la qualité : demandez à Copilot de citer ses sources et de distinguer clairement les faits des hypothèses.",
        "Itérer pour creuser : « Approfondis le point 2 », « Compare les 3 options dans un tableau », « Quels sont les risques et les angles morts ? ».",
      ],
      en: [
        "What is deep research?\nIt's not a simple Q&A: you ask Copilot to explore a topic from several angles, cross-check sources, compare options and return a structured synthesis (context, facts, assumptions, recommendation). Great for a decision, a benchmark, a scoping note or market watch.",
        "Choosing reasoning power — the mode selector.\nIn the top-left of Copilot Chat, a selector (“Auto” by default) decides how long Copilot “thinks” before answering. This setting is what separates an instant reply from a genuine in-depth analysis.",
        "Understand the 3 modes:\n➞ Auto — Copilot decides how long to think based on the question. The sensible everyday default.\n➞ Quick response (GPT-5.5) — answers right away, with no long reasoning step. Built for speed.\n➞ Think deeper (GPT-5.6) — Copilot thinks longer to build a structured, more reliable line of reasoning. Built for quality on complex topics.",
        "Which mode for which request?\n➞ Use Quick response for: a factual question, a definition, a rewrite, a short email, quick brainstorming — when speed matters and stakes are low.\n➞ Use Think deeper (or Auto) for: analysis, multi-criteria comparison, strategy, synthesis across several sources, multi-step reasoning — when quality matters and a few seconds' wait is fine.\nSimple rule: low stakes + need speed → Quick response; high stakes + need reliability → Think deeper.",
        "Launch the deep research.\nSelect Think deeper (via GPT ➞ “GPT 5.6 Think deeper”), then state a precise question AND the expected deliverable (brief, comparison table, reasoned recommendation).",
        "Set the quality bar: ask Copilot to cite its sources and clearly separate facts from assumptions.",
        "Iterate to dig deeper: “Go deeper on point 2”, “Compare the 3 options in a table”, “What are the risks and blind spots?”.",
      ],
    },
    stepImages: [
      null,
      "/articles/deep-research-model-selector.png",
      null,
      null,
      null,
      null,
      null,
    ],
    imageWidth: "md",
    prompt: {
      fr: "Réalise une recherche approfondie sur [sujet] (mode Think deeper). Livrable : synthèse structurée avec contexte, 3 options comparées (tableau), risques, et recommandation argumentée. Cite tes sources et distingue les faits des hypothèses.",
      en: "Run a deep research on [topic] (Think deeper mode). Deliverable: structured brief with context, 3 compared options (table), risks, and a reasoned recommendation. Cite your sources and separate facts from assumptions.",
    },
    tags: ["recherche", "deep research", "think deeper", "gpt-5.6", "analyse"],
  },
  {
    slug: "prompt-engineering-framework",
    section: "chat",
    audience: ["user", "it"],
    product: "general",
    roles: ["Consultant", "Cloud Architect", "Marketing", "Manager"],
    level: "intermediate",
    icon: "/copilot.png",
    date: "2026-07-05",
    trending: true,
    readMinutes: 4,
    title: {
      fr: "Les bons ingrédients pour de meilleurs prompts",
      en: "The right ingredients for better prompts",
    },
    summary: {
      fr: "Rôle, Tâche, Contexte, Format : les 4 ingrédients qui transforment un prompt vague en résultat exploitable. Plus votre prompt est clair et complet, plus la réponse de Copilot est pertinente.",
      en: "Role, Task, Context, Format: the 4 ingredients that turn a vague prompt into a usable result. The clearer and more complete your prompt, the more relevant Copilot's answer.",
    },
    steps: {
      fr: [
        "Un bon prompt repose sur 4 ingrédients complémentaires. Réunis, ils donnent à Copilot tout ce qu'il faut pour répondre juste du premier coup.",
        "Rôle : dites à Copilot qui il doit être (« Agis comme un architecte cloud »). Définir le rôle guide le ton, le niveau d'expertise et le point de vue de la réponse.",
        "Tâche : précisez l'action attendue avec des verbes d'action clairs (« Propose un plan d'architecture pour migrer une application vers Azure »). Une tâche nette = une réponse ciblée et exploitable.",
        "Contexte : donnez les informations essentielles — audience, contraintes, ton, données (« Pour une équipe IT d'une PME, budget limité, en privilégiant la sécurité et la scalabilité »). Ni trop, ni trop peu.",
        "Format : indiquez la forme du livrable (tableau, e-mail, 5 bullet points…). Un format clair facilite la lecture et la réutilisation de la réponse.",
        "Astuce — conversez et itérez : un prompt n'est pas figé. Affinez au fil de l'échange (« reformule pour un public non technique », « ajoute les risques »). Puis, une fois le résultat satisfaisant, demandez à Copilot de vous rédiger le « prompt parfait » qui aurait permis d'obtenir directement ce résultat — et gardez-le pour le réutiliser la prochaine fois.",
      ],
      en: [
        "A good prompt relies on 4 complementary ingredients. Together they give Copilot everything it needs to get it right the first time.",
        "Role: tell Copilot who to be (“Act as a cloud architect”). Defining the role guides the tone, level of expertise and point of view of the answer.",
        "Task: state the expected action with clear action verbs (“Propose an architecture plan to migrate an app to Azure”). A sharp task = a focused, usable answer.",
        "Context: give the essential information — audience, constraints, tone, data (“For an SMB IT team, limited budget, prioritising security and scalability”). Not too much, not too little.",
        "Format: specify the shape of the deliverable (table, email, 5 bullet points…). A clear format makes the answer easy to read and reuse.",
        "Tip — converse and iterate: a prompt isn't set in stone. Refine it as you go (“rephrase for a non-technical audience”, “add the risks”). Then, once you're happy with the result, ask Copilot to write you the “perfect prompt” that would have produced this result directly — and save it to reuse next time.",
      ],
    },
    stepImages: [
      "/articles/prompt-ingredients.png",
      null,
      null,
      null,
      null,
      null,
    ],
    imageWidth: "full",
    prompt: {
      fr: "Rôle : agis comme un architecte cloud senior. Tâche : propose un plan de migration d'une application web vers Azure. Contexte : PME, équipe IT réduite, budget limité, priorité sécurité et scalabilité. Format : un tableau des étapes + les risques en 5 bullet points. Si une information manque, pose-moi une question avant de répondre.",
      en: "Role: act as a senior cloud architect. Task: propose a migration plan for a web app to Azure. Context: SMB, small IT team, limited budget, security and scalability first. Format: a table of steps + the risks as 5 bullet points. If information is missing, ask me a question before answering.",
    },
    tags: ["prompt engineering", "ingrédients", "rtcf", "chat", "productivité"],
  },
  {
    slug: "prompts-organisation-manager",
    section: "m365",
    audience: ["user"],
    product: "agents",
    roles: ["Manager"],
    level: "intermediate",
    icon: "/agents.png",
    date: "2026-07-12",
    isNew: true,
    readMinutes: 4,
    title: {
      fr: "Préparer ses entretiens d'équipe avec l'agent Researcher",
      en: "Prepare your team conversations with the Researcher agent",
    },
    summary: {
      fr: "Managers : appuyez-vous sur l'agent Researcher, dopé par Work IQ, pour préparer entretien annuel, 1:1, feedback, points d'équipe et objectifs — à partir de vos échanges réels, en profondeur.",
      en: "Managers: lean on the Researcher agent, powered by Work IQ, to prepare annual reviews, 1:1s, feedback, team syncs and objectives — grounded in your real exchanges, in depth.",
    },
    steps: {
      fr: [
        "Pourquoi Researcher ?\nResearcher est un agent de raisonnement approfondi de Copilot M365 Premium. Contrairement à une réponse de chat classique, il mène une recherche multi-étapes et s'appuie sur Work IQ — vos e-mails, réunions, chats Teams et documents — pour produire une analyse structurée, nuancée et sourcée. À privilégier quand le contexte et la qualité comptent plus que la vitesse : c'est exactement le cas pour préparer un moment humain important.",
        "Ouvrez Copilot M365, puis sélectionnez l'agent Researcher dans la liste des agents. Formulez votre demande en langage naturel. Point clé : avant de se lancer, Researcher vous pose des questions de cadrage (périmètre à couvrir, objectif principal, niveau de formalisation, éléments sensibles à inclure ou non). Répondez-y pour affiner le résultat, ou dites simplement « go ahead » pour le laisser construire avec son meilleur jugement.",
        "Entretien annuel : demandez à Researcher de rassembler les réalisations, contributions et axes de progrès de la personne sur l'année, à partir de vos échanges et des projets suivis — avec les faits marquants datés et sourcés.",
        "1:1 : faites préparer un ordre du jour ancré dans le concret — suivi des actions du dernier point, sujets en cours, signaux d'alerte (charge, blocages) repérés dans les échanges récents, et questions ouvertes à poser.",
        "Feedback constructif : allez plus loin qu'un simple reformulateur. Demandez à Researcher d'analyser une situation précise sous plusieurs angles (contexte, faits observés, impact) et de proposer un feedback équilibré et actionnable, en méthode SBI, avec des exemples concrets tirés des échanges.",
        "Points d'équipe & objectifs : demandez une synthèse des avancées et des points bloquants de la semaine par personne/projet, puis la reformulation des objectifs en OKR mesurables et le repérage des dépendances ou risques.",
      ],
      en: [
        "Why Researcher?\nResearcher is a deep-reasoning agent in Copilot M365 Premium. Unlike a regular chat reply, it runs a multi-step investigation and taps into Work IQ — your emails, meetings, Teams chats and documents — to produce a structured, nuanced and sourced analysis. Best when context and quality matter more than speed: exactly the case when preparing an important human conversation.",
        "Open Copilot M365, then pick the Researcher agent from the agents list. Ask in natural language. Key point: before starting, Researcher asks you scoping questions (scope to cover, main objective, level of formalisation, sensitive items to include or not). Answer them to sharpen the result, or simply say “go ahead” to let it build with its best judgement.",
        "Annual review: ask Researcher to gather the person's achievements, contributions and growth areas over the year, drawn from your exchanges and tracked projects — with dated, sourced highlights.",
        "1:1: have it prepare an agenda grounded in reality — follow-up on last meeting's actions, ongoing topics, warning signs (workload, blockers) spotted in recent exchanges, and open questions to ask.",
        "Constructive feedback: go beyond a simple rephraser. Ask Researcher to analyse a specific situation from several angles (context, observed facts, impact) and propose balanced, actionable feedback using the SBI method, with concrete examples from the exchanges.",
        "Team syncs & objectives: ask for a synthesis of the week's progress and blockers per person/project, then rewrite objectives into measurable OKRs and flag dependencies or risks.",
      ],
    },
    stepImages: [
      null,
      "/articles/researcher-manager.png",
      null,
      null,
      null,
      null,
    ],
    imageWidth: "md",
    prompt: {
      fr: "Agis comme mon agent Researcher. En t'appuyant sur Work IQ (mes e-mails, réunions Teams et documents des 12 derniers mois), prépare mon entretien annuel avec [personne]. Livrable structuré : 1) réalisations et contributions majeures (avec faits datés et sources) ; 2) axes de progrès étayés ; 3) feedback équilibré en méthode SBI sur [situation précise] ; 4) 5 questions ouvertes pour l'échange ; 5) proposition d'objectifs reformulés en OKR mesurables. Distingue les faits des hypothèses et cite tes sources.",
      en: "Act as my Researcher agent. Using Work IQ (my emails, Teams meetings and documents from the last 12 months), prepare my annual review with [person]. Structured deliverable: 1) major achievements and contributions (with dated facts and sources); 2) evidenced growth areas; 3) balanced SBI-method feedback on [specific situation]; 4) 5 open questions for the conversation; 5) proposed objectives rewritten as measurable OKRs. Separate facts from assumptions and cite your sources.",
    },
    tags: ["management", "researcher", "agent", "work iq", "entretien annuel", "1:1"],
  },
];

/* ---------- Helpers ---------- */

export function getTip(slug: string): Tip | undefined {
  return tips.find((t) => t.slug === slug);
}

export function tipsBySection(section: Section): Tip[] {
  return tips.filter((t) => t.section === section);
}

export function tipOfTheDay(date: Date = new Date()): Tip {
  if (tips.length === 0) return tips[0];
  // Rotation quotidienne déterministe : le numéro de jour (UTC) sélectionne
  // une astuce différente chaque jour, en parcourant toute la liste.
  const dayNumber = Math.floor(date.getTime() / 86_400_000);
  return tips[dayNumber % tips.length];
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
