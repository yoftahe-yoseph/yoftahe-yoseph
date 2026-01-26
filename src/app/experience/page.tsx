export const metadata = {
  title: "Experience | Yoftahe Yoseph",
};

import { EXPERIENCE } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-zinc-50">
      <div className="mb-8 space-y-3 text-left sm:mb-10">
        <h1 className="text-3xl font-semibold">Experience</h1>
      </div>
      <div className="space-y-6">
        {EXPERIENCE.map((exp) => (
          <Reveal key={exp.role}>
            <div className="space-y-2 glass rounded-2xl p-6">
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
          </Reveal>
        ))}
      </div>
    </div>
  );
}
