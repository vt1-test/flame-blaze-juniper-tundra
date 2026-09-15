import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { i as formatDuration, n as SiteHeader, t as Button } from "./site-header-QWwv_CAp.mjs";
import { n as listStandings, t as listMyAttempts } from "./attempts-DhIzUK5f.mjs";
import { n as Label, t as Input } from "./label-BloxzPjL.mjs";
import { n as rankFor, t as Badge } from "./ranks-3tIgyZsS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/standings-9Qih3KeF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StandingsPage() {
	const board = useQuery({
		queryKey: ["standings"],
		queryFn: () => listStandings(),
		staleTime: 0
	});
	const [email, setEmail] = (0, import_react.useState)("");
	const [mine, setMine] = (0, import_react.useState)(null);
	const [lookupError, setLookupError] = (0, import_react.useState)(null);
	const [looking, setLooking] = (0, import_react.useState)(false);
	async function lookup(e) {
		e.preventDefault();
		setLooking(true);
		setLookupError(null);
		try {
			const rows = await listMyAttempts({ data: { email: email.trim() } });
			setMine(rows);
			if (rows.length === 0) setLookupError("No attempts stored for that email.");
		} catch (err) {
			setLookupError(err instanceof Error ? err.message : "Lookup failed.");
		} finally {
			setLooking(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "space-y-10 pt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.2em] text-faint",
						children: "Board"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl",
						children: "Standings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-lg text-sm text-muted",
						children: "Ranked by percent, then by time. Email and phone never appear here."
					})
				] }),
				board.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Loading the board…"
				}) : board.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-bad",
					children: "Could not load standings."
				}) : (board.data ?? []).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Empty hall. Sit the exam to open the board."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "overflow-hidden rounded-xl border border-border bg-surface",
					children: (board.data ?? []).map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-border px-4 py-3 last:border-b-0 sm:grid-cols-[2.5rem_1fr_auto_auto_auto]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm text-faint",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm text-fg",
								children: row.playerName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: row.passed ? "ok" : "neutral",
								className: "hidden sm:inline-flex",
								children: rankFor(row.percent).title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden font-mono text-xs tabular-nums text-muted sm:inline",
								children: formatDuration(row.durationSeconds)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-right font-mono text-sm tabular-nums",
								children: [row.percent, "%"]
							})
						]
					}, row.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: lookup,
					className: "space-y-3 rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Find my scores"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Enter the email you registered with. Only that email’s attempts are returned."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "lookup-email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "lookup-email",
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "you@company.com"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "sm:mt-6",
								disabled: looking,
								children: looking ? "Looking…" : "Look up"
							})]
						}),
						lookupError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bad",
							children: lookupError
						}) : null,
						mine && mine.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-y divide-border pt-2",
							children: mine.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between py-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									row.score,
									"/",
									row.total,
									" · ",
									rankFor(row.percent).title
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono tabular-nums text-muted",
									children: [row.percent, "%"]
								})]
							}, row.id))
						}) : null
					]
				})
			]
		})]
	});
}
//#endregion
export { StandingsPage as component };
