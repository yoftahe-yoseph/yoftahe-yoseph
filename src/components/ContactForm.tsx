"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }

      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      const detail = err instanceof Error ? err.message : "Unknown error";
      setError(detail);
      setFormState("error");
    }
  };

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm text-zinc-200" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring"
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-zinc-200" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring"
          placeholder="you@example.com"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-zinc-200" htmlFor="message">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[140px] w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring"
          placeholder="What are you building?"
        />
      </div>
      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
      {formState === "success" && (
        <p className="text-sm text-emerald-300" role="status">
          Message sent. I&apos;ll get back soon!
        </p>
      )}
      <button
        type="submit"
        disabled={formState === "loading"}
        className="flex w-full items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:opacity-70"
      >
        {formState === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
