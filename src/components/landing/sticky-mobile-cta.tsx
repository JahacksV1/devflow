export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[rgba(11,11,12,0.95)] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl gap-2">
        <a
          href="tel:+15103064137"
          className="inline-flex h-11 flex-1 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-card)] text-sm font-semibold text-[var(--color-foreground)]"
        >
          Call
        </a>
        <a
          href="#contact"
          className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-[var(--color-primary)] text-sm font-semibold text-[var(--color-primary-foreground)]"
        >
          Get mockup
        </a>
      </div>
    </div>
  );
}
