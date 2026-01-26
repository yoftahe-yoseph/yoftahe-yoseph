"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="text-sm font-semibold text-emerald-400">
          YY
        </Link>
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-nav"
          className="md:hidden rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-foreground hover:border-emerald-500/60"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <nav id="site-nav" className="hidden items-center gap-2 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm transition duration-300 ease-out ${
                  active
                    ? "bg-emerald-500 text-black"
                    : "text-zinc-300 hover:bg-zinc-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className={`md:hidden ${open ? "block" : "hidden"}`} role="dialog" aria-modal="true">
        <nav className="mx-auto max-w-6xl px-6 pb-3">
          <div className="glass rounded-xl p-3">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm transition duration-300 ease-out ${
                    active
                      ? "bg-emerald-500 text-black"
                      : "text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
