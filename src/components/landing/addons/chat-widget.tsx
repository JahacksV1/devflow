"use client";

import { useMemo, useState } from "react";

const QUICK_QUESTIONS = [
  "Do you service 95821?",
  "Can I book a leak inspection this week?",
  "Do you offer same-day emergency repair?",
] as const;

const RESPONSES = [
  "Yes - we service that zip and nearby areas.",
  "We can. Earliest opening is Thursday at 10:30 AM.",
  "Yes. Emergency calls are monitored 24/7.",
] as const;

export function ChatWidget() {
  const [index, setIndex] = useState(0);
  const question = QUICK_QUESTIONS[index];
  const response = useMemo(() => RESPONSES[index], [index]);

  return (
    <div className="space-y-2 text-xs">
      <div className="ml-auto max-w-[90%] rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-2 text-[var(--color-muted-foreground)]">
        {question}
      </div>
      <div className="max-w-[92%] rounded-md border border-[color:var(--color-secondary-info)] bg-[color:var(--color-secondary-info-soft)] px-2.5 py-2 text-[var(--color-foreground)]">
        {response}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-[var(--color-muted-foreground)]">Bot is typing...</span>
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev + 1) % QUICK_QUESTIONS.length)}
          className="rounded-md border border-[var(--color-border)] px-2 py-1 text-[10px] font-medium text-[var(--color-muted-foreground)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-foreground)]"
        >
          Next prompt
        </button>
      </div>
    </div>
  );
}
