import { a as gradeExam, n as QUESTIONS } from "./scoring-bXQEcAc0.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/exam-store-CYhmSpO8.js
var initial = {
	player: null,
	answers: {},
	locked: {},
	currentIndex: 0,
	startedAt: null,
	finishedAt: null,
	streak: 0,
	bestStreak: 0,
	attemptId: null,
	saved: false
};
var useExamStore = create()(persist((set, get) => ({
	...initial,
	setPlayer: (player) => set({ player }),
	setAnswer: (id, value) => set((state) => {
		const prev = state.answers[id];
		const next = value && typeof value === "object" && !Array.isArray(value) && prev && typeof prev === "object" && !Array.isArray(prev) ? {
			...prev,
			...value
		} : value;
		return { answers: {
			...state.answers,
			[id]: next
		} };
	}),
	lockQuestion: (id, correct) => set((state) => {
		const streak = correct ? state.streak + 1 : 0;
		return {
			locked: {
				...state.locked,
				[id]: true
			},
			streak,
			bestStreak: Math.max(state.bestStreak, streak)
		};
	}),
	goTo: (index) => set({ currentIndex: Math.max(0, Math.min(QUESTIONS.length - 1, index)) }),
	startExam: () => set({
		answers: {},
		locked: {},
		currentIndex: 0,
		startedAt: Date.now(),
		finishedAt: null,
		streak: 0,
		bestStreak: 0,
		attemptId: null,
		saved: false
	}),
	finishExam: () => {
		const grade = gradeExam(get().answers);
		set({ finishedAt: Date.now() });
		return grade;
	},
	markSaved: (attemptId) => set({
		attemptId,
		saved: true
	}),
	retryExam: () => set((state) => ({
		...initial,
		player: state.player
	})),
	resetExam: () => set({ ...initial })
}), { name: "podium-exam-v1" }));
//#endregion
export { useExamStore as t };
