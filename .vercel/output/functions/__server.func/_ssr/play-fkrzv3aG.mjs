import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime, r as useQueryClient } from "../_libs/react+tanstack__react-query.mjs";
import { n as QUESTIONS, o as gradeQuestion, r as TOTAL_QUESTIONS, s as isAnswerComplete, t as EXAM_SECONDS } from "./scoring-bXQEcAc0.mjs";
import { i as formatDuration, n as SiteHeader, r as cn, t as Button } from "./site-header-QWwv_CAp.mjs";
import { r as submitAttempt } from "./attempts-DhIzUK5f.mjs";
import { t as useExamStore } from "./exam-store-CYhmSpO8.mjs";
import { n as Label, t as Input } from "./label-BloxzPjL.mjs";
import { t as Progress } from "./progress-B-cFoTws.mjs";
import { i as Check, n as ChevronUp, r as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/play-fkrzv3aG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SRC = {
	"hands-icons": "/proximity/hands-icons.jpg",
	"four-hands": "/proximity/four-hands.jpg",
	"kids-group": "/proximity/kids-group.jpg",
	molecule: "/proximity/molecule.jpg"
};
function ProximityArt({ image, selected, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden bg-surface-2", selected ? "ring-2 ring-accent ring-inset" : "", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: SRC[image],
			alt: "",
			className: "h-full w-full object-cover",
			draggable: false
		})
	});
}
function QuestionView({ question, answer, locked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.16em] text-faint",
						children: question.domain
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl leading-snug text-fg",
						children: question.prompt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: question.instruction
					})
				]
			}),
			question.kind === "single" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceList, {
				options: question.options,
				selected: typeof answer === "string" ? answer : "",
				locked,
				correct: question.correct,
				onSelect: (id) => onChange(id)
			}),
			question.kind === "multi" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiList, {
				options: question.options,
				selected: Array.isArray(answer) ? answer : [],
				locked,
				correct: question.correct,
				selectCount: question.selectCount,
				onToggle: (id) => {
					const current = Array.isArray(answer) ? answer : [];
					onChange(current.includes(id) ? current.filter((x) => x !== id) : current.length >= question.selectCount ? current : [...current, id]);
				}
			}),
			question.kind === "match" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchList, {
				question,
				selected: typeof answer === "object" && answer && !Array.isArray(answer) ? answer : {},
				locked,
				onChange
			}),
			question.kind === "order" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderList, {
				question,
				order: Array.isArray(answer) ? answer : question.options.map((o) => o.id),
				locked,
				onChange
			}),
			question.kind === "image" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageGrid, {
				question,
				selected: typeof answer === "string" ? answer : "",
				locked,
				onSelect: (id) => onChange(id)
			})
		]
	});
}
function ChoiceList({ options, selected, locked, correct, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2",
		children: options.map((option) => {
			const isOn = selected === option.id;
			const isRight = locked && option.id === correct;
			const isWrong = locked && isOn && option.id !== correct;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: locked,
				onClick: () => onSelect(option.id),
				className: cn("min-h-12 rounded-lg border px-4 py-3 text-left text-sm leading-snug transition-colors", isOn && !locked && "border-accent bg-surface-2", !isOn && !locked && "border-border bg-surface hover:border-border-strong", isRight && "border-ok bg-ok/10", isWrong && "border-bad bg-bad/10", locked && !isRight && !isWrong && "border-border bg-surface opacity-70"),
				children: option.text
			}, option.id);
		})
	});
}
function MultiList({ options, selected, locked, correct, selectCount, onToggle }) {
	const correctSet = new Set(correct);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs text-faint",
			children: ["Choose ", selectCount]
		}), options.map((option) => {
			const isOn = selected.includes(option.id);
			const isRight = locked && correctSet.has(option.id);
			const isWrong = locked && isOn && !correctSet.has(option.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				disabled: locked,
				onClick: () => onToggle(option.id),
				className: cn("flex min-h-12 items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm leading-snug transition-colors", isOn && !locked && "border-accent bg-surface-2", !isOn && !locked && "border-border bg-surface hover:border-border-strong", isRight && "border-ok bg-ok/10", isWrong && "border-bad bg-bad/10", locked && !isRight && !isWrong && "border-border bg-surface opacity-70"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("mt-0.5 grid size-4 shrink-0 place-items-center rounded-[4px] border", isOn ? "border-accent bg-accent text-accent-fg" : "border-border-strong"),
					children: isOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "size-3",
						strokeWidth: 3
					}) : null
				}), option.text]
			}, option.id);
		})]
	});
}
function MatchList({ question, selected, locked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3",
		children: question.items.map((item) => {
			const value = selected[item.id] ?? "";
			const right = question.correct[item.id];
			const isRight = locked && value === right;
			const isWrong = locked && value !== "" && value !== right;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("rounded-lg border p-3 sm:p-4", isRight && "border-ok bg-ok/10", isWrong && "border-bad bg-bad/10", !locked && "border-border bg-surface", locked && !isRight && !isWrong && "border-border bg-surface"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-snug text-fg",
						children: item.text
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 sm:shrink-0 sm:justify-end",
						children: (item.labels ? question.labels.filter((label) => item.labels.includes(label.id)) : question.labels).map((label) => {
							const on = value === label.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: locked,
								onClick: () => onChange({
									...selected,
									[item.id]: label.id
								}),
								className: cn("h-10 min-w-20 rounded-md border px-3 text-sm", on ? "border-accent bg-accent text-accent-fg" : "border-border bg-bg text-muted hover:text-fg"),
								children: label.label
							}, label.id);
						})
					})]
				})
			}, item.id);
		})
	});
}
function OrderList({ question, order, locked, onChange }) {
	const byId = Object.fromEntries(question.options.map((o) => [o.id, o]));
	const ids = order.length === question.options.length ? order : question.options.map((o) => o.id);
	const move = (index, dir) => {
		const next = [...ids];
		const target = index + dir;
		if (target < 0 || target >= next.length) return;
		const tmp = next[index];
		next[index] = next[target];
		next[target] = tmp;
		onChange(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid gap-2",
		children: ids.map((id, index) => {
			const option = byId[id];
			if (!option) return null;
			const expected = question.correct[index];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: cn("flex items-stretch gap-2 rounded-lg border p-2", locked && id === expected && "border-ok bg-ok/10", locked && id !== expected && "border-bad bg-bad/10", !locked && "border-border bg-surface"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 shrink-0 place-items-center font-mono text-sm text-muted",
						children: index + 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "flex-1 self-center py-2 text-sm leading-snug",
						children: option.text
					}),
					!locked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center text-muted hover:text-fg disabled:opacity-30",
							onClick: () => move(index, -1),
							disabled: index === 0,
							"aria-label": "Move up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center text-muted hover:text-fg disabled:opacity-30",
							onClick: () => move(index, 1),
							disabled: index === ids.length - 1,
							"aria-label": "Move down",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
						})]
					})
				]
			}, id);
		})
	});
}
function ImageGrid({ question, selected, locked, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
		children: question.options.map((option) => {
			const isOn = selected === option.id;
			const isRight = locked && option.id === question.correct;
			const isWrong = locked && isOn && option.id !== question.correct;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				disabled: locked,
				onClick: () => onSelect(option.id),
				className: cn("overflow-hidden rounded-lg border text-left", isOn && !locked && "border-accent", !isOn && !locked && "border-border hover:border-border-strong", isRight && "border-ok", isWrong && "border-bad"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProximityArt, {
					image: option.image,
					selected: isOn || isRight,
					className: "aspect-[16/11]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block px-3 py-2 text-xs text-muted",
					children: option.caption
				})]
			}, option.id);
		})
	});
}
function PlayPage() {
	const player = useExamStore((s) => s.player);
	const startedAt = useExamStore((s) => s.startedAt);
	const finishedAt = useExamStore((s) => s.finishedAt);
	if (!player) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterGate, {});
	if (finishedAt) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlreadyFinished, {});
	if (!startedAt) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefing, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExamRoom, {});
}
function RegisterGate() {
	const setPlayer = useExamStore((s) => s.setPlayer);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	function submit(e) {
		e.preventDefault();
		const n = name.trim();
		const em = email.trim();
		const ph = phone.trim();
		if (n.length < 2) return setError("Enter the name you want on the board.");
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) return setError("Enter a valid email.");
		if (ph.replace(/\D/g, "").length < 7) return setError("Enter a phone number.");
		setError(null);
		setPlayer({
			name: n,
			email: em,
			phone: ph
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "flex flex-1 flex-col justify-center gap-6 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.2em] text-faint",
							children: "Register"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl",
							children: "Before you take the stand"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: "Your name appears on the public standings. Email and phone are stored with your result and are not shown on the board."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							htmlFor: "name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								autoComplete: "name",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "Jordan Hale"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							htmlFor: "email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								type: "email",
								autoComplete: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "you@company.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							htmlFor: "phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								type: "tel",
								autoComplete: "tel",
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								placeholder: "+1 555 010 1234"
							})
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bad",
							children: error
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					children: "Continue"
				})
			]
		})]
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
function Briefing() {
	const player = useExamStore((s) => s.player);
	const startExam = useExamStore((s) => s.startExam);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-center gap-6 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.2em] text-faint",
					children: "Briefing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-3xl",
					children: [
						"Welcome, ",
						player.name.split(" ")[0],
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [TOTAL_QUESTIONS, " scenario questions. Lock each answer to see if you were right."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Skip and jump with the question rail. Streaks build on consecutive locks." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The clock runs 50 minutes. Finish early whenever you are ready — your result is saved to the board." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					onClick: () => startExam(),
					children: "Begin exam"
				})
			]
		})]
	});
}
function AlreadyFinished() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		navigate({ to: "/results" });
	}, [navigate]);
	return null;
}
function ExamRoom() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const answers = useExamStore((s) => s.answers);
	const locked = useExamStore((s) => s.locked);
	const currentIndex = useExamStore((s) => s.currentIndex);
	const startedAt = useExamStore((s) => s.startedAt);
	const streak = useExamStore((s) => s.streak);
	const setAnswer = useExamStore((s) => s.setAnswer);
	const lockQuestion = useExamStore((s) => s.lockQuestion);
	const goTo = useExamStore((s) => s.goTo);
	const markSaved = useExamStore((s) => s.markSaved);
	const [now, setNow] = (0, import_react.useState)(Date.now());
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [confirmFinish, setConfirmFinish] = (0, import_react.useState)(false);
	const savingRef = (0, import_react.useRef)(false);
	const persistRef = (0, import_react.useRef)(async () => {});
	const railRef = (0, import_react.useRef)(null);
	const feedbackRef = (0, import_react.useRef)(null);
	const question = QUESTIONS[currentIndex];
	const answer = answers[question.id];
	const isLocked = Boolean(locked[question.id]);
	const complete = isAnswerComplete(question, answer);
	const remaining = Math.max(0, EXAM_SECONDS - Math.floor((now - startedAt) / 1e3));
	const answeredCount = (0, import_react.useMemo)(() => QUESTIONS.filter((q) => isAnswerComplete(q, answers[q.id])).length, [answers]);
	const unanswered = TOTAL_QUESTIONS - answeredCount;
	const lockedCorrect = (0, import_react.useMemo)(() => {
		const map = {};
		for (const q of QUESTIONS) if (locked[q.id]) map[q.id] = gradeQuestion(q, answers[q.id]);
		return map;
	}, [locked, answers]);
	(0, import_react.useEffect)(() => {
		if (question.kind === "order" && !Array.isArray(answers[question.id])) setAnswer(question.id, question.options.map((option) => option.id));
	}, [
		question,
		answers,
		setAnswer
	]);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		railRef.current?.scrollIntoView({
			inline: "center",
			block: "nearest",
			behavior: "smooth"
		});
	}, [currentIndex]);
	(0, import_react.useEffect)(() => {
		if (!isLocked) return;
		feedbackRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest"
		});
	}, [isLocked, question.id]);
	async function persistAndLeave() {
		if (savingRef.current) return;
		savingRef.current = true;
		setSaving(true);
		setConfirmFinish(false);
		const snapshot = useExamStore.getState();
		snapshot.finishExam();
		const durationSeconds = Math.min(EXAM_SECONDS, Math.max(1, Math.floor((Date.now() - startedAt) / 1e3)));
		try {
			const result = await submitAttempt({ data: {
				name: snapshot.player.name,
				email: snapshot.player.email,
				phone: snapshot.player.phone,
				answers: snapshot.answers,
				durationSeconds,
				streak: snapshot.bestStreak
			} });
			markSaved(result.id);
			await queryClient.invalidateQueries({ queryKey: ["standings"] });
			toast.success("Result posted to the board.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not save. Your local score still stands.");
		}
		await navigate({ to: "/results" });
	}
	persistRef.current = persistAndLeave;
	(0, import_react.useEffect)(() => {
		if (remaining === 0) persistRef.current();
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
		persistAndLeave();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {
				compact: true,
				right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-mono text-xs tabular-nums text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Streak ", streak] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: remaining < 120 ? "text-bad" : "",
						children: formatDuration(remaining)
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: answeredCount / TOTAL_QUESTIONS * 100 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center justify-between text-xs text-faint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Question ",
					currentIndex + 1,
					" of ",
					TOTAL_QUESTIONS
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [answeredCount, " answered"] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-4 mt-3 overflow-x-auto px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max gap-1 pb-1",
					children: QUESTIONS.map((q, i) => {
						const done = isAnswerComplete(q, answers[q.id]);
						const frozen = Boolean(locked[q.id]);
						const ok = lockedCorrect[q.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							ref: i === currentIndex ? railRef : void 0,
							type: "button",
							onClick: () => goTo(i),
							"aria-label": `Question ${i + 1}`,
							"aria-current": i === currentIndex ? "step" : void 0,
							className: cn("grid size-11 shrink-0 place-items-center rounded-md font-mono text-xs transition-colors", i === currentIndex && "bg-accent text-accent-fg", i !== currentIndex && frozen && ok && "bg-ok/20 text-fg", i !== currentIndex && frozen && !ok && "bg-bad/20 text-fg", i !== currentIndex && !frozen && done && "bg-surface-2 text-fg", i !== currentIndex && !frozen && !done && "bg-surface text-faint"),
							children: i + 1
						}, q.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionView, {
					question,
					answer,
					locked: isLocked,
					onChange: (value) => setAnswer(question.id, value)
				}), isLocked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: feedbackRef,
					className: cn("mt-5 scroll-mb-36 rounded-lg border px-4 py-3 text-sm leading-relaxed", gradeQuestion(question, answer) ? "border-ok/40 bg-ok/10 text-fg" : "border-bad/40 bg-bad/10 text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: gradeQuestion(question, answer) ? "Correct" : "Not quite"
					}), question.explanation]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl flex-wrap gap-2 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							onClick: () => goTo(currentIndex - 1),
							disabled: currentIndex === 0,
							children: "Back"
						}),
						!isLocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							className: "flex-1",
							onClick: lockIn,
							disabled: !complete,
							children: "Lock in"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							className: "flex-1",
							onClick: next,
							disabled: saving,
							children: currentIndex >= TOTAL_QUESTIONS - 1 ? saving ? "Saving…" : "See results" : "Next question"
						}),
						!isLocked && currentIndex < TOTAL_QUESTIONS - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: next,
							children: "Skip"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: requestFinish,
							disabled: saving,
							children: "Finish"
						})
					]
				})
			}),
			confirmFinish ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-30 grid place-items-end bg-bg/70 p-4 sm:place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-xl border border-border bg-surface p-5 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Submit this exam?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: unanswered === 0 ? "Every question has an answer. Post your score to the board." : `${unanswered} question${unanswered === 1 ? "" : "s"} still have no answer. Those will be marked wrong.`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "secondary",
								onClick: () => setConfirmFinish(false),
								children: "Keep going"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								className: "flex-1",
								onClick: () => void persistAndLeave(),
								disabled: saving,
								children: saving ? "Saving…" : "Submit score"
							})]
						})
					]
				})
			}) : null
		]
	});
}
//#endregion
export { PlayPage as component };
