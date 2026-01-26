export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800/60 bg-zinc-950/80">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-300">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} Yoftahe Yoseph</p>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-3">
            <a href="tel:+251961613758" className="rounded-full border border-zinc-800 px-3 py-1.5 transition duration-300 ease-out hover:border-emerald-500/60">
              +251 961 613 758
            </a>
            <a href="mailto:yoftaheyoseph5@gmail.com" className="rounded-full border border-zinc-800 px-3 py-1.5 transition duration-300 ease-out hover:border-emerald-500/60">
              yoftaheyoseph5@gmail.com
            </a>
            <a
              href="https://x.com/YosephYoft34823"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-800 px-3 py-1.5 transition duration-300 ease-out hover:border-emerald-500/60"
            >
              X (Twitter)
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
