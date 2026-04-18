"use client";

import { useMemo, useState } from "react";

const SERVICE_MULTIPLIERS = {
  repair: 4.2,
  replacement: 6.4,
  inspection: 2.6,
} as const;

export function QuoteWidget() {
  const [squareFeet, setSquareFeet] = useState("1800");
  const [service, setService] = useState<keyof typeof SERVICE_MULTIPLIERS>("replacement");
  const normalizedSquareFeet = Math.max(500, Number(squareFeet.replace(/\D/g, "")) || 500);

  const estimate = useMemo(() => {
    const base = normalizedSquareFeet * SERVICE_MULTIPLIERS[service];
    return {
      low: Math.round(base * 0.9),
      high: Math.round(base * 1.12),
    };
  }, [normalizedSquareFeet, service]);

  return (
    <div className="space-y-2 text-xs text-[var(--color-muted-foreground)]">
      <label className="block">
        <span className="mb-1 block text-[10px] uppercase tracking-[0.08em]">Roof size (sq ft)</span>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={squareFeet}
          onChange={(event) => setSquareFeet(event.target.value.replace(/\D/g, "").slice(0, 5))}
          className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-1.5 text-[var(--color-foreground)] outline-none ring-0 [appearance:textfield] focus:border-[color:var(--color-secondary-info)] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
      </label>
      <div>
        <span className="mb-1 block text-[10px] uppercase tracking-[0.08em]">Service type</span>
        <div className="grid grid-cols-3 gap-1.5">
          {(["repair", "replacement", "inspection"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setService(option)}
              className={`rounded-md border px-2 py-1.5 text-[10px] font-medium capitalize transition ${
                service === option
                  ? "border-[color:var(--color-secondary-info)] bg-[color:var(--color-secondary-info-soft)] text-[var(--color-foreground)]"
                  : "border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:border-[color:var(--color-secondary-info)]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <p className="rounded-md border border-[color:var(--color-secondary-info)] bg-[color:var(--color-secondary-info-soft)] px-2 py-1.5 text-[var(--color-foreground)]">
        Estimated range: ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()}
      </p>
    </div>
  );
}
