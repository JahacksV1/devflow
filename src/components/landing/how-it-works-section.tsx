import { CheckCheck, PencilRuler, Rocket, Send } from "lucide-react";

import { PROCESS_STEPS } from "@/content/landing";

import { SectionShell } from "./section-shell";

export function HowItWorksSection() {
  const STEP_ICONS = [Send, PencilRuler, CheckCheck, Rocket] as const;

  return (
    <SectionShell
      id="how-it-works"
      eyebrow="How It Works"
      title="From outreach to launch"
    >
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((step, index) => {
          const Icon = STEP_ICONS[index] ?? Send;

          return (
            <li
              key={step.id}
              className="relative rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"
            >
              {index < PROCESS_STEPS.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-[var(--color-primary)] lg:block"
                >
                  {"->"}
                </span>
              ) : null}
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex rounded-md border border-[color:rgba(244,162,58,0.4)] bg-[color:rgba(244,162,58,0.12)] p-2">
                  <Icon className="h-4 w-4 text-[var(--color-primary)]" aria-hidden />
                </div>
                <div className="flex items-center gap-2">
                  <p className="inline-flex rounded-full border border-[color:rgba(244,162,58,0.5)] bg-[color:rgba(244,162,58,0.12)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">
                    {step.timeline}
                  </p>
                  <p className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-sm font-semibold text-[var(--color-primary)]">
                    {index + 1}
                  </p>
                </div>
              </div>
              <h3 className="text-base font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>
      <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3">
        <p className="text-sm text-[var(--color-muted-foreground)]">
          Ready to start? We can usually go from outreach to launch in about 5-10 business days.
        </p>
        <a
          href="#contact"
          className="text-sm font-semibold text-[var(--color-primary)] transition hover:opacity-80"
        >
          Start with a free mockup {"->"}
        </a>
      </div>
    </SectionShell>
  );
}
