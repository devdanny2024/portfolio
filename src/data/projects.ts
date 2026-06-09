export type ProjectCategory = "Enterprise" | "AI & Bots" | "Fintech" | "Client Work" | "Web3" | "Mobile" | "Tools";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tags: string[];
  color: string;          // accent color for the card
  accentGradient: string; // CSS gradient for hero
  year: string;
  status: "Live" | "In Development" | "Shipped";
  featured: boolean;
  github?: string;
  live?: string;
  metrics?: string[];     // e.g. ["10k+ users", "AWS ECS"]
}

export const projects: Project[] = [
  // ── FEATURED / ENTERPRISE ─────────────────────────────────────────────────
  {
    id: "wanzami",
    title: "Wanzami",
    subtitle: "Full-Scale Streaming Platform",
    description:
      "Netflix-grade streaming ecosystem — VOD, live events, PPV, Flutter mobile, Smart TV expansion, and AWS IVS infrastructure.",
    longDescription:
      "Wanzami is a multi-platform streaming service built for African audiences. It supports on-demand movies and series, pay-per-view events, live streaming via AWS IVS, and a full Flutter mobile app. The backend runs on ECS Fargate with FFmpeg transcoding workers, BullMQ async queues, a recommendation engine, and Paystack/Flutterwave billing.",
    category: "Enterprise",
    tags: ["Next.js", "Flutter", "AWS IVS", "ECS Fargate", "FFmpeg", "BullMQ", "Terraform", "Paystack", "PostgreSQL"],
    color: "#7c3aed",
    accentGradient: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #1e1b4b 100%)",
    year: "2024",
    status: "In Development",
    featured: true,
    github: "https://github.com/devdanny2024/wanzami",
    metrics: ["Multi-platform", "AWS ECS Fargate", "Live + VOD + PPV"],
  },
  {
    id: "ally",
    title: "Ally",
    subtitle: "AI Homework Tutor for African Kids",
    description:
      "WhatsApp-native AI tutor using Claude AI — helps Nigerian children solve homework via Socratic method with OCR and parent digest reports.",
    longDescription:
      "Ally delivers Socratic-style AI tutoring through WhatsApp, making education accessible without an app download. Kids photograph homework; Tesseract OCR extracts text; Claude Sonnet guides without giving answers. Parents receive daily digest summaries via WhatsApp and email. Built with BullMQ async workers, Cloudinary image storage, and deployed on a VPS with Docker + Nginx.",
    category: "AI & Bots",
    tags: ["Claude AI", "Next.js", "Express", "BullMQ", "WhatsApp API", "OCR", "PostgreSQL", "Docker"],
    color: "#06b6d4",
    accentGradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0c4a6e 100%)",
    year: "2024",
    status: "Live",
    featured: true,
    live: "https://allyhomework.com",
    metrics: ["Live at allyhomework.com", "WhatsApp-native", "Claude AI + OCR"],
  },
  {
    id: "creditpath",
    title: "CreditPath",
    subtitle: "Fintech Credit Scoring for the Unbanked",
    description:
      "Builds credit scores (300–850) for underbanked users by tracking bill payment behavior — electricity, airtime, data, and more.",
    longDescription:
      "CreditPath solves a critical problem: millions of Africans have no credit history. By tracking bill payments across 10+ categories, it builds a dynamic credit score weighted by consistency (40%), recency (25%), diversity (20%), and account age (15%). Flutter mobile app, React admin dashboard, and a Telegram bot powered by Claude AI for voice-note transcription.",
    category: "Fintech",
    tags: ["Flutter", "React", "Node.js", "Prisma", "Claude AI", "Telegram Bot", "Whisper", "JWT"],
    color: "#10b981",
    accentGradient: "linear-gradient(135deg, #10b981 0%, #059669 50%, #064e3b 100%)",
    year: "2024",
    status: "Live",
    featured: true,
    metrics: ["300–850 scoring model", "10+ bill categories", "Flutter + React + Telegram"],
  },
  {
    id: "uk2me",
    title: "UK2ME",
    subtitle: "UK Dropshipping Automation Platform",
    description:
      "End-to-end dropshipping automation — browse ASOS, Zara, Nike, Amazon UK, H&M. Get quoted, pay, and orders auto-fulfill via BullMQ workers.",
    longDescription:
      "UK2ME is a production-grade monorepo with a customer storefront, operations admin, and REST API backend. Product metadata is resolved via HTML parsing (JSON-LD + OpenGraph). Async job processing handles product resolution, purchase attempts, and shipment tracking. Deployed on AWS ECS with Terraform and GitHub Actions CI/CD.",
    category: "Enterprise",
    tags: ["Next.js", "TypeScript", "BullMQ", "Redis", "PostgreSQL", "AWS", "Terraform", "Prisma"],
    color: "#f59e0b",
    accentGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #78350f 100%)",
    year: "2024",
    status: "In Development",
    featured: true,
    github: "https://github.com/devdanny2024/UK-Dropshipping",
    metrics: ["5 UK retailers", "AWS ECS + Terraform", "pnpm monorepo"],
  },

  // ── AI & BOTS ──────────────────────────────────────────────────────────────
  {
    id: "trade-agent",
    title: "Trade Agent MVP",
    subtitle: "AI-Powered Prediction Market Bot",
    description:
      "GPT-4 signal generation + strict risk engine + Telegram command center for live Polymarket and Kalabash trading.",
    longDescription:
      "An autonomous trading bot that queries GPT-4 for market ideas, runs them through a hard risk gate (max position size, daily loss cap), and executes on Polymarket or Kalabash. Features a Telegram bot control panel with /idea, /execute, /status, and full autonomous loop mode.",
    category: "AI & Bots",
    tags: ["Python", "GPT-4", "Telegram Bot", "Polymarket", "Risk Engine", "HMAC Auth"],
    color: "#8b5cf6",
    accentGradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #3b0764 100%)",
    year: "2024",
    status: "In Development",
    featured: true,
    metrics: ["GPT-4 signal generation", "Risk-gated execution", "Telegram command center"],
  },
  {
    id: "dannyflex",
    title: "DannyFlex",
    subtitle: "Real-Time AI Voice Chat App",
    description:
      "Voice-and-text AI conversations powered by Vapi.ai + Google Gemini with Convex realtime backend and Clerk auth.",
    longDescription:
      "A personal AI chat app with real-time voice capabilities. Users speak and receive spoken AI responses. Built with Vapi.ai for voice, Gemini as the LLM, Convex for realtime data sync (no REST API needed), and Clerk for secure authentication. Deployed on Vercel.",
    category: "AI & Bots",
    tags: ["Next.js", "Vapi.ai", "Google Gemini", "Convex", "Clerk", "TypeScript"],
    color: "#ec4899",
    accentGradient: "linear-gradient(135deg, #ec4899 0%, #db2777 50%, #831843 100%)",
    year: "2024",
    status: "Live",
    featured: false,
    github: "https://github.com/devdanny2024/dannyflex",
    live: "https://dannyflex.vercel.app",
    metrics: ["Real-time voice AI", "Gemini LLM", "Convex backend"],
  },
  {
    id: "mail-blocker",
    title: "Mail Blocker",
    subtitle: "Intelligent IMAP Spam Eliminator",
    description:
      "Python daemon that watches your inbox over IMAP SSL, permanently expunges bounce mail and scam patterns using regex rules.",
    longDescription:
      "A lightweight Python service that runs as a Linux systemd daemon. On startup it scans recent messages; then polls continuously. Subject/sender substring and regex rules drive permanent deletion via IMAP EXPUNGE. Whitelist support for safe senders. Zero external dependencies beyond stdlib.",
    category: "Tools",
    tags: ["Python", "IMAP SSL", "Regex", "systemd", "Automation"],
    color: "#ef4444",
    accentGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #7f1d1d 100%)",
    year: "2024",
    status: "Shipped",
    featured: false,
    metrics: ["systemd service", "stdlib only", "IMAP EXPUNGE"],
  },

  // ── CLIENT WORK ────────────────────────────────────────────────────────────
  {
    id: "tikr",
    title: "Tikr / BuildAFR",
    subtitle: "Construction Delivery OS",
    description:
      "Marketing website and platform for Tikr — a construction delivery operating system for the African market.",
    longDescription:
      "Tikr is a construction logistics OS targeting African markets. Built the marketing website (buildafr-web) with Vite + TypeScript + Tailwind, configured Vercel deployment pipeline, and contributed to the product platform.",
    category: "Client Work",
    tags: ["TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    color: "#f97316",
    accentGradient: "linear-gradient(135deg, #f97316 0%, #ea580c 50%, #7c2d12 100%)",
    year: "2024",
    status: "Live",
    featured: false,
    github: "https://github.com/devdanny2024/buildafr-web",
    live: "https://tikr-web.vercel.app",
    metrics: ["Construction OS", "African market", "Vercel deployed"],
  },
  {
    id: "oran-system",
    title: "Oran System",
    subtitle: "Full-Stack Operations Platform",
    description:
      "Comprehensive management and operations system with 221+ commits — full-stack TypeScript with Next.js front and backend.",
    longDescription:
      "A substantial full-stack operations platform built for a client, featuring separate frontend and backend Next.js applications. 221 commits demonstrate active, ongoing development. Deployed on Vercel.",
    category: "Client Work",
    tags: ["Next.js", "TypeScript", "Full-Stack", "Vercel"],
    color: "#6366f1",
    accentGradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #1e1b4b 100%)",
    year: "2024",
    status: "Live",
    featured: false,
    github: "https://github.com/devdanny2024/oran-system",
    live: "https://oran-system.vercel.app",
    metrics: ["221+ commits", "Full-stack monorepo", "Vercel deployed"],
  },
  {
    id: "mary-portfolio",
    title: "Mary Portfolio",
    subtitle: "Client Portfolio Suite (3 Versions)",
    description:
      "Three iterations of a professional portfolio site for a client — each version refining design and UX.",
    longDescription:
      "Designed and built three versions of a client portfolio site in TypeScript, progressively improving the design system, animations, and performance across iterations.",
    category: "Client Work",
    tags: ["TypeScript", "Next.js", "CSS", "Design Systems"],
    color: "#a855f7",
    accentGradient: "linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #581c87 100%)",
    year: "2024",
    status: "Shipped",
    featured: false,
    github: "https://github.com/devdanny2024/mary-portfolio",
    metrics: ["3 design iterations", "TypeScript", "Client delivery"],
  },

  // ── WEB3 / NFT ─────────────────────────────────────────────────────────────
  {
    id: "nft-transfer",
    title: "NFT Transfer",
    subtitle: "On-Chain NFT Transfer Tool",
    description: "TypeScript tool for transferring NFTs on-chain with a clean interface.",
    longDescription:
      "A focused TypeScript utility for NFT transfers. Built with modern web3 tooling and deployed as a Next.js app.",
    category: "Web3",
    tags: ["TypeScript", "Next.js", "Web3", "NFT", "Blockchain"],
    color: "#14b8a6",
    accentGradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #134e4a 100%)",
    year: "2024",
    status: "Shipped",
    featured: false,
    github: "https://github.com/devdanny2024/nft-transfer",
    metrics: ["On-chain transfers", "TypeScript", "Next.js"],
  },
  {
    id: "multitransfer",
    title: "MultiTransfer",
    subtitle: "Bulk Crypto Transfer Utility",
    description: "Batch cryptocurrency transfer tool built in TypeScript.",
    longDescription:
      "A TypeScript utility enabling bulk/multi-recipient cryptocurrency transfers in a single transaction, saving gas and time.",
    category: "Web3",
    tags: ["TypeScript", "Web3", "Crypto", "Smart Contracts"],
    color: "#0ea5e9",
    accentGradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0c4a6e 100%)",
    year: "2024",
    status: "Shipped",
    featured: false,
    github: "https://github.com/devdanny2024/multitransfer",
    metrics: ["Batch transfers", "Gas efficient", "TypeScript"],
  },

  // ── MOBILE ─────────────────────────────────────────────────────────────────
  {
    id: "forditva",
    title: "Forditva",
    subtitle: "Flutter Mobile App",
    description: "Cross-platform Flutter/Dart mobile application.",
    longDescription:
      "A Flutter-based cross-platform mobile application built with Dart, targeting both iOS and Android.",
    category: "Mobile",
    tags: ["Flutter", "Dart", "iOS", "Android", "Mobile"],
    color: "#38bdf8",
    accentGradient: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #0c4a6e 100%)",
    year: "2024",
    status: "Shipped",
    featured: false,
    github: "https://github.com/devdanny2024/forditva",
    metrics: ["Flutter/Dart", "Cross-platform", "iOS + Android"],
  },
  {
    id: "talk2mwe",
    title: "Talk2Mwe",
    subtitle: "Java Conversational App",
    description: "Conversational Android application built with Java.",
    longDescription:
      "A conversational Android app built in Java, enabling users to interact through natural language input.",
    category: "Mobile",
    tags: ["Java", "Android", "Conversational UI"],
    color: "#fb923c",
    accentGradient: "linear-gradient(135deg, #fb923c 0%, #f97316 50%, #7c2d12 100%)",
    year: "2023",
    status: "Shipped",
    featured: false,
    github: "https://github.com/devdanny2024/talk2mwe",
    metrics: ["Java", "Android", "Conversational UI"],
  },

  // ── TOOLS / OTHER ──────────────────────────────────────────────────────────
  {
    id: "quizie-app",
    title: "Quizie App",
    subtitle: "Interactive Quiz Platform",
    description: "TypeScript-powered interactive quiz application with real-time scoring.",
    longDescription:
      "A clean, interactive quiz platform built with TypeScript and Next.js featuring real-time scoring, multiple quiz categories, and responsive design.",
    category: "Tools",
    tags: ["TypeScript", "Next.js", "Interactive UI"],
    color: "#84cc16",
    accentGradient: "linear-gradient(135deg, #84cc16 0%, #65a30d 50%, #1a2e05 100%)",
    year: "2024",
    status: "Shipped",
    featured: false,
    github: "https://github.com/devdanny2024/quizie-app",
    metrics: ["TypeScript", "Real-time scoring", "Multi-category"],
  },
  {
    id: "mediaplayer",
    title: "Media Player",
    subtitle: "Vue.js Media Player",
    description: "Custom media player built with Vue.js featuring playlist management and custom controls.",
    longDescription:
      "A Vue.js-powered media player with custom playback controls, playlist management, and a polished UI.",
    category: "Tools",
    tags: ["Vue.js", "JavaScript", "Media", "HTML5 API"],
    color: "#4ade80",
    accentGradient: "linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #14532d 100%)",
    year: "2023",
    status: "Shipped",
    featured: false,
    github: "https://github.com/devdanny2024/mediaplayer",
    metrics: ["Vue.js", "Custom controls", "Playlist support"],
  },
  {
    id: "blvckcodes",
    title: "BlvckCodes",
    subtitle: "JavaScript Creative Project",
    description: "A JavaScript creative coding project under the BlvckCodes brand.",
    longDescription:
      "Creative JavaScript project built under the BlvckCodes brand — exploring interactive web experiences and creative coding techniques.",
    category: "Tools",
    tags: ["JavaScript", "Creative Coding", "Frontend"],
    color: "#a3a3a3",
    accentGradient: "linear-gradient(135deg, #a3a3a3 0%, #737373 50%, #171717 100%)",
    year: "2024",
    status: "Shipped",
    featured: false,
    github: "https://github.com/devdanny2024/blvckcodes",
    metrics: ["JavaScript", "Creative coding", "Frontend"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;

export const categories: ProjectCategory[] = [
  "Enterprise",
  "AI & Bots",
  "Fintech",
  "Client Work",
  "Web3",
  "Mobile",
  "Tools",
];
