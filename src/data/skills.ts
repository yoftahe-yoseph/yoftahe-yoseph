export type SkillCategory = {
  category: string;
  items: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["TypeScript", "Next.js", "React", "Tailwind", "Accessibility"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "AWS", "CI/CD", "NGINX"],
  },
  {
    category: "Security",
    items: ["OWASP", "RBAC", "JWT", "ARX Crypto"],
  },
];
