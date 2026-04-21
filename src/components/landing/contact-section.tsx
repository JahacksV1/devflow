import { Mail, MessageSquareText, Phone, UserCircle2 } from "lucide-react";

import { SectionShell } from "./section-shell";

const CONTACT_ACTIONS = [
  {
    id: "call",
    label: "Call us",
    value: "(555) 010-0200",
    href: "tel:+15550100200",
    icon: Phone,
  },
  {
    id: "text",
    label: "Text us",
    value: "(555) 010-0200",
    href: "sms:+15550100200?body=Hey%2C%20I%20want%20a%20free%20video%20site%20review.",
    icon: MessageSquareText,
  },
  {
    id: "email",
    label: "Email us",
    value: "hello@yourbrand.com",
    href: "mailto:hello@yourbrand.com?subject=Free%20Video%20Site%20Review",
    icon: Mail,
  },
] as const;

const FOUNDERS = ["Jahamiel", "Caprise"] as const;

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Get a free video review of your website"
      description="Send your current site and we will send back a short personalized review showing what is holding conversions back and what we would improve."
    >
      <div className="space-y-6">
        <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-7">
          <h3 className="text-lg font-semibold tracking-tight">Tell us where your site needs help</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--color-muted-foreground)]">
            We will send a short video from Jahamiel or Caprise walking through your current website,
            what could be losing you calls, and the upgrades we recommend.
          </p>
          <form className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Request free video review">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-sm font-medium text-[var(--color-foreground)]">
                Name
              </label>
              <input
                id="contact-name"
                name="contact-name"
                type="text"
                placeholder="Your name"
                className="h-12 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm text-[var(--color-foreground)] outline-none ring-[var(--color-primary)] transition focus-visible:ring-2"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-channel"
                className="text-sm font-medium text-[var(--color-foreground)]"
              >
                Phone or email
              </label>
              <input
                id="contact-channel"
                name="contact-channel"
                type="text"
                placeholder="(555) 010-0200 or you@example.com"
                className="h-12 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm text-[var(--color-foreground)] outline-none ring-[var(--color-primary)] transition focus-visible:ring-2"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="website-url" className="text-sm font-medium text-[var(--color-foreground)]">
                Website URL (optional)
              </label>
              <input
                id="website-url"
                name="website-url"
                type="url"
                placeholder="https://yourwebsite.com"
                className="h-12 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm text-[var(--color-foreground)] outline-none ring-[var(--color-primary)] transition focus-visible:ring-2"
              />
            </div>
            <p className="sm:col-span-2 text-xs text-[var(--color-muted-foreground)]">
              No website yet? That is okay. Share your business and goals in your message when we
              follow up.
            </p>
            <button
              type="button"
              className="sm:col-span-2 inline-flex h-12 w-full items-center justify-center rounded-md bg-[var(--color-primary)] px-6 text-sm font-semibold text-[var(--color-primary-foreground)] transition hover:brightness-110"
            >
              Get my free video review
            </button>
          </form>
        </article>

        <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-7">
          <h3 className="text-lg font-semibold tracking-tight">Built by real people, not a sales team</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
            We build every site ourselves and handle communication directly from start to launch.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <div
                key={founder}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted-foreground)]">
                  <UserCircle2 className="h-7 w-7" aria-hidden />
                </div>
                <p className="mt-3 text-sm font-semibold text-[var(--color-foreground)]">{founder}</p>
                <p className="text-xs text-[var(--color-muted-foreground)]">Founder</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm font-medium text-[var(--color-foreground)]">
            Prefer to contact us directly?
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {CONTACT_ACTIONS.map((action) => {
              const Icon = action.icon;

              return (
                <a
                  key={action.id}
                  href={action.href}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 text-sm font-medium text-[var(--color-muted-foreground)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-foreground)]"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  <span className="leading-5">
                    <span className="block">{action.label}</span>
                    <span className="block text-xs opacity-80">{action.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-[var(--color-muted-foreground)]">
            Placeholder contact details are shown above for now.
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
