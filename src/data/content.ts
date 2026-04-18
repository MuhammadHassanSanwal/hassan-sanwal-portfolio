// ---------------------------------------------------------------------------
// Single source of truth for site content. Components read from here, so
// editing this file is how you edit the site. Page numbers are set by order.
// ---------------------------------------------------------------------------

export const site = {
  name: "Hassan Sanwal",
  fullName: "Muhammad Hassan Naseem Sanwal",
  title: "Automation Engineer & Full-Stack Developer",
  location: "Lahore, Pakistan",
  locationShort: "Lahore · PK",
  timezone: "PKT · UTC+5",
  email: "muhammadhassansanwal@gmail.com",
  resumeUrl: "/Hassan-Sanwal-CV.pdf" as string | null,
  socials: [
    { label: "Email", handle: "muhammadhassansanwal@gmail.com", href: "mailto:muhammadhassansanwal@gmail.com" },
    { label: "GitHub", handle: "@MuhammadHassanSanwal", href: "https://github.com/MuhammadHassanSanwal" },
    { label: "LinkedIn", handle: "muhammad-hassan-sanwal", href: "https://www.linkedin.com/in/muhammad-hassan-sanwal/" },
  ] as Array<{ label: string; handle: string; href: string }>,
};

export const hero = {
  greeting: "Hi, I'm",
  name: "Hassan.",
  // The line that gets an ink underline on the word "ship"
  intro:
    "I design and build AI-driven automation, backend services, and full-stack products — the kind that replace entire workflows, not a single task.",
  marginNote: "a field notebook",
  dateStamp: "Vol. 01 · Spring 2026",
  badge: "Currently available for new work",
};

export const about = {
  // One-liner that reads like a diary heading, bolded word gets a highlighter
  headline: "Engineer first, operator second.",
  body: [
    "I've spent the last year shipping end-to-end AI automation systems for international teams — the kind that replace entire sales, marketing and customer-ops workflows, not the kind that live in a demo video.",
    "Before the automation work I built in sales, marketing, and a couple of entrepreneurial runs of my own, so I think in funnels, SLAs and revenue as much as I think in code.",
    "Alongside my full-time role I run a small software agency of my own, taking on selective automation and full-stack builds. Day to day I work across n8n, Next.js, Node.js, Flutter and Python, and I'm going deep on agentic AI with LangChain — so I can own a system end-to-end, from the first webhook to the last pixel.",
  ],
  marginNote: "things I think about",
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  role: string;
  summary: string;
  description: string;
  stack: string[];
  metrics?: string[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "lead-gen-scoring",
    name: "Multi-Source Lead Gen & Scoring Engine",
    year: "2025–26",
    role: "AI Automation Engineer · RobustCraft",
    summary:
      "End-to-end lead pipeline for a Swiss fintech — enrichment, AI-driven scoring, regional assignment and live CRM sync.",
    description:
      "Ingests leads from multiple sources, enriches them, and scores them with AI in real time. Low-score leads are handed to a Vapi voice agent for qualification; high-score leads get a generated pitch and land in Salesforce with region- and score-based routing, automatic team notifications, and full CRM sync. Part of 20+ production workflows shipped across sales, marketing and customer ops.",
    stack: ["n8n", "Vapi", "Salesforce", "OpenAI", "Slack API", "Webhooks"],
    metrics: ["20+ production workflows", "Real-time AI scoring", "Region-based routing"],
  },
  {
    slug: "ai-voice-agent",
    name: "AI Voice Calling Agent",
    year: "2025–26",
    role: "AI Automation Engineer · RobustCraft",
    summary:
      "Outbound voice AI with regional caller ID, CRM-driven personalization, voicemail retry logic and automated post-call analysis.",
    description:
      "A Vapi-powered outbound calling system that dials qualified leads with a region-matched caller ID, pulls conversation context from the CRM for each call, retries intelligently on voicemail, and runs structured post-call analysis that writes notes and next steps straight back into the deal record.",
    stack: ["Vapi", "n8n", "OpenAI", "Salesforce", "Webhooks"],
    metrics: ["Regional caller ID", "CRM-driven personalization", "Post-call analysis"],
  },
  {
    slug: "social-automation-suite",
    name: "Multi-Agent Social Media Automation Suite",
    year: "2025–26",
    role: "AI Automation Engineer · RobustCraft",
    summary:
      "A 13-workflow, 350+ node multi-agent system that generates, brands, illustrates and ships content across every major social platform.",
    description:
      "Architected a multi-agent content engine spanning 13 workflows and 350+ nodes. Platform-specific AI agents draft copy and imagery within brand guidelines, image generation is fully automated, and users can trigger or remix custom generations. Approvals and scheduling happen in-channel via Slack.",
    stack: ["n8n", "OpenAI", "Image APIs", "Slack API", "Webhooks"],
    metrics: ["13 workflows · 350+ nodes", "Multi-agent pipeline", "Brand-guideline enforced"],
  },
  {
    slug: "crm-two-way-sync",
    name: "Bidirectional CRM Sync",
    year: "2025–26",
    role: "AI Automation Engineer · RobustCraft",
    summary:
      "Real-time two-way sync between CRM instances — bulk migration, webhook-driven live sync, loop prevention and calendar sync.",
    description:
      "Keeps two CRM sub-accounts consistent in both directions. Handles bulk historical migration on first run, then switches to live webhook sync with loop-prevention and back-off on collisions. Full custom-field mapping plus appointment and blocked-slot calendar sync so two operations teams stay on one shared source of truth.",
    stack: ["GoHighLevel API", "n8n", "Webhooks", "REST APIs"],
    metrics: ["Bulk + live sync", "Loop-safe", "Contacts + calendars"],
  },
  {
    slug: "gmail-outreach",
    name: "Intent-Aware Gmail Outreach",
    year: "2025–26",
    role: "AI Automation Engineer · RobustCraft",
    summary:
      "Automated cold outreach with AI-generated sequences, reply detection, sentiment analysis and intent-based auto-responses.",
    description:
      "A Gmail-based outreach system with multi-day cadences. Every reply is classified for intent and sentiment — the workflow either drafts a context-aware response, pauses the sequence, or escalates to a human. No more leads slipping between follow-ups.",
    stack: ["Gmail API", "n8n", "OpenAI", "Google Workspace"],
    metrics: ["Intent + sentiment analysis", "Multi-day cadences", "Auto-reply by intent"],
  },
  {
    slug: "corporate-espionage",
    name: "Corporate Espionage — UE5 Multiplayer",
    year: "2024",
    role: "Lead Game Developer · Newton Hewitt & Co / Shaper.US",
    summary:
      "A corporate-espionage-themed multiplayer game MVP built in Unreal Engine 5 with Epic Online Services for lobbies and online play.",
    description:
      "Led an MVP build of an office-themed multiplayer game in Unreal Engine 5. Designed the core game loop, task and role assignment systems, and wired in multiplayer synchronization via Epic Online Services for lobby management and online sessions.",
    stack: ["Unreal Engine 5", "Epic Online Services", "Multiplayer", "Gamification"],
    metrics: ["MVP shipped", "Role-based gameplay", "Online lobbies"],
  },
];

export type Role = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "RobustCraft",
    role: "AI Automation Engineer",
    period: "Jun 2025 — Present",
    location: "Remote · Swiss fintech client",
    bullets: [
      "Augmented staff for a Swiss fintech; shipped 20+ production automation workflows across sales, marketing and customer ops — lead enrichment, AI-driven scoring, regional assignment logic, CRM sync and team notifications.",
      "Built an AI voice calling agent (Vapi) for outbound sales — regional caller ID, CRM-driven conversation personalization, voicemail retry logic, and automated post-call analysis back into the deal record.",
      "Architected a 13-workflow, 350+ node multi-agent social media automation system with AI content generation across platforms, image generation and brand-guideline enforcement.",
      "Engineered a real-time bidirectional CRM sync — bulk migration, live webhook sync, loop prevention, custom-field mapping and calendar sync between two sub-accounts.",
      "Built automated cold email outreach with AI-generated sequences, reply detection and sentiment analysis, plus a knowledge-base-driven AI customer support chatbot and multilingual landing pages across four languages.",
    ],
  },
  {
    company: "Indexx.ai",
    role: "Marketing Lead",
    period: "Feb 2025 — Jun 2025",
    location: "Remote · Blockchain fintech",
    bullets: [
      "Led marketing strategy and execution for a blockchain-based fintech platform — user acquisition campaigns, content strategy and brand positioning across digital channels.",
      "Collaborated closely with product and design to align marketing initiatives with platform development and go-to-market timing.",
      "Used data-driven insights to optimize campaign performance, shape token promotion strategies and craft partnership announcements.",
    ],
  },
  {
    company: "Newton Hewitt & Co / Shaper.US",
    role: "Lead Game Developer",
    period: "Oct 2024 — Dec 2024",
    location: "Project · Unreal Engine 5",
    bullets: [
      "Led a team to ship an MVP of an office-themed multiplayer game in Unreal Engine 5.",
      "Owned code refinement, gamification design, UX improvements and QA across the full build.",
    ],
  },
];

export type School = {
  institution: string;
  credential: string;
  period?: string;
};

export const education: School[] = [
  {
    institution: "Information Technology University",
    credential: "B.S. in Computer Science",
    period: "Sep 2021 — Present",
  },
  { institution: "Lahore Grammar School International", credential: "IB Diploma Programme (IBDP)" },
  { institution: "Lahore Grammar School", credential: "O Levels" },
];

export const skills = {
  groups: [
    {
      label: "Languages",
      items: ["JavaScript", "Python", "Java", "Dart", "HTML", "CSS"],
    },
    {
      label: "Frameworks & Platforms",
      items: ["Next.js", "Node.js", "Flutter", "Firebase", "Astro"],
    },
    {
      label: "Automation & AI",
      items: ["n8n", "Make", "Zapier", "Vapi", "OpenAI APIs", "Prompt engineering"],
    },
    {
      label: "Integrations & Data",
      items: [
        "Salesforce",
        "GoHighLevel",
        "Intercom",
        "Slack API",
        "Gmail API",
        "REST APIs",
        "Webhooks",
        "PostgreSQL",
        "Supabase",
      ],
    },
  ],
};

export const now = {
  updated: "April 2026",
  items: [
    "Full-time as an AI automation engineer — shipping production systems across sales, marketing and customer ops for a Swiss fintech client.",
    "Running my own software agency in parallel — selective client work on automations, AI integrations and full-stack builds.",
    "Going deep on agentic AI with LangChain — orchestration, tool use, memory and multi-agent systems that actually decide things.",
    "Leveling up modern web and mobile — Next.js, Astro, Node.js and Flutter — to own products end-to-end, from the first webhook to the last pixel.",
  ],
};

export const contact = {
  salutation: "P.S. —",
  headline: "Got a workflow that's still run by a human?",
  subline: "Automations, integrations, or full-stack builds — write me a letter.",
  cta: "Start a conversation",
};

// Top-of-page chapter table / nav
export const nav = [
  { label: "Work", href: "#work", page: "p.02" },
  { label: "About", href: "#about", page: "p.03" },
  { label: "Experience", href: "#experience", page: "p.04" },
  { label: "Stack", href: "#skills", page: "p.05" },
  { label: "Now", href: "#now", page: "p.06" },
];
