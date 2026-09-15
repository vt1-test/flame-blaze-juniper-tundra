import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { r as TOTAL_QUESTIONS } from "./scoring-bXQEcAc0.mjs";
import { n as SiteHeader, t as Button } from "./site-header-QWwv_CAp.mjs";
import { n as listStandings } from "./attempts-DhIzUK5f.mjs";
import { t as useExamStore } from "./exam-store-CYhmSpO8.mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BqYHAUGx.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const player = useExamStore((s) => s.player);
	const startedAt = useExamStore((s) => s.startedAt);
	const finishedAt = useExamStore((s) => s.finishedAt);
	const inProgress = Boolean(startedAt && !finishedAt && player);
	const leaders = (useQuery({
		queryKey: ["standings"],
		queryFn: () => listStandings(),
		staleTime: 0
	}).data ?? []).slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex flex-1 flex-col gap-12 pb-16 pt-6 sm:pt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.2em] text-faint",
								children: "Communication Skills for Business"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl",
								children: ["Take the stand.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block italic text-muted",
									children: "Prove you can be heard."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xl text-base leading-relaxed text-muted",
								children: "Forty-two live scenarios from CSB Mock Exam 1. Register, lock in each answer, and post a score. Names go on the board. Email and phone stay with your result."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/play",
										children: [inProgress ? "Resume exam" : "Enter the hall", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "secondary",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/standings",
										children: "View standings"
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Questions",
								value: String(TOTAL_QUESTIONS)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Pass mark",
								value: `70%`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Timer",
								value: "50 min"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
							n: "01",
							title: "Register",
							body: "Name for the board. Email and phone stored privately with your attempt."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
							n: "02",
							title: "Lock in",
							body: "True/false, matching, ordering, and image questions. Instant feedback, running streak."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
							n: "03",
							title: "Post it",
							body: "A rank, domain breakdown, and a place on the public standings."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Recent standings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/standings",
							className: "text-sm text-muted hover:text-fg",
							children: "Full board"
						})]
					}), leaders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "No scores yet. Be the first name on the board."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "divide-y divide-border",
						children: leaders.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-6 font-mono text-faint",
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg",
									children: row.playerName
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono tabular-nums text-muted",
								children: [row.percent, "%"]
							})]
						}, row.id))
					})]
				})
			]
		})]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 bg-surface px-2 py-4 text-center sm:px-4 sm:py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-faint",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-2xl tabular-nums sm:text-3xl",
			children: value
		})]
	});
}
function Step({ n, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-surface p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs text-faint",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: body
			})
		]
	});
}
//#endregion
export { Home as component };
