import { BadgeCheck, Gauge, MessageCircleMore, MousePointerClick, Smartphone } from "lucide-react";

import { WHY_THIS_WORKS_POINTS } from "@/content/landing";

import { MockPage } from "./mock-page";
import { PhoneFrame } from "./phone-frame";
import { SectionShell } from "./section-shell";

export function WhyThisWorksSection() {
  const POINT_ICONS = [Smartphone, MousePointerClick, Gauge, BadgeCheck, MessageCircleMore] as const;

  return (
    <SectionShell
      id="why-this-works"
      eyebrow="Why This Works"
      title="What makes these sites convert"
    >
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <ul className="grid gap-4 sm:grid-cols-2">
          {WHY_THIS_WORKS_POINTS.map((point, index) => {
            const Icon = POINT_ICONS[index] ?? BadgeCheck;
            const iconTone =
              index % 2 === 0
                ? "border-[color:var(--color-secondary-info)] bg-[color:var(--color-secondary-info-soft)] text-[color:var(--color-secondary-info)]"
                : "border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-muted-foreground)]";

            return (
              <li
                key={point}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4"
              >
                <div className={`mb-3 inline-flex rounded-md border p-2 ${iconTone}`}>
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <p className="text-sm leading-6 text-[var(--color-muted-foreground)]">{point}</p>
              </li>
            );
          })}
        </ul>

        <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
            What customers notice first
          </p>
          <div className="mt-4 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-background)] p-4">
            <div className="relative mx-auto w-fit">
              <PhoneFrame>
                <MockPage />
              </PhoneFrame>

              <div className="pointer-events-none absolute -right-28 top-8 hidden md:flex items-center gap-2">
                <span className="h-px w-12 bg-[color:var(--color-secondary-info)]" aria-hidden />
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--color-secondary-info)] bg-[var(--color-card)] text-xs font-semibold text-[color:var(--color-secondary-info)]">
                  1
                </span>
                <span className="rounded-md border border-[color:var(--color-secondary-info)] bg-[color:var(--color-secondary-info-soft)] px-2 py-1 text-[11px] text-[var(--color-foreground)]">
                  Clear hero message
                </span>
              </div>

              <div className="pointer-events-none absolute -right-[7.5rem] top-44 hidden md:flex items-center gap-2">
                <span className="h-px w-14 bg-[color:var(--color-secondary-info)]" aria-hidden />
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--color-secondary-info)] bg-[var(--color-card)] text-xs font-semibold text-[color:var(--color-secondary-info)]">
                  2
                </span>
                <span className="rounded-md border border-[color:var(--color-secondary-info)] bg-[color:var(--color-secondary-info-soft)] px-2 py-1 text-[11px] text-[var(--color-foreground)]">
                  One-tap call button
                </span>
              </div>

              <div className="pointer-events-none absolute -right-[7.5rem] top-[22rem] hidden md:flex items-center gap-2">
                <span className="h-px w-14 bg-[color:var(--color-secondary-info)]" aria-hidden />
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--color-secondary-info)] bg-[var(--color-card)] text-xs font-semibold text-[color:var(--color-secondary-info)]">
                  3
                </span>
                <span className="rounded-md border border-[color:var(--color-secondary-info)] bg-[color:var(--color-secondary-info-soft)] px-2 py-1 text-[11px] text-[var(--color-foreground)]">
                  Fast quote form
                </span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 md:hidden">
              <li className="rounded-md border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-muted-foreground)]">
                1. Clear hero message
              </li>
              <li className="rounded-md border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-muted-foreground)]">
                2. One-tap call button
              </li>
              <li className="rounded-md border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-muted-foreground)]">
                3. Fast quote form
              </li>
            </ul>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
