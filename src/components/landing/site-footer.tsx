export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-[var(--color-muted-foreground)] sm:px-8">
        <p className="font-medium text-[var(--color-foreground)]">[Brand Name]</p>
        <p>Modern websites for local service businesses.</p>
        <p>&copy; {new Date().getFullYear()} [Brand Name]. All rights reserved.</p>
      </div>
    </footer>
  );
}
