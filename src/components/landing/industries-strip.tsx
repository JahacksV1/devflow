import { INDUSTRIES } from "@/content/landing";

export function IndustriesStrip() {
  const duplicatedIndustries = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section aria-label="Industries we help" className="border-b border-[var(--color-border)] py-8">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">
            Built for local service businesses
          </p>
          <span className="text-xs text-[var(--color-muted-foreground)]">— roofing to home services</span>
        </div>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="marquee-track flex min-w-max items-center gap-3">
            {duplicatedIndustries.map((industry, index) => (
              <li
                key={`${industry}-${index}`}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-2 text-sm text-[var(--color-foreground)] transition hover:border-[color:rgba(244,162,58,0.55)]"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
