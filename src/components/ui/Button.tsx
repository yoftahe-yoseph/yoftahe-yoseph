import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  icon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-emerald-500 to-cyan-400 text-black hover:from-emerald-400 hover:to-cyan-300 shadow-elevated",
  secondary:
    "bg-zinc-900 text-foreground border border-zinc-800 hover:border-emerald-500/60 hover:text-white",
  outline:
    "text-foreground border border-zinc-700 hover:border-emerald-500/80 bg-transparent",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon,
  fullWidth,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const widthClass = fullWidth ? "w-full" : "";
  const composed = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={composed} aria-label={typeof children === "string" ? children : undefined}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={composed} {...rest}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
