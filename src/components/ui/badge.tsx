import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "neutral",
  children,
}: {
  className?: string;
  tone?: "neutral" | "ok" | "bad" | "accent";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
        tone === "neutral" && "bg-surface-2 text-muted",
        tone === "ok" && "bg-ok text-ok-fg",
        tone === "bad" && "bg-bad text-bad-fg",
        tone === "accent" && "bg-accent text-accent-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}
