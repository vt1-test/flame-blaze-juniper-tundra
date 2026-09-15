import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { listStandings } from "@/lib/attempts";
import { PASS_PERCENT, TOTAL_QUESTIONS } from "@/lib/questions";
import { useExamStore } from "@/lib/exam-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const player = useExamStore((s) => s.player);
  const startedAt = useExamStore((s) => s.startedAt);
  const finishedAt = useExamStore((s) => s.finishedAt);
  const inProgress = Boolean(startedAt && !finishedAt && player);

  const standings = useQuery({
    queryKey: ["standings"],
    queryFn: () => listStandings(),
    staleTime: 0,
  });

  const leaders = (standings.data ?? []).slice(0, 5);

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4 sm:px-6">
      <SiteHeader />
      <main className="flex flex-1 flex-col gap-12 pb-16 pt-6 sm:pt-10">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Communication Skills for Business
            </p>
            <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl">
              Take the stand.
              <span className="block italic text-muted">Prove you can be heard.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted">
              Forty-two live scenarios from CSB Mock Exam 1. Register, lock in each answer,
              and post a score. Names go on the board. Email and phone stay with your result.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/play">
                  {inProgress ? "Resume exam" : "Enter the hall"}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/standings">View standings</Link>
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
            <Stat label="Questions" value={String(TOTAL_QUESTIONS)} />
            <Stat label="Pass mark" value={`${PASS_PERCENT}%`} />
            <Stat label="Timer" value="50 min" />
          </dl>
        </section>

        <section className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          <Step n="01" title="Register" body="Name for the board. Email and phone stored privately with your attempt." />
          <Step n="02" title="Lock in" body="True/false, matching, ordering, and image questions. Instant feedback, running streak." />
          <Step n="03" title="Post it" body="A rank, domain breakdown, and a place on the public standings." />
        </section>

        <section className="grid gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-xl">Recent standings</h2>
            <Link to="/standings" className="text-sm text-muted hover:text-fg">
              Full board
            </Link>
          </div>
          {leaders.length === 0 ? (
            <p className="text-sm text-muted">No scores yet. Be the first name on the board.</p>
          ) : (
            <ol className="divide-y divide-border">
              {leaders.map((row, i) => (
                <li key={row.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                  <span className="flex items-center gap-3">
                    <span className="w-6 font-mono text-faint">{i + 1}</span>
                    <span className="text-fg">{row.playerName}</span>
                  </span>
                  <span className="font-mono tabular-nums text-muted">{row.percent}%</span>
                </li>
              ))}
            </ol>
          )}
        </section>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 bg-surface px-2 py-4 text-center sm:px-4 sm:py-5">
      <dt className="text-xs text-faint">{label}</dt>
      <dd className="mt-1 font-display text-2xl tabular-nums sm:text-3xl">{value}</dd>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="bg-surface p-5 sm:p-6">
      <p className="font-mono text-xs text-faint">{n}</p>
      <h2 className="mt-2 font-display text-xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
