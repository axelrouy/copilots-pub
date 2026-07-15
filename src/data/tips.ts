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
  | "cowork"
  | "scout"
  | "general";
export type Level = "beginner" | "intermediate" | "advanced";

export type Bilingual = { fr: string; en: string };
export type BilingualList = { fr: string[]; en: string[] };

export type Tip = {
  slug: string;
  section: Section;
  extraSections?: Section[];
  governance?: boolean;
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
  stepImages?: (string | string[] | null)[];
  imagesBeforeText?: boolean;
  stepTable?: { step: number; columns: Bilingual[]; rows: Bilingual[][] };
  imageWidth?: "xs" | "md" | "full";
  video?: string;
  videoPoster?: string;
  videoStep?: number;
  stepVideos?: { src: string; step: number; poster?: string }[];
  imageCaptions?: { step: number; text: Bilingual }[];
  phoneVideo?: { src: string; step: number; poster?: string };
  info?: Bilingual;
  links?: { label: Bilingual; url: string }[];
  prompt?: Bilingual;
  tags: string[];
  adoptionWeeks?: number[];
};

export const PRODUCTS: { id: Product; label: Bilingual; icon: string }[] = [
  { id: "outlook", label: { fr: "Outlook", en: "Outlook" }, icon: "/outlook.png" },
  { id: "teams", label: { fr: "Teams", en: "Teams" }, icon: "/teams.png" },
  { id: "excel", label: { fr: "Excel", en: "Excel" }, icon: "/excel.png" },
  { id: "powerpoint", label: { fr: "PowerPoint", en: "PowerPoint" }, icon: "/powerpoint.png" },
  { id: "notebooks", label: { fr: "Notebooks", en: "Notebooks" }, icon: "/notebooks.png" },
  { id: "agents", label: { fr: "Agents", en: "Agents" }, icon: "/agents.png" },
  { id: "cowork", label: { fr: "Cowork", en: "Cowork" }, icon: "/cowork.png" },
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
    slug: "edit-with-copilot-word-allow-editing",
    section: "m365",
    audience: ["user"],
    product: "scout",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR"],
    level: "beginner",
    icon: "/word.png",
    date: "2026-07-15",
    isNew: true,
    trending: true,
    readMinutes: 6,
    title: {
      fr: "Edit with Copilot dans Word : réécrire et enrichir un document",
      en: "Edit with Copilot in Word: rewrite and enrich a document",
    },
    summary: {
      fr: "Un document presque terminé, mais le ton n'y est pas, le texte est trop long, ou il manque encore du contenu. Avec Edit with Copilot et le mode « Allow Editing », vous demandez à Copilot de réécrire directement dans Word, et même d'aller chercher de la matière dans une autre source : un mail, un PDF, un autre document.",
      en: "A document that's almost done, but the tone is off, the text is too long, or content is still missing. With Edit with Copilot and « Allow Editing », you ask Copilot to rewrite directly inside Word, and even pull material from another source: an email, a PDF, another document.",
    },
    steps: {
      fr: [
        "Un document terminé... ou presque\nNous avons tous vécu cette situation : le fond est là, mais la forme laisse à désirer. Le ton est trop formel, le texte trop long, certaines phrases sont maladroites, ou il faut l'adapter à un dirigeant, un client, une équipe technique.\nJusqu'ici, cela voulait dire relire, modifier, reformuler, parfois réécrire des paragraphes entiers. Edit with Copilot apporte une approche beaucoup plus naturelle, directement dans Word.",
        "Qu'est-ce que Edit with Copilot ?\nEdit with Copilot permet de sélectionner une partie de votre document et de demander la modification en langage naturel. Plutôt que de réécrire vous-même, vous décrivez le résultat voulu :\n➞ « Rends ce paragraphe plus professionnel. »\n➞ « Simplifie ce texte pour un public non technique. »\n➞ « Raccourcis ce passage de 50 %. »\n➞ « Transforme ce contenu en liste à puces. »\nCopilot propose alors une nouvelle version que vous pouvez accepter, comparer, ou ignorer. Vous gardez la main de bout en bout.",
        "Le mode « Allow Editing »\nPar défaut, Copilot peut se contenter de discuter (« Chat only ») : il suggère, mais ne touche pas au document. En activant « Allow Editing », vous l'autorisez à écrire directement dans le fichier : insérer, remplacer, reformuler au bon endroit.\nC'est ce mode qui transforme Copilot en véritable co-rédacteur : vous décrivez l'intention, il applique la modification dans le texte, et vous validez.",
        "Enrichir le document depuis une autre source\nLà où Allow Editing devient puissant : vous pouvez demander à Copilot d'ajouter du contenu dans votre document en s'appuyant sur une autre source. Un mail reçu, un PDF, un autre document Word, une note.\nExemple concret : un collègue vous envoie par mail le cadrage d'un projet (ici, le projet « Thunderbolt »). Vous référencez ce mail et demandez à Copilot d'en intégrer les éléments dans la bonne section de votre document. Copilot va chercher la matière dans la source et la rédige directement au bon endroit, dans le style de votre document.",
        "Quelques exemples concrets\n➞ Adapter son message à l'audience : la même information, reformulée pour un dirigeant ou pour une équipe technique.\n➞ Résumer un texte trop long : condenser une section sans perdre l'essentiel.\n➞ Améliorer un document client : monter d'un cran sur le ton et la clarté avant l'envoi.\n➞ Traduire ou localiser un contenu : passer d'une langue à l'autre en gardant la mise en forme.\n➞ Interagir sur le contenu : demander une mise en forme précise, par exemple surligner les titres en jaune.\nLa vidéo ci-dessous en montre deux d'un coup : traduire le document en anglais, puis surligner ses titres.",
        "Ce qu'il faut retenir\nEdit with Copilot transforme Word en assistant de réécriture, et avec « Allow Editing », en co-rédacteur qui agit directement dans le fichier. Il ne remplace pas l'auteur : il l'aide à trouver plus vite la bonne formulation, le bon niveau de détail, le bon ton, et à récupérer du contenu depuis ses autres sources. Entre une idée correcte et un excellent document, la différence se joue souvent sur ces quelques ajustements.",
      ],
      en: [
        "A document that's done... almost\nWe've all been there: the substance is there, but the form still needs work. The tone is too formal, the text too long, some sentences are clumsy, or it needs adapting for an executive, a client, a technical team.\nUntil now, that meant re-reading, editing, rephrasing, sometimes rewriting whole paragraphs. Edit with Copilot brings a far more natural approach, right inside Word.",
        "What is Edit with Copilot?\nEdit with Copilot lets you select part of your document and ask for the change in natural language. Instead of rewriting it yourself, you describe the outcome you want:\n➞ « Make this paragraph more professional. »\n➞ « Simplify this text for a non-technical audience. »\n➞ « Cut this passage by 50%. »\n➞ « Turn this content into a bullet list. »\nCopilot then offers a new version you can accept, compare, or ignore. You stay in control throughout.",
        "The « Allow Editing » mode\nBy default, Copilot can simply chat (« Chat only »): it suggests, but doesn't touch the document. By turning on « Allow Editing », you let it write directly in the file: insert, replace, rephrase in the right place.\nThis is the mode that turns Copilot into a true co-writer: you describe the intent, it applies the change in the text, and you validate.",
        "Enriching the document from another source\nThis is where Allow Editing gets powerful: you can ask Copilot to add content to your document based on another source. A received email, a PDF, another Word document, a note.\nConcrete example: a colleague emails you the framing of a project (here, the « Thunderbolt » project). You reference that email and ask Copilot to bring its elements into the right section of your document. Copilot pulls the material from the source and writes it straight into the right place, in your document's style.",
        "A few concrete examples\n➞ Adapt your message to the audience: the same information, rephrased for an executive or a technical team.\n➞ Summarize an overly long text: condense a section without losing the essentials.\n➞ Improve a client document: raise the tone and clarity a notch before sending.\n➞ Translate or localize content: switch languages while keeping the formatting.\n➞ Interact with the content: ask for precise formatting, for example highlighting titles in yellow.\nThe video below shows two of these at once: translating the document into English, then highlighting its headings.",
        "What to remember\nEdit with Copilot turns Word into a rewriting assistant, and with « Allow Editing », into a co-writer that acts directly in the file. It doesn't replace the author: it helps them find the right wording, the right level of detail, the right tone faster, and pull content from their other sources. Between a decent idea and an excellent document, the difference often comes down to these small adjustments.",
      ],
    },
    stepImages: [
      null,
      null,
      null,
      "/articles/edit-with-copilot-source-mail.png",
      null,
      null,
    ],
    imageWidth: "md",
    stepVideos: [
      { src: "/articles/edit-with-copilot-word-1.mp4", step: 3, poster: "/articles/edit-with-copilot-word-1-poster.jpg" },
      { src: "/articles/edit-with-copilot-word-2.mp4", step: 4, poster: "/articles/edit-with-copilot-word-2-poster.jpg" },
    ],
    imageCaptions: [
      {
        step: 3,
        text: {
          fr: "Le mail source, comme le montre la vidéo ci-dessus.",
          en: "The source email, as shown in the video above.",
        },
      },
    ],
    info: {
      fr: "« Allow Editing » vs « Chat only » : en Chat only, Copilot répond et suggère sans modifier le fichier. En Allow Editing, il applique les changements directement dans le document. Basculez selon que vous voulez juste des idées ou une réécriture appliquée.",
      en: "« Allow Editing » vs « Chat only »: in Chat only, Copilot answers and suggests without changing the file. In Allow Editing, it applies changes directly in the document. Switch depending on whether you just want ideas or an applied rewrite.",
    },
    tags: ["word", "edit with copilot", "allow editing", "réécriture", "document", "rédaction", "source"],
  },
  {
    slug: "decouvrir-copilot-cowork",
    section: "m365",
    audience: ["user"],
    product: "cowork",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR", "IT Admin"],
    level: "beginner",
    icon: "/cowork.png",
    date: "2026-07-15",
    isNew: true,
    trending: true,
    readMinutes: 5,
    title: {
      fr: "Découvrir Copilot Cowork",
      en: "Discover Copilot Cowork",
    },
    summary: {
      fr: "Cowork, c'est l'espace où Copilot passe d'assistant qui répond à collègue qui agit. On lui confie une mission un peu large, il la découpe, avance étape par étape, et revient vers vous quand il a besoin d'un feu vert. Voici comment l'aborder sereinement.",
      en: "Cowork is where Copilot goes from an assistant that answers to a teammate that gets things done. You hand it a broad task, it breaks it down, works step by step, and comes back to you when it needs a green light. Here's how to get comfortable with it.",
    },
    steps: {
      fr: [
        "Cowork, c'est quoi au juste ?\nJusqu'ici, on posait une question à Copilot et il répondait dans la foulée. Avec Cowork, on change de posture : on lui confie une mission, pas juste une question.\nConcrètement, Copilot travaille « à côté de vous » sur des tâches qui demandent plusieurs étapes : rassembler des informations, produire un premier jet, le structurer, puis le peaufiner. Vous gardez la main, lui fait le gros du travail.",
        "Il découpe le travail tout seul\nPlutôt que de tout faire d'un bloc, Cowork transforme votre demande en un plan d'actions. Vous voyez les étapes s'enchaîner, ce qui est fait, ce qui reste à faire.\nCette transparence change tout : vous n'avez plus une boîte noire qui recrache un résultat, mais un collègue qui montre son raisonnement et sur lequel vous pouvez intervenir à tout moment.",
        "Vous restez aux commandes\nCowork ne part pas en autonomie totale sans filet. Aux moments clés, il s'arrête et vous demande votre avis : valider une direction, choisir entre deux options, confirmer avant d'aller plus loin.\nVous pouvez le rediriger, corriger le tir, ajouter une contrainte. C'est vous qui décidez du niveau de délégation, étape après étape.",
        "Quand l'utiliser ?\nCowork brille sur les tâches un peu longues, où l'on aurait tendance à procrastiner : préparer un dossier complet, dégrossir une analyse à partir de plusieurs sources, monter la trame d'un livrable, faire le tour d'un sujet avant une réunion.\nPour une réponse rapide, le chat classique suffit. Pour une mission qui aurait pris une demi-journée, Cowork prend le relais.",
        "Ce qu'il faut retenir\nCowork, c'est Copilot qui passe de « je réponds » à « je m'en occupe ». On confie une mission, il la découpe, avance, et revient chercher votre validation aux moments importants. Voyez-le comme un collègue junior efficace : vous cadrez, il exécute, vous validez. Le meilleur des deux mondes, votre jugement et sa capacité à abattre le travail.",
      ],
      en: [
        "So what exactly is Cowork?\nUntil now, you asked Copilot a question and it answered right away. With Cowork, the posture shifts: you hand it a mission, not just a question.\nIn practice, Copilot works « alongside you » on tasks that take several steps: gathering information, producing a first draft, structuring it, then refining it. You stay in control, it does the heavy lifting.",
        "It breaks the work down on its own\nInstead of doing everything in one go, Cowork turns your request into an action plan. You watch the steps unfold, what's done, what's left to do.\nThat transparency changes everything: no more black box spitting out a result, but a teammate showing its reasoning, one you can step into at any time.",
        "You stay in the driver's seat\nCowork doesn't run fully autonomous without a safety net. At key moments it pauses and asks for your input: approve a direction, pick between two options, confirm before going further.\nYou can redirect it, course-correct, add a constraint. You decide the level of delegation, step after step.",
        "When should you use it?\nCowork shines on longer tasks, the ones you tend to put off: preparing a full brief, roughing out an analysis from several sources, building the outline of a deliverable, getting across a topic before a meeting.\nFor a quick answer, classic chat is enough. For a mission that would have taken half a day, Cowork takes over.",
        "What to remember\nCowork is Copilot moving from « I answer » to « I'll handle it ». You hand over a mission, it breaks it down, works through it, and comes back for your approval at the important moments. Think of it as an efficient junior teammate: you frame it, it executes, you validate. The best of both worlds, your judgment and its ability to power through the work.",
      ],
    },
    stepImages: [
      "/articles/copilot-cowork-card.png",
      null,
      null,
      null,
      null,
    ],
    imageWidth: "md",
    tags: ["cowork", "copilot cowork", "agentique", "mission", "prise en main", "avec licence"],
  },
  {
    slug: "planifier-une-reunion-avec-copilot",
    section: "chat",
    extraSections: ["m365"],
    audience: ["user"],
    product: "teams",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR", "IT Admin"],
    level: "beginner",
    icon: "/teams.png",
    date: "2026-07-15",
    isNew: true,
    trending: true,
    readMinutes: 4,
    title: {
      fr: "Planifier une réunion avec Copilot",
      en: "Schedule a meeting using Copilot",
    },
    summary: {
      fr: "Fini les allers-retours pour trouver un créneau. Depuis l'application Copilot, demandez simplement en langage naturel de planifier une réunion Teams : Copilot regarde les agendas, propose les créneaux où tout le monde est disponible, et prépare l'invitation. Il ne vous reste plus qu'à cliquer sur « Envoyer ».",
      en: "No more back-and-forth to find a slot. From the Copilot app, simply ask in natural language to schedule a Teams meeting: Copilot checks calendars, suggests slots where everyone is free, and prepares the invite. All you have to do is click « Send ».",
    },
    steps: {
      fr: [
        "Demandez, en langage naturel\nDans l'application Copilot, il suffit de formuler votre besoin comme vous le diriez à un assistant. Par exemple : « Planifie une réunion Teams de 30 minutes avec Will Beringer la semaine prochaine pour discuter de Thunderbolt. »\nPas de formulaire, pas de menu à parcourir : vous décrivez la réunion (durée, participants, sujet, période), et Copilot se charge du reste.",
        "Copilot compare les agendas\nCopilot consulte les calendriers des participants et cherche les moments où tout le monde est libre. Il vous répond en expliquant son choix : « J'ai trouvé des créneaux compatibles... les créneaux proposés ont été retenus car tous les participants sont disponibles. »\nAutrement dit, vous ne proposez plus un horaire au hasard : vous partez directement de disponibilités réelles.",
        "Choisissez le bon créneau\nCopilot affiche plusieurs options de créneaux, avec un aperçu de la journée pour visualiser où la réunion se placerait. Vous n'avez qu'à sélectionner celui qui vous convient le mieux parmi les propositions.\nBesoin d'ajuster ? Vous pouvez encore modifier le titre ou ajouter un ordre du jour avant l'envoi, toujours en langage naturel.",
        "Envoyez l'invitation\nUne fois le créneau choisi, un simple clic sur « Envoyer l'invitation » (Send invite) génère et envoie l'invitation Teams aux participants. La réunion est créée, le lien Teams est inclus, et tout le monde reçoit sa convocation.\nDe la demande à l'invitation envoyée : quelques secondes, sans quitter la conversation.",
        "Ce qu'il faut retenir\nPlanifier une réunion avec Copilot, c'est déléguer la partie pénible : trouver un créneau commun. On décrit la réunion en une phrase, Copilot croise les agendas, propose les meilleurs horaires, et on valide d'un clic. Idéal pour les réunions rapides du quotidien, sans ouvrir son calendrier ni jongler entre les disponibilités de chacun.",
      ],
      en: [
        "Ask, in natural language\nIn the Copilot app, just phrase your need as you would to an assistant. For example: « Schedule a 30-minute Teams meeting with Will Beringer next week to discuss Thunderbolt. »\nNo form, no menu to browse: you describe the meeting (duration, attendees, topic, timeframe), and Copilot handles the rest.",
        "Copilot compares calendars\nCopilot checks the attendees' calendars and looks for times when everyone is free. It replies while explaining its choice: « I found compatible slots... the proposed slots were selected because all attendees are available. »\nIn other words, you no longer suggest a random time: you start straight from real availability.",
        "Pick the right slot\nCopilot displays several slot options, with a day preview to see where the meeting would land. You just select the one that suits you best among the suggestions.\nNeed to adjust? You can still change the title or add an agenda before sending, still in natural language.",
        "Send the invite\nOnce the slot is chosen, a simple click on « Send invite » generates and sends the Teams invitation to the attendees. The meeting is created, the Teams link is included, and everyone gets their invite.\nFrom request to sent invite: a few seconds, without leaving the conversation.",
        "What to remember\nScheduling a meeting with Copilot means delegating the painful part: finding a common slot. You describe the meeting in one sentence, Copilot cross-references calendars, suggests the best times, and you confirm in one click. Perfect for quick everyday meetings, without opening your calendar or juggling everyone's availability.",
      ],
    },
    stepImages: [
      "/articles/planifier-reunion-copilot.png",
      null,
      null,
      null,
      null,
    ],
    imageWidth: "md",
    tags: ["teams", "réunion", "meeting", "planifier", "agenda", "assistant"],
  },
  {
    slug: "parlez-a-copilot-voix-mobile",
    section: "chat",
    extraSections: ["m365"],
    audience: ["user"],
    product: "general",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR", "IT Admin"],
    level: "beginner",
    icon: "/general.png",
    date: "2026-07-15",
    isNew: true,
    trending: true,
    readMinutes: 6,
    title: {
      fr: "Parlez à Copilot : la conversation vocale sur mobile",
      en: "Talk to Copilot: voice conversation on mobile",
    },
    summary: {
      fr: "Et si vous parliez à Copilot comme à un véritable assistant personnel ? La conversation vocale, ancrée dans vos données professionnelles et le web, rend vos échanges plus simples, plus rapides et plus naturels. Voici comment la lancer, comment bien dialoguer, et 4 scénarios concrets pour vous lancer.",
      en: "What if you talked to Copilot like a real personal assistant? Voice conversation, grounded in your work data and the web, makes your exchanges simpler, faster and more natural. Here's how to start it, how to dialogue well, and 4 concrete scenarios to get going.",
    },
    steps: {
      fr: [
        "Parlez à Copilot, tout simplement\nTravaillez avec l'IA de la manière qui vous convient le mieux : les capacités multimodales rendent vos flux de travail plus simples, plus rapides et plus intuitifs. Sur mobile, mais aussi sur le web et le bureau, vous pouvez parler à Copilot comme à un assistant personnel, grâce à une conversation vocale naturelle, ancrée dans vos données professionnelles et sur le web.\nRegardez plutôt, c'est plus parlant en vidéo (le son est coupé par défaut, activez-le avec l'icône du lecteur) :",
        "Sur quels appareils ?\nLa conversation vocale se déploie progressivement sur le web, iOS, Android, Windows et Mac. Autrement dit : que vous soyez sur votre téléphone dans les transports ou devant votre poste de travail, la voix vous suit partout.",
        "Comment démarrer une conversation vocale\n➞ Cliquez sur le bouton « Démarrer une nouvelle conversation vocale » dans la zone de saisie.\n➞ Sur Windows, si l'application Microsoft 365 Copilot est installée, vous pouvez aussi lancer la voix depuis l'aperçu rapide, avec la touche Copilot ou le raccourci Win+C.\n➞ Parlez avec Copilot : vous pouvez l'interrompre, le rediriger ou poser des questions de suivi à tout moment.\n➞ Pour couper le micro ou terminer, utilisez Muet/Pause ou Terminer la conversation vocale. Copilot cesse alors de vous écouter.",
        "La bonne façon de dialoguer\nUn bon échange vocal tient en trois réflexes :\n➞ Commencez par une question précise, puis rebondissez dessus pour faire quelque chose d'utile. Par exemple : « Quelle est ma prochaine réunion ? Aide-moi à la préparer. » ou « De quoi parle le mail de X ? Rédige-moi une réponse. »\n➞ Restez conversationnel : interrompez, demandez de clarifier, coupez, passez à la suite.\n➞ À noter : la voix ne prend pas encore en charge les commandes d'application comme planifier une réunion, envoyer un e-mail ou générer une image.",
        "Scénario 1 : préparer une réunion client\nQuelques prompts pour enchaîner naturellement :\n➞ « Ai-je des escalades client prioritaires qui demandent mon attention cette semaine ? »\n➞ « Quand est ma prochaine réunion avec le client X ? »\n➞ « Quelles sont leurs dernières annonces publiques ? » [Interruption] « Stop, seulement les titres. »\nDialogue type : « Hey Copilot, des sujets prioritaires sur le projet X pour moi ?... ok, noté... et quand est-ce que je revois ce client ?... [interruption] merci... et qu'ont-ils annoncé publiquement récemment ?... merci. »",
        "Scénario 2 : préparer ma journée\n➞ « Quand a lieu ma prochaine revue sur le projet X ? Confirme l'ordre du jour final et la liste des participants depuis mon agenda. »\n➞ « Signale les principaux points non résolus de la dernière réunion sur ce projet. »\nDialogue type : « Hey Copilot... euh... quand est ma prochaine revue sur le projet X ?... et c'est quoi l'ordre du jour, qui était invité déjà ?... et résume-moi la discussion principale de la dernière fois... [interruption] merci, noté... et les points restés ouverts la dernière fois ? »",
        "Scénario 3 : m'aider à préparer une réunion\n➞ « Copilot, quand a lieu ma prochaine réunion d'équipe de direction (LT) ? »\n➞ « Aide-moi à préparer : rédige une accroche de 90 secondes sur les annonces GenAI marquantes de la semaine dans la productivité. » [Interruption] « Stop, en 3 puces façon TL;DR. »\nDialogue type : « Copilot, quand est ma prochaine réunion LT ?... j'ai besoin d'ajouter une intro sur les tendances récentes en IA générative, donne-moi un topo... [interruption] c'est noté, merci. »",
        "Scénario 4 : brainstormer et créer du contenu\n➞ « Copilot, capture mes réflexions sur notre stratégie IA marketing/partenaires, puis transforme ça en plan avec trois options stratégiques. »\n➞ [Interruption] « Ajoute aussi des éléments de mes dernières revues de stratégie marketing/partenaires. »\nDialogue type : « Hey Copilot, je vais réfléchir à voix haute quelques minutes sur notre stratégie partenaires IA, capture l'essentiel et organise-le en un e-mail concis et pertinent, avec des prochaines étapes que je pourrai partager, ok ?... <vidage de cerveau> »",
        "Ce qu'il faut retenir\nLa voix, c'est Copilot en mode mains libres : idéal pour préparer une réunion en marchant, faire le point sur sa journée ou capturer une idée à voix haute. On commence par une question précise, on reste naturel, on interrompt sans complexe. Et pour les actions (envoyer, planifier, générer), on repasse au clavier. Un vrai assistant personnel, dans votre poche.",
      ],
      en: [
        "Talk to Copilot, simply\nWork with AI the way that suits you best: multimodal capabilities make your workflows simpler, faster and more intuitive. On mobile, but also on the web and desktop, you can talk to Copilot like a personal assistant, through a natural voice conversation grounded in your work data and the web.\nSee for yourself, it's clearer in video (sound is off by default, turn it on with the player icon):",
        "On which devices?\nVoice conversation is gradually rolling out on web, iOS, Android, Windows and Mac. In other words: whether you're on your phone during your commute or at your desk, voice follows you everywhere.",
        "How to start a voice conversation\n➞ Click the « Start a new voice chat » button in the input box.\n➞ On Windows, if the Microsoft 365 Copilot app is installed, you can also start voice from quick view, with the Copilot key or the Win+C shortcut.\n➞ Speak with Copilot: you can interrupt it, redirect it or ask follow-up questions at any time.\n➞ To mute or end, use Mute/Pause or End voice chat. Copilot then stops listening.",
        "The right way to dialogue\nA good voice exchange comes down to three reflexes:\n➞ Start with a precise question, then build on it to do something useful. For example: « What's my next meeting? Help me prep for it. » or « What's the mail from X about? Draft a reply. »\n➞ Stay conversational: interrupt, ask to clarify, cut, move on.\n➞ Note: voice does not yet support app commands like scheduling a meeting, sending an email or generating an image.",
        "Scenario 1: prepare for a customer meeting\nA few prompts to chain naturally:\n➞ « Do I have any high-priority customer escalations requiring my immediate attention this week? »\n➞ « When is my next meeting with customer X? »\n➞ « What are their most recent public announcements? » [Interrupt] « Stop, just the headlines. »\nExample dialogue: « Hey Copilot, any high-priority reviews about project X for me?... got it... and when am I meeting this customer?... [interrupt] thanks... and what did they publicly announce recently?... thank you. »",
        "Scenario 2: prepare for my day\n➞ « When's my next review about project X? Confirm the final agenda and attendee list from my calendar. »\n➞ « Flag the top unresolved items from the last meeting on this project. »\nExample dialogue: « Hey Copilot... uh... when's my next review about project X?... oh, what's the agenda and who was invited again... and give me a gist of the main discussion last time... [interrupt] thanks, got it... and can you recap the unresolved items from the last meeting? »",
        "Scenario 3: help me prepare for a meeting\n➞ « Copilot, when is my next LT (leadership team) meeting? »\n➞ « Help me prepare: draft a 90-second opening on notable GenAI product announcements in the productivity space from the past week. » [Interrupt] « Stop, TL;DR in 3 bullets. »\nExample dialogue: « Copilot, when is my next LT meeting?... I need to add an opening about recent trends in the gen AI space, give me a rundown... [interrupt] got it, thanks. »",
        "Scenario 4: brainstorm and create content\n➞ « Copilot, capture my thoughts on our AI marketing/partner strategy, then turn that into an outline with three strategic options. »\n➞ [Interrupt] « Also add details from my recent marketing/partner strategy reviews. »\nExample dialogue: « Hey Copilot, I'm gonna ramble for a couple of minutes on our AI partner strategy and I want you to capture the essence of those thoughts and organize it into a concise, insightful email with next steps that I can share out, got it?... <insert braindump> »",
        "What to remember\nVoice is Copilot hands-free: perfect to prep a meeting while walking, review your day or capture an idea out loud. Start with a precise question, stay natural, interrupt without hesitation. And for actions (send, schedule, generate), switch back to the keyboard. A real personal assistant, in your pocket.",
      ],
    },
    phoneVideo: {
      src: "/articles/parlez-a-copilot-mobile.mp4",
      poster: "/articles/parlez-a-copilot-mobile-poster.jpg",
      step: 0,
    },
    tags: ["voix", "voice", "mobile", "multimodal", "assistant personnel"],
  },
  {
    slug: "agents-1p-microsoft-copilot",
    section: "m365",
    extraSections: ["chat"],
    audience: ["user", "it"],
    product: "agents",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR", "IT Admin"],
    level: "intermediate",
    icon: "/agents.png",
    date: "2026-07-15",
    isNew: true,
    trending: true,
    readMinutes: 7,
    title: {
      fr: "Les agents 1P de Microsoft 365 Copilot : le tour d'horizon",
      en: "The 1P agents of Microsoft 365 Copilot: the full tour",
    },
    summary: {
      fr: "Vous connaissez le Copilot généraliste. Mais saviez-vous que Microsoft livre déjà une petite équipe de spécialistes prêts à l'emploi ? Ce sont les agents 1P (first-party), « Built by Microsoft » : Analyst, Researcher, Plan My Day, Workflows… Voici qui fait quoi, rangé par familles, avec des exemples concrets.",
      en: "You know the generalist Copilot. But did you know Microsoft already ships a small team of ready-to-use specialists? These are the 1P (first-party) agents, « Built by Microsoft »: Analyst, Researcher, Plan My Day, Workflows… Here's who does what, sorted by family, with concrete examples.",
    },
    steps: {
      fr: [
        "Des spécialistes prêts à l'emploi, signés Microsoft\nLà où Copilot répond à (presque) tout, les agents sont des assistants spécialisés, chacun taillé pour une mission précise. Les agents 1P, pour « first-party », sont ceux conçus et livrés par Microsoft, directement disponibles dans Microsoft 365 Copilot sous la mention « Built by Microsoft ». Pas d'installation, pas de configuration : vous les sélectionnez et vous les mettez au travail.\nDans les sections qui suivent, je vous présente chaque agent, un par un, regroupés selon 4 grandes familles.",

        "Plan My Day · Productivité personnelle\nVotre assistant d'organisation quotidienne. Il compile un vrai briefing matinal : réunions importantes, e-mails qui demandent une action, urgences du jour. Le rituel parfait pour démarrer la journée avec une vue synthétique.\nExemple : « Prépare mon briefing du matin avec mes réunions importantes et les emails nécessitant une action. »",
        "Writing Coach · Productivité personnelle\nLe coach rédactionnel qui muscle vos écrits professionnels. Il améliore le ton, clarifie le message, corrige la structure et renforce l'impact. Idéal avant d'envoyer un e-mail stratégique.\nExemple : « Réécris cet email pour le rendre plus convaincant auprès d'un comité exécutif. »",
        "Idea Coach · Productivité personnelle\nVotre partenaire de brainstorming. Il stimule la créativité, génère des pistes d'innovation, structure vos ateliers de réflexion et challenge vos hypothèses. Parfait pour préparer un workshop.\nExemple : « Génère 20 idées permettant d'améliorer l'adoption de Microsoft 365 Copilot chez nos clients. »",
        "Career Coach · Productivité personnelle\nUn coach dédié à votre développement professionnel : conseils carrière, montée en compétences, préparation d'entretiens, plans de progression.\nExemple : « Quelles compétences dois-je développer pour devenir responsable d'une équipe IA ? »",
        "Learning Coach · Productivité personnelle\nLe coach pédagogique qui accompagne l'apprentissage continu. Il recommande des parcours, évalue les compétences, crée des plans de progression et suit vos objectifs.\nExemple : « Construis un plan d'apprentissage de 30 jours sur Copilot Studio. »",

        "Analyst · Recherche & analyse\nL'agent d'analyse avancée. Il explore des fichiers complexes (Excel, CSV, PDF, rapports) et en extrait tendances, corrélations et insights. Bref, il fait parler la donnée, même multi-sources.\nExemple : « Analyse les fichiers de ventes des 12 derniers mois et identifie les facteurs communs aux régions ayant dépassé leurs objectifs. »",
        "Researcher · Recherche & analyse\nL'agent de recherche approfondie. Il combine vos données Microsoft 365 avec des capacités de recherche avancées pour produire de véritables analyses détaillées : benchmark, veille, synthèse de sources multiples.\nExemple : « Prépare une analyse de l'adoption de l'IA générative dans le secteur de la construction et compare avec les initiatives en cours chez nous. »",
        "SME Finder · Recherche & analyse\nSME pour « Subject Matter Expert ». Cet agent identifie les experts les plus pertinents dans votre organisation en analysant compétences et communautés. Fini les « tu sais qui pourrait m'aider ? ».\nExemple : « Qui sont les experts SharePoint Online les plus actifs dans l'organisation ? »",

        "App Builder (Frontier) · Création & automatisation\nLa création d'applications par langage naturel. Décrivez votre besoin et il génère l'application, l'interface utilisateur et le modèle de données.\nExemple : « Crée une application de suivi des demandes clients. »",
        "Workflows (Frontier) · Création & automatisation\nL'agent qui crée des automatisations en langage naturel. Il connecte plusieurs services et transforme un processus répétitif en workflow, sans écrire une ligne de code.\nExemple : « Lorsqu'un nouveau collaborateur arrive, crée automatiquement les tâches d'onboarding. »",
        "SharePoint List Agent · Création & automatisation\nIl transforme le contexte d'une conversation en liste SharePoint structurée, puis la maintient à jour. Idéal pour créer rapidement un référentiel ou un suivi d'actions.\nExemple : « Transforme cette réunion en liste SharePoint de suivi d'actions. »",
        "AI Learning Advisor · Création & automatisation\nL'expert dédié aux produits IA Microsoft et à l'apprentissage de Copilot. Il explique les concepts, répond aux questions techniques et accompagne les créateurs d'agents.\nExemple : « Explique la différence entre un agent déclaratif et un agent autonome. »",

        "Planner (Frontier) · Gestion métier & organisation\nL'extension intelligente de Microsoft Planner : création automatique de tâches, suivi de projet, priorisation et gestion des échéances.\nExemple : « Crée un plan projet pour le déploiement de 10 000 licences Microsoft 365 Copilot. »",
        "Workforce Insights (Frontier) · Gestion métier & organisation\nL'agent d'analyse organisationnelle. Il explore la structure de l'entreprise, analyse les compétences et cartographie les équipes.\nExemple : « Quels sont les départements les plus impliqués dans les projets IA ? »",
        "Surveys · Gestion métier & organisation\nL'agent de création et d'analyse d'enquêtes. Il génère les questionnaires, diffuse les enquêtes et analyse les résultats.\nExemple : « Crée un sondage pour mesurer la satisfaction des utilisateurs Copilot après 30 jours. »",
        "Learning · Gestion métier & organisation\nConnecté aux contenus d'apprentissage Microsoft, cet agent recherche des formations, recommande des certifications et sélectionne les parcours adaptés.\nExemple : « Trouve les meilleures ressources pour préparer la certification MS-4007. »",
        "Frontline Agent (Preview) · Gestion métier & organisation\nPensé pour les collaborateurs terrain (retail, industrie, logistique, maintenance). Il offre recherche documentaire, support opérationnel, réponses aux procédures et assistance en mobilité.\nExemple : « Quelle est la procédure de redémarrage d'un équipement de production ? »",

        "Les 5 agents que je mettrais en avant\nSi vous ne deviez en retenir que quelques-uns pour un client, je miserais sur ceux qui font vraiment la différence aujourd'hui : Researcher (l'expertise à la demande), Analyst (la donnée qui parle), SME Finder (le bon expert en un instant), Plan My Day (le rituel du matin) et Workflows (l'automatisation sans code). Ce sont les plus différenciants, et souvent ceux qui déclenchent le « effet waouh » en atelier.",
        "Ce qu'il faut retenir\nLes agents 1P se répartissent en 4 grandes familles, résumées dans le tableau ci-dessous. Le bon réflexe d'adoption : ne les présentez pas tous d'un coup. On commence par un ou deux agents qui parlent au métier de l'utilisateur, et on élargit une fois les bases acquises. C'est l'étape 6 du parcours d'adoption.",
      ],
      en: [
        "Ready-to-use specialists, built by Microsoft\nWhere Copilot answers (almost) anything, agents are specialized assistants, each tailored for one precise mission. The 1P agents, for « first-party », are the ones designed and shipped by Microsoft, directly available in Microsoft 365 Copilot under the « Built by Microsoft » label. No install, no setup: you select them and put them to work.\nIn the sections below, I introduce each agent, one by one, grouped into 4 broad families.",

        "Plan My Day · Personal productivity\nYour daily organization assistant. It compiles a real morning briefing: important meetings, emails needing action, the day's urgencies. The perfect ritual to start the day with a clear overview.\nExample: « Prepare my morning briefing with my important meetings and the emails needing an action. »",
        "Writing Coach · Personal productivity\nThe writing coach that strengthens your professional documents. It improves tone, clarifies the message, fixes structure and boosts impact. Ideal before sending a strategic email.\nExample: « Rewrite this email to make it more convincing for an executive committee. »",
        "Idea Coach · Personal productivity\nYour brainstorming partner. It sparks creativity, generates innovation leads, structures your ideation workshops and challenges your assumptions. Perfect to prepare a workshop.\nExample: « Generate 20 ideas to improve Microsoft 365 Copilot adoption at our clients. »",
        "Career Coach · Personal productivity\nA coach dedicated to your professional development: career advice, skill building, interview prep, progression plans.\nExample: « Which skills should I develop to become the lead of an AI team? »",
        "Learning Coach · Personal productivity\nThe pedagogical coach supporting continuous learning. It recommends paths, assesses skills, builds progression plans and tracks your goals.\nExample: « Build a 30-day learning plan on Copilot Studio. »",

        "Analyst · Research & analysis\nThe advanced analysis agent. It explores complex files (Excel, CSV, PDF, reports) and extracts trends, correlations and insights. In short, it makes data speak, even across multiple sources.\nExample: « Analyze the last 12 months of sales files and identify the common factors of regions that beat their targets. »",
        "Researcher · Research & analysis\nThe deep research agent. It combines your Microsoft 365 data with advanced research capabilities to produce genuinely detailed analyses: benchmark, monitoring, synthesis of multiple sources.\nExample: « Prepare an analysis of generative AI adoption in the construction sector and compare with our ongoing initiatives. »",
        "SME Finder · Research & analysis\nSME stands for « Subject Matter Expert ». This agent identifies the most relevant experts in your organization by analyzing skills and communities. No more « who could help me with this? ».\nExample: « Who are the most active SharePoint Online experts in the organization? »",

        "App Builder (Frontier) · Creation & automation\nApp creation through natural language. Describe your need and it generates the application, the user interface and the data model.\nExample: « Create an app to track client requests. »",
        "Workflows (Frontier) · Creation & automation\nThe agent that creates automations in natural language. It connects several services and turns a repetitive process into a workflow, without writing a single line of code.\nExample: « When a new employee joins, automatically create their onboarding tasks. »",
        "SharePoint List Agent · Creation & automation\nIt turns a conversation's context into a structured SharePoint list, then keeps it up to date. Ideal to quickly build a repository or an action tracker.\nExample: « Turn this meeting into a SharePoint action-tracking list. »",
        "AI Learning Advisor · Creation & automation\nThe expert dedicated to Microsoft AI products and to learning Copilot. It explains concepts, answers technical questions and supports agent creators.\nExample: « Explain the difference between a declarative agent and an autonomous agent. »",

        "Planner (Frontier) · Business & organization management\nThe smart extension of Microsoft Planner: automatic task creation, project tracking, prioritization and deadline management.\nExample: « Create a project plan for the rollout of 10,000 Microsoft 365 Copilot licenses. »",
        "Workforce Insights (Frontier) · Business & organization management\nThe organizational analysis agent. It explores the company structure, analyzes skills and maps teams.\nExample: « Which departments are the most involved in AI projects? »",
        "Surveys · Business & organization management\nThe survey creation and analysis agent. It generates questionnaires, distributes surveys and analyzes results.\nExample: « Create a survey to measure Copilot user satisfaction after 30 days. »",
        "Learning · Business & organization management\nConnected to Microsoft learning content, this agent searches for trainings, recommends certifications and selects suitable paths.\nExample: « Find the best resources to prepare the MS-4007 certification. »",
        "Frontline Agent (Preview) · Business & organization management\nDesigned for frontline workers (retail, industry, logistics, maintenance). It offers document search, operational support, procedure answers and on-the-go assistance.\nExample: « What is the restart procedure for a production equipment? »",

        "The 5 agents I'd put forward\nIf you had to keep just a few for a client, I'd bet on the ones that truly make a difference today: Researcher (expertise on demand), Analyst (data that speaks), SME Finder (the right expert in an instant), Plan My Day (the morning ritual) and Workflows (no-code automation). They're the most differentiating, and often the ones that trigger the « wow effect » in a workshop.",
        "What to remember\nThe 1P agents fall into 4 broad families, summarized in the table below. The right adoption reflex: don't present them all at once. Start with one or two agents that speak to the user's job, then expand once the basics are in place. That's step 6 of the adoption journey.",
      ],
    },
    stepImages: [
      "/articles/agents-1p-built-by-microsoft.png",
      "/articles/agents/plan-my-day.png",
      "/articles/agents/writing-coach.png",
      "/articles/agents/idea-coach.png",
      "/articles/agents/career-coach.png",
      "/articles/agents/learning-coach.png",
      "/articles/agents/analyst.png",
      "/articles/agents/researcher.png",
      "/articles/agents/sme-finder.png",
      "/articles/agents/app-builder.png",
      "/articles/agents/workflows.png",
      "/articles/agents/sharepoint-list-agent.png",
      "/articles/agents/ai-learning-advisor.png",
      "/articles/agents/planner.png",
      "/articles/agents/workforce-insights.png",
      "/articles/agents/surveys.png",
      "/articles/agents/learning.png",
      "/articles/agents/frontline-agent.png",
      null,
      null,
    ],
    imagesBeforeText: true,
    stepTable: {
      step: 19,
      columns: [
        { fr: "Famille", en: "Family" },
        { fr: "Agents", en: "Agents" },
      ],
      rows: [
        [
          { fr: "Productivité personnelle", en: "Personal productivity" },
          {
            fr: "Plan My Day, Writing Coach, Career Coach, Learning Coach",
            en: "Plan My Day, Writing Coach, Career Coach, Learning Coach",
          },
        ],
        [
          { fr: "Recherche & analyse", en: "Research & analysis" },
          { fr: "Analyst, Researcher, SME Finder", en: "Analyst, Researcher, SME Finder" },
        ],
        [
          { fr: "Création & automatisation", en: "Creation & automation" },
          {
            fr: "App Builder, Workflows, SharePoint List Agent",
            en: "App Builder, Workflows, SharePoint List Agent",
          },
        ],
        [
          { fr: "Gestion métier & organisation", en: "Business & organization management" },
          {
            fr: "Planner, Workforce Insights, Surveys, Frontline Agent",
            en: "Planner, Workforce Insights, Surveys, Frontline Agent",
          },
        ],
      ],
    },
    tags: ["agents", "agents 1p", "analyst", "researcher", "workflows", "copilot studio"],
  },
  {
    slug: "personnaliser-copilot-instructions-memories",
    section: "m365",
    extraSections: ["chat"],
    audience: ["user"],
    product: "general",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR"],
    level: "beginner",
    icon: "/copilot.png",
    date: "2026-07-14",
    isNew: true,
    trending: true,
    readMinutes: 5,
    adoptionWeeks: [2, 7],
    title: {
      fr: "Personnaliser Copilot : Custom Instructions et Memories",
      en: "Personalize Copilot: Custom Instructions and Memories",
    },
    summary: {
      fr: "Copilot répond à tout le monde de la même façon ? Plus maintenant. Avec les Custom Instructions et les Memories, vous lui apprenez qui vous êtes, comment vous aimez travailler et ce qu'il doit retenir dans la durée. Deux réglages, un Copilot qui vous ressemble.",
      en: "Copilot answers everyone the same way? Not anymore. With Custom Instructions and Memories, you teach it who you are, how you like to work and what it should remember over time. Two settings, a Copilot that feels like yours.",
    },
    steps: {
      fr: [
        "Où se trouve la personnalisation\nTout se passe dans les paramètres de conversation. En haut à droite de Copilot, cliquez sur le menu « … » puis sur « Chat settings ». Dans la fenêtre qui s'ouvre, allez dans l'onglet « Personalization » : c'est le cockpit qui contrôle la façon dont Copilot adapte ses réponses à vos préférences.",
        "Deux leviers complémentaires\nDans « Personalization », deux réglages nous intéressent, chacun avec son interrupteur : les Custom instructions (« Add details about your preferences so Copilot can respond your way ») et les Saved memories (« Allow Copilot to remember details to provide better responses »). Le premier définit comment Copilot répond, le second ce qu'il retient de vous dans le temps. Les deux se combinent parfaitement.",
        "Custom Instructions : dites à Copilot comment répondre\nLes Custom Instructions vous permettent de définir comment Copilot doit répondre à chaque fois, y compris le ton, le format, le niveau de détail et d'autres préférences. Concrètement, cela modifie :\n➞ Le style de réponse (par ex. concis, structuré, prêt pour l'exécutif).\n➞ Vos préférences de langue, de ton et de mise en forme.\n➞ L'adaptation à votre style de travail unique.\nC'est votre mode d'emploi personnel, appliqué automatiquement à chaque échange.",
        "Rédiger ses Custom Instructions\nCliquez sur « Edit instructions » : une zone de texte vous laisse écrire vos consignes (ou piocher dans les suggestions comme « Use clear and simple language », « Highlight decisions in meeting notes »…). Par exemple :\n➞ « Mon rôle : Chief Operation Officer »\n➞ « Utilise un langage simple et compréhensible. Évite les acronymes ou termes spécialisés sauf si le public les connaît. »\n➞ « Si tu ne sais pas, n'invente pas. »\nUn clic sur « Save instructions » et c'est appliqué à toutes vos futures conversations.",
        "Memories : ce que Copilot retient de vous\nLes Memories permettent à Copilot de conserver un contexte personnel ou professionnel utile dans le temps, pour devenir plus pertinent et personnalisé. Ce dont il se souvient :\n➞ Vos préférences, votre contexte récurrent, vos habitudes de travail.\n➞ Les informations stables que vous ne voulez pas répéter.\n➞ Une personnalisation transverse aux applications, sur le long terme.\nLà où les Custom Instructions fixent des règles, les Memories accumulent une connaissance de vous, au fil de l'eau.",
        "Créer une mémoire en langage naturel\nLe plus simple : dites-le à Copilot directement, et vous n'êtes pas obligé de commencer par « Souviens-toi ». Plusieurs formulations fonctionnent :\n➞ « Rappelle-toi que je travaille principalement avec des interlocuteurs basés aux États-Unis. »\n➞ « Note que je prépare souvent des résumés exécutifs et des one-pagers. »\n➞ « Garde en tête d'utiliser la terminologie financière américaine. »\nCopilot confirme avec un « Memory updated » et applique la consigne. Sur la première capture, il retient la préférence pour la terminologie financière US et détaille même le vocabulaire qu'il utilisera (Revenue plutôt que chiffre d'affaires, EBITDA conservé tel quel…). Et pour reprendre la main ? Direction « Chat settings > Personalization > Saved memories » (via « Manage saved memories ») : vous y voyez la liste de tout ce que Copilot a mémorisé, et le bouton « Delete all memories » permet de tout effacer d'un coup, comme sur la seconde capture.",
        "Custom Instructions ou Memories : que choisir ?\nUne façon simple de les distinguer : les Custom Instructions, c'est le COMMENT (le style, le format, les règles de réponse), les Memories, c'est le QUI et le QUOI (votre contexte, vos faits stables). Un COO qui veut des réponses concises et sans jargon : Custom Instructions. Le même COO qui bosse surtout avec les US et prépare des one-pagers : Memories. Les deux ensemble donnent un Copilot vraiment taillé pour vous.",
        "Ce que je retiendrais\nPersonnaliser Copilot, ce n'est pas un gadget : c'est ce qui fait passer d'un assistant générique à un assistant qui vous connaît. Vous gagnez du temps (moins de répétitions), de la cohérence (le même ton partout) et de la pertinence (des réponses ancrées dans votre réalité). Prenez cinq minutes pour régler vos Custom Instructions et poser vos premières Memories, c'est l'un des meilleurs investissements d'adoption.",
      ],
      en: [
        "Where personalization lives\nIt all happens in the conversation settings. At the top right of Copilot, click the « … » menu then « Chat settings ». In the window that opens, go to the « Personalization » tab: it's the cockpit controlling how Copilot tailors its answers to your preferences.",
        "Two complementary levers\nIn « Personalization », two settings matter to us, each with its own toggle: Custom instructions (« Add details about your preferences so Copilot can respond your way ») and Saved memories (« Allow Copilot to remember details to provide better responses »). The first defines how Copilot responds, the second what it remembers about you over time. The two combine perfectly.",
        "Custom Instructions: tell Copilot how to answer\nCustom Instructions let you define how Copilot should respond every time, including tone, format, level of detail and other preferences. Concretely, it changes:\n➞ The response style (e.g. concise, structured, executive-ready).\n➞ Your language, tone and formatting preferences.\n➞ Adaptation to your unique way of working.\nIt's your personal user manual, applied automatically to every exchange.",
        "Writing your Custom Instructions\nClick « Edit instructions »: a text area lets you write your directions (or pick from suggestions like « Use clear and simple language », « Highlight decisions in meeting notes »…). For example:\n➞ « My role: Chief Operation Officer »\n➞ « Use simple, understandable language. Avoid acronyms or specialized terms unless the audience knows them. »\n➞ « If you don't know, don't make it up. »\nClick « Save instructions » and it's applied to all your future conversations.",
        "Memories: what Copilot remembers about you\nMemories let Copilot keep useful personal or professional context over time, to become more relevant and personalized. What it remembers:\n➞ Your preferences, your recurring context, your work habits.\n➞ The stable information you don't want to repeat.\n➞ A personalization that spans apps, over the long term.\nWhere Custom Instructions set rules, Memories build up a knowledge of you, gradually.",
        "Creating a memory in natural language\nThe simplest way: just tell Copilot directly, and you don't have to start with « Remember ». Several phrasings work:\n➞ « Keep in mind that I mainly work with US-based counterparts. »\n➞ « Note that I often prepare executive summaries and one-pagers. »\n➞ « Bear in mind to use US financial terminology. »\nCopilot confirms with a « Memory updated » and applies the instruction. In the first screenshot, it keeps the preference for US financial terminology and even details the vocabulary it will use (Revenue rather than chiffre d'affaires, EBITDA kept as is…). And to take back control? Head to « Chat settings > Personalization > Saved memories » (via « Manage saved memories »): there you see the list of everything Copilot has memorized, and the « Delete all memories » button lets you wipe it all at once, as shown in the second screenshot.",
        "Custom Instructions or Memories: which to choose?\nA simple way to tell them apart: Custom Instructions are the HOW (the style, the format, the response rules), Memories are the WHO and WHAT (your context, your stable facts). A COO who wants concise, jargon-free answers: Custom Instructions. The same COO who mostly works with the US and prepares one-pagers: Memories. Both together give a Copilot truly tailored to you.",
        "What I'd keep in mind\nPersonalizing Copilot isn't a gimmick: it's what turns a generic assistant into one that knows you. You save time (fewer repetitions), gain consistency (the same tone everywhere) and relevance (answers grounded in your reality). Take five minutes to set your Custom Instructions and lay down your first Memories, it's one of the best adoption investments.",
      ],
    },
    stepImages: [
      "/articles/perso-copilot-menu-settings.png",
      "/articles/perso-copilot-personalization.png",
      null,
      "/articles/perso-copilot-custom-instructions.png",
      null,
      [
        "/articles/perso-copilot-memory-updated.png",
        "/articles/perso-copilot-saved-memories-list.png",
      ],
      null,
      null,
    ],
    imageWidth: "md",
    tags: ["personnalisation", "custom instructions", "memories", "paramètres", "productivité", "adoption"],
  },
  {
    slug: "planifier-un-prompt-recurrent",
    section: "m365",
    extraSections: ["chat"],
    audience: ["user"],
    product: "general",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR"],
    level: "beginner",
    icon: "/copilot.png",
    date: "2026-07-14",
    isNew: true,
    trending: true,
    readMinutes: 4,
    title: {
      fr: "Planifier un prompt récurrent : votre assistant qui travaille en avance",
      en: "Schedule a recurring prompt: your assistant that works ahead of you",
    },
    summary: {
      fr: "Et si Copilot préparait votre journée avant même que vous ouvriez votre PC ? La planification d'un prompt récurrent exécute automatiquement une consigne selon la fréquence de votre choix (quotidienne, hebdomadaire, mensuelle) et vous livre le résultat, sans avoir à le relancer.",
      en: "What if Copilot prepared your day before you even opened your laptop? Scheduling a recurring prompt automatically runs an instruction at the frequency you choose (daily, weekly, monthly) and delivers the result, without you relaunching it.",
    },
    steps: {
      fr: [
        "Le principe : un prompt qui se lance tout seul\nLa planification d'un prompt récurrent est une fonctionnalité récente de Copilot qui permet d'exécuter automatiquement un prompt selon une fréquence définie (quotidienne, hebdomadaire, mensuelle…) et de recevoir le résultat sans avoir à le relancer manuellement. En clair : vous écrivez votre demande une fois, vous dites quand la répéter, et Copilot s'occupe du reste, en tâche de fond.",
        "Étape 1 : écrivez et lancez votre prompt\nCommencez par un prompt normal, celui que vous aimeriez recevoir régulièrement (par exemple « Donne-moi les actualités de la semaine qui concernent Contoso et qui ont fait les gros titres de la presse »). Passez la souris sur votre prompt : une barre d'icônes apparaît en dessous. Cliquez sur l'icône en forme d'horloge, c'est elle qui ouvre la planification.",
        "Étape 2 : réglez la fréquence dans « Create a schedule »\nLa fenêtre « Create a schedule » s'ouvre avec votre prompt déjà pré-rempli. Vous définissez ensuite :\n➞ Starts : la date et l'heure de première exécution (ex. 07/15/2026 à 09:30 PM).\n➞ Every : la périodicité (Week, Day, Month…) et, pour une répétition hebdomadaire, les jours concernés (L, M, M, J, V…).\n➞ Until : une date de fin, pour ne pas laisser tourner indéfiniment.\nUne phrase récapitulative vous confirme le tout : « Repeat this prompt every week on Monday… Friday at 9:30 PM until Jul 29, 2026 ».",
        "Étape 3 : choisissez comment être prévenu, puis enregistrez\nCochez « Receive an email when responses are ready » pour recevoir un e-mail dès que le résultat est prêt, puis cliquez sur « Save ». À partir de là, plus rien à faire : Copilot exécutera votre prompt tout seul, à chaque échéance.",
        "Quelques exemples concrets\nC'est là que ça devient vraiment puissant :\n➞ Tous les matins à 8h : « Résume mes emails prioritaires reçus depuis hier et indique les actions à réaliser aujourd'hui. »\n➞ Chaque lundi : « Analyse mon agenda de la semaine, identifie les réunions importantes et propose mes 5 priorités. »\n➞ Tous les vendredis : « Résume les échanges concernant le projet Copilot Studio et liste les actions ouvertes. »\n➞ Chaque mois : « Prépare un rapport sur mes principaux clients en combinant réunions, emails et documents récents. »",
        "Pourquoi c'est un vrai changement d'habitude\nAvant, l'utilisateur devait lancer le prompt lui-même, et les résultats dépendaient de son initiative (donc parfois, on oublie). Avec la planification, le prompt s'exécute automatiquement, le contexte Microsoft 365 est actualisé à chaque exécution (vos derniers emails, réunions et documents sont pris en compte), et le résultat vous est envoyé directement dans Copilot et/ou par notification selon le paramétrage disponible.",
        "Ce que je retiendrais\nOn passe d'un Copilot que l'on sollicite à un Copilot qui anticipe. C'est le petit basculement qui change beaucoup : vos synthèses arrivent au bon moment, sans effort, avec un contexte toujours frais. Parfait pour un rituel du matin, un point hebdo ou un reporting mensuel que vous ne voulez plus jamais oublier.",
      ],
      en: [
        "The idea: a prompt that runs on its own\nScheduling a recurring prompt is a recent Copilot feature that automatically runs a prompt at a defined frequency (daily, weekly, monthly…) and delivers the result without you relaunching it manually. Simply put: you write your request once, you say when to repeat it, and Copilot handles the rest, in the background.",
        "Step 1: write and run your prompt\nStart with a normal prompt, the one you'd like to receive regularly (for example « Give me the week's news about Contoso that made the press headlines »). Hover over your prompt: a bar of icons appears below it. Click the clock icon, that's the one that opens scheduling.",
        "Step 2: set the frequency in « Create a schedule »\nThe « Create a schedule » window opens with your prompt already prefilled. You then define:\n➞ Starts: the date and time of the first run (e.g. 07/15/2026 at 09:30 PM).\n➞ Every: the frequency (Week, Day, Month…) and, for a weekly repeat, the specific days (M, T, W, T, F…).\n➞ Until: an end date, so it doesn't run forever.\nA summary sentence confirms it all: « Repeat this prompt every week on Monday… Friday at 9:30 PM until Jul 29, 2026 ».",
        "Step 3: choose how to be notified, then save\nCheck « Receive an email when responses are ready » to get an email as soon as the result is ready, then click « Save ». From there, nothing more to do: Copilot will run your prompt on its own, at each due time.",
        "A few concrete examples\nThis is where it gets really powerful:\n➞ Every morning at 8am: « Summarize my priority emails received since yesterday and list the actions to take today. »\n➞ Every Monday: « Analyze my week's calendar, identify the important meetings and propose my top 5 priorities. »\n➞ Every Friday: « Summarize the exchanges about the Copilot Studio project and list the open actions. »\n➞ Every month: « Prepare a report on my main clients combining recent meetings, emails and documents. »",
        "Why it's a real habit shift\nBefore, the user had to launch the prompt themselves, and results depended on their initiative (so sometimes, you forget). With scheduling, the prompt runs automatically, the Microsoft 365 context is refreshed at each run (your latest emails, meetings and documents are taken into account), and the result is sent straight to you in Copilot and/or via notification depending on the available settings.",
        "What I'd keep in mind\nWe move from a Copilot you call on to a Copilot that anticipates. That small shift changes a lot: your summaries arrive at the right moment, effortlessly, with an always-fresh context. Perfect for a morning ritual, a weekly check-in or a monthly report you never want to forget again.",
      ],
    },
    stepImages: [
      null,
      "/articles/prompt-recurrent-icone-horloge.png",
      "/articles/prompt-recurrent-create-schedule.png",
      null,
      null,
      null,
      null,
    ],
    imageWidth: "md",
    prompt: {
      fr: "Résume mes emails prioritaires reçus depuis hier et indique les actions à réaliser aujourd'hui.",
      en: "Summarize my priority emails received since yesterday and list the actions to take today.",
    },
    tags: ["prompts", "automatisation", "planification", "productivité", "récurrent", "adoption"],
  },
  {
    slug: "schedule-with-copilot-outlook",
    section: "m365",
    audience: ["user"],
    product: "outlook",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR"],
    level: "beginner",
    icon: "/outlook.png",
    date: "2026-07-14",
    isNew: true,
    trending: true,
    readMinutes: 4,
    title: {
      fr: "Schedule with Copilot : d'un fil d'emails à une réunion structurée",
      en: "Schedule with Copilot: from an email thread to a structured meeting",
    },
    summary: {
      fr: "Schedule with Copilot dans Outlook transforme automatiquement un échange d'emails en réunion. Copilot analyse le contexte du fil et aide à créer une réunion avec les bonnes personnes, un créneau adapté et une première proposition d'ordre du jour.",
      en: "Schedule with Copilot in Outlook automatically turns an email exchange into a meeting. Copilot analyzes the thread's context and helps create a meeting with the right people, a suitable time slot and a first draft agenda.",
    },
    steps: {
      fr: [
        "Le principe : l'email qui devient réunion\nSchedule with Copilot dans Outlook est une fonctionnalité qui permet de transformer automatiquement un échange d'emails en réunion. Pour l'expliquer simplement : Schedule with Copilot analyse le contexte d'un email et aide à créer une réunion avec les bonnes personnes, un créneau adapté et une première proposition d'ordre du jour.",
        "Où la trouver dans Outlook\nDepuis un email, ouvrez le menu « … » (plus d'actions) dans la barre d'outils. Sous la section « Respond », cliquez sur « Schedule with Copilot ». L'option apparaît directement au niveau du message : pas besoin de recopier quoi que ce soit, Copilot part du fil que vous avez sous les yeux.",
        "Ce que fait Copilot\nÀ partir du fil d'emails, Copilot peut :\n➞ Identifier les participants concernés.\n➞ Proposer un titre de réunion.\n➞ Rechercher des disponibilités.\n➞ Suggérer un créneau.\n➞ Générer un ordre du jour basé sur la conversation.\n➞ Créer l'invitation Teams prête à être envoyée.\nSur la capture, on voit le résultat : les participants du fil sont repris automatiquement, un titre est proposé (« Thunderbolt E-Bike Launch Strategy Planning »), un créneau est positionné, la réunion Teams est activée et un agenda est généré à partir des sujets évoqués dans les emails.",
        "Cas d'usage concret\nImaginons un échange de 15 emails sur un projet VINCI. Au lieu de dire « On devrait se faire une réunion la semaine prochaine… » et de relancer tout le monde, vous cliquez sur Schedule with Copilot. Copilot récupère les participants du fil, propose un créneau commun, génère une invitation Teams et crée un agenda à partir des sujets évoqués dans les emails. En quelques clics, la discussion informelle devient une réunion cadrée.",
        "Ce que je retiendrais\nLes bénéfices concrets à garder en tête :\n➞ Moins d'allers-retours pour trouver une date.\n➞ Agenda généré automatiquement.\n➞ Exploite le contexte du fil d'emails.\n➞ Accélère l'organisation des réunions.\n➞ Particulièrement utile lorsqu'un échange email devient trop long et nécessite une discussion en direct.",
      ],
      en: [
        "The idea: the email that becomes a meeting\nSchedule with Copilot in Outlook is a feature that automatically turns an email exchange into a meeting. To put it simply: Schedule with Copilot analyzes an email's context and helps create a meeting with the right people, a suitable time slot and a first draft agenda.",
        "Where to find it in Outlook\nFrom an email, open the « … » menu (more actions) in the toolbar. Under the « Respond » section, click « Schedule with Copilot ». The option appears right at the message level: no need to copy anything, Copilot starts from the thread in front of you.",
        "What Copilot does\nFrom the email thread, Copilot can:\n➞ Identify the relevant participants.\n➞ Propose a meeting title.\n➞ Look for availability.\n➞ Suggest a time slot.\n➞ Generate an agenda based on the conversation.\n➞ Create the Teams invite ready to send.\nIn the screenshot, you can see the result: the thread's participants are pulled in automatically, a title is proposed (« Thunderbolt E-Bike Launch Strategy Planning »), a slot is set, the Teams meeting is turned on and an agenda is generated from the topics discussed in the emails.",
        "Concrete use case\nImagine a 15-email exchange about a VINCI project. Instead of saying « We should have a meeting next week… » and chasing everyone, you click Schedule with Copilot. Copilot pulls the thread's participants, proposes a common slot, generates a Teams invite and creates an agenda from the topics raised in the emails. In a few clicks, the informal discussion becomes a framed meeting.",
        "What I'd keep in mind\nThe concrete benefits to remember:\n➞ Fewer back-and-forths to find a date.\n➞ Agenda generated automatically.\n➞ Leverages the email thread's context.\n➞ Speeds up meeting organization.\n➞ Especially useful when an email exchange gets too long and needs a live discussion.",
      ],
    },
    stepImages: [
      null,
      "/articles/schedule-with-copilot-outlook.png",
      null,
      null,
      null,
    ],
    tags: ["outlook", "réunion", "planification", "teams", "agenda", "productivité"],
  },
  {
    slug: "enregistrer-un-prompt-copilot",
    section: "m365",
    extraSections: ["chat"],
    audience: ["user"],
    product: "general",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR"],
    level: "beginner",
    icon: "/copilot.png",
    date: "2026-07-14",
    isNew: true,
    trending: true,
    readMinutes: 4,
    title: {
      fr: "Enregistrer un prompt pour le réutiliser en un clic",
      en: "Save a prompt to reuse it in one click",
    },
    summary: {
      fr: "Enregistrer un prompt permet de sauvegarder une consigne que vous utilisez régulièrement pour la retrouver en un clic, sans avoir à la réécrire. Disponible avec ou sans licence Copilot, c'est le réflexe qui fait gagner du temps et standardise les usages.",
      en: "Saving a prompt lets you store an instruction you use regularly so you can find it in one click, without rewriting it. Available with or without a Copilot license, it's the habit that saves time and standardizes usage.",
    },
    steps: {
      fr: [
        "Le principe : vos modèles de demandes\nEnregistrer un prompt permet de sauvegarder une consigne que vous utilisez régulièrement pour la retrouver en un clic sans avoir à la réécrire. L'image parlante pour un atelier : les prompts enregistrés sont l'équivalent de vos modèles personnels, ils permettent de capitaliser sur les meilleures demandes et de les réutiliser à l'infini. Bonne nouvelle, c'est disponible avec ou sans licence Copilot.",
        "Rédigez et « jouez » votre prompt\nCommencez normalement : écrivez votre prompt dans Copilot et lancez-le (par exemple « Quels sont les cas d'usage les plus pertinents pour mon profil ? »). C'est à partir d'un prompt réellement utilisé que vous allez pouvoir le sauvegarder pour la prochaine fois.",
        "Cliquez sur « Enregistrer la requête » au survol de votre prompt\nPassez la souris sur votre prompt : une barre d'icônes apparaît juste en dessous. Cliquez sur l'icône en forme de marque-page (« Save prompt »). C'est le geste qui déclenche la sauvegarde.",
        "Enregistrez votre prompt\nUne fenêtre « Save this prompt? » s'ouvre. Donnez-lui un titre clair et parlant (ex. « Cas d'usage pour mon profil »), vérifiez le texte du prompt, puis cliquez sur « Save ». Un bon titre, c'est ce qui vous permettra de le retrouver en un coup d'œil plus tard.",
        "Accédez à vos prompts via le Prompt Lab\nPour retrouver vos prompts, repérez les invites suggérées sous le champ de saisie (« Suggested », « Catch Up », « Inbox Triage », « Meeting Prep »…) et cliquez sur le bouton « … » à droite. Le Prompt Lab s'ouvre : dans la colonne de gauche, sélectionnez « Your saved prompts » pour afficher tous vos prompts enregistrés.",
        "Cliquez sur le prompt à utiliser\nDans « Your saved prompts », vos consignes sauvegardées sont listées avec leur titre. Un clic sur celui qui vous intéresse et il se recharge directement, prêt à être relancé. Plus besoin de le réécrire ni de vous souvenir de la formulation exacte.",
        "Exemples concrets\nQuelques prompts qui méritent d'être enregistrés une fois pour toutes :\n➞ Mon résumé quotidien des emails importants.\n➞ Mon compte-rendu de réunion standard.\n➞ Mon analyse hebdomadaire des priorités.\n➞ Mon aide à la préparation d'un comité de direction.\n➞ Mon générateur de compte-rendu client.",
        "La valeur métier\nAu lieu de saisir « Analyse les emails reçus aujourd'hui, identifie les urgences, les demandes clients et propose une liste de priorités. » à chaque fois, l'utilisateur enregistre ce prompt une seule fois et le relance quand il en a besoin. Le gain est immédiat et se répète chaque jour.",
        "Ce qu'il faut retenir\nQuatre bénéfices à garder en tête :\n➞ Gain de temps.\n➞ Standardisation des usages.\n➞ Partage possible au sein d'une équipe selon les fonctionnalités disponibles.\n➞ Très utile pour accélérer l'adoption de Copilot.",
      ],
      en: [
        "The idea: your request templates\nSaving a prompt lets you store an instruction you use regularly so you can find it in one click without rewriting it. The vivid image for a workshop: saved prompts are the equivalent of your personal templates, they let you capitalize on your best requests and reuse them endlessly. Good news, it's available with or without a Copilot license.",
        "Write and « run » your prompt\nStart normally: type your prompt in Copilot and run it (for example « What are the most relevant use cases for my profile? »). It's from an actually used prompt that you'll be able to save it for next time.",
        "Click « Save prompt » when hovering over your prompt\nHover over your prompt: a bar of icons appears just below it. Click the bookmark icon (« Save prompt »). That's the gesture that triggers the save.",
        "Save your prompt\nA « Save this prompt? » window opens. Give it a clear, meaningful title (e.g. « Use cases for my profile »), check the prompt text, then click « Save ». A good title is what will let you find it at a glance later.",
        "Access your prompts via the Prompt Lab\nTo find your prompts, look at the suggested prompts under the input box (« Suggested », « Catch Up », « Inbox Triage », « Meeting Prep »…) and click the « … » button on the right. The Prompt Lab opens: in the left column, select « Your saved prompts » to display all your saved prompts.",
        "Click the prompt to use\nIn « Your saved prompts », your saved instructions are listed with their title. One click on the one you want and it reloads directly, ready to run again. No need to rewrite it or remember the exact wording.",
        "Concrete examples\nA few prompts worth saving once and for all:\n➞ My daily summary of important emails.\n➞ My standard meeting recap.\n➞ My weekly priorities analysis.\n➞ My help preparing an executive committee.\n➞ My client recap generator.",
        "The business value\nInstead of typing « Analyze the emails received today, identify the urgent ones, the client requests and propose a list of priorities. » every time, the user saves this prompt once and runs it whenever needed. The gain is immediate and repeats every day.",
        "What to remember\nFour benefits to keep in mind:\n➞ Time savings.\n➞ Standardized usage.\n➞ Possible sharing within a team depending on available features.\n➞ Very useful to accelerate Copilot adoption.",
      ],
    },
    stepImages: [
      null,
      null,
      "/articles/enregistrer-prompt-save-icon.png",
      "/articles/enregistrer-prompt-dialog.png",
      "/articles/enregistrer-prompt-lab-acces.png",
      "/articles/enregistrer-prompt-lab-saved.png",
      null,
      null,
      null,
    ],
    imageWidth: "md",
    prompt: {
      fr: "Analyse les emails reçus aujourd'hui, identifie les urgences, les demandes clients et propose une liste de priorités.",
      en: "Analyze the emails received today, identify the urgent ones, the client requests and propose a list of priorities.",
    },
    tags: ["prompts", "prompt lab", "réutilisation", "productivité", "adoption", "sans licence"],
  },
  {
    slug: "ajouter-copilot-conversation-teams",
    section: "m365",
    extraSections: ["chat"],
    audience: ["user"],
    product: "teams",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR"],
    level: "beginner",
    icon: "/teams.png",
    date: "2026-07-14",
    isNew: true,
    trending: true,
    readMinutes: 4,
    title: {
      fr: "Ajouter Copilot dans une conversation Teams",
      en: "Add Copilot to a Teams conversation",
    },
    summary: {
      fr: "Ajouter Copilot dans une conversation Teams, c'est comme inviter un assistant virtuel dans le chat pour vous aider à résumer, analyser et exploiter les échanges en temps réel. Il travaille alors avec le contexte de cette discussion précise : idéal pour les conversations longues et les projets d'équipe.",
      en: "Adding Copilot to a Teams conversation is like inviting a virtual assistant into the chat to help you summarize, analyze and make the most of the exchanges in real time. It then works with the context of that specific discussion: ideal for long conversations and team projects.",
    },
    steps: {
      fr: [
        "Le principe : un assistant dans votre chat\nL'application Copilot dans Teams permet de poser des questions directement sur le contenu d'une conversation et d'obtenir de l'aide sans quitter le chat. La bonne image pour un atelier : ajouter Copilot dans une conversation Teams, c'est comme inviter un assistant virtuel dans le chat pour l'aider à résumer, analyser et exploiter les échanges en temps réel.",
        "Comment l'ajouter à une conversation\nDans votre conversation Teams, cliquez sur l'icône « Agents and bots » (l'icône d'application en haut à droite de la fenêtre de chat). Le volet « Agents and bots » s'ouvre sur la droite : sélectionnez « Copilot » parmi les applications proposées. C'est fait, Copilot rejoint la discussion et devient interrogeable directement dans le fil.",
        "La différence avec le Copilot général dans Teams\nC'est le point clé à retenir : lorsque Copilot est ajouté dans un chat, il travaille avec le contexte de cette conversation spécifique et peut analyser l'ensemble des messages visibles par les participants. Autrement dit, Copilot dans un chat = Copilot avec le contexte de ce chat. Là où le Copilot général répond de façon large, celui-ci raisonne sur ce qui se dit ici, dans cette discussion.",
        "Quelques exemples d'usage\nUne fois ajouté, adressez-vous à lui directement dans le fil (par exemple « Copilot, List the latest action items »). Il peut alors :\n➞ Résumer une longue conversation Teams.\n➞ Identifier les décisions prises.\n➞ Extraire les actions à réaliser.\n➞ Générer un compte rendu.\n➞ Retrouver rapidement une information partagée dans le chat.\n➞ Rédiger une réponse à partir du contexte de la discussion.\nSur la capture, on lui demande la liste des dernières actions : il cite qui a partagé quel fichier, repère la tâche en cours et propose même des suites (détailler les prochaines étapes, lister les risques, préparer un ordre du jour).",
        "Ce que je retiendrais pour un client\nTrois idées simples à garder en tête :\n➞ Copilot dans un chat = Copilot avec le contexte de ce chat.\n➞ Très utile pour les conversations longues ou les projets d'équipe.\n➞ Permet de retrouver rapidement décisions, actions et informations importantes.\nBref, plus besoin de faire défiler des centaines de messages : vous demandez, Copilot synthétise.",
      ],
      en: [
        "The idea: an assistant inside your chat\nThe Copilot app in Teams lets you ask questions directly about a conversation's content and get help without leaving the chat. The right image for a workshop: adding Copilot to a Teams conversation is like inviting a virtual assistant into the chat to help summarize, analyze and make the most of the exchanges in real time.",
        "How to add it to a conversation\nIn your Teams conversation, click the « Agents and bots » icon (the apps icon at the top right of the chat window). The « Agents and bots » pane opens on the right: pick « Copilot » among the offered apps. Done, Copilot joins the discussion and can be queried right inside the thread.",
        "The difference with the general Copilot in Teams\nThis is the key takeaway: when Copilot is added to a chat, it works with the context of that specific conversation and can analyze all the messages visible to the participants. In other words, Copilot in a chat = Copilot with the context of that chat. Where the general Copilot answers broadly, this one reasons over what's being said here, in this discussion.",
        "A few usage examples\nOnce added, address it directly in the thread (for example « Copilot, List the latest action items »). It can then:\n➞ Summarize a long Teams conversation.\n➞ Identify the decisions made.\n➞ Extract the action items to complete.\n➞ Generate a recap.\n➞ Quickly find a piece of info shared in the chat.\n➞ Draft a reply from the context of the discussion.\nIn the screenshot, we ask for the list of the latest action items: it names who shared which file, spots the task in progress and even suggests follow-ups (detail the next steps, list the risks, prepare an agenda).",
        "What I'd keep in mind for a client\nThree simple ideas to remember:\n➞ Copilot in a chat = Copilot with the context of that chat.\n➞ Very useful for long conversations or team projects.\n➞ Lets you quickly find decisions, actions and important information.\nIn short, no more scrolling through hundreds of messages: you ask, Copilot synthesizes.",
      ],
    },
    stepImages: [
      null,
      "/articles/copilot-teams-chat-ajout.png",
      null,
      "/articles/copilot-teams-chat-actions.png",
      null,
    ],
    prompt: {
      fr: "Copilot, résume cette conversation : liste les décisions prises, les actions à réaliser avec leur responsable, et les informations clés partagées dans le chat.",
      en: "Copilot, summarize this conversation: list the decisions made, the action items with their owner, and the key information shared in the chat.",
    },
    tags: ["teams", "copilot dans le chat", "contexte", "résumé", "actions", "collaboration"],
  },
  {
    slug: "ou-acceder-a-copilot",
    section: "m365",
    extraSections: ["chat"],
    audience: ["user"],
    product: "general",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR"],
    level: "beginner",
    icon: "/copilot.png",
    date: "2026-07-14",
    isNew: true,
    trending: true,
    readMinutes: 5,
    adoptionWeeks: [1],
    title: {
      fr: "Où accéder à Copilot ? Tous les points d'entrée",
      en: "Where can you access Copilot? All the entry points",
    },
    summary: {
      fr: "« Mais concrètement, je le trouve où, Copilot ? » C'est LA question qui revient tout le temps. Bonne nouvelle : il n'y a pas un seul endroit, mais une multitude. Voici tous les points d'accès, du web au mobile, en passant par Edge, Teams, l'application dédiée et bien sûr vos applications Microsoft 365.",
      en: "« But where do I actually find Copilot? » That's THE question that keeps coming back. Good news: there isn't one single place, but many. Here are all the entry points, from web to mobile, through Edge, Teams, the dedicated app and of course your Microsoft 365 apps.",
    },
    steps: {
      fr: [
        "Copilot est partout : le tour d'horizon\nLa première chose à comprendre, c'est qu'il n'existe pas UN Copilot mais plein de portes d'entrée vers le même assistant. Selon l'endroit où vous travaillez, vous y accédez différemment, mais c'est bien le même Copilot derrière, avec le même contexte de travail. La capture ci-dessus résume les principaux accès, on les passe en revue un par un.",
        "M365Copilot.com : l'accès web direct\nLe chemin le plus simple et le plus universel : ouvrez votre navigateur et rendez-vous sur m365copilot.com. Vous arrivez directement sur l'interface de conversation (« Hi, how can I help you? »), sans rien à installer. Idéal pour démarrer vite, depuis n'importe quel poste, ou pour prendre l'habitude d'avoir Copilot sous la main dans un onglet.",
        "Dans vos applications Microsoft 365\nCopilot vit directement à l'intérieur de vos outils du quotidien : Word, Excel, PowerPoint, et les autres. Vous le retrouvez sous forme d'un volet latéral qui comprend le document sur lequel vous travaillez. Pas besoin de copier-coller quoi que ce soit : il voit votre contenu et vous aide là où vous êtes, au moment où vous en avez besoin.",
        "La barre latérale du navigateur Edge\nSi vous utilisez Microsoft Edge, Copilot est déjà intégré dans la barre latérale du navigateur. Un clic sur l'icône et le volet s'ouvre à droite, prêt à vous aider sur la page que vous consultez ou sur vos sujets de travail. Pratique pour garder Copilot accessible pendant que vous naviguez, sans changer de fenêtre.",
        "Dans Microsoft Teams\nCopilot est aussi présent dans Teams, votre « everyday AI companion ». Vous le retrouvez dans le volet de gauche pour discuter, mais aussi au cœur de vos réunions et de vos conversations : résumer un échange, retrouver une décision, préparer un point. L'assistant est là où se passe la collaboration.",
        "Sur mobile : iOS et Android\nCopilot vous suit en déplacement grâce à l'application mobile, disponible sur iOS et Android. Vous scannez le QR code (ou vous cherchez « Microsoft 365 Copilot » sur votre store) et vous voilà avec l'assistant dans la poche, y compris la dictée pour lui parler plutôt qu'écrire. Parfait entre deux réunions ou dans les transports.",
        "L'application Microsoft 365 Copilot (bureau)\nIl existe aussi une application Microsoft 365 Copilot dédiée pour votre ordinateur. Elle regroupe la conversation, vos agents (Customer Support, Proposal Generation, Get Copilot agents…), vos invites suggérées et l'ensemble de l'expérience Copilot dans une fenêtre à part. Un accès direct, sans passer par le navigateur, pour ceux qui veulent Copilot toujours ouvert à côté de leurs applications.",
        "Et bien sûr, dans Outlook\nImpossible d'oublier Outlook, sans doute l'un des usages les plus utiles au quotidien. En haut, la barre « Search or ask Copilot » vous laisse chercher ou interroger Copilot directement. Et à droite, le volet Copilot (« Get more from your inbox ») vous propose de résumer un fil, de repérer les e-mails qui demandent une réponse urgente (« Which emails need urgent replies? ») ou de savoir ce que vous avez manqué (« What did I miss? »). Un vrai copilote pour votre boîte mail.",
        "Déployé et intégré à Microsoft 365\nAu-delà des points d'accès, l'important est de comprendre que Copilot est déployé et intégré au cœur de M365. Il agit sur vos e-mails (envoyer, répondre, rechercher), votre calendrier (créer et gérer des événements), Teams (publier, envoyer un message, rechercher), vos fichiers (Word, Excel, PowerPoint, PDF), vos contacts (Personnes), la recherche unifiée sur M365, mais aussi via des connecteurs vers vos outils métier (Salesforce, Workday, SAP, et plus) et la planification de tâches automatisées récurrentes. Ce n'est pas une application de plus : c'est une couche d'IA qui traverse tout votre environnement de travail.",
      ],
      en: [
        "Copilot is everywhere: the overview\nThe first thing to understand is that there isn't ONE Copilot but many doors into the same assistant. Depending on where you work, you reach it differently, but it's the same Copilot behind, with the same work context. The screenshot above sums up the main access points, and we'll go through them one by one.",
        "M365Copilot.com: the direct web access\nThe simplest and most universal route: open your browser and go to m365copilot.com. You land straight on the conversation interface (« Hi, how can I help you? »), with nothing to install. Ideal to get started fast, from any machine, or to build the habit of keeping Copilot handy in a tab.",
        "Inside your Microsoft 365 apps\nCopilot lives right inside your everyday tools: Word, Excel, PowerPoint and the rest. You find it as a side pane that understands the document you're working on. No need to copy and paste anything: it sees your content and helps you where you are, when you need it.",
        "The Edge browser sidebar\nIf you use Microsoft Edge, Copilot is already built into the browser sidebar. One click on the icon and the pane opens on the right, ready to help on the page you're viewing or on your work topics. Handy to keep Copilot accessible while you browse, without switching windows.",
        "In Microsoft Teams\nCopilot is also present in Teams, your « everyday AI companion ». You find it in the left pane to chat, but also at the heart of your meetings and conversations: summarize an exchange, recover a decision, prepare a check-in. The assistant is where collaboration happens.",
        "On mobile: iOS and Android\nCopilot follows you on the go with the mobile app, available on iOS and Android. Scan the QR code (or search « Microsoft 365 Copilot » in your store) and there you are with the assistant in your pocket, including dictation to talk to it rather than type. Perfect between two meetings or while commuting.",
        "The Microsoft 365 Copilot app (desktop)\nThere's also a dedicated Microsoft 365 Copilot application for your computer. It brings together the conversation, your agents (Customer Support, Proposal Generation, Get Copilot agents…), your suggested prompts and the whole Copilot experience in a separate window. A direct access, without going through the browser, for those who want Copilot always open next to their apps.",
        "And of course, in Outlook\nImpossible to forget Outlook, probably one of the most useful everyday uses. At the top, the « Search or ask Copilot » bar lets you search or ask Copilot directly. And on the right, the Copilot pane (« Get more from your inbox ») offers to summarize a thread, spot the emails needing an urgent reply (« Which emails need urgent replies? ») or catch up on what you missed (« What did I miss? »). A real copilot for your mailbox.",
        "Deployed and integrated into Microsoft 365\nBeyond the access points, the key is to understand that Copilot is deployed and integrated at the core of M365. It acts on your emails (send, reply, search), your calendar (create and manage events), Teams (publish, send a message, search), your files (Word, Excel, PowerPoint, PDF), your contacts (People), unified M365 search, but also through connectors to your business tools (Salesforce, Workday, SAP, and more) and the scheduling of recurring automated tasks. It's not just one more app: it's an AI layer that runs across your entire work environment.",
      ],
    },
    stepImages: [
      "/articles/acces-copilot-overview.png",
      null,
      null,
      null,
      null,
      null,
      null,
      "/articles/acces-copilot-outlook.png",
      "/articles/acces-copilot-integration-m365.png",
    ],
    tags: ["accès", "points d'entrée", "prise en main", "outlook", "teams", "edge", "mobile"],
  },
  {
    slug: "interface-copilot-avec-licence",
    section: "m365",
    extraSections: ["chat"],
    audience: ["user"],
    product: "general",
    roles: ["Manager", "Consultant", "Sales", "Marketing", "HR"],
    level: "beginner",
    icon: "/copilot.png",
    date: "2026-07-14",
    isNew: true,
    trending: true,
    readMinutes: 6,
    adoptionWeeks: [1, 4],
    title: {
      fr: "Faire le tour de l'interface Microsoft 365 Copilot",
      en: "A guided tour of the Microsoft 365 Copilot interface",
    },
    summary: {
      fr: "On ouvre Copilot, on voit un champ de saisie, et on ne se doute pas de tout ce qui se cache autour. Voici une visite guidée, bouton par bouton, de l'application Microsoft 365 Copilot avec licence : les deux espaces Chat et Cowork, le sélecteur de modèle, Work IQ, la Library, les Notebooks et tout le reste.",
      en: "You open Copilot, you see a text box, and you have no idea what's hiding all around it. Here's a guided tour, button by button, of the licensed Microsoft 365 Copilot app: the two Chat and Cowork spaces, the model picker, Work IQ, the Library, Notebooks and everything else.",
    },
    steps: {
      fr: [
        "Deux espaces à connaître : Chat et Cowork\nTout en haut à gauche, deux onglets cohabitent. « Chat », c'est la conversation classique, celle que vous utilisez au quotidien pour poser vos questions. « Cowork », c'est l'espace où Copilot travaille sur des tâches plus longues et multi-étapes à vos côtés (j'y reviens plus bas, il est particulièrement intéressant si vous êtes en PAYGO). Gardez aussi un œil sur l'interrupteur « New design » en haut à droite : Microsoft déploie progressivement la nouvelle interface, ne soyez pas surpris si votre écran bouge un peu.",
        "Le volet de gauche : votre poste de commande\nToute la navigation se joue ici :\n➞ New chat : démarre une nouvelle conversation, l'ardoise propre.\n➞ Search : une recherche universelle optimisée par l'IA à l'échelle de votre organisation, pour retrouver un document, un échange ou une info sans savoir où elle se trouve.\n➞ Library : votre bibliothèque de contenus créés avec Copilot (j'y reviens en détail).\n➞ Notebooks : des espaces de travail thématiques où Copilot raisonne uniquement sur les sources que vous y déposez (détaillé plus bas aussi).\n➞ Agents : accédez aux agents de votre entreprise et créez vos propres agents pour répondre à vos besoins métier. Juste en dessous, la section « Pinned » épingle vos agents favoris (Researcher, Analyst, Word…) pour les lancer en un clic.",
        "Choisir le modèle et le mode de réflexion\nEn haut de la conversation, à côté de « Work IQ », se cache un petit sélecteur (souvent réglé sur « Auto »). C'est lui qui décide de la puissance mobilisée :\n➞ Auto : Copilot choisit tout seul le temps de réflexion et le modèle le plus adapté. Le réglage le plus confortable au quotidien.\n➞ Rapide : une réponse immédiate, idéale pour les questions simples.\n➞ Réflexion approfondie : Copilot prend plus de temps pour raisonner, parfait pour une analyse ou un texte exigeant.\n➞ Le modèle lui-même : vous pouvez basculer entre GPT-5 (OpenAI) et Claude (Anthropic). Deux moteurs, deux styles, à vous de voir lequel vous parle le plus selon la tâche.",
        "Work IQ : le contexte de votre travail\nLe bouton « Work IQ » n'est pas un gadget. Il analyse vos modes de travail et fournit à Copilot des recommandations d'usage de l'IA adaptées à votre contexte. En clair, c'est ce qui permet à Copilot de comprendre votre organisation, vos documents et vos habitudes, pour des réponses ancrées dans votre réalité plutôt que génériques.",
        "La zone de saisie : bien plus qu'un champ de texte\nC'est ici que tout commence, mais regardez les icônes autour :\n➞ Le « + » (Ajouter du contenu) : téléversez des fichiers ou des images pour que Copilot travaille dessus. Un contrat, un tableau, une capture, glissez-le et posez votre question.\n➞ Le micro (Dictée) : parlez plutôt que d'écrire, pratique quand vous avez beaucoup à dire ou les mains occupées.\n➞ Le mode Vocal : pour échanger avec Copilot à l'oral, comme une vraie conversation.",
        "Invites suggérées et Galerie d'invites\nJuste sous le champ de saisie, des invites suggérées vous donnent des points de départ (« Catch Up », « Inbox Triage », « Meeting Prep »…). Pas besoin de réfléchir à la formulation, vous cliquez et vous partez. Le bouton « … » ouvre la Galerie d'invites Copilot complète, avec vos invites enregistrées et celles partagées par votre équipe. Un vrai gain de temps pour capitaliser sur les bons prompts.",
        "Créer : images, vidéos et documents\nEn haut à gauche, l'icône en damier (le « gaufrier », intitulée « Applications & more » ou « Créer ») ouvre l'atelier de création : générez des images, des vidéos et des documents directement depuis Copilot. C'est aussi par là que vous retrouvez l'ensemble des applications et agents disponibles.",
        "Conversation temporaire et historique\nBesoin de repartir de zéro sans polluer votre historique ? La conversation temporaire efface l'échange précédent et en démarre un nouveau, sans le conserver. À l'inverse, tout en bas du volet de gauche, l'historique des conversations (« Chats ») garde la trace de vos échanges passés pour les reprendre quand vous voulez.",
        "Zoom sur Cowork (très utile en PAYGO)\nL'onglet « Cowork » mérite qu'on s'y attarde, surtout si vous êtes en consommation à l'usage (PAYGO). Là où le Chat répond à une question, Cowork prend en charge des tâches plus ambitieuses et exécute plusieurs étapes pour vous : préparer un livrable, croiser des sources, dérouler un raisonnement long. C'est l'endroit où Copilot passe du rôle d'assistant qui répond à celui de collègue qui produit. Un réflexe à prendre dès que la demande dépasse la simple question-réponse.",
        "Zoom sur Library et Notebooks\nDeux entrées du volet gauche qu'on oublie trop souvent :\n➞ Library : c'est votre bibliothèque personnelle de créations Copilot (images, documents, pages générées). Au lieu de recréer, vous y retrouvez et réutilisez ce que vous avez déjà produit. Le fameux « ne repartez jamais de zéro ».\n➞ Notebooks (ou « Blocs-notes » en français) : des espaces dédiés à un sujet précis, dans lesquels vous rassemblez vos sources (pages web, fichiers Word, Excel, PowerPoint, PDF, e-mails). Copilot raisonne alors uniquement sur ce périmètre, génère cartes mentales et guides d'étude, et le notebook se partage avec vos collègues. Parfait pour un dossier, un projet ou une veille.",
      ],
      en: [
        "Two spaces to know: Chat and Cowork\nAt the very top left, two tabs sit side by side. « Chat » is the classic conversation, the one you use daily to ask your questions. « Cowork » is where Copilot works alongside you on longer, multi-step tasks (more on that below, it's especially interesting if you're on PAYGO). Also keep an eye on the « New design » switch at the top right: Microsoft is rolling out the new interface gradually, so don't be surprised if your screen shifts a little.",
        "The left pane: your command post\nAll navigation happens here:\n➞ New chat: starts a fresh conversation, a clean slate.\n➞ Search: an AI-powered universal search across your organization, to find a document, an exchange or a piece of info without knowing where it lives.\n➞ Library: your library of content created with Copilot (details below).\n➞ Notebooks: topic-based workspaces where Copilot reasons only over the sources you drop in (also detailed below).\n➞ Agents: access your company's agents and build your own to match your business needs. Just below, the « Pinned » section keeps your favorite agents (Researcher, Analyst, Word…) one click away.",
        "Choosing the model and the thinking mode\nAt the top of the conversation, next to « Work IQ », there's a small picker (often set to « Auto »). It decides how much power is used:\n➞ Auto: Copilot picks the thinking time and the best-fit model on its own. The most comfortable everyday setting.\n➞ Quick: an immediate answer, ideal for simple questions.\n➞ Think deeper: Copilot takes more time to reason, perfect for a demanding analysis or piece of writing.\n➞ The model itself: you can switch between GPT-5 (OpenAI) and Claude (Anthropic). Two engines, two styles, up to you which one fits the task best.",
        "Work IQ: the context of your work\nThe « Work IQ » button is no gimmick. It analyzes your ways of working and gives Copilot AI usage recommendations tailored to your context. In short, it's what lets Copilot understand your organization, your documents and your habits, for answers grounded in your reality rather than generic ones.",
        "The input area: far more than a text box\nThis is where it all begins, but look at the icons around it:\n➞ The « + » (Add content): upload files or images for Copilot to work on. A contract, a spreadsheet, a screenshot, drop it in and ask your question.\n➞ The mic (Dictation): speak instead of typing, handy when you have a lot to say or your hands are busy.\n➞ Voice mode: talk with Copilot out loud, like a real conversation.",
        "Suggested prompts and the prompt gallery\nRight below the input box, suggested prompts give you starting points (« Catch Up », « Inbox Triage », « Meeting Prep »…). No need to think about wording, you click and you're off. The « … » button opens the full Copilot prompt gallery, with your saved prompts and those shared by your team. A real time-saver to build on good prompts.",
        "Create: images, videos and documents\nAt the top left, the grid icon (the « waffle », labeled « Applications & more » or « Create ») opens the creation studio: generate images, videos and documents straight from Copilot. It's also where you find all available apps and agents.",
        "Temporary conversation and history\nNeed to start over without cluttering your history? The temporary conversation clears the previous exchange and starts a new one without keeping it. Conversely, at the bottom of the left pane, the conversation history (« Chats ») keeps track of your past exchanges so you can pick them back up whenever you want.",
        "A closer look at Cowork (very useful on PAYGO)\nThe « Cowork » tab deserves attention, especially if you're on pay-as-you-go (PAYGO). Where Chat answers a question, Cowork takes on more ambitious tasks and runs several steps for you: preparing a deliverable, cross-referencing sources, unfolding a long line of reasoning. It's where Copilot shifts from an assistant that replies to a colleague that produces. A good reflex to adopt as soon as the request goes beyond a simple question and answer.",
        "A closer look at Library and Notebooks\nTwo left-pane entries too often overlooked:\n➞ Library: your personal library of Copilot creations (images, documents, generated pages). Instead of recreating, you find and reuse what you've already produced. The famous « never start from scratch ».\n➞ Notebooks (« Blocs-notes » in French): spaces dedicated to one specific topic, where you gather your sources (web pages, Word, Excel, PowerPoint, PDF files, emails). Copilot then reasons only over that scope, generates mind maps and study guides, and the notebook can be shared with your colleagues. Perfect for a case, a project or a watch.",
      ],
    },
    stepImages: [
      "/articles/interface-copilot-licence-overview.png",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    tags: ["interface", "prise en main", "copilot chat", "cowork", "notebooks", "library", "avec licence"],
  },
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
        "Choisissez votre kit dans la liste : Personnel, Partagé ou Officiel. Le bouton « Gérer les kits » permet d'en créer ou d'en modifier un.",
        "Copilot génère les slides à partir de votre template et applique automatiquement couleurs, polices, images et voix de marque.",
        "💡 Bon à savoir : Copilot s'appuie en priorité sur les slides d'exemple de votre template. Plus votre modèle contient de dispositions variées (Titre, Sommaire, Contenu, Data-viz, Q&R, Conclusion…), plus le résultat est fidèle à votre marque.",
      ],
      en: [
        "Open the Copilot pane in PowerPoint (Copilot button in the Home ribbon), on Windows, Mac or the web, when creating or formatting a presentation.",
        "Start “Create a presentation” (or “Format”), then open the “+” menu: the pane offers the Select brand option.",
        "Pick your kit from the list : Personal, Shared or Official. The “Manage brand kits” button lets you create or edit one.",
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
    extraSections: ["m365"],
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
        "Ce qui est disponible aujourd'hui :\n➞ Auto : Copilot décide du temps de réflexion (et du modèle le plus adapté).\n➞ Quick response : réponse immédiate.\n➞ Think deeper : réflexion plus longue pour de meilleures réponses.\n➞ Opus : Claude (Anthropic).\n➞ GPT (OpenAI) → GPT 5.6 Think deeper, GPT 5.5 Quick response, GPT 5.5 Think deeper.",
        "✨ Ce qui change concrètement :\n➞ GPT-5.6 remplace GPT-5.5 comme modèle par défaut dans Copilot Chat.\n➞ Raisonnement renforcé, notamment pour les tâches agentiques et les workflows multi-étapes : Copilot gère des scénarios plus complexes avec davantage d'efficacité.\n➞ Intégration native avec Work IQ : combine les capacités de raisonnement du modèle avec les données de travail de votre organisation.\n➞ Le résultat : une amélioration tangible de la qualité du travail quotidien dans Word, Excel et PowerPoint.",
        "💻 Dans les applications :\n➞ Copilot Cowork : exécute les tâches plus efficacement et produit des résultats plus complets et directement exploitables.\n➞ Excel : analyse des problématiques plus complexes et transforme plus rapidement une demande en résultat, avec moins d'interventions manuelles.\n➞ Word : aide à transformer des idées en documents plus complets, mieux structurés et plus fluides, tout en améliorant la qualité rédactionnelle.\n➞ PowerPoint : génère des présentations plus riches, avec un contenu de meilleure qualité, un meilleur équilibre visuel et une plus grande flexibilité dans les styles.",
        "📅 Disponibilité :\n➞ Le déploiement de GPT-5.6 est actuellement en cours dans l'ensemble des applications Microsoft 365 Copilot.\n➞ Copilot pourra utiliser automatiquement GPT-5.6 lorsqu'il est le modèle le plus adapté à la tâche, en devenant le modèle par défaut.",
      ],
      en: [
        "Where do you pick the model? In Copilot Chat, at the top of the conversation, click the mode selector (next to “Work IQ”). This is where you switch between reasoning modes and models.",
        "What's available today:\n➞ Auto: Copilot decides how long to think (and the best-fit model).\n➞ Quick response: answers right away.\n➞ Think deeper: thinks longer for better answers.\n➞ Opus : Claude (Anthropic).\n➞ GPT (OpenAI) → GPT 5.6 Think deeper, GPT 5.5 Quick response, GPT 5.5 Think deeper.",
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
        "Ajoutez vos sources via « Add » : basculez sur l'onglet « References » pour piocher dans vos Chats, Files, Meetings, Emails et Sites, ou « Copilot Chats » pour réutiliser d'anciennes conversations.",
        "Recherchez et sélectionnez chaque source à suivre (documents, fils d'e-mails, notes de réunion, pages SharePoint). Le notebook devient le périmètre de raisonnement de Copilot.",
        "Posez vos questions dans le notebook : Copilot répond en s'appuyant UNIQUEMENT sur les sources ajoutées, parfait pour synthétiser votre veille, comparer des versions ou générer un récapitulatif.",
        "Enrichissez le notebook au fil de l'eau : chaque nouvelle source ou réunion ajoutée met à jour le contexte. Besoin d'aller plus loin ? « Open in OneNote » exporte le contenu.",
      ],
      en: [
        "In Microsoft 365 Copilot, open the “Notebooks” tab in the left pane. You'll see your existing notebooks (personal “Just you” or “Shared”).",
        "Click “+” to create a notebook, give it a clear name tied to your topic (e.g. “Microsoft Copilot 2026 news”), then confirm.",
        "Add your sources via “Add”: switch to the “References” tab to pull from your Chats, Files, Meetings, Emails and Sites, or “Copilot Chats” to reuse past conversations.",
        "Search and select each source to track (documents, email threads, meeting notes, SharePoint pages). The notebook becomes Copilot's reasoning scope.",
        "Ask your questions inside the notebook: Copilot answers based ONLY on the added sources, ideal to synthesize your watch, compare versions or generate a recap.",
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
        "Affinez la réponse en un clic grâce aux suggestions proposées, « Rends-la plus directe », « Ajoute des points critiques », « Inclue des détails spécifiques », puis relisez et envoyez.",
      ],
      en: [
        "Open Copilot Chat (Work mode) and ask for a summary: “Summarize my unread emails from the last 24 hours. Group by priority (urgent / to handle / FYI), show the sender and the action expected from me.” Copilot returns a digest sorted by priority (To handle, Information…) with, for each email, the sender, subject and expected action.",
        "Open the email you want to reply to: Copilot shows a summary at the top (Summary by Copilot) so you can get the context at a glance.",
        "In the Copilot pane, ask “Help me reply to this email”: Copilot drafts a clear, professional reply, ready to drop into the draft.",
        "Refine the reply in one click with the suggested chips, “Make it more direct”, “Add critical points”, “Include specific details”, then review and send.",
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
      fr: "Après une réunion, Teams et Copilot génèrent le récapitulatif complet : résumé, décisions, intervenants, que vous pouvez personnaliser, partager et même écouter.",
      en: "After a meeting, Teams and Copilot produce the full recap: summary, decisions, speakers, which you can customize, share and even listen to.",
    },
    steps: {
      fr: [
        "Ouvrez la réunion dans Teams › onglet Récapitulatif : vous y retrouvez l'enregistrement vidéo, la chronologie des intervenants et les fichiers partagés (transcription activée requise).",
        "Cliquez sur Résumé IA (ou demandez à Copilot « Résume la réunion et liste les décisions ») : Copilot génère un résumé structuré de la réunion, thème par thème, avec les décisions prises.",
        "Besoin d'un angle précis ? Choisissez Résumé personnalisé et un modèle comme « Résumé de l'intervenant » pour un récap ciblé, ou créez votre propre modèle.",
        "Partagez le récapitulatif : bouton Partager › ajoutez des destinataires. Ils reçoivent le lien et l'accès au récap directement dans Teams.",
        "Pressé ? Générez un Résumé audio : choisissez le style (Exécutif…) et la langue, et Copilot produit un récap audio/vidéo à écouter à la volée.",
      ],
      en: [
        "Open the meeting in Teams › Recap tab: you'll find the video recording, the speaker timeline and the shared files (transcription must be on).",
        "Click AI summary (or ask Copilot “Summarize the meeting and list the decisions”): Copilot generates a structured, topic-by-topic recap with the decisions taken.",
        "Need a specific angle? Pick Custom summary and a template such as “Speaker summary” for a targeted recap, or create your own template.",
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
        "Configurer les éléments du kit :\n➞ Logos : Logo principal, logos secondaires et variantes (couleur, blanc…).\n➞ Color : Couleurs officielles avec leurs codes HEX précis.\n➞ Fonts : Typographies (titres, corps), fichiers .ttf / .otf.\n➞ Images & Icons : Photos, graphiques et icônes approuvés, alignés au style de marque.\n➞ Templates : Modèles PowerPoint (.pptx) avec slides d'exemple représentatives.\n➞ Brand voice : Personnalité et ton de la marque.\n➞ Brand guidelines : Charte de marque au format PDF (extraction auto possible).\n➞ Style : Style d'images/icônes/illustrations (exemples ou description).",
        "💡 Astuce IA : en uploadant un template et une charte PDF, Copilot extrait automatiquement couleurs, polices et règles, vous n'avez plus qu'à relire et ajuster.",
        "Point information :\n➞ Kit Personnel / Partagé : vos modifications sont enregistrées automatiquement. Un kit Partagé se diffuse via le bouton Partager (choix des personnes au moment du partage).\n➞ Kit Officiel : le bouton Publish le rend visible à toute l'organisation, réservé aux Brand managers (délai d'activation ≤ 24 h après désignation par l'admin).",
      ],
      en: [
        "From the Microsoft 365 Copilot app, click Create in the left-hand menu.",
        "Click More…, then select Brand kits.",
        "Click + New Brand kit, name your kit, configure the elements, then Save / Publish.",
        "Configure the kit elements:\n➞ Logos: Primary logo, secondary logos and variants (color, white…).\n➞ Color: Official colors with their precise HEX codes.\n➞ Fonts: Typography (headings, body), .ttf / .otf files.\n➞ Images & Icons: Approved photos, graphics and icons, aligned to the brand style.\n➞ Templates: PowerPoint templates (.pptx) with representative example slides.\n➞ Brand voice: The brand's personality and tone.\n➞ Brand guidelines: Brand guidelines as a PDF (auto-extraction possible).\n➞ Style: Style of images/icons/illustrations (examples or description).",
        "💡 AI tip: by uploading a template and a PDF guideline, Copilot automatically extracts colors, fonts and rules, you just review and adjust.",
        "Information point:\n➞ Personal / Shared kit: your changes are saved automatically. A Shared kit is distributed via the Share button (pick the people when sharing).\n➞ Official kit: the Publish button makes it visible to the whole organization, reserved for Brand managers (activation ≤ 24 h after designation by the admin).",
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
        "Review and Publish › Done. Laissez Priority = 1 (priorité maximale avec une seule config ; « 0 » n'est pas assignable). Comptez jusqu'à 24 h de propagation, chaque modification relance le délai, évitez de retoucher pendant l'attente.",
        "Vérification : microsoft365.com › Create › More… › Brand kits. Pour un membre du groupe, le terme « Official » et le bouton « Publish » doivent apparaître.",
        "Dépannage : « Policy has been incorrectly configured » → mauvais type de groupe, scope ≠ Tenant ou e-mail erroné. « You do not have permission to publish » → compte owner mais pas membre, ou propagation < 24 h. Aucun « Official » → policy non Enabled, licence Copilot manquante, ou propagation en cours.",
      ],
      en: [
        "Prerequisites: a Microsoft 365 Copilot (Premium) license assigned to each future Brand Manager, and admin rights to create a group and configure config.office.com. Without the policy, no one sees the “Official” term or the “Publish” button.",
        "In admin.microsoft.com › Teams & groups › Active teams & groups, open the “Security groups” tab, then click “+ Add a mail-enabled security group”. ⚠️ A Team / M365 group, a plain security group or a distribution list will NOT work (you'll get “policy has been incorrectly configured”).",
        "Name the group (e.g. “Brand Managers”), add every account that will publish/edit as MEMBERS (owners do NOT get publish rights), then note the group's primary email address.",
        "In config.office.com › Customization › Policy Management, create or open a configuration with the scope “Apply to all users” (Tenant).",
        "Policies tab › search “Brand Manager” › open “Elevated role for enterprise brand managers”. Set Configuration setting to “Enabled” and paste the exact group email into “Security group email address”, then Apply.",
        "Review and Publish › Done. Leave Priority = 1 (highest priority with a single config; “0” isn't assignable). Allow up to 24 h of propagation, each change restarts the timer, so avoid re-editing while waiting.",
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
    date: "2026-07-12",
    readMinutes: 3,
    video: "/articles/analyse-excel.mp4",
    videoPoster: "/articles/analyse-excel-poster.jpg",
    videoStep: 1,
    title: {
      fr: "Analyser un tableau Excel en langage naturel",
      en: "Analyze an Excel table in plain language",
    },
    summary: {
      fr: "Copilot comprend le contexte de votre tableau et l'analyse en langage naturel, puis, si vous le laissez éditer, ajoute colonnes, dashboards et graphiques, dans un nouvel onglet si besoin.",
      en: "Copilot understands your table's context and analyzes it in plain language, then, if you let it edit, adds columns, dashboards and charts, on a new sheet if needed.",
    },
    steps: {
      fr: [
        "Ouvrez votre tableau dans Excel (ici, un suivi budgétaire Contoso) et lancez Copilot. Il lit et comprend le contexte : intitulés de colonnes, totaux, taux d'exécution… sans que vous ayez à tout réexpliquer.",
        "Collez votre demande et laissez Copilot analyser : il identifie les tendances, calcule les écarts et propose une visualisation adaptée.",
        "Pour qu'il modifie le classeur (nouvelle colonne d'écart vs objectif, mise en forme, graphique), passez en mode « Allow Editing » / « Edit with Copilot ». Il peut créer ces éléments dans un nouvel onglet pour ne pas toucher vos données d'origine.",
        "Besoin d'un vrai tableau de bord ? Demandez-le : Copilot assemble indicateurs clés et graphiques sur une feuille dédiée.",
        "Envie de comparer ? Vous pouvez jouer avec les modèles (GPT-5.6, etc.), mais le mode Auto est amplement suffisant pour ce type d'analyse.",
      ],
      en: [
        "Open your table in Excel (here, a Contoso budget tracker) and launch Copilot. It reads and understands the context: column headers, totals, execution rates, with no need to re-explain everything.",
        "Paste your request and let Copilot analyze: it surfaces trends, computes variances and suggests a fitting visualization.",
        "To have it edit the workbook (a variance-vs-target column, formatting, a chart), switch to “Allow Editing” / “Edit with Copilot”. It can create these on a new sheet so your original data stays untouched.",
        "Need a real dashboard? Just ask: Copilot assembles key metrics and charts on a dedicated sheet.",
        "Want to compare? You can play with models (GPT-5.6, etc.), but Auto mode is plenty for this kind of analysis.",
      ],
    },
    stepImages: [
      "/articles/excel-contoso-budget.png",
      null,
      null,
      null,
      null,
    ],
    imageWidth: "full",
    prompt: {
      fr: "Analyse ce tableau : identifie les 3 tendances majeures, ajoute une colonne d'écart vs objectif, et propose un graphique adapté. Termine par 3 recommandations.",
      en: "Analyze this table: surface the top 3 trends, add a variance-vs-target column, and suggest a fitting chart. End with 3 recommendations.",
    },
    info: {
      fr: "Deux modes à connaître : restez en « Allow Editing » (Edit with Copilot) si vous voulez que Copilot modifie le classeur (colonnes, graphiques, dashboards). Si vous voulez juste analyser, auditer ou discuter du document ouvert sans y toucher, préférez le mode « Chat Only ».",
      en: "Two modes to know: stay in “Allow Editing” (Edit with Copilot) when you want Copilot to change the workbook (columns, charts, dashboards). If you only want to analyze, audit or discuss the open document without touching it, prefer “Chat Only” mode.",
    },
    tags: ["excel", "analyse", "données", "reporting", "dashboard"],
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
      fr: "Avec Agent Builder, tout collaborateur crée son propre agent, sans code : décrivez-le en langage naturel, ajoutez vos instructions, activez les options (images, sources) ou partez d'un template prêt à l'emploi.",
      en: "With Agent Builder, anyone can create their own agent, no code: describe it in natural language, add your instructions, enable options (images, sources) or start from a ready-made template.",
    },
    steps: {
      fr: [
        "Accédez à Agent Builder depuis Copilot (m365copilot.com, l'app Teams ou l'app Microsoft 365 Copilot) : menu de gauche › Create › New agent.",
        "Créez par langage conversationnel : dans l'onglet Describe, Agent Builder vous accueille avec « Hi, I'm here to help you build an agent ». Décrivez en langage naturel ce que doit faire l'agent, il se construit automatiquement à partir de votre description.",
        "Passez sur l'onglet Configure pour rédiger les Instructions : nom, description, puis le rôle, le ton, les règles et les limites de l'agent. C'est la « fiche de cadrage » qui pilote son comportement.",
        "Réglez les options à disposition : choisissez les sources (sites web, SharePoint…), activez « Create images » pour que l'agent génère des visuels, ou « Create documents, charts and code » (Word/Excel/PowerPoint), et ajoutez des prompts de démarrage.",
        "Pas envie de partir de zéro ? Choisissez un Template : Agent Builder propose une bibliothèque prête à l'emploi (Plan My Day, Executive Briefing, Text Translator, Quiz Tutor…).",
        "Sélectionnez un template, personnalisez-le (instructions, sources, ton) et testez-le en direct dans l'aperçu avant de cliquer sur Create.",
        "💡 Conseil : en manque d'inspiration ? Lancez d'abord l'agent Idea Coach (gratuit, dans Copilot Chat) pour brainstormer le périmètre, le rôle et les cas d'usage de votre futur agent avant de le construire.",
      ],
      en: [
        "Open Agent Builder from Copilot (m365copilot.com, the Teams app or the Microsoft 365 Copilot app): left menu › Create › New agent.",
        "Create it through conversation: in the Describe tab, Agent Builder greets you with “Hi, I'm here to help you build an agent.” Describe in natural language what the agent should do, it builds itself from your description.",
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
    slug: "mise-en-place-copilot-dashboard",
    section: "m365",
    governance: true,
    audience: ["it"],
    product: "general",
    roles: ["Cloud Architect", "IT Admin"],
    level: "intermediate",
    icon: "/copilot-m365.png",
    date: "2026-07-13",
    isNew: true,
    readMinutes: 5,
    title: {
      fr: "Mise en place du suivi de l'usage Copilot avec Copilot Dashboard",
      en: "Set up Copilot usage tracking with the Copilot Dashboard",
    },
    summary: {
      fr: "Activez le Copilot Dashboard « sur étagère » en quelques clics dans le centre d'admin M365, vérifiez l'organigramme, puis passez au sur-mesure (rapports personnalisés, Power BI) seulement si besoin.",
      en: "Turn on the Copilot Dashboard “out of the box” in a few clicks from the M365 admin center, check your org chart, then move to custom reports and Power BI only if needed.",
    },
    steps: {
      fr: [
        "L'approche : commencer simple\nLe Copilot Dashboard (dans Viva Insights) est très bien documenté et permet des configurations avancées. Mais avant d'y plonger, faites simple : visez une activation rapide « sur étagère », observez ce que le dashboard remonte, et ne passez aux réglages avancés que si quelque chose manque.",
        "Activer le dashboard (accès utilisateurs)\nDans le centre d'admin Microsoft 365 : admin.microsoft.com › Settings (Paramètres) › Org settings › Viva › Viva Insights › section « Copilot dashboard in Microsoft 365 » › Access management › « Manage user access for Copilot Dashboard ». Ajoutez les utilisateurs ou groupes de sécurité (dirigeants, managers, sponsors adoption) qui pourront consulter le dashboard, puis validez.",
        "Bon à savoir : les réglages voisins\nAu même endroit, trois options utiles : « Turn Copilot Dashboard on or off » active ou coupe le dashboard pour toute l'organisation ; « Copilot Dashboard Auto Enablement » donne automatiquement l'accès aux nouveaux managers éligibles ; « Copilot Dashboard delegation » permet à un manager de déléguer sa vue à un assistant. Pour démarrer, l'accès de l'étape 2 + l'auto-enablement suffisent.",
        "Vérifier l'organigramme\nOuvrez le dashboard et regardez si vos équipes et leurs managers apparaissent correctement. C'est cet organigramme qui permet de filtrer les chiffres par équipe et par manager. S'il est absent ou incorrect, passez à l'étape suivante.",
        "Si besoin : importer vos données d'organisation\nQuand l'organigramme automatique est incomplet, importez un fichier de données d'organisation (qui rattache chaque personne à son manager, son entité et son site). Le dashboard peut alors afficher une segmentation fiable par équipe. À ne faire que si l'étape 4 a montré un problème.",
        "Exemple : le dashboard côté suivi d'usage\nUne fois activé, l'onglet Readiness donne l'essentiel en un coup d'œil : taux d'adoption Copilot (utilisateurs actifs M365 Copilot vs Copilot Chat vs reste de l'organisation), licences assignées et utilisées, et des recommandations concrètes pour lever les blocages (canaux de mise à jour non supportés, utilisateurs bloqués…). Les onglets Adoption, Impact et Learning complètent la vue.",
      ],
      en: [
        "The approach: start simple\nThe Copilot Dashboard (in Viva Insights) is well documented and supports advanced configuration. But before diving in, keep it simple: aim for a quick “out of the box” activation, watch what the dashboard surfaces, and only move to advanced settings if something is missing.",
        "Turn the dashboard on (user access)\nIn the Microsoft 365 admin center: admin.microsoft.com › Settings › Org settings › Viva › Viva Insights › “Copilot dashboard in Microsoft 365” section › Access management › “Manage user access for Copilot Dashboard”. Add the users or security groups (leaders, managers, adoption sponsors) who should view the dashboard, then confirm.",
        "Good to know: the neighbouring settings\nIn the same place, three useful options: “Turn Copilot Dashboard on or off” enables or disables the dashboard for the whole organization; “Copilot Dashboard Auto Enablement” automatically grants access to newly eligible managers; “Copilot Dashboard delegation” lets a manager delegate their view to an assistant. To start, the access from step 2 plus auto-enablement is enough.",
        "Check the org chart\nOpen the dashboard and see whether your teams and their managers show up correctly. This org chart is what lets you filter the numbers by team and by manager. If it's missing or wrong, move to the next step.",
        "If needed: upload your organizational data\nWhen the automatic org chart is incomplete, upload an organizational data file (mapping each person to their manager, entity and site). The dashboard can then show reliable per-team segmentation. Only do this if step 4 revealed a problem.",
        "Example: the dashboard on the usage side\nOnce enabled, the Readiness tab shows the essentials at a glance: Copilot adoption rate (active M365 Copilot users vs Copilot Chat vs the rest of the organization), licenses assigned and used, and concrete recommendations to remove blockers (unsupported update channels, blocked users…). The Adoption, Impact and Learning tabs round out the view.",
      ],
    },
    stepImages: [
      null,
      "/articles/copilot-dashboard-access.png",
      null,
      null,
      null,
      "/articles/copilot-dashboard-readiness.png",
    ],
    imageWidth: "full",
    info: {
      fr: "Commencez « sur étagère » : donnez l'accès, activez l'auto-enablement, et regardez ce que le dashboard remonte. N'importez vos données d'organisation que si l'organigramme est incomplet. Pour aller plus loin, vous pourrez ensuite bâtir des rapports personnalisés et des tableaux Power BI (Copilot Analytics). Réf. Learn : « Copilot Dashboard », « Manage settings » et « Copilot Analytics / Power BI ».",
      en: "Start “out of the box”: grant access, enable auto-enablement, and see what the dashboard surfaces. Only upload your organizational data if the org chart is incomplete. To go further, you can then build custom reports and Power BI dashboards (Copilot Analytics). Learn refs: “Copilot Dashboard”, “Manage settings” and “Copilot Analytics / Power BI”.",
    },
    links: [
      {
        label: {
          fr: "Copilot Dashboard « sur étagère » (Viva Insights)",
          en: "Copilot Dashboard out of the box (Viva Insights)",
        },
        url: "https://learn.microsoft.com/en-us/viva/insights/org-team-insights/copilot-dashboard",
      },
      {
        label: {
          fr: "Activer et gérer les paramètres du Copilot Dashboard",
          en: "Enable and manage Copilot Dashboard settings",
        },
        url: "https://learn.microsoft.com/en-us/viva/insights/advanced/admin/manage-settings-copilot-dashboard",
      },
      {
        label: {
          fr: "Importer les données d'organisation (organigramme)",
          en: "Upload organizational data (org chart)",
        },
        url: "https://learn.microsoft.com/en-us/viva/insights/advanced/admin/manage-settings-copilot-dashboard#upload-organizational-data-for-the-copilot-dashboard-and-agent-dashboard",
      },
      {
        label: {
          fr: "Données d'organisation dans Viva",
          en: "Organizational data in Viva",
        },
        url: "https://learn.microsoft.com/en-us/viva/organizational-data",
      },
      {
        label: {
          fr: "Rapports personnalisés et Power BI (Copilot Analytics)",
          en: "Custom reports and Power BI (Copilot Analytics)",
        },
        url: "https://learn.microsoft.com/en-us/viva/insights/copilot-analytics-introduction#copilot-analytics-pbi-reports",
      },
    ],
    tags: ["copilot dashboard", "viva insights", "admin", "activation", "IT"],
  },
  {
    slug: "gouvernance-securite-copilot",
    section: "m365",
    governance: true,
    audience: ["it"],
    product: "general",
    roles: ["Cloud Architect", "IT Admin"],
    level: "advanced",
    icon: "/copilot-m365.png",
    date: "2026-07-01",
    readMinutes: 5,
    title: {
      fr: "Suivre le déploiement de Copilot avec Copilot Dashboard",
      en: "Track your Copilot rollout with Copilot Dashboard",
    },
    summary: {
      fr: "Pour piloter l'adoption, le Copilot Dashboard (activable via Viva Insights) est le plus adapté : suivi de Copilot Chat et de Microsoft 365 Copilot, par application et de façon plus affinée que les rapports natifs.",
      en: "To steer adoption, the Copilot Dashboard (enabled via Viva Insights) is the best fit: track Copilot Chat and Microsoft 365 Copilot, per app and more granularly than the native reports.",
    },
    steps: {
      fr: [
        "Deux niveaux de visibilité\nMicrosoft propose plusieurs tableaux de bord. Le rapport d'usage du centre d'administration Microsoft 365 (admin.microsoft.com › Rapports › Utilisation) donne une vue rapide et gratuite du nombre d'utilisateurs actifs. Pour un vrai pilotage d'adoption, on passe au Copilot Dashboard.",
        "Le Copilot Dashboard (via Viva Insights)\nActivable via Viva Insights, c'est l'outil le plus adapté pour suivre l'adoption dans la durée. Il couvre à la fois Copilot Chat et Microsoft 365 Copilot, avec des indicateurs d'usage, de rétention et d'impact (temps potentiellement économisé) bien plus riches que les rapports natifs.",
        "Un suivi par application\nLe Copilot Dashboard détaille l'adoption application par application : Teams, Outlook, Word, Excel, PowerPoint… Vous voyez où Copilot est réellement utilisé, et où l'accompagnement doit être renforcé.",
        "Une analyse plus affinée\nSegmentez par équipe, région ou métier, comparez les cohortes (utilisateurs actifs vs licenciés inactifs) et identifiez vos champions comme les populations à relancer. C'est cette granularité qui transforme un simple reporting en plan d'adoption actionnable.",
        "Prérequis & bonnes pratiques\nCôté prérequis : licences Copilot assignées et Viva Insights activé pour publier le dashboard aux managers/sponsors. Rafraîchissez la lecture à intervalle régulier (mensuel), fixez des objectifs d'adoption par vague et croisez les chiffres avec les retours terrain.",
      ],
      en: [
        "Two levels of visibility\nMicrosoft offers several dashboards. The Microsoft 365 admin center usage report (admin.microsoft.com › Reports › Usage) gives a quick, free view of active user counts. For real adoption steering, step up to the Copilot Dashboard.",
        "The Copilot Dashboard (via Viva Insights)\nEnabled through Viva Insights, it's the best-suited tool to track adoption over time. It covers both Copilot Chat and Microsoft 365 Copilot, with usage, retention and impact metrics (potential time saved) far richer than the native reports.",
        "Per-app tracking\nThe Copilot Dashboard breaks adoption down app by app: Teams, Outlook, Word, Excel, PowerPoint… You see where Copilot is actually used, and where enablement needs a boost.",
        "More granular analysis\nSegment by team, region or role, compare cohorts (active users vs inactive licensed users) and spot your champions as well as the groups to re-engage. That granularity turns plain reporting into an actionable adoption plan.",
        "Prerequisites & best practices\nPrerequisites: Copilot licenses assigned and Viva Insights enabled to publish the dashboard to managers/sponsors. Review it on a regular cadence (monthly), set adoption targets per wave and cross-check the numbers with field feedback.",
      ],
    },
    prompt: {
      fr: "Aide-moi à bâtir un plan de suivi d'adoption de Microsoft 365 Copilot à partir du Copilot Dashboard (Viva Insights). Liste les indicateurs clés à suivre (usage, rétention, adoption par application, temps économisé), propose une segmentation utile (équipe, métier, cohortes actifs/inactifs) et une cadence de revue mensuelle avec des objectifs par vague.",
      en: "Help me build a Microsoft 365 Copilot adoption tracking plan based on the Copilot Dashboard (Viva Insights). List the key metrics to follow (usage, retention, per-app adoption, time saved), suggest a useful segmentation (team, role, active/inactive cohorts) and a monthly review cadence with per-wave targets.",
    },
    tags: ["copilot dashboard", "viva insights", "adoption", "reporting", "IT"],
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
        "Ouvrez Copilot Chat (l'icône Copilot dans Outlook ou sur Microsoft365.com), pas besoin de licence Copilot payante : il raisonne déjà sur le contenu de vos e-mails.",
        "Demandez-lui de balayer l'ensemble de votre boîte : « Parcours mes mails récents et repère ce qui attend une action ou une réponse de ma part ».",
        "Croisez avec l'agenda du jour : « À partir de mes rendez-vous d'aujourd'hui et de ces mails, prépare-moi une to-do priorisée pour préparer chaque réunion ».",
        "Affinez : demandez de regrouper par réunion, d'estimer le temps de chaque tâche, ou de mettre en avant les échéances les plus urgentes.",
      ],
      en: [
        "Open Copilot Chat (the Copilot icon in Outlook or on Microsoft365.com), no paid Copilot license needed: it already reasons over your email content.",
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
    audience: ["user"],
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
        "Choisir la puissance de raisonnement : le sélecteur de mode.\nEn haut à gauche de Copilot Chat, un sélecteur (« Auto » par défaut) décide combien de temps Copilot « réfléchit » avant de répondre. C'est ce réglage qui fait la différence entre une réponse express et une vraie analyse en profondeur.",
        "Comprendre les 3 modes :\n➞ Auto : Copilot décide seul du temps de réflexion selon la question. Le bon choix par défaut au quotidien.\n➞ Quick response (GPT-5.5) : répond immédiatement, sans étape de raisonnement longue. Pensé pour la vitesse.\n➞ Think deeper (GPT-5.6) : Copilot réfléchit plus longtemps pour construire un raisonnement structuré et plus fiable. Pensé pour la qualité sur les sujets complexes.",
        "Quel mode pour quelle demande ?\n➞ Prenez Quick response pour : une question factuelle, une définition, une reformulation, un e-mail court, un brainstorming rapide, quand la vitesse prime et l'enjeu est faible.\n➞ Prenez Think deeper (ou Auto) pour : une analyse, une comparaison multi-critères, une stratégie, une synthèse à partir de plusieurs sources, un raisonnement en plusieurs étapes, quand la qualité prime et que quelques secondes d'attente sont acceptables.\nRègle simple : enjeu faible + besoin de vitesse → Quick response ; enjeu élevé + besoin de fiabilité → Think deeper.",
        "Lancer la recherche approfondie.\nSélectionnez Think deeper (via GPT ➞ « GPT 5.6 Think deeper »), puis formulez une question précise ET le livrable attendu (note de synthèse, tableau comparatif, recommandation argumentée).",
        "Cadrer la qualité : demandez à Copilot de citer ses sources et de distinguer clairement les faits des hypothèses.",
        "Itérer pour creuser : « Approfondis le point 2 », « Compare les 3 options dans un tableau », « Quels sont les risques et les angles morts ? ».",
      ],
      en: [
        "What is deep research?\nIt's not a simple Q&A: you ask Copilot to explore a topic from several angles, cross-check sources, compare options and return a structured synthesis (context, facts, assumptions, recommendation). Great for a decision, a benchmark, a scoping note or market watch.",
        "Choosing reasoning power: the mode selector.\nIn the top-left of Copilot Chat, a selector (“Auto” by default) decides how long Copilot “thinks” before answering. This setting is what separates an instant reply from a genuine in-depth analysis.",
        "Understand the 3 modes:\n➞ Auto: Copilot decides how long to think based on the question. The sensible everyday default.\n➞ Quick response (GPT-5.5): answers right away, with no long reasoning step. Built for speed.\n➞ Think deeper (GPT-5.6): Copilot thinks longer to build a structured, more reliable line of reasoning. Built for quality on complex topics.",
        "Which mode for which request?\n➞ Use Quick response for: a factual question, a definition, a rewrite, a short email, quick brainstorming, when speed matters and stakes are low.\n➞ Use Think deeper (or Auto) for: analysis, multi-criteria comparison, strategy, synthesis across several sources, multi-step reasoning, when quality matters and a few seconds' wait is fine.\nSimple rule: low stakes + need speed → Quick response; high stakes + need reliability → Think deeper.",
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
    audience: ["user"],
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
        "Contexte : donnez les informations essentielles, audience, contraintes, ton, données (« Pour une équipe IT d'une PME, budget limité, en privilégiant la sécurité et la scalabilité »). Ni trop, ni trop peu.",
        "Format : indiquez la forme du livrable (tableau, e-mail, 5 bullet points…). Un format clair facilite la lecture et la réutilisation de la réponse.",
        "Astuce, conversez et itérez : un prompt n'est pas figé. Affinez au fil de l'échange (« reformule pour un public non technique », « ajoute les risques »). Puis, une fois le résultat satisfaisant, demandez à Copilot de vous rédiger le « prompt parfait » qui aurait permis d'obtenir directement ce résultat, et gardez-le pour le réutiliser la prochaine fois.",
      ],
      en: [
        "A good prompt relies on 4 complementary ingredients. Together they give Copilot everything it needs to get it right the first time.",
        "Role: tell Copilot who to be (“Act as a cloud architect”). Defining the role guides the tone, level of expertise and point of view of the answer.",
        "Task: state the expected action with clear action verbs (“Propose an architecture plan to migrate an app to Azure”). A sharp task = a focused, usable answer.",
        "Context: give the essential information, audience, constraints, tone, data (“For an SMB IT team, limited budget, prioritising security and scalability”). Not too much, not too little.",
        "Format: specify the shape of the deliverable (table, email, 5 bullet points…). A clear format makes the answer easy to read and reuse.",
        "Tip, converse and iterate: a prompt isn't set in stone. Refine it as you go (“rephrase for a non-technical audience”, “add the risks”). Then, once you're happy with the result, ask Copilot to write you the “perfect prompt” that would have produced this result directly, and save it to reuse next time.",
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
      fr: "Managers : appuyez-vous sur l'agent Researcher, dopé par Work IQ, pour préparer entretien annuel, 1:1, feedback, points d'équipe et objectifs, à partir de vos échanges réels, en profondeur.",
      en: "Managers: lean on the Researcher agent, powered by Work IQ, to prepare annual reviews, 1:1s, feedback, team syncs and objectives, grounded in your real exchanges, in depth.",
    },
    steps: {
      fr: [
        "Pourquoi Researcher ?\nResearcher est un agent de raisonnement approfondi de Copilot M365 Premium. Contrairement à une réponse de chat classique, il mène une recherche multi-étapes et s'appuie sur Work IQ, vos e-mails, réunions, chats Teams et documents, pour produire une analyse structurée, nuancée et sourcée. À privilégier quand le contexte et la qualité comptent plus que la vitesse : c'est exactement le cas pour préparer un moment humain important.",
        "Ouvrez Copilot M365, puis sélectionnez l'agent Researcher dans la liste des agents. Formulez votre demande en langage naturel. Point clé : avant de se lancer, Researcher vous pose des questions de cadrage (périmètre à couvrir, objectif principal, niveau de formalisation, éléments sensibles à inclure ou non). Répondez-y pour affiner le résultat, ou dites simplement « go ahead » pour le laisser construire avec son meilleur jugement.",
        "Entretien annuel : demandez à Researcher de rassembler les réalisations, contributions et axes de progrès de la personne sur l'année, à partir de vos échanges et des projets suivis, avec les faits marquants datés et sourcés.",
        "1:1 : faites préparer un ordre du jour ancré dans le concret : suivi des actions du dernier point, sujets en cours, signaux d'alerte (charge, blocages) repérés dans les échanges récents, et questions ouvertes à poser.",
        "Feedback constructif : allez plus loin qu'un simple reformulateur. Demandez à Researcher d'analyser une situation précise sous plusieurs angles (contexte, faits observés, impact) et de proposer un feedback équilibré et actionnable, en méthode SBI, avec des exemples concrets tirés des échanges.",
        "Points d'équipe & objectifs : demandez une synthèse des avancées et des points bloquants de la semaine par personne/projet, puis la reformulation des objectifs en OKR mesurables et le repérage des dépendances ou risques.",
      ],
      en: [
        "Why Researcher?\nResearcher is a deep-reasoning agent in Copilot M365 Premium. Unlike a regular chat reply, it runs a multi-step investigation and taps into Work IQ, your emails, meetings, Teams chats and documents, to produce a structured, nuanced and sourced analysis. Best when context and quality matter more than speed: exactly the case when preparing an important human conversation.",
        "Open Copilot M365, then pick the Researcher agent from the agents list. Ask in natural language. Key point: before starting, Researcher asks you scoping questions (scope to cover, main objective, level of formalisation, sensitive items to include or not). Answer them to sharpen the result, or simply say “go ahead” to let it build with its best judgement.",
        "Annual review: ask Researcher to gather the person's achievements, contributions and growth areas over the year, drawn from your exchanges and tracked projects, with dated, sourced highlights.",
        "1:1: have it prepare an agenda grounded in reality: follow-up on last meeting's actions, ongoing topics, warning signs (workload, blockers) spotted in recent exchanges, and open questions to ask.",
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
  {
    slug: "ressources-gratuites-montee-competence",
    section: "chat",
    audience: ["user", "it"],
    product: "general",
    roles: ["Manager", "Consultant", "Sales", "HR", "IT Admin"],
    level: "beginner",
    icon: "/copilot.png",
    date: "2026-07-13",
    isNew: true,
    featured: true,
    readMinutes: 4,
    title: {
      fr: "Ressources gratuites pour accompagner votre montée en compétence",
      en: "Free resources to support your upskilling on Copilot",
    },
    summary: {
      fr: "Pas besoin de formation payante pour bien démarrer avec Copilot. Voici les ressources officielles gratuites, un réflexe tout simple pour apprendre, et deux agents trop souvent oubliés.",
      en: "You don't need paid training to get started with Copilot. Here are the free official resources, one dead-simple habit to learn, and two agents that are too often overlooked.",
    },
    steps: {
      fr: [
        "Commencez par le plus simple : demandez à Copilot\nLe meilleur point de départ ne coûte rien et il est déjà sous vos yeux : Copilot se connaît plutôt bien lui-même. Quand on débute, le réflexe le plus utile, c'est de lui poser la question directement. Essayez : « Que peux-tu faire pour moi ? », « Quelles sont tes limites ? », « Comment peux-tu m'aider dans mon métier ? », « Quels sont les cas d'usage les plus pertinents pour mon profil ? ». En deux minutes, vous avez une visite guidée personnalisée.",
        "Deux agents largement sous-estimés : Prompt Coach & Idea Coach\nDans les parcours d'adoption, on passe souvent à côté de deux agents pourtant très utiles. Prompt Coach vous aide à rédiger et à améliorer vos prompts, parfait quand on ne sait pas comment formuler sa demande. Idea Coach accompagne la réflexion et aide à structurer ses idées, idéal pour débroussailler un sujet ou préparer un brainstorming. Testez-les tôt : ils font gagner un temps fou dans la prise en main.",
        "Piochez dans la Scenario Library\nBesoin d'inspiration concrète ? La Microsoft Scenario Library regorge de cas d'usage prêts à l'emploi, classés par métier et par département. C'est la meilleure façon de répondre à la question « oui, mais moi, dans mon job, ça donne quoi ? ».",
        "Le hub officiel d'adoption Copilot\nLe portail Microsoft 365 Copilot Adoption centralise guides de démarrage, kits de communication, supports de formation et bonnes pratiques de déploiement, en français. À garder en favori, que vous soyez utilisateur curieux ou en charge de l'adoption dans votre organisation.",
        "Prenez de la hauteur sur la démarche\nL'article « Five Ways to Implement the Great Copilot Journey » donne une vision d'ensemble : comment structurer un vrai parcours d'adoption, au-delà de la simple distribution de licences. Utile pour ne pas rester au stade du gadget et transformer l'essai durablement.",
        "Et si vous n'avez pas de licence : Copilot Chat\nPas de licence Microsoft 365 Copilot ? Ce n'est pas un frein pour commencer. La page « Découvrir Copilot Chat » vous montre tout ce que vous pouvez déjà faire gratuitement, dès aujourd'hui. Le meilleur moyen de se familiariser avant d'aller plus loin.\nÀ découvrir ici : https://www.microsoft.com/fr-fr/microsoft-365-copilot/learn-copilot-chat-today",
      ],
      en: [
        "Start with the simplest thing: ask Copilot\nThe best starting point costs nothing and it's already in front of you: Copilot knows itself pretty well. When you're new, the most useful habit is to ask it directly. Try: “What can you do for me?”, “What are your limits?”, “How can you help me in my job?”, “What are the most relevant use cases for my profile?”. In two minutes you get a personalized guided tour.",
        "Two heavily underrated agents: Prompt Coach & Idea Coach\nAdoption journeys often overlook two very helpful agents. Prompt Coach helps you write and improve your prompts, perfect when you're unsure how to phrase a request. Idea Coach supports your thinking and helps structure ideas, ideal to clear up a topic or prepare a brainstorm. Try them early: they save a huge amount of time when getting started.",
        "Dig into the Scenario Library\nNeed concrete inspiration? The Microsoft Scenario Library is packed with ready-to-use use cases, sorted by role and department. It's the best way to answer “OK, but what does it look like in MY job?”.",
        "The official Copilot adoption hub\nThe Microsoft 365 Copilot Adoption portal centralizes getting-started guides, communication kits, training materials and rollout best practices. Keep it bookmarked, whether you're a curious user or in charge of adoption in your organization.",
        "Step back and look at the approach\nThe article “Five Ways to Implement the Great Copilot Journey” gives the big picture: how to structure a real adoption journey, beyond just handing out licenses. Useful to move past the gadget stage and make it stick.",
        "No license? Copilot Chat\nNo Microsoft 365 Copilot license? Not a blocker to get going. The “Learn Copilot Chat” page shows everything you can already do for free, today. The best way to get comfortable before going further.\nExplore it here: https://www.microsoft.com/fr-fr/microsoft-365-copilot/learn-copilot-chat-today",
      ],
    },
    stepImages: [
      "/articles/resources-prompt-example.png",
      "/articles/resources-coach-agents.png",
      null,
      "/articles/resources-scenario-library.png",
      null,
      "/articles/resources-copilot-chat-today.png",
    ],
    imageWidth: "md",
    info: {
      fr: "Le meilleur conseil pour débuter tient en une phrase : utilisez-le. Cinq minutes par jour à poser vos vraies questions métier à Copilot valent mieux qu'une longue formation théorique. Et n'ayez pas peur de vous tromper : c'est comme ça qu'on apprend à bien prompter.",
      en: "The best beginner tip fits in one sentence: use it. Five minutes a day asking Copilot your real work questions beats a long theoretical course. And don't be afraid to get it wrong, that's how you learn to prompt well.",
    },
    links: [
      {
        label: {
          fr: "Microsoft Scenario Library (cas d'usage par métier)",
          en: "Microsoft Scenario Library (use cases by role)",
        },
        url: "https://adoption.microsoft.com/en-us/scenario-library/",
      },
      {
        label: {
          fr: "Microsoft 365 Copilot Adoption (hub officiel)",
          en: "Microsoft 365 Copilot Adoption (official hub)",
        },
        url: "https://adoption.microsoft.com/fr-fr/copilot/",
      },
      {
        label: {
          fr: "Five Ways to Implement the Great Copilot Journey",
          en: "Five Ways to Implement the Great Copilot Journey",
        },
        url: "https://techcommunity.microsoft.com/blog/microsoft365copilotblog/five-ways-to-implement-the-great-copilot-journey/4476516",
      },
      {
        label: {
          fr: "Découvrir Copilot Chat (gratuit)",
          en: "Learn Copilot Chat (free)",
        },
        url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/learn-copilot-chat-today",
      },
    ],
    tags: ["adoption", "ressources", "formation", "prompt coach", "idea coach", "gratuit"],
  },
  {
    slug: "confiance-securite-m365-copilot",
    section: "m365",
    governance: true,
    audience: ["user", "it"],
    product: "general",
    roles: ["Manager", "IT Admin", "Cloud Architect", "Consultant"],
    level: "beginner",
    icon: "🛡️",
    date: "2026-07-12",
    isNew: true,
    featured: true,
    readMinutes: 3,
    title: {
      fr: "Pourquoi puis-je faire confiance à Microsoft 365 Copilot ?",
      en: "Why can I trust Microsoft 365 Copilot?",
    },
    summary: {
      fr: "Vos données restent vos données : Copilot applique les permissions existantes, n'entraîne pas les modèles avec vos contenus et ne partage rien entre clients. Le bouclier vert « Enterprise Data Protection » le confirme visuellement.",
      en: "Your data stays your data: Copilot honors existing permissions, never trains models on your content and shares nothing across tenants. The green “Enterprise Data Protection” shield confirms it visually.",
    },
    steps: {
      fr: [
        "Les mêmes garanties que Microsoft 365\nMicrosoft 365 Copilot a été conçu pour respecter les mêmes exigences de sécurité, de conformité et de confidentialité que Microsoft 365. Vos prompts, les réponses générées et les données de votre organisation ne sont pas utilisés pour entraîner les modèles fondamentaux d'IA de Microsoft ou d'OpenAI.",
        "Vos données restent dans votre tenant\nLes données restent dans le périmètre de votre tenant Microsoft 365. Copilot applique les permissions existantes : il ne peut accéder qu'aux contenus auxquels l'utilisateur a déjà accès, ni plus, ni moins.",
        "Le bouclier vert « Enterprise Data Protection »\nUn élément visuel permet d'identifier que vous utilisez une expérience bénéficiant des protections d'entreprise : l'icône « Enterprise Data Protection » (protection des données d'entreprise), représentée par un bouclier vert dans Copilot Chat. Lorsqu'elle est présente, Microsoft garantit que les données sont protégées selon ses engagements de sécurité, qu'elles ne servent pas à l'entraînement des modèles et qu'elles bénéficient des contrôles de conformité de l'entreprise.",
        "Vérifier les engagements à la source\nPour vérifier ces engagements officiellement, Microsoft publie toute sa documentation de référence sur Microsoft Learn et sur le Microsoft Trust Center :\n➞ https://learn.microsoft.com/microsoft-365-copilot/microsoft-365-copilot-privacy\n➞ https://www.microsoft.com/trust-center",
      ],
      en: [
        "The same guarantees as Microsoft 365\nMicrosoft 365 Copilot was built to meet the same security, compliance and privacy requirements as Microsoft 365. Your prompts, the generated responses and your organization's data are not used to train Microsoft's or OpenAI's foundation AI models.",
        "Your data stays in your tenant\nData stays within your Microsoft 365 tenant boundary. Copilot enforces existing permissions: it can only access content the user already has access to, no more, no less.",
        "The green “Enterprise Data Protection” shield\nA visual cue tells you that you're using an experience covered by enterprise protections: the “Enterprise Data Protection” icon, shown as a green shield in Copilot Chat. When it's present, Microsoft guarantees that data is protected under its security commitments, isn't used to train models and benefits from enterprise compliance controls.",
        "Verify the commitments at the source\nTo verify these commitments officially, Microsoft publishes all its reference documentation on Microsoft Learn and the Microsoft Trust Center:\n➞ https://learn.microsoft.com/microsoft-365-copilot/microsoft-365-copilot-privacy\n➞ https://www.microsoft.com/trust-center",
      ],
    },
    stepImages: [
      null,
      null,
      "/articles/edp-shield-icon.png",
      null,
    ],
    imageWidth: "md",
    info: {
      fr: "À retenir : vos données restent vos données. Microsoft 365 Copilot respecte les permissions existantes, ne partage pas vos informations avec d'autres clients et n'utilise pas vos contenus professionnels pour entraîner les modèles d'IA.",
      en: "Key takeaway: your data stays your data. Microsoft 365 Copilot honors existing permissions, doesn't share your information with other customers and doesn't use your work content to train AI models.",
    },
    tags: ["sécurité", "confidentialité", "conformité", "trust", "enterprise data protection"],
  },
  {
    slug: "notebooks-sans-licence-chat",
    section: "chat",
    audience: ["user"],
    product: "notebooks",
    roles: ["Manager", "Consultant", "Marketing", "Sales", "HR"],
    level: "beginner",
    icon: "/notebooks.png",
    date: "2026-07-13",
    isNew: true,
    readMinutes: 4,
    title: {
      fr: "Utiliser les Notebooks Copilot sans licence",
      en: "Use Copilot Notebooks without a license",
    },
    summary: {
      fr: "Bonne nouvelle : les Notebooks Copilot sont désormais accessibles sans licence Microsoft 365 Copilot. Rassemblez vos sources, générez cartes mentales et guides d'étude, et partagez le tout avec vos collègues.",
      en: "Good news: Copilot Notebooks are now available without a Microsoft 365 Copilot license. Bundle your sources, generate mind maps and study guides, and share everything with your colleagues.",
    },
    steps: {
      fr: [
        "Disponible sans licence Copilot\nLes Notebooks Copilot ne sont plus réservés aux utilisateurs licenciés : ils sont désormais accessibles dans Copilot Chat, sans licence Microsoft 365 Copilot. Un Notebook est un espace dédié à un sujet, dans lequel Copilot raisonne uniquement sur les sources que vous y ajoutez.",
        "Où trouver les Notebooks (deux chemins possibles)\nPas d'inquiétude si vous ne les voyez pas tout de suite, il y a deux façons d'y accéder selon votre version :\n➞ 1re méthode, le « gaufrier » : cliquez sur l'icône en forme de damier (les 9 petits points) tout en haut de votre application Copilot, puis choisissez « Blocs-notes » (c'est le nom français de « Notebooks »), comme sur la première capture.\n➞ 2e méthode, le volet de gauche : selon les mises à jour et votre licence, une entrée « Notebooks » peut aussi s'afficher directement dans le menu de gauche, comme sur la seconde capture. Les deux mènent au même endroit.",
        "Ajoutez vos sources de référence\nAlimentez votre notebook avec ce dont vous avez besoin : des pages web, des fichiers (Word, Excel, PowerPoint, PDF) et des e-mails peuvent servir de sources de référence. Copilot s'appuie alors exclusivement sur ce périmètre pour vous répondre, idéal pour travailler sur un dossier précis sans être noyé dans le reste.",
        "Générez une carte mentale automatiquement\nÀ partir des sources ajoutées, Copilot peut créer automatiquement une carte mentale (mind map) qui structure visuellement les idées clés et leurs liens. Parfait pour prendre de la hauteur sur un sujet ou préparer une présentation.",
        "Créez un guide d'étude\nBesoin d'assimiler ou de transmettre un sujet ? Demandez un guide d'étude : Copilot synthétise vos sources en un support d'apprentissage clair, avec les points essentiels à retenir.",
        "Partagez votre notebook\nUn notebook peut être partagé avec d'autres utilisateurs : chacun travaille sur le même périmètre de sources et bénéficie du contexte commun. Pratique pour un projet d'équipe, une veille partagée ou un onboarding.",
      ],
      en: [
        "Available without a Copilot license\nCopilot Notebooks are no longer limited to licensed users: they're now available in Copilot Chat, without a Microsoft 365 Copilot license. A Notebook is a space dedicated to one topic, where Copilot reasons only over the sources you add to it.",
        "Where to find Notebooks (two possible paths)\nNo worries if you don't see them right away, there are two ways to get there depending on your version:\n➞ Option 1, the « waffle »: click the grid icon (the 9 small dots) at the very top of your Copilot app, then pick « Notebooks » (« Blocs-notes » in French), as shown in the first screenshot.\n➞ Option 2, the left pane: depending on updates and your license, a « Notebooks » entry may also appear directly in the left menu, as shown in the second screenshot. Both lead to the same place.",
        "Add your reference sources\nFeed your notebook with what you need: web pages, files (Word, Excel, PowerPoint, PDF) and emails can all be used as reference sources. Copilot then relies exclusively on that scope to answer you, ideal to work on a specific case without being drowned in everything else.",
        "Generate a mind map automatically\nFrom the added sources, Copilot can automatically create a mind map that visually structures the key ideas and their links. Perfect to step back on a topic or prepare a presentation.",
        "Create a study guide\nNeed to absorb or share a topic? Ask for a study guide: Copilot synthesizes your sources into a clear learning aid, with the essentials to remember.",
        "Share your notebook\nA notebook can be shared with other users: everyone works on the same source scope and benefits from the shared context. Handy for a team project, a shared watch or an onboarding.",
      ],
    },
    stepImages: [
      "/articles/notebook-sans-licence-overview.png",
      [
        "/articles/notebook-acces-gauffrier.png",
        "/articles/notebook-acces-volet-gauche.png",
      ],
      "/articles/notebook-selectionner-references.png",
      "/articles/notebook-carte-mentale.png",
      "/articles/notebook-guide-etude.png",
      "/articles/notebook-partage.png",
    ],
    tags: ["notebooks", "sans licence", "copilot chat", "cartes mentales", "productivité"],
  },
  {
    slug: "prompts-organisation-reutilisation",
    section: "chat",
    extraSections: ["m365"],
    audience: ["it"],
    product: "general",
    roles: ["IT Admin", "Cloud Architect", "Consultant"],
    level: "intermediate",
    icon: "/copilot.png",
    date: "2026-07-13",
    isNew: true,
    readMinutes: 4,
    title: {
      fr: "Prompts d'organisation : structurer et réutiliser vos interactions Copilot",
      en: "Organization prompts: structure and reuse your Copilot interactions",
    },
    summary: {
      fr: "Accessible avec et sans licence Copilot M365 : publiez des prompts au niveau de l'organisation pour offrir à vos utilisateurs des points de départ prêts à l'emploi, cohérents et réutilisables.",
      en: "Available with and without a Copilot M365 license: publish prompts at the organization level to give your users ready-to-use, consistent and reusable starting points.",
    },
    steps: {
      fr: [
        "Pourquoi des prompts d'organisation ?\nUn bon prompt bien formulé peut être réutilisé par toute l'entreprise. Plutôt que de laisser chacun réinventer ses formulations, l'IT peut publier des prompts validés, cohérents et alignés sur les usages métier, un vrai accélérateur d'adoption. C'est accessible que vos utilisateurs aient une licence Copilot M365 ou non.",
        "Publier depuis le centre d'administration\nDans le centre d'administration, rendez-vous dans Copilot > Prompts. Vous y gérez les prompts de votre organisation : créez-en un via « Create prompt », donnez-lui un titre parlant (ex. « Rédiger un email pro », « Préparer une réunion »), puis publiez-le. L'onglet « Analytics » vous donne un aperçu de leur utilisation.",
        "Côté utilisateur : le laboratoire de prompts\nUne fois publiés, ces prompts apparaissent pour vos utilisateurs dans le laboratoire de prompts de Copilot, regroupés dans « Suggéré », par « Sujets de prompt » ou dans « Prompts de l'agent ». L'utilisateur n'a plus qu'à cliquer pour partir sur une base solide, sans réfléchir à la formulation.",
        "Structurer et réutiliser\nOrganisez vos prompts par thème et par métier pour qu'ils soient faciles à retrouver. L'objectif : une bibliothèque vivante qui capitalise sur les meilleures interactions et diffuse les bonnes pratiques à toute l'organisation.",
      ],
      en: [
        "Why organization prompts?\nA well-crafted prompt can be reused by the whole company. Rather than letting everyone reinvent their wording, IT can publish validated, consistent prompts aligned with business usage, a real adoption accelerator. It works whether your users have a Copilot M365 license or not.",
        "Publish from the admin center\nIn the admin center, go to Copilot > Prompts. There you manage your organization's prompts: create one via “Create prompt”, give it a clear title (e.g. “Write a professional email”, “Prepare a meeting”), then publish it. The “Analytics” tab gives you a view of their usage.",
        "User side: the prompt lab\nOnce published, these prompts appear for your users in Copilot's prompt lab, grouped under “Suggested”, by “Prompt topics” or under “Agent prompts”. The user just clicks to start from a solid base, without thinking about the wording.",
        "Structure and reuse\nOrganize your prompts by theme and by role so they're easy to find. The goal: a living library that capitalizes on the best interactions and spreads good practices across the whole organization.",
      ],
    },
    stepImages: [
      null,
      "/articles/prompts-admin-contoso.png",
      "/articles/prompts-lab.png",
      null,
    ],
    imageWidth: "md",
    tags: ["prompts", "gouvernance", "adoption", "administration", "réutilisation"],
  },
];

/* ---------- Helpers ---------- */

export function getTip(slug: string): Tip | undefined {
  return tips.find((t) => t.slug === slug);
}

export function inSection(t: Tip, section: Section): boolean {
  return t.section === section || (t.extraSections?.includes(section) ?? false);
}

/** Une astuce est "Premium" (nécessite une licence M365 Copilot) si sa section principale est m365. */
export function isPremium(t: Tip): boolean {
  return t.section === "m365";
}

export function tipsBySection(section: Section): Tip[] {
  return tips.filter((t) => inSection(t, section));
}

/**
 * Copilot Chat "Basic" : uniquement les fonctionnalités qui ne nécessitent pas de licence.
 * On exclut donc tout article Premium (section m365), même s'il est cross-listé dans chat.
 */
export function chatBasicTips(): Tip[] {
  return tips.filter((t) => inSection(t, "chat") && !isPremium(t));
}

export function tipsByAudience(
  audience: Audience,
  opts: { excludeGovernance?: boolean } = {},
): Tip[] {
  return tips.filter(
    (t) =>
      t.audience.includes(audience) &&
      !(opts.excludeGovernance && t.governance),
  );
}

export function governanceTips(): Tip[] {
  return tips.filter((t) => t.governance);
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
