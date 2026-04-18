"use client";

import { useState } from "react";

const REVIEWS = [
  {
    id: "r1",
    author: "Sara M.",
    excerpt: "Showed up on time and fixed our leak quickly.",
    full: "Showed up on time, fixed our leak quickly, and explained every step clearly.",
  },
  {
    id: "r2",
    author: "Tony R.",
    excerpt: "The site finally looks professional and we get more calls.",
    full: "The site finally looks professional and we get more calls from the exact neighborhoods we target.",
  },
  {
    id: "r3",
    author: "Jamie L.",
    excerpt: "Quote request was easy and they responded in minutes.",
    full: "Quote request was easy on mobile and their team called me back within minutes.",
  },
] as const;

export function ReviewsWidget() {
  const [activeId, setActiveId] = useState<string>(REVIEWS[0].id);

  return (
    <div className="space-y-2 text-xs">
      {REVIEWS.map((review) => {
        const isActive = activeId === review.id;

        return (
          <button
            key={review.id}
            type="button"
            onMouseEnter={() => setActiveId(review.id)}
            onFocus={() => setActiveId(review.id)}
            className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-2 text-left transition hover:border-[color:var(--color-secondary-trust)]"
          >
            <p className="text-[10px] text-[color:var(--color-secondary-trust)]">5/5 stars</p>
            <p className="mt-1 font-medium text-[var(--color-foreground)]">{review.author}</p>
            <p className="mt-1 text-[10px] text-[var(--color-muted-foreground)]">
              {isActive ? review.full : review.excerpt}
            </p>
          </button>
        );
      })}
    </div>
  );
}
