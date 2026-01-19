export const metadata = {
  title: "Experience | Yoftahe Yoseph",
};

import { EXPERIENCE } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Experience</h1>
        <div className="mt-8 space-y-6">
          {EXPERIENCE.map((exp) => (
            <div key={exp.role} className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{exp.role}</p>
                <span className="text-xs text-zinc-400">{exp.period}</span>
              </div>
              <p className="text-sm text-zinc-300">{exp.company}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
