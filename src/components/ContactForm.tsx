"use client";

import { useState } from "react";
import { Button, Input, Textarea } from "@/components/ui";

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
      <Input
        id="name"
        name="name"
        label="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />
      <Textarea
        id="message"
        name="message"
        label="Project details"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What are you building?"
      />
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
      <Button type="submit" fullWidth disabled={formState === "loading"}>
        {formState === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
