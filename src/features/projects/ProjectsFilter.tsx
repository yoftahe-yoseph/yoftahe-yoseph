"use client";

import { useMemo, useState } from "react";
import { PROJECTS, type Project } from "@/data/projects";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

const FILTER_ALL = "All";

function getTechSet(projects: Project[]): string[] {
  const set = new Set<string>();
  projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
  return [FILTER_ALL, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
}

export default function ProjectsFilter() {
  const [filter, setFilter] = useState<string>(FILTER_ALL);

  const filters = useMemo(() => getTechSet(PROJECTS), []);
  const filtered = useMemo(
    () => (filter === FILTER_ALL ? PROJECTS : PROJECTS.filter((p) => p.tech.includes(filter))),
    [filter]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = f === filter;
          return (
            <Button
              key={f}
              variant={active ? "primary" : "outline"}
              size="md"
              onClick={() => setFilter(f)}
              aria-pressed={active}
            >
              {f}
            </Button>
          );
        })}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((project) => (
          <Reveal key={project.title}>
            <Card title={project.title} subtitle={project.description}>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
              {project.link && (
                <Button href={project.link} variant="outline" className="mt-4" icon={<span>↗</span>}>
                  GitHub / Live
                </Button>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
