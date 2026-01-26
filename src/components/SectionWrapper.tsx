import type { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
};

const paddingMap: Record<NonNullable<SectionWrapperProps["padding"]>, string> = {
  sm: "py-12",
  md: "py-16",
  lg: "py-20",
};

export default function SectionWrapper({
  id,
  title,
  eyebrow,
  description,
  children,
  className = "",
  padding = "md",
}: SectionWrapperProps) {
  const sectionPadding = paddingMap[padding];
  const headingId = title ? `${id ?? "section"}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`page-shell ${sectionPadding} ${className}`}
    >
      {(title || eyebrow || description) && (
        <div className="mb-8 space-y-3 text-left sm:mb-10">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 id={headingId} className="text-foreground">
              {title}
            </h2>
          )}
          {description && <p className="max-w-3xl text-muted">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
