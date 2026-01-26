import type { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  error?: string;
  hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, error, hint, className = "", id, ...rest }: InputProps) {
  const inputId = id || rest.name || undefined;
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm text-zinc-200" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none ring-cyan-400/40 focus:border-cyan-400 focus:ring ${className}`}
        {...rest}
      />
      {hint && !error && <p className="text-xs text-zinc-400">{hint}</p>}
      {error && (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
