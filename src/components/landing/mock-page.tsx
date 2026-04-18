import { cn } from "@/lib/utils";

type HighlightElement = "hero" | "call" | "form";

type MockPageProps = {
  highlightElement?: HighlightElement;
  className?: string;
};

export function MockPage({ highlightElement, className }: MockPageProps) {
  const getHighlight = (target: HighlightElement) =>
    highlightElement === target
      ? "ring-1 ring-[color:rgba(244,162,58,0.75)] shadow-[0_0_0_1px_rgba(244,162,58,0.25)_inset]"
      : "";

  return (
    <div className={cn("flex h-full flex-col bg-[var(--color-background)] p-4", className)}>
      <div className={cn("rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3", getHighlight("hero"))}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
          Sacramento Roofing
        </p>
        <h3 className="mt-2 text-sm font-semibold leading-5">
          Fast roof repair from a local licensed crew.
        </h3>
        <p className="mt-2 text-[11px] leading-4 text-[var(--color-muted-foreground)]">
          Storm response, leak repair, and full replacements.
        </p>
      </div>

      <button
        type="button"
        className={cn(
          "mt-3 rounded-lg border border-[color:rgba(244,162,58,0.45)] bg-[color:rgba(244,162,58,0.14)] px-3 py-2 text-left text-[11px] font-semibold text-[var(--color-foreground)]",
          getHighlight("call"),
        )}
      >
        Call now - (916) 555-0192
      </button>

      <div className="mt-3 flex gap-2 text-[10px] text-[var(--color-muted-foreground)]">
        <span className="rounded-full border border-[var(--color-border)] px-2 py-1">Emergency repair</span>
        <span className="rounded-full border border-[var(--color-border)] px-2 py-1">Free estimate</span>
      </div>

      <div className={cn("mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3", getHighlight("form"))}>
        <p className="text-[11px] font-semibold">Request a quick quote</p>
        <div className="mt-2 space-y-2 text-[10px] text-[var(--color-muted-foreground)]">
          <div className="rounded-md border border-[var(--color-border)] px-2 py-1.5">Name</div>
          <div className="rounded-md border border-[var(--color-border)] px-2 py-1.5">Phone</div>
          <div className="rounded-md border border-[var(--color-border)] px-2 py-1.5">Service needed</div>
          <div className="rounded-md border border-[color:rgba(244,162,58,0.45)] bg-[color:rgba(244,162,58,0.14)] px-2 py-1.5 text-[var(--color-foreground)]">
            Send request
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] text-[var(--color-muted-foreground)]">
        <div className="rounded-md border border-[var(--color-border)] px-1 py-1.5">Roof Repair</div>
        <div className="rounded-md border border-[var(--color-border)] px-1 py-1.5">Inspections</div>
        <div className="rounded-md border border-[var(--color-border)] px-1 py-1.5">Replacement</div>
      </div>
    </div>
  );
}
