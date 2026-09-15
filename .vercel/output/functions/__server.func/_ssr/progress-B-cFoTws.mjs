import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as cn } from "./site-header-QWwv_CAp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-B-cFoTws.js
var import_jsx_runtime = require_jsx_runtime();
function Progress({ value, className }) {
	const clamped = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-1.5 w-full overflow-hidden rounded-full bg-surface-2", className),
		role: "progressbar",
		"aria-valuenow": Math.round(clamped),
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-accent transition-[width] duration-200 ease-out",
			style: { width: `${clamped}%` }
		})
	});
}
//#endregion
export { Progress as t };
