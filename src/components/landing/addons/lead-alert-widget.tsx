"use client";

import { useEffect, useState } from "react";

export function LeadAlertWidget() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!showAlert) {
      return;
    }

    const timeout = window.setTimeout(() => setShowAlert(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [showAlert]);

  return (
    <div className="relative h-[108px] overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-2 text-xs">
      <button
        type="button"
        onClick={() => setShowAlert(true)}
        className="rounded-md border border-[var(--color-border)] px-2 py-1 text-[10px] font-medium text-[var(--color-muted-foreground)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-foreground)]"
      >
        Trigger lead alert
      </button>
      <div
        className={`absolute bottom-2 left-2 right-2 rounded-md border border-[color:rgba(244,162,58,0.45)] bg-[var(--color-card)] p-2 transition-all duration-300 ${
          showAlert ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <p className="font-semibold text-[var(--color-foreground)]">New website lead: John S.</p>
        <p className="mt-1 text-[10px] text-[var(--color-muted-foreground)]">
          Requested roof repair quote - tap to call in one click.
        </p>
      </div>
    </div>
  );
}
