import type { ComponentType } from "react";

import { BellRing, Bot, Calculator, Camera, MapPinned, Star } from "lucide-react";

import { ADVANCED_ADDONS, type AdvancedAddonWidget } from "@/content/landing";

import { ChatWidget } from "./addons/chat-widget";
import { LeadAlertWidget } from "./addons/lead-alert-widget";
import { PhotoUploadWidget } from "./addons/photo-upload-widget";
import { QuoteWidget } from "./addons/quote-widget";
import { ReviewsWidget } from "./addons/reviews-widget";
import { ServiceAreaWidget } from "./addons/service-area-widget";
import { SectionShell } from "./section-shell";

const ICONS = {
  bot: Bot,
  calculator: Calculator,
  bell: BellRing,
  map: MapPinned,
  star: Star,
  camera: Camera,
} as const;

const WIDGETS: Record<AdvancedAddonWidget, ComponentType> = {
  chat: ChatWidget,
  quote: QuoteWidget,
  "lead-alert": LeadAlertWidget,
  "service-area": ServiceAreaWidget,
  reviews: ReviewsWidget,
  "photo-upload": PhotoUploadWidget,
};

export function AdvancedSection() {
  return (
    <SectionShell
      id="advanced"
      eyebrow="Optional Add-ons"
      title="Need more than just a website?"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ADVANCED_ADDONS.map((addon) => {
          const Icon = ICONS[addon.icon];
          const Widget = WIDGETS[addon.widget];
          const iconTone =
            addon.widget === "lead-alert"
              ? "border-[color:rgba(244,162,58,0.4)] bg-[color:rgba(244,162,58,0.12)] text-[var(--color-primary)]"
              : addon.widget === "service-area" || addon.widget === "reviews"
                ? "border-[color:var(--color-secondary-trust)] bg-[color:var(--color-secondary-trust-soft)] text-[color:var(--color-secondary-trust)]"
                : "border-[color:var(--color-secondary-info)] bg-[color:var(--color-secondary-info-soft)] text-[color:var(--color-secondary-info)]";

          return (
            <article
              key={addon.id}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`inline-flex rounded-md border p-2 ${iconTone}`}>
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <h3 className="text-base font-semibold tracking-tight">{addon.title}</h3>
              </div>
              <div className="mb-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-3">
                <Widget />
              </div>
              <p className="text-sm leading-6 text-[var(--color-muted-foreground)]">{addon.description}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
