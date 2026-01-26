import type { ReactNode, HTMLAttributes } from "react";

type BadgeProps = {
  variant?: "default" | "success" | "info" | "outline";
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

const styles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-zinc-800 text-zinc-100",
  success: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  info: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  outline: "border border-zinc-700 text-zinc-200",
};

export default function Badge({ variant = "default", children, className = "", ...rest }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles[variant]} ${className}`} {...rest}>
      {children}
    </span>
  );
}
