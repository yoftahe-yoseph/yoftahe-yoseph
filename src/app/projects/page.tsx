import { PROJECTS } from "@/data/projects";
import { ProjectsFilter } from "@/features/projects";

export const metadata = {
  title: "Projects | Yoftahe Yoseph",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 text-zinc-300">Selected work focused on security and scalability.</p>
        <div className="mt-8">
          <ProjectsFilter />
        </div>
      </div>
    </div>
  );
}
