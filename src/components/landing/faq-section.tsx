import { FAQ_ITEMS } from "@/content/landing";

import { SectionShell } from "./section-shell";

export function FaqSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Common questions"
    >
      <div className="space-y-3">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.id}
            className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"
          >
            <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-[var(--color-foreground)] marker:content-none">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted-foreground)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
