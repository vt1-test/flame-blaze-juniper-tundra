import { create } from "zustand";
import { persist } from "zustand/middleware";
import { QUESTIONS, type AnswerValue } from "./questions";
import { gradeExam, type ExamGrade } from "./scoring";

export type Player = {
  name: string;
  email: string;
  phone: string;
};

export type LockedMap = Record<string, boolean>;

type ExamState = {
  player: Player | null;
  answers: Record<string, AnswerValue>;
  locked: LockedMap;
  currentIndex: number;
  startedAt: number | null;
  finishedAt: number | null;
  streak: number;
  bestStreak: number;
  attemptId: number | null;
  saved: boolean;
  setPlayer: (player: Player) => void;
  setAnswer: (id: string, value: AnswerValue) => void;
  lockQuestion: (id: string, correct: boolean) => void;
  goTo: (index: number) => void;
  startExam: () => void;
  finishExam: () => ExamGrade;
  markSaved: (attemptId: number) => void;
  retryExam: () => void;
  resetExam: () => void;
};

const initial = {
  player: null as Player | null,
  answers: {} as Record<string, AnswerValue>,
  locked: {} as LockedMap,
  currentIndex: 0,
  startedAt: null as number | null,
  finishedAt: null as number | null,
  streak: 0,
  bestStreak: 0,
  attemptId: null as number | null,
  saved: false,
};

export const useExamStore = create<ExamState>()(
  persist(
    (set, get) => ({
      ...initial,
      setPlayer: (player) => set({ player }),
      setAnswer: (id, value) =>
        set((state) => {
          const prev = state.answers[id];
          const next =
            value &&
            typeof value === "object" &&
            !Array.isArray(value) &&
            prev &&
            typeof prev === "object" &&
            !Array.isArray(prev)
              ? { ...prev, ...value }
              : value;
          return { answers: { ...state.answers, [id]: next } };
        }),
      lockQuestion: (id, correct) =>
        set((state) => {
          const streak = correct ? state.streak + 1 : 0;
          return {
            locked: { ...state.locked, [id]: true },
            streak,
            bestStreak: Math.max(state.bestStreak, streak),
          };
        }),
      goTo: (index) =>
        set({
          currentIndex: Math.max(0, Math.min(QUESTIONS.length - 1, index)),
        }),
      startExam: () =>
        set({
          answers: {},
          locked: {},
          currentIndex: 0,
          startedAt: Date.now(),
          finishedAt: null,
          streak: 0,
          bestStreak: 0,
          attemptId: null,
          saved: false,
        }),
      finishExam: () => {
        const grade = gradeExam(get().answers);
        set({ finishedAt: Date.now() });
        return grade;
      },
      markSaved: (attemptId) => set({ attemptId, saved: true }),
      retryExam: () =>
        set((state) => ({
          ...initial,
          player: state.player,
        })),
      resetExam: () => set({ ...initial }),
    }),
    { name: "podium-exam-v1" },
  ),
);
