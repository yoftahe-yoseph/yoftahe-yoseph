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
      "Computer vision pipeline for real-time motion detection with region-of-interest filtering and alerting.",
    tech: ["Python", "OpenCV", "NumPy", "FastAPI"],
  },
  {
    title: "Harar City Artisan Market Platform",
    description:
      "Marketplace connecting local artisans to buyers with listings, secure payments, and order tracking.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Mesob Center Data Exchange Portal & Chatbot",
    description:
      "Interinstitutional portal and chatbot using ARX-based encryption/decryption for secure messaging and document workflows.",
    tech: ["Next.js", "NestJS", "MongoDB", "ARX Crypto", "RBAC"],
  },
  {
    title: "Car Plate Number Recording System",
    description:
      "Automatic number plate recognition (ANPR) with OCR, event logging, and searchable records.",
    tech: ["Python", "OpenCV", "Tesseract OCR", "PostgreSQL"],
  },
  {
    title: "Chatbot for Institutional Support",
    description:
      "Task-oriented assistant integrated into the portal for guided submissions, FAQs, and secure conversations.",
    tech: ["Node.js", "TypeScript", "MongoDB", "LangChain"],
  },
];
