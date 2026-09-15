import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatDuration(totalSeconds) {
	const s = Math.max(0, Math.floor(totalSeconds));
	return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}
function maskPhone(phone) {
	const digits = phone.replace(/\D/g, "");
	if (digits.length < 4) return "••••";
	return `••••${digits.slice(-4)}`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			secondary: "border border-border-strong bg-surface text-fg hover:bg-surface-2",
			ghost: "text-fg hover:bg-surface-2",
			outline: "border border-border bg-transparent text-fg hover:bg-surface",
			danger: "bg-bad text-bad-fg hover:opacity-90"
		},
		size: {
			default: "h-11 rounded-md px-5 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-6 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function PodiumMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2",
				y: "2",
				width: "28",
				height: "28",
				rx: "8",
				className: "fill-surface-2 stroke-border",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 22h16M11 22v-5h10v5M13.5 17V12.5h5V17",
				className: "stroke-accent",
				strokeWidth: "1.6",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 12.5V9.5",
				className: "stroke-fg",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "8.2",
				r: "1.3",
				className: "fill-fg"
			})
		]
	});
}
function SiteHeader({ compact = false, right }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("flex items-center justify-between gap-3", compact ? "py-3" : "py-5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			className: "flex items-center gap-2.5 text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PodiumMark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg tracking-tight",
				children: "Podium"
			})]
		}), right ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex items-center gap-1 text-sm text-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/standings",
				className: "rounded-md px-3 py-2 hover:bg-surface-2 hover:text-fg",
				children: "Standings"
			})
		})]
	});
}
//#endregion
export { maskPhone as a, formatDuration as i, SiteHeader as n, cn as r, Button as t };
