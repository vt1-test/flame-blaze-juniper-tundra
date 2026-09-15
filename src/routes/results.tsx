import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SiteHeader } from "@/components/site-header";
import { useExamStore } from "@/lib/exam-store";
import { QUESTIONS } from "@/lib/questions";
import { domainBreakdown, gradeExam, gradeQuestion } from "@/lib/scoring";
import { rankFor } from "@/lib/ranks";
import { formatDuration, maskPhone } from "@/lib/utils";

export const Route = createFileRoute("/results")({ component: ResultsPage });

function ResultsPage() {
  const player = useExamStore((s) => s.player);
  const answers = useExamStore((s) => s.answers);
  const startedAt = useExamStore((s) => s.startedAt);
  const finishedAt = useExamStore((s) => s.finishedAt);
  const bestStreak = useExamStore((s) => s.bestStreak);
  const saved = useExamStore((s) => s.saved);
  const retryExam = useExamStore((s) => s.retryExam);
  const navigate = useNavigate();

  if (!player || !startedAt) {
    return (
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4">
        <SiteHeader />
        <div className="flex flex-1 flex-col items-start justify-center gap-4">
          <h1 className="font-display text-3xl">No exam on file</h1>
          <p className="text-sm text-muted">Register and take the stand to see a result here.</p>
          <Button asChild>
            <Link to="/play">Enter the hall</Link>
          </Button>
        </div>
      </div>
    );
  }

  const grade = gradeExam(answers);
  const rank = rankFor(grade.percent);
  const duration = Math.max(
    1,
    Math.floor(((finishedAt ?? Date.now()) - startedAt) / 1000),
  );
  const misses = QUESTIONS.filter((q) => !gradeQuestion(q, answers[q.id]));
  const domains = domainBreakdown(answers);

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pb-16">
      <SiteHeader />
      <main className="space-y-8 pt-4">
        <section className="overflow-hidden rounded-xl border border-border bg-surface p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
            {saved ? "Result saved" : "Local result"}
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl">{player.name}</h1>
              <p className="mt-2 text-sm text-muted">{rank.blurb}</p>
              <p className="mt-2 text-xs text-faint">
                {player.email}
                <span className="mx-2 text-border-strong">·</span>
                {maskPhone(player.phone)}
                {saved ? " · stored with this attempt" : " · not posted yet"}
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-6xl tabular-nums leading-none">
                {grade.percent}
                <span className="text-3xl text-muted">%</span>
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone={grade.passed ? "ok" : "bad"}>
              {grade.passed ? "Pass" : "Not yet"}
            </Badge>
            <Badge>{rank.title}</Badge>
            <Badge>
              {grade.score}/{grade.total} correct
            </Badge>
            <Badge>Best streak {bestStreak}</Badge>
            <Badge>{formatDuration(duration)}</Badge>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/standings">Open standings</Link>
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              retryExam();
              void navigate({ to: "/play" });
            }}
          >
            Sit again
          </Button>
          <Button asChild variant="ghost">
            <Link to="/">Home</Link>
          </Button>
        </div>

        <section className="space-y-4">
          <h2 className="font-display text-xl">By domain</h2>
          <ul className="space-y-3">
            {domains.map((row) => (
              <li key={row.domain} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-fg">{row.domain}</span>
                  <span className="font-mono text-xs tabular-nums text-muted">
                    {row.score}/{row.total}
                  </span>
                </div>
                <Progress value={row.percent} />
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl">Review</h2>
          {misses.length === 0 ? (
            <p className="text-sm text-muted">Clean sheet. Every scenario held.</p>
          ) : (
            <ul className="space-y-3">
              {misses.map((q, i) => (
                <li
                  key={q.id}
                  className="rounded-lg border border-border bg-surface p-4"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-faint">
                    Miss {i + 1} · {q.domain}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-fg">{q.prompt}</p>
                  <p className="mt-2 text-sm text-muted">{q.explanation}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
