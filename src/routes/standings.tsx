import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { listMyAttempts, listStandings, type Standing } from "@/lib/attempts";
import { formatDuration } from "@/lib/utils";
import { rankFor } from "@/lib/ranks";

export const Route = createFileRoute("/standings")({ component: StandingsPage });

function StandingsPage() {
  const board = useQuery({
    queryKey: ["standings"],
    queryFn: () => listStandings(),
    staleTime: 0,
  });
  const [email, setEmail] = useState("");
  const [mine, setMine] = useState<Standing[] | null>(null);
  const [lookupError, setLookupError] = useState<string | null>(null);
  const [looking, setLooking] = useState(false);

  async function lookup(e: FormEvent) {
    e.preventDefault();
    setLooking(true);
    setLookupError(null);
    try {
      const rows = await listMyAttempts({ data: { email: email.trim() } });
      setMine(rows);
      if (rows.length === 0) setLookupError("No attempts stored for that email.");
    } catch (err) {
      setLookupError(err instanceof Error ? err.message : "Lookup failed.");
    } finally {
      setLooking(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pb-16">
      <SiteHeader />
      <main className="space-y-10 pt-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">Board</p>
          <h1 className="mt-2 font-display text-4xl">Standings</h1>
          <p className="mt-2 max-w-lg text-sm text-muted">
            Ranked by percent, then by time. Email and phone never appear here.
          </p>
        </div>

        {board.isLoading ? (
          <p className="text-sm text-muted">Loading the board…</p>
        ) : board.isError ? (
          <p className="text-sm text-bad">Could not load standings.</p>
        ) : (board.data ?? []).length === 0 ? (
          <p className="text-sm text-muted">Empty hall. Sit the exam to open the board.</p>
        ) : (
          <ol className="overflow-hidden rounded-xl border border-border bg-surface">
            {(board.data ?? []).map((row, i) => (
              <li
                key={row.id}
                className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-border px-4 py-3 last:border-b-0 sm:grid-cols-[2.5rem_1fr_auto_auto_auto]"
              >
                <span className="font-mono text-sm text-faint">{i + 1}</span>
                <span className="truncate text-sm text-fg">{row.playerName}</span>
                <Badge tone={row.passed ? "ok" : "neutral"} className="hidden sm:inline-flex">
                  {rankFor(row.percent).title}
                </Badge>
                <span className="hidden font-mono text-xs tabular-nums text-muted sm:inline">
                  {formatDuration(row.durationSeconds)}
                </span>
                <span className="text-right font-mono text-sm tabular-nums">{row.percent}%</span>
              </li>
            ))}
          </ol>
        )}

        <form
          onSubmit={lookup}
          className="space-y-3 rounded-xl border border-border bg-surface p-5"
        >
          <h2 className="font-display text-xl">Find my scores</h2>
          <p className="text-sm text-muted">
            Enter the email you registered with. Only that email’s attempts are returned.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex-1 space-y-1.5">
              <Label htmlFor="lookup-email">Email</Label>
              <Input
                id="lookup-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
              />
            </div>
            <Button type="submit" className="sm:mt-6" disabled={looking}>
              {looking ? "Looking…" : "Look up"}
            </Button>
          </div>
          {lookupError ? <p className="text-sm text-bad">{lookupError}</p> : null}
          {mine && mine.length > 0 ? (
            <ul className="divide-y divide-border pt-2">
              {mine.map((row) => (
                <li key={row.id} className="flex items-center justify-between py-2 text-sm">
                  <span>
                    {row.score}/{row.total} · {rankFor(row.percent).title}
                  </span>
                  <span className="font-mono tabular-nums text-muted">{row.percent}%</span>
                </li>
              ))}
            </ul>
          ) : null}
        </form>
      </main>
    </div>
  );
}
