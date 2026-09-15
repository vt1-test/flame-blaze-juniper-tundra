import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { QuestionView } from "@/components/question-view";
import { SiteHeader } from "@/components/site-header";
import { submitAttempt } from "@/lib/attempts";
import { useExamStore } from "@/lib/exam-store";
import {
  EXAM_SECONDS,
  QUESTIONS,
  TOTAL_QUESTIONS,
  type AnswerValue,
} from "@/lib/questions";
import { gradeQuestion, isAnswerComplete } from "@/lib/scoring";
import { cn, formatDuration } from "@/lib/utils";

export const Route = createFileRoute("/play")({ component: PlayPage });

function PlayPage() {
  const player = useExamStore((s) => s.player);
  const startedAt = useExamStore((s) => s.startedAt);
  const finishedAt = useExamStore((s) => s.finishedAt);

  if (!player) return <RegisterGate />;
  if (finishedAt) return <AlreadyFinished />;
  if (!startedAt) return <Briefing />;
  return <ExamRoom />;
}

function RegisterGate() {
  const setPlayer = useExamStore((s) => s.setPlayer);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  function submit(e: FormEvent) {
    e.preventDefault();
    const n = name.trim();
    const em = email.trim();
    const ph = phone.trim();
    if (n.length < 2) return setError("Enter the name you want on the board.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) return setError("Enter a valid email.");
    if (ph.replace(/\D/g, "").length < 7) return setError("Enter a phone number.");
    setError(null);
    setPlayer({ name: n, email: em, phone: ph });
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4">
      <SiteHeader />
      <form onSubmit={submit} className="flex flex-1 flex-col justify-center gap-6 pb-16">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">Register</p>
          <h1 className="font-display text-3xl">Before you take the stand</h1>
          <p className="text-sm leading-relaxed text-muted">
            Your name appears on the public standings. Email and phone are stored with your
            result and are not shown on the board.
          </p>
        </div>
        <div className="space-y-4 rounded-xl border border-border bg-surface p-5">
          <Field label="Full name" htmlFor="name">
            <Input
              id="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jordan Hale"
            />
          </Field>
          <Field label="Email" htmlFor="email">
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
            />
          </Field>
          <Field label="Phone" htmlFor="phone">
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 555 010 1234"
            />
          </Field>
          {error ? <p className="text-sm text-bad">{error}</p> : null}
        </div>
        <Button type="submit" size="lg">
          Continue
        </Button>
      </form>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

function Briefing() {
  const player = useExamStore((s) => s.player)!;
  const startExam = useExamStore((s) => s.startExam);
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4">
      <SiteHeader />
      <div className="flex flex-1 flex-col justify-center gap-6 pb-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">Briefing</p>
        <h1 className="font-display text-3xl">Welcome, {player.name.split(" ")[0]}.</h1>
        <ul className="space-y-3 text-sm leading-relaxed text-muted">
          <li>{TOTAL_QUESTIONS} scenario questions. Lock each answer to see if you were right.</li>
          <li>Skip and jump with the question rail. Streaks build on consecutive locks.</li>
          <li>The clock runs 50 minutes. Finish early whenever you are ready — your result is saved to the board.</li>
        </ul>
        <Button size="lg" onClick={() => startExam()}>
          Begin exam
        </Button>
      </div>
    </div>
  );
}

function AlreadyFinished() {
  const navigate = useNavigate();
  useEffect(() => {
    void navigate({ to: "/results" });
  }, [navigate]);
  return null;
}

function ExamRoom() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const answers = useExamStore((s) => s.answers);
  const locked = useExamStore((s) => s.locked);
  const currentIndex = useExamStore((s) => s.currentIndex);
  const startedAt = useExamStore((s) => s.startedAt)!;
  const streak = useExamStore((s) => s.streak);
  const setAnswer = useExamStore((s) => s.setAnswer);
  const lockQuestion = useExamStore((s) => s.lockQuestion);
  const goTo = useExamStore((s) => s.goTo);
  const markSaved = useExamStore((s) => s.markSaved);
  const [now, setNow] = useState(Date.now());
  const [saving, setSaving] = useState(false);
  const [confirmFinish, setConfirmFinish] = useState(false);
  const savingRef = useRef(false);
  const persistRef = useRef<() => Promise<void>>(async () => {});
  const railRef = useRef<HTMLButtonElement | null>(null);
  const feedbackRef = useRef<HTMLDivElement | null>(null);

  const question = QUESTIONS[currentIndex]!;
  const answer = answers[question.id];
  const isLocked = Boolean(locked[question.id]);
  const complete = isAnswerComplete(question, answer);
  const remaining = Math.max(0, EXAM_SECONDS - Math.floor((now - startedAt) / 1000));
  const answeredCount = useMemo(
    () => QUESTIONS.filter((q) => isAnswerComplete(q, answers[q.id])).length,
    [answers],
  );
  const unanswered = TOTAL_QUESTIONS - answeredCount;
  const lockedCorrect = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const q of QUESTIONS) {
      if (locked[q.id]) map[q.id] = gradeQuestion(q, answers[q.id]);
    }
    return map;
  }, [locked, answers]);

  useEffect(() => {
    if (question.kind === "order" && !Array.isArray(answers[question.id])) {
      setAnswer(
        question.id,
        question.options.map((option) => option.id),
      );
    }
  }, [question, answers, setAnswer]);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    railRef.current?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [currentIndex]);

  useEffect(() => {
    if (!isLocked) return;
    feedbackRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [isLocked, question.id]);

  async function persistAndLeave() {
    if (savingRef.current) return;
    savingRef.current = true;
    setSaving(true);
    setConfirmFinish(false);
    const snapshot = useExamStore.getState();
    snapshot.finishExam();
    const durationSeconds = Math.min(
      EXAM_SECONDS,
      Math.max(1, Math.floor((Date.now() - startedAt) / 1000)),
    );
    try {
      const result = await submitAttempt({
        data: {
          name: snapshot.player!.name,
          email: snapshot.player!.email,
          phone: snapshot.player!.phone,
          answers: snapshot.answers,
          durationSeconds,
          streak: snapshot.bestStreak,
        },
      });
      markSaved(result.id);
      await queryClient.invalidateQueries({ queryKey: ["standings"] });
      toast.success("Result posted to the board.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save. Your local score still stands.");
    }
    await navigate({ to: "/results" });
  }

  persistRef.current = persistAndLeave;

  useEffect(() => {
    if (remaining === 0) void persistRef.current();
  }, [remaining]);

  function lockIn() {
    if (!complete || isLocked) return;
    const ok = gradeQuestion(question, answer);
    lockQuestion(question.id, ok);
  }

  function next() {
    if (currentIndex >= TOTAL_QUESTIONS - 1) {
      requestFinish();
      return;
    }
    goTo(currentIndex + 1);
  }

  function requestFinish() {
    if (unanswered > 0) {
      setConfirmFinish(true);
      return;
    }
    void persistAndLeave();
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pb-36">
      <SiteHeader
        compact
        right={
          <div className="flex items-center gap-3 font-mono text-xs tabular-nums text-muted">
            <span>Streak {streak}</span>
            <span className={remaining < 120 ? "text-bad" : ""}>
              {formatDuration(remaining)}
            </span>
          </div>
        }
      />
      <Progress value={(answeredCount / TOTAL_QUESTIONS) * 100} />
      <div className="mt-2 flex items-center justify-between text-xs text-faint">
        <span>
          Question {currentIndex + 1} of {TOTAL_QUESTIONS}
        </span>
        <span>{answeredCount} answered</span>
      </div>

      <div className="-mx-4 mt-3 overflow-x-auto px-4">
        <div className="flex w-max gap-1 pb-1">
          {QUESTIONS.map((q, i) => {
            const done = isAnswerComplete(q, answers[q.id]);
            const frozen = Boolean(locked[q.id]);
            const ok = lockedCorrect[q.id];
            return (
              <button
                key={q.id}
                ref={i === currentIndex ? railRef : undefined}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Question ${i + 1}`}
                aria-current={i === currentIndex ? "step" : undefined}
                className={cn(
                  "grid size-11 shrink-0 place-items-center rounded-md font-mono text-xs transition-colors",
                  i === currentIndex && "bg-accent text-accent-fg",
                  i !== currentIndex && frozen && ok && "bg-ok/20 text-fg",
                  i !== currentIndex && frozen && !ok && "bg-bad/20 text-fg",
                  i !== currentIndex && !frozen && done && "bg-surface-2 text-fg",
                  i !== currentIndex && !frozen && !done && "bg-surface text-faint",
                )}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <QuestionView
          question={question}
          answer={answer}
          locked={isLocked}
          onChange={(value: AnswerValue) => setAnswer(question.id, value)}
        />
        {isLocked && (
          <div
            ref={feedbackRef}
            className={cn(
              "mt-5 scroll-mb-36 rounded-lg border px-4 py-3 text-sm leading-relaxed",
              gradeQuestion(question, answer)
                ? "border-ok/40 bg-ok/10 text-fg"
                : "border-bad/40 bg-bad/10 text-fg",
            )}
          >
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {gradeQuestion(question, answer) ? "Correct" : "Not quite"}
            </p>
            {question.explanation}
          </div>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl flex-wrap gap-2 px-4">
        <Button
          type="button"
          variant="secondary"
          onClick={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          Back
        </Button>
        {!isLocked ? (
          <Button type="button" className="flex-1" onClick={lockIn} disabled={!complete}>
            Lock in
          </Button>
        ) : (
          <Button type="button" className="flex-1" onClick={next} disabled={saving}>
            {currentIndex >= TOTAL_QUESTIONS - 1
              ? saving
                ? "Saving…"
                : "See results"
              : "Next question"}
          </Button>
        )}
        {!isLocked && currentIndex < TOTAL_QUESTIONS - 1 ? (
          <Button type="button" variant="ghost" onClick={next}>
            Skip
          </Button>
        ) : null}
        <Button type="button" variant="ghost" onClick={requestFinish} disabled={saving}>
          Finish
        </Button>
        </div>
      </div>

      {confirmFinish ? (
        <div className="fixed inset-0 z-30 grid place-items-end bg-bg/70 p-4 sm:place-items-center">
          <div className="w-full max-w-md rounded-xl border border-border bg-surface p-5 shadow-soft">
            <h2 className="font-display text-xl">Submit this exam?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {unanswered === 0
                ? "Every question has an answer. Post your score to the board."
                : `${unanswered} question${unanswered === 1 ? "" : "s"} still have no answer. Those will be marked wrong.`}
            </p>
            <div className="mt-5 flex gap-2">
              <Button type="button" variant="secondary" onClick={() => setConfirmFinish(false)}>
                Keep going
              </Button>
              <Button type="button" className="flex-1" onClick={() => void persistAndLeave()} disabled={saving}>
                {saving ? "Saving…" : "Submit score"}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
