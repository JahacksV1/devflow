import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  contentClassName,
  children,
}: SectionShellProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={cn("scroll-mt-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 id={headingId} className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="text-pretty text-base leading-7 text-[var(--color-muted-foreground)] sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className={cn("mt-10", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
