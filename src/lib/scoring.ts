import {
  QUESTIONS,
  PASS_PERCENT,
  type AnswerValue,
  type Question,
} from "./questions";

function sameSet(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const set = new Set(a);
  return b.every((id) => set.has(id));
}

function sameRecord(a: Record<string, string>, b: Record<string, string>): boolean {
  const keys = Object.keys(b);
  if (keys.length !== Object.keys(a).length) return false;
  return keys.every((key) => a[key] === b[key]);
}

export function isAnswerComplete(question: Question, answer: AnswerValue | undefined): boolean {
  if (answer == null) return false;
  switch (question.kind) {
    case "single":
    case "image":
      return typeof answer === "string" && answer.length > 0;
    case "multi":
      return Array.isArray(answer) && answer.length === question.selectCount;
    case "order":
      return Array.isArray(answer) && answer.length === question.options.length;
    case "match":
      if (typeof answer !== "object" || Array.isArray(answer) || answer == null) return false;
      return question.items.every((item) => typeof answer[item.id] === "string");
  }
}

export function gradeQuestion(question: Question, answer: AnswerValue | undefined): boolean {
  if (answer == null) return false;
  switch (question.kind) {
    case "single":
    case "image":
      return typeof answer === "string" && answer === question.correct;
    case "multi":
      return Array.isArray(answer) && sameSet(answer, question.correct);
    case "order":
      return (
        Array.isArray(answer) &&
        answer.length === question.correct.length &&
        answer.every((id, i) => id === question.correct[i])
      );
    case "match":
      return typeof answer === "object" && !Array.isArray(answer) && sameRecord(answer, question.correct);
  }
}

export type QuestionResult = {
  id: string;
  ok: boolean;
  answer: AnswerValue | null;
};

export type ExamGrade = {
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  details: QuestionResult[];
};

export function gradeExam(answers: Record<string, AnswerValue>): ExamGrade {
  const details: QuestionResult[] = QUESTIONS.map((question) => ({
    id: question.id,
    ok: gradeQuestion(question, answers[question.id]),
    answer: answers[question.id] ?? null,
  }));
  const score = details.filter((d) => d.ok).length;
  const total = QUESTIONS.length;
  const percent = total === 0 ? 0 : Math.round((score / total) * 100);
  return { score, total, percent, passed: percent >= PASS_PERCENT, details };
}

export function domainBreakdown(
  answers: Record<string, AnswerValue>,
): { domain: string; score: number; total: number; percent: number }[] {
  const map = new Map<string, { score: number; total: number }>();
  for (const question of QUESTIONS) {
    const cur = map.get(question.domain) ?? { score: 0, total: 0 };
    cur.total += 1;
    if (gradeQuestion(question, answers[question.id])) cur.score += 1;
    map.set(question.domain, cur);
  }
  return [...map.entries()]
    .map(([domain, value]) => ({
      domain,
      score: value.score,
      total: value.total,
      percent: value.total === 0 ? 0 : Math.round((value.score / value.total) * 100),
    }))
    .sort((a, b) => b.percent - a.percent || a.domain.localeCompare(b.domain));
}
