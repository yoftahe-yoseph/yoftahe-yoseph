export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Motion Detection System",
    description:
      "Real-time computer vision pipeline with ROI filtering, adaptive thresholds, and alerting hooks that integrate into security dashboards without false-positive noise.",
    tech: ["Python", "OpenCV", "NumPy", "FastAPI"],
  },
  {
    title: "Harar City Artisan Market Platform",
    description:
      "Marketplace connecting local artisans to buyers with curated listings, secure payments, and order tracking; optimized for low-bandwidth regions with resilient API design.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Mesob Center Data Exchange Portal & Chatbot",
    description:
      "Interinstitutional portal and chatbot using ARX-based encryption for secure messaging, document routing, and RBAC-backed audit trails, built for regulated environments.",
    tech: ["Next.js", "NestJS", "MongoDB", "ARX Crypto", "RBAC"],
  },
  {
    title: "Car Plate Number Recording System",
    description:
      "Automatic number plate recognition with OCR, event logging, and searchable archives; tuned for fast inference and reliable plate reads in variable lighting.",
    tech: ["Python", "OpenCV", "Tesseract OCR", "PostgreSQL"],
  },
  {
    title: "Chatbot for Institutional Support",
    description:
      "Task-oriented assistant integrated into the portal for guided submissions, secure Q&A, and context-aware workflows with guardrails against data leakage.",
    tech: ["Node.js", "TypeScript", "MongoDB", "LangChain"],
  },
];
