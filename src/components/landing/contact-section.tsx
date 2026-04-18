import { Mail, MessageSquareText, Phone } from "lucide-react";

import { SectionShell } from "./section-shell";

const CONTACT_ACTIONS = [
  {
    id: "call",
    label: "Call",
    href: "tel:+15555550123",
    icon: Phone,
  },
  {
    id: "text",
    label: "Text",
    href: "sms:+15555550123?body=Hey%2C%20I%20want%20a%20free%20website%20mockup.",
    icon: MessageSquareText,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@example.com?subject=Website%20Mockup%20Request",
    icon: Mail,
  },
] as const;

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Want something like this for your business?"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
          <h3 className="text-lg font-semibold tracking-tight">Get a free mockup</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
            Drop your website URL and we will send a direction for a cleaner, faster, mobile-first
            redesign.
          </p>
          <form className="mt-6 space-y-3" aria-label="Request free mockup">
            <label htmlFor="website-url" className="text-sm font-medium text-[var(--color-foreground)]">
              Website URL
            </label>
            <input
              id="website-url"
              name="website-url"
              type="url"
              placeholder="https://yourwebsite.com"
              className="h-12 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm text-[var(--color-foreground)] outline-none ring-[var(--color-primary)] transition focus-visible:ring-2"
            />
            <button
              type="button"
              className="inline-flex h-12 w-full items-center justify-center rounded-md bg-[var(--color-primary)] px-6 text-sm font-semibold text-[var(--color-primary-foreground)] transition hover:brightness-110"
            >
              Send my mockup request
            </button>
          </form>
        </article>

        <article className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
          <h3 className="text-lg font-semibold tracking-tight">Or reach out directly</h3>
          <div className="rounded-xl border border-dashed border-[var(--color-border)] p-4">
            <p className="text-sm font-semibold">Founder block placeholder</p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
              Add real founder photo + name here. Example: &quot;Hi, I&apos;m [Name], I build these
              sites directly and handle communication personally.&quot;
            </p>
          </div>
          <div className="grid gap-3">
            {CONTACT_ACTIONS.map((action) => {
              const Icon = action.icon;

              return (
                <a
                  key={action.id}
                  href={action.href}
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm font-medium text-[var(--color-muted-foreground)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-foreground)]"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {action.label}
                </a>
              );
            })}
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
