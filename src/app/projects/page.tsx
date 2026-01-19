import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Projects | Yoftahe Yoseph",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 text-zinc-300">Selected work focused on security and scalability.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article key={project.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
