import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { DEMO_ITEMS } from "@/content/landing";

import { SectionShell } from "./section-shell";

export function DemoShowcaseSection() {
  return (
    <SectionShell
      id="examples"
      eyebrow="Demo Showcase"
      title="Example demos"
      description="Sample sites we built to show what your business could look like online. Your version would be tailored to you."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {DEMO_ITEMS.map((demo, index) => (
          <article
            key={demo.id}
            className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition hover:-translate-y-0.5 hover:border-[color:var(--color-secondary-info)]"
          >
            <div className="mb-5 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]">
              <a
                href={demo.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${demo.title} in a new tab`}
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={demo.imageSrc}
                    alt={demo.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top transition duration-300 group-hover:scale-[1.01]"
                    priority={index === 0}
                  />
                </div>
              </a>
            </div>

            <div className="space-y-3">
              <p className="inline-flex w-fit rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted-foreground)]">
                Sample - {demo.industry}
              </p>
              <h3 className="text-lg font-semibold tracking-tight">{demo.title}</h3>
              <p className="text-sm leading-6 text-[var(--color-muted-foreground)]">
                <span className="font-medium text-[var(--color-foreground)]">Before:</span>{" "}
                {demo.problem}
              </p>
              <p className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm leading-6 text-[var(--color-foreground)]">
                {demo.outcome}
              </p>
              <div className="pt-1">
                <a
                  href={demo.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] transition hover:opacity-80"
                >
                  View live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
                <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">Opens in new tab</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
