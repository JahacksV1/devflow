import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
};

export function PhoneFrame({ children, className, screenClassName }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "mx-auto w-[280px] rounded-[2.2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-2 shadow-[0_28px_70px_-45px_rgba(0,0,0,0.75)]",
        className,
      )}
    >
      <div className="mb-2 flex justify-center">
        <span className="h-1.5 w-16 rounded-full bg-[var(--color-border)]" aria-hidden />
      </div>
      <div
        className={cn(
          "min-h-[560px] overflow-hidden rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-background)]",
          screenClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
