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
  dateStamp: "Vol. 01 · Summer 2026",
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
      "A four-workflow ecosystem that runs like an autonomous sales department for a Swiss fintech. Leads are captured from multiple entry points, enriched via Apollo and LinkedIn, then researched by AI before a seven-factor model scores each one. High-scoring leads route to regional reps by language and geography and sync straight into the CRM; the rest get an AI voice call within minutes. A self-learning loop reviews past executions to keep improving the pitch — no manual tuning.",
    stack: ["n8n", "Vapi", "Salesforce", "OpenAI", "Apollo.io", "Supabase"],
    metrics: ["2–3 hrs → <15 min per lead", "7-factor AI scoring", "Self-learning pitch loop"],
  },
  {
    slug: "ai-voice-agent",
    name: "AI Voice Calling Agent",
    year: "2025–26",
    role: "AI Automation Engineer · RobustCraft",
    summary:
      "Outbound voice AI with regional caller ID, CRM-driven personalization, voicemail retry logic and automated post-call analysis.",
    description:
      "A Vapi-powered outbound calling agent with a natural ElevenLabs voice that dials qualified leads using a region-matched caller ID. It pulls each lead's context from the CRM, holds a real discovery conversation, retries intelligently on voicemail, and runs structured post-call analysis that writes notes, next steps and a call summary straight back into the deal record and the team channel.",
    stack: ["Vapi", "ElevenLabs", "n8n", "OpenAI", "Salesforce"],
    metrics: ["Natural voice (ElevenLabs)", "Region-matched caller ID", "Auto post-call notes"],
  },
  {
    slug: "social-automation-suite",
    name: "Multi-Agent Social Media Automation Suite",
    year: "2025–26",
    role: "AI Automation Engineer · RobustCraft",
    summary:
      "A 13-workflow, 350+ node multi-agent system that generates, brands, illustrates and ships content across every major social platform.",
    description:
      "A conversational multi-agent system run entirely from a single Slack channel. A master orchestrator delegates to specialist agents for content creation, asset management and database ops — drafting platform-specific posts within brand guidelines, generating on-brand AI imagery, and pulling competitor intelligence from five social platforms into a vector store for ideation. Spans 13 workflows and 350+ nodes; approvals and scheduling happen in-channel.",
    stack: ["n8n", "OpenAI", "Slack API", "Supabase Vector", "Apify"],
    metrics: ["13 workflows · 350+ nodes", "Master + specialist agents", "5-platform competitor intel"],
  },
  {
    slug: "conversation-intelligence",
    name: "Conversation Intelligence & Lead Routing",
    year: "2025–26",
    role: "AI Automation Engineer · RobustCraft",
    summary:
      "Dual-webhook system that classifies every support conversation in real time — churn alerts, intent tagging and automatic CRM routing.",
    description:
      "Runs two parallel paths on every support conversation. A real-time path watches incoming messages and instantly alerts the team on churn keywords, billing urgency or negative sentiment. A closed-conversation path cleans the full thread and classifies it into eight categories with confidence scores, priority and a suggested next action, then cross-references the CRM to enrich leads and open opportunities — all with zero manual triage.",
    stack: ["n8n", "Intercom API", "OpenAI", "Salesforce", "Microsoft Teams"],
    metrics: ["Real-time churn alerts", "8-way AI classification", "Zero manual triage"],
  },
  {
    slug: "crm-two-way-sync",
    name: "Bidirectional CRM Sync",
    year: "2025–26",
    role: "AI Automation Engineer · RobustCraft",
    summary:
      "Real-time two-way sync between CRM instances — bulk migration, webhook-driven live sync, loop prevention and calendar sync.",
    description:
      "A six-workflow ecosystem that keeps two CRM instances in sync across the full contact lifecycle. It handles one-time bulk migration, then switches to live webhook sync — mapping 43 custom fields bidirectionally, resolving conflicts and merging duplicates. A shared dedup lock prevents echo loops, while scheduled jobs mirror contact deletions, appointments and blocked calendar slots in both directions.",
    stack: ["GoHighLevel API", "n8n", "Supabase", "Webhooks"],
    metrics: ["6-workflow ecosystem", "43 fields mapped both ways", "Echo-loop safe"],
  },
  {
    slug: "gmail-outreach",
    name: "Intent-Aware Gmail Outreach",
    year: "2025–26",
    role: "AI Automation Engineer · RobustCraft",
    summary:
      "Automated cold outreach with AI-generated sequences, reply detection, sentiment analysis and intent-based auto-responses.",
    description:
      "A natural-language outreach pipeline: a prompt like 'find CEOs of mid-sized SaaS companies in Germany' is parsed into a lead search, enriched, then checked against the CRM to route each contact into an inbound or outbound email sequence. Every reply is classified for intent and sentiment — the workflow drafts a context-aware response, pauses the sequence on a negative, or escalates a hot lead to a LinkedIn connection flow.",
    stack: ["n8n", "Apollo.io", "OpenAI", "Salesforce", "Gmail API"],
    metrics: ["NL → lead search", "Inbound/outbound routing", "Intent + sentiment replies"],
  },
  {
    slug: "rag-knowledge-base",
    name: "Grounded PDF Knowledge Base (RAG)",
    year: "2025–26",
    role: "AI Automation Engineer · Independent",
    summary:
      "A retrieval-augmented chatbot that answers strictly from your documents — no hallucinations, no outside-knowledge bleed.",
    description:
      "Extracts and chunks uploaded PDFs, embeds them into a vector store, and answers natural-language questions using only the most relevant retrieved context. Responses are fully grounded in the source document, so the assistant can sit on technical manuals, compliance docs or any private corpus without inventing facts or leaking external knowledge.",
    stack: ["n8n", "Supabase Vector", "Google Gemini", "RAG"],
    metrics: ["No hallucination", "Vector retrieval", "Any document type"],
  },
  {
    slug: "employee-onboarding",
    name: "Employee Onboarding Automation",
    year: "2025–26",
    role: "AI Automation Engineer · Independent",
    summary:
      "A form-triggered pipeline that takes a new hire from ID upload to signed NDA — accounts, drives, documents and welcome email, all automatic.",
    description:
      "Triggered by a single onboarding form, the workflow extracts employee details straight from uploaded ID and certificate documents, provisions email and workspace accounts, builds a structured Drive folder hierarchy, populates NDA and SOW templates with the new hire's data, converts them to PDF and kicks off a digital signing flow — then sends a welcome email on completion. Onboarding that took hours now runs in minutes with zero manual data entry.",
    stack: ["n8n", "Google Workspace", "Zoho Mail", "OCR / Doc parsing", "E-Signature"],
    metrics: ["Hours → minutes", "Auto account provisioning", "NDA e-signing"],
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
      "Built a real-time conversation-intelligence layer over the support inbox — dual-webhook churn alerts, AI classification into eight categories, and automatic CRM enrichment and opportunity creation.",
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
      items: ["n8n", "Make", "Zapier", "Vapi", "OpenAI APIs", "Google Gemini", "LangChain", "RAG / Vector DBs", "Prompt engineering"],
    },
    {
      label: "Integrations & Data",
      items: [
        "Salesforce",
        "GoHighLevel",
        "Intercom",
        "Apollo.io",
        "Apify",
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
  updated: "June 2026",
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
