"use client";

import { useState } from "react";

type UploadState = "idle" | "analyzing" | "done";

export function PhotoUploadWidget() {
  const [state, setState] = useState<UploadState>("idle");

  const handleUpload = () => {
    setState("analyzing");
    window.setTimeout(() => {
      setState("done");
    }, 1200);
  };

  return (
    <div className="space-y-2 text-xs">
      <button
        type="button"
        onClick={handleUpload}
        className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-2 text-left text-[10px] text-[var(--color-muted-foreground)] transition hover:border-[color:var(--color-secondary-info)]"
      >
        Upload roof photo
      </button>
      <div className="rounded-md border border-[var(--color-border)] px-2.5 py-2 text-[10px] text-[var(--color-muted-foreground)]">
        {state === "idle" && "No photo uploaded yet."}
        {state === "analyzing" && "Analyzing image... checking roof condition and size."}
        {state === "done" && "Detected moderate shingle wear. Recommend an inspection within 7 days."}
      </div>
    </div>
  );
}
