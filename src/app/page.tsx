"use client";

import Image from "next/image";
import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { EXPERIENCE } from "@/data/experience";
import { SKILLS } from "@/data/skills";
import ContactInfo from "@/components/ContactInfo";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  const focusAreas = [
    {
      title: "Secure web apps",
      body: "Full-stack builds with hardened auth, RBAC, and threat-aware APIs that ship fast and stay resilient.",
      tags: ["Next.js", "Node.js", "Auth", "RBAC", "OWASP"],
    },
    {
      title: "Data-rich experiences",
      body: "Interactive dashboards, live filters, and data visualizations with crisp UX and low latency.",
      tags: ["TypeScript", "React", "MongoDB", "PostgreSQL", "Caching"],
    },
    {
      title: "AI & automation",
      body: "Task-focused assistants, CV/OCR pipelines, and secure workflow bots with clear guardrails.",
      tags: ["LangChain", "OpenCV", "FastAPI", "Messaging", "LLM Safety"],
    },
  ];

  const deliverySteps = [
    {
      title: "Discover",
      detail: "Clarify goals, constraints, and risks; align on success metrics and security posture.",
    },
    {
      title: "Design",
      detail: "Architecture, data flow, and UI states; define contracts and error paths before coding.",
    },
    {
      title: "Build",
      detail: "Incremental delivery with feature flags, accessibility passes, and perf budgets enforced.",
    },
    {
      title: "Harden & launch",
      detail: "Security review, load checks, and observability hooks so launches are predictable.",
    },
  ];
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setFormState("success");
      setName(""); setEmail(""); setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <Reveal className="mb-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="eyebrow">Yoftahe Yoseph</p>
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Full Stack Developer &<span className="gradient-text block">Security Expert</span>
                </h1>
                <p className="text-lg text-zinc-300 max-w-2xl">
                  Building secure, scalable products with a security-first mindset. I deliver fast UX, hardened APIs, and production-grade systems that are easy to evolve.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="#projects" icon={<span>↗</span>}>
                  View Projects
                </Button>
                <Button href="/cv.pdf" variant="secondary">
                  Download CV
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <Image
                  src="/profile.jpg"
                  alt="Yoftahe Yoseph"
                  width={320}
                  height={320}
                  sizes="(min-width: 1024px) 320px, 60vw"
                  className="w-80 h-80 rounded-3xl object-cover shadow-2xl ring-4 ring-emerald-400/30"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Available for Work
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Focus areas */}
        <Reveal className="mb-20" id="focus">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What I build</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <Card key={area.title} title={area.title} subtitle={area.body} className="h-full">
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Reveal>

        {/* Projects */}
        <Reveal className="mb-20" id="projects">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-zinc-300 mb-8 max-w-3xl mx-auto">
            A sample of shipped work across marketplaces, secure data exchange, computer vision, and task-focused assistants. All are production-minded with security and observability built in.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <Card key={project.title} title={project.title} subtitle={project.description} className="group" as="article">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <Button href={project.link} variant="outline" size="md" icon={<span>↗</span>}>
                    View Project
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </Reveal>

        {/* Experience & Contact */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Experience */}
          <section className="lg:col-span-2 glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
            <div className="space-y-6">
              {EXPERIENCE.map(exp => (
                <div key={exp.role} className="border-l-2 border-emerald-400 pl-6 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">{exp.role}</h3>
                    <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-emerald-400 text-sm mb-3">{exp.company}</p>
                  <ul className="text-zinc-300 text-sm space-y-1">
                    {exp.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h2>
            <p className="text-zinc-300 text-sm mb-6">Ready to build something amazing together?</p>
            
            <ContactInfo />
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:border-emerald-400 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:border-emerald-400 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
              />
              
              {error && <p className="text-red-400 text-sm">{error}</p>}
              {formState === "success" && <p className="text-emerald-400 text-sm">Message sent successfully!</p>}
              
              <Button type="submit" fullWidth disabled={formState === "loading"}>
                {formState === "loading" ? (
                  <><div className="spinner"></div> Sending...</>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </section>
        </div>

        {/* Skills */}
        <section className="mt-20 glass rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Tech Stack</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {SKILLS.map((group) => (
              <Card key={group.category} title={group.category} className="bg-zinc-900/40">
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Delivery approach */}
        <Reveal className="mt-16 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">How I deliver</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {deliverySteps.map((step) => (
              <Card key={step.title} title={step.title} subtitle={step.detail} className="h-full" />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}