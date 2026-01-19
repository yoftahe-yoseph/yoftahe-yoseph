export default function ContactInfo() {
  return (
    <div className="mt-4 grid gap-2 text-sm">
      <a
        href="tel:+251961613758"
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-zinc-100 hover:border-zinc-600"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        +251 961 613 758
      </a>
      <a
        href="mailto:yoftaheyoseph5@gmail.com"
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-zinc-100 hover:border-zinc-600"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        yoftaheyoseph5@gmail.com
      </a>
      <a
        href="https://x.com/YosephYoft34823"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-zinc-100 hover:border-zinc-600"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        X (Twitter): @YosephYoft34823
      </a>
    </div>
  );
}
