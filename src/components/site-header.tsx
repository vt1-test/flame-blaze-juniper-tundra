import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PodiumMark } from "@/components/podium-mark";
import { cn } from "@/lib/utils";

export function SiteHeader({
  compact = false,
  right,
}: {
  compact?: boolean;
  right?: ReactNode;
}) {
  return (
    <header
      className={cn(
        "flex items-center justify-between gap-3",
        compact ? "py-3" : "py-5",
      )}
    >
      <Link to="/" className="flex items-center gap-2.5 text-fg">
        <PodiumMark className="size-8" />
        <span className="font-display text-lg tracking-tight">Podium</span>
      </Link>
      {right ?? (
        <nav className="flex items-center gap-1 text-sm text-muted">
          <Link
            to="/standings"
            className="rounded-md px-3 py-2 hover:bg-surface-2 hover:text-fg"
          >
            Standings
          </Link>
        </nav>
      )}
    </header>
  );
}
