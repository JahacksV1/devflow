"use client";

import { useState } from "react";

const COVERED_ZIPS = new Set(["95821", "95825", "95864", "95608", "95610", "95758"]);

export function ServiceAreaWidget() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<"covered" | "not-covered" | null>(null);

  const handleCheck = () => {
    const normalized = zip.trim();
    if (!normalized) {
      setResult(null);
      return;
    }

    setResult(COVERED_ZIPS.has(normalized) ? "covered" : "not-covered");
  };

  return (
    <div className="space-y-2 text-xs">
      <label className="block text-[10px] uppercase tracking-[0.08em] text-[var(--color-muted-foreground)]">
        Enter zip code
      </label>
      <div className="flex gap-2">
        <input
          value={zip}
          onChange={(event) => setZip(event.target.value.slice(0, 5))}
          placeholder="95821"
          className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-1.5 text-[var(--color-foreground)] outline-none focus:border-[color:var(--color-secondary-trust)]"
        />
        <button
          type="button"
          onClick={handleCheck}
          className="rounded-md border border-[var(--color-border)] px-2 py-1.5 text-[10px] font-medium text-[var(--color-muted-foreground)] transition hover:border-[color:var(--color-secondary-trust)] hover:text-[var(--color-foreground)]"
        >
          Check
        </button>
      </div>
      <p
        className={`rounded-md border px-2 py-1.5 text-[10px] ${
          result === "covered"
            ? "border-[color:var(--color-secondary-trust)] bg-[color:var(--color-secondary-trust-soft)] text-[var(--color-foreground)]"
            : "border-[var(--color-border)] text-[var(--color-muted-foreground)]"
        }`}
      >
        {result === "covered" && "Great news - this area is covered."}
        {result === "not-covered" && "Outside current service area. We can still review special requests."}
        {result === null && "Coverage result appears here after checking."}
      </p>
    </div>
  );
}
