import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ProximityArt } from "@/components/proximity-images";
import {
  type AnswerValue,
  type Question,
} from "@/lib/questions";
import { cn } from "@/lib/utils";

type Props = {
  question: Question;
  answer: AnswerValue | undefined;
  locked: boolean;
  onChange: (value: AnswerValue) => void;
};

export function QuestionView({ question, answer, locked, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
          {question.domain}
        </p>
        <h2 className="font-display text-2xl leading-snug text-fg">
          {question.prompt}
        </h2>
        <p className="text-sm text-muted">{question.instruction}</p>
      </div>
      {question.kind === "single" && (
        <ChoiceList
          options={question.options}
          selected={typeof answer === "string" ? answer : ""}
          locked={locked}
          correct={question.correct}
          onSelect={(id) => onChange(id)}
        />
      )}
      {question.kind === "multi" && (
        <MultiList
          options={question.options}
          selected={Array.isArray(answer) ? answer : []}
          locked={locked}
          correct={question.correct}
          selectCount={question.selectCount}
          onToggle={(id) => {
            const current = Array.isArray(answer) ? answer : [];
            const next = current.includes(id)
              ? current.filter((x) => x !== id)
              : current.length >= question.selectCount
                ? current
                : [...current, id];
            onChange(next);
          }}
        />
      )}
      {question.kind === "match" && (
        <MatchList
          question={question}
          selected={
            typeof answer === "object" && answer && !Array.isArray(answer)
              ? answer
              : {}
          }
          locked={locked}
          onChange={onChange}
        />
      )}
      {question.kind === "order" && (
        <OrderList
          question={question}
          order={Array.isArray(answer) ? answer : question.options.map((o) => o.id)}
          locked={locked}
          onChange={onChange}
        />
      )}
      {question.kind === "image" && (
        <ImageGrid
          question={question}
          selected={typeof answer === "string" ? answer : ""}
          locked={locked}
          onSelect={(id) => onChange(id)}
        />
      )}
    </div>
  );
}

function ChoiceList({
  options,
  selected,
  locked,
  correct,
  onSelect,
}: {
  options: { id: string; text: string }[];
  selected: string;
  locked: boolean;
  correct: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid gap-2">
      {options.map((option) => {
        const isOn = selected === option.id;
        const isRight = locked && option.id === correct;
        const isWrong = locked && isOn && option.id !== correct;
        return (
          <button
            key={option.id}
            type="button"
            disabled={locked}
            onClick={() => onSelect(option.id)}
            className={cn(
              "min-h-12 rounded-lg border px-4 py-3 text-left text-sm leading-snug transition-colors",
              isOn && !locked && "border-accent bg-surface-2",
              !isOn && !locked && "border-border bg-surface hover:border-border-strong",
              isRight && "border-ok bg-ok/10",
              isWrong && "border-bad bg-bad/10",
              locked && !isRight && !isWrong && "border-border bg-surface opacity-70",
            )}
          >
            {option.text}
          </button>
        );
      })}
    </div>
  );
}

function MultiList({
  options,
  selected,
  locked,
  correct,
  selectCount,
  onToggle,
}: {
  options: { id: string; text: string }[];
  selected: string[];
  locked: boolean;
  correct: string[];
  selectCount: number;
  onToggle: (id: string) => void;
}) {
  const correctSet = new Set(correct);
  return (
    <div className="grid gap-2">
      <p className="text-xs text-faint">Choose {selectCount}</p>
      {options.map((option) => {
        const isOn = selected.includes(option.id);
        const isRight = locked && correctSet.has(option.id);
        const isWrong = locked && isOn && !correctSet.has(option.id);
        return (
          <button
            key={option.id}
            type="button"
            disabled={locked}
            onClick={() => onToggle(option.id)}
            className={cn(
              "flex min-h-12 items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm leading-snug transition-colors",
              isOn && !locked && "border-accent bg-surface-2",
              !isOn && !locked && "border-border bg-surface hover:border-border-strong",
              isRight && "border-ok bg-ok/10",
              isWrong && "border-bad bg-bad/10",
              locked && !isRight && !isWrong && "border-border bg-surface opacity-70",
            )}
          >
            <span
              className={cn(
                "mt-0.5 grid size-4 shrink-0 place-items-center rounded-[4px] border",
                isOn ? "border-accent bg-accent text-accent-fg" : "border-border-strong",
              )}
            >
              {isOn ? <Check className="size-3" strokeWidth={3} /> : null}
            </span>
            {option.text}
          </button>
        );
      })}
    </div>
  );
}

function MatchList({
  question,
  selected,
  locked,
  onChange,
}: {
  question: Extract<Question, { kind: "match" }>;
  selected: Record<string, string>;
  locked: boolean;
  onChange: (value: AnswerValue) => void;
}) {
  return (
    <div className="grid gap-3">
      {question.items.map((item) => {
        const value = selected[item.id] ?? "";
        const right = question.correct[item.id];
        const isRight = locked && value === right;
        const isWrong = locked && value !== "" && value !== right;
        return (
          <div
            key={item.id}
            className={cn(
              "rounded-lg border p-3 sm:p-4",
              isRight && "border-ok bg-ok/10",
              isWrong && "border-bad bg-bad/10",
              !locked && "border-border bg-surface",
              locked && !isRight && !isWrong && "border-border bg-surface",
            )}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <p className="text-sm leading-snug text-fg">{item.text}</p>
              <div className="flex flex-wrap gap-2 sm:shrink-0 sm:justify-end">
                {(item.labels
                  ? question.labels.filter((label) => item.labels!.includes(label.id))
                  : question.labels
                ).map((label) => {
                  const on = value === label.id;
                  return (
                    <button
                      key={label.id}
                      type="button"
                      disabled={locked}
                      onClick={() => onChange({ ...selected, [item.id]: label.id })}
                      className={cn(
                        "h-10 min-w-20 rounded-md border px-3 text-sm",
                        on
                          ? "border-accent bg-accent text-accent-fg"
                          : "border-border bg-bg text-muted hover:text-fg",
                      )}
                    >
                      {label.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function OrderList({
  question,
  order,
  locked,
  onChange,
}: {
  question: Extract<Question, { kind: "order" }>;
  order: string[];
  locked: boolean;
  onChange: (value: AnswerValue) => void;
}) {
  const byId = Object.fromEntries(question.options.map((o) => [o.id, o]));
  const ids = order.length === question.options.length ? order : question.options.map((o) => o.id);
  const move = (index: number, dir: -1 | 1) => {
    const next = [...ids];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    const tmp = next[index]!;
    next[index] = next[target]!;
    next[target] = tmp;
    onChange(next);
  };
  return (
    <ol className="grid gap-2">
      {ids.map((id, index) => {
        const option = byId[id];
        if (!option) return null;
        const expected = question.correct[index];
        const isRight = locked && id === expected;
        const isWrong = locked && id !== expected;
        return (
          <li
            key={id}
            className={cn(
              "flex items-stretch gap-2 rounded-lg border p-2",
              isRight && "border-ok bg-ok/10",
              isWrong && "border-bad bg-bad/10",
              !locked && "border-border bg-surface",
            )}
          >
            <span className="grid size-10 shrink-0 place-items-center font-mono text-sm text-muted">
              {index + 1}
            </span>
            <p className="flex-1 self-center py-2 text-sm leading-snug">{option.text}</p>
            {!locked && (
              <div className="flex flex-col">
                <button
                  type="button"
                  className="grid size-10 place-items-center text-muted hover:text-fg disabled:opacity-30"
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  aria-label="Move up"
                >
                  <ChevronUp className="size-4" />
                </button>
                <button
                  type="button"
                  className="grid size-10 place-items-center text-muted hover:text-fg disabled:opacity-30"
                  onClick={() => move(index, 1)}
                  disabled={index === ids.length - 1}
                  aria-label="Move down"
                >
                  <ChevronDown className="size-4" />
                </button>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function ImageGrid({
  question,
  selected,
  locked,
  onSelect,
}: {
  question: Extract<Question, { kind: "image" }>;
  selected: string;
  locked: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {question.options.map((option) => {
        const isOn = selected === option.id;
        const isRight = locked && option.id === question.correct;
        const isWrong = locked && isOn && option.id !== question.correct;
        return (
          <button
            key={option.id}
            type="button"
            disabled={locked}
            onClick={() => onSelect(option.id)}
            className={cn(
              "overflow-hidden rounded-lg border text-left",
              isOn && !locked && "border-accent",
              !isOn && !locked && "border-border hover:border-border-strong",
              isRight && "border-ok",
              isWrong && "border-bad",
            )}
          >
            <ProximityArt image={option.image} selected={isOn || isRight} className="aspect-[16/11]" />
            <span className="block px-3 py-2 text-xs text-muted">{option.caption}</span>
          </button>
        );
      })}
    </div>
  );
}
