export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 — Present",
    bullets: [
      "Architected performant APIs and responsive UI systems.",
      "Led end-to-end delivery from design to monitoring.",
    ],
  },
  {
    role: "Cybersecurity Enthusiast",
    company: "Self-Directed",
    period: "2022 — Present",
    bullets: [
      "Practiced ethical security testing and vulnerability triage.",
      "Embedded security reviews into CI/CD processes.",
    ],
  },
  {
    role: "Interinstitutional Data Exchange Portal & Chatbot",
    company: "Mesob Center, Addis Ababa",
    period: "Ongoing",
    bullets: [
      "Developed secure data exchange and chatbot using ARX-based crypto for messaging.",
      "Built document submission platform between institutions with roles and audit trails.",
      "Added e-signature for authenticated approvals and traceable sign-offs.",
    ],
  },
];
