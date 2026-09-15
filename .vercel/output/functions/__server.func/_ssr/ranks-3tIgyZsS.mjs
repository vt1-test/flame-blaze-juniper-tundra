import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as cn } from "./site-header-QWwv_CAp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ranks-3tIgyZsS.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "neutral", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", tone === "neutral" && "bg-surface-2 text-muted", tone === "ok" && "bg-ok text-ok-fg", tone === "bad" && "bg-bad text-bad-fg", tone === "accent" && "bg-accent text-accent-fg", className),
		children
	});
}
var RANKS = [
	{
		id: "distinguished",
		title: "Distinguished",
		minPercent: 90,
		blurb: "Board-ready. You read rooms, messages, and risk with unusual clarity."
	},
	{
		id: "professional",
		title: "Professional",
		minPercent: 80,
		blurb: "You communicate like someone people trust with the room."
	},
	{
		id: "certified",
		title: "Certified",
		minPercent: 70,
		blurb: "Passing mark. You know the craft; tighten a few habits and you will lead it."
	},
	{
		id: "developing",
		title: "Developing",
		minPercent: 50,
		blurb: "The principles are coming into focus. Review the misses and sit the exam again."
	},
	{
		id: "novice",
		title: "Novice",
		minPercent: 0,
		blurb: "This exam is a map. Walk the missed questions and try another pass."
	}
];
function rankFor(percent) {
	return RANKS.find((rank) => percent >= rank.minPercent) ?? RANKS[RANKS.length - 1];
}
//#endregion
export { rankFor as n, Badge as t };
