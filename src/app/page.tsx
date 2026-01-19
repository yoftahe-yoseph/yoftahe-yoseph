"use client";

import Image from "next/image";
import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { EXPERIENCE } from "@/data/experience";
import ContactInfo from "@/components/ContactInfo";

const skills = [
  "TypeScript", "Next.js", "Node.js", "MongoDB", "PostgreSQL",
  "React", "Tailwind", "Docker", "AWS", "Security"
];

export default function Home() {
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
        <section className="animate-fade-in mb-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-medium tracking-wider text-emerald-400 uppercase">
                  Yoftahe Yoseph
                </p>
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Full Stack Developer &
                  <span className="gradient-text block">Security Expert</span>
                </h1>
                <p className="text-lg text-zinc-300 max-w-2xl">
                  Building secure, scalable web applications with modern technologies.
                  Passionate about clean code and cybersecurity best practices.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold transition-all hover:scale-105">
                  Get In Touch
                </a>
                <a href="#projects" className="border border-zinc-600 hover:border-emerald-400 text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-zinc-800">
                  View Work
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <Image
                  src="/profile.jpg"
                  alt="Yoftahe Yoseph"
                  width={320}
                  height={320}
                  className="w-80 h-80 rounded-3xl object-cover shadow-2xl ring-4 ring-emerald-400/30"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Available for Work
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <article key={project.title} className="glass rounded-2xl p-6 hover-lift group" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-medium">
                    Live
                  </span>
                </div>
                <p className="text-zinc-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="bg-zinc-800 text-zinc-200 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} className="text-emerald-400 hover:text-emerald-300 text-sm font-medium inline-flex items-center gap-1">
                    View Project <span>↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

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
              
              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {formState === "loading" ? (
                  <><div className="spinner"></div> Sending...</>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </section>
        </div>

        {/* Skills */}
        <section className="mt-20 glass rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, i) => (
              <div key={skill} className="bg-zinc-800 hover:bg-zinc-700 rounded-lg p-4 text-center transition-all hover:scale-105" style={{animationDelay: `${i * 0.1}s`}}>
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}