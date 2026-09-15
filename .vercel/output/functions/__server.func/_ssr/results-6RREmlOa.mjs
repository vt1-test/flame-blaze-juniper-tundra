import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as gradeExam, i as domainBreakdown, n as QUESTIONS, o as gradeQuestion } from "./scoring-bXQEcAc0.mjs";
import { a as maskPhone, i as formatDuration, n as SiteHeader, t as Button } from "./site-header-QWwv_CAp.mjs";
import { t as useExamStore } from "./exam-store-CYhmSpO8.mjs";
import { t as Progress } from "./progress-B-cFoTws.mjs";
import { n as rankFor, t as Badge } from "./ranks-3tIgyZsS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/results-6RREmlOa.js
var import_jsx_runtime = require_jsx_runtime();
function ResultsPage() {
	const player = useExamStore((s) => s.player);
	const answers = useExamStore((s) => s.answers);
	const startedAt = useExamStore((s) => s.startedAt);
	const finishedAt = useExamStore((s) => s.finishedAt);
	const bestStreak = useExamStore((s) => s.bestStreak);
	const saved = useExamStore((s) => s.saved);
	const retryExam = useExamStore((s) => s.retryExam);
	const navigate = useNavigate();
	if (!player || !startedAt) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col items-start justify-center gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl",
					children: "No exam on file"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Register and take the stand to see a result here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/play",
						children: "Enter the hall"
					})
				})
			]
		})]
	});
	const grade = gradeExam(answers);
	const rank = rankFor(grade.percent);
	const duration = Math.max(1, Math.floor(((finishedAt ?? Date.now()) - startedAt) / 1e3));
	const misses = QUESTIONS.filter((q) => !gradeQuestion(q, answers[q.id]));
	const domains = domainBreakdown(answers);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "space-y-8 pt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "overflow-hidden rounded-xl border border-border bg-surface p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.2em] text-faint",
							children: saved ? "Result saved" : "Local result"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-4xl sm:text-5xl",
									children: player.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: rank.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-faint",
									children: [
										player.email,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mx-2 text-border-strong",
											children: "·"
										}),
										maskPhone(player.phone),
										saved ? " · stored with this attempt" : " · not posted yet"
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-6xl tabular-nums leading-none",
									children: [grade.percent, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl text-muted",
										children: "%"
									})]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: grade.passed ? "ok" : "bad",
									children: grade.passed ? "Pass" : "Not yet"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: rank.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [
									grade.score,
									"/",
									grade.total,
									" correct"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: ["Best streak ", bestStreak] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: formatDuration(duration) })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/standings",
								children: "Open standings"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => {
								retryExam();
								navigate({ to: "/play" });
							},
							children: "Sit again"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "Home"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "By domain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: domains.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg",
									children: row.domain
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs tabular-nums text-muted",
									children: [
										row.score,
										"/",
										row.total
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: row.percent })]
						}, row.domain))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Review"
					}), misses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Clean sheet. Every scenario held."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: misses.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-border bg-surface p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs uppercase tracking-[0.14em] text-faint",
									children: [
										"Miss ",
										i + 1,
										" · ",
										q.domain
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-snug text-fg",
									children: q.prompt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: q.explanation
								})
							]
						}, q.id))
					})]
				})
			]
		})]
	});
}
//#endregion
export { ResultsPage as component };
