import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as record, i as object, o as string, r as number, s as union, t as array } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attempts-DhIzUK5f.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var answersSchema = record(string(), union([
	string(),
	array(string()),
	record(string(), string())
]));
var submitSchema = object({
	name: string().trim().min(2).max(80),
	email: string().trim().email().max(120),
	phone: string().trim().min(7).max(40),
	answers: answersSchema,
	durationSeconds: number().int().min(0).max(21600),
	streak: number().int().min(0).max(100)
});
var submitAttempt = createServerFn({ method: "POST" }).validator(submitSchema).handler(createSsrRpc("077a846cca3bb8ab888f44d96ca4a79bf024d0933f334843dd6983e357ce8a9f"));
var listStandings = createServerFn({ method: "GET" }).handler(createSsrRpc("45be628f1c4eff09ecfb5ab3fca6fc11f77590d8d8dbcdd6200ee279086ad344"));
var listMyAttempts = createServerFn({ method: "POST" }).validator(object({ email: string().trim().email().max(120) })).handler(createSsrRpc("2c71ff9fb3b431ed0063d78c8964e600fcd964dba9ced7477f64bc11db77de02"));
//#endregion
export { listStandings as n, submitAttempt as r, listMyAttempts as t };
