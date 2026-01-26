import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function Card({ title, subtitle, footer, children, className = "", as = "article" }: CardProps) {
  const Component = as;
  return (
    <Component className={`glass rounded-2xl p-6 hover-lift ${className}`}>
      {(title || subtitle) && (
        <header className="mb-4">
          {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
          {subtitle && <p className="text-sm text-muted mt-1">{subtitle}</p>}
        </header>
      )}
      {children}
      {footer && <footer className="mt-4">{footer}</footer>}
    </Component>
  );
}
