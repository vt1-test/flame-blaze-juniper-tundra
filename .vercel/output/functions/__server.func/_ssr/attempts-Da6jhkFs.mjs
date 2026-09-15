import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as gradeExam } from "./scoring-bXQEcAc0.mjs";
import { a as record, i as object, o as string, r as number, s as union, t as array } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attempts-Da6jhkFs.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var _0002_attempts_default = "-- Quiz attempts for the CSB mock exam. Rows are unowned (no user accounts).\n-- Email and phone are stored with the attempt as the player requested; they are\n-- never selected by the public standings query.\ncreate table if not exists attempts (\n  id                serial primary key,\n  player_name       text not null,\n  email             text not null,\n  phone             text not null,\n  score             integer not null,\n  total             integer not null,\n  percent           integer not null,\n  passed            boolean not null,\n  streak            integer not null default 0,\n  duration_seconds  integer not null default 0,\n  answers           jsonb not null default '{}'::jsonb,\n  created_at        timestamptz not null default now()\n);\n\ncreate index if not exists attempts_percent_idx\n  on attempts (percent desc, created_at asc);\n\ncreate index if not exists attempts_email_idx\n  on attempts (email);\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0002_attempts.sql": _0002_attempts_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
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
function asStanding(row) {
	return {
		id: row.id,
		playerName: row.player_name,
		score: row.score,
		total: row.total,
		percent: row.percent,
		passed: row.passed,
		streak: row.streak,
		durationSeconds: row.duration_seconds,
		createdAt: typeof row.created_at === "string" ? row.created_at : row.created_at.toISOString()
	};
}
var submitAttempt_createServerFn_handler = createServerRpc({
	id: "077a846cca3bb8ab888f44d96ca4a79bf024d0933f334843dd6983e357ce8a9f",
	name: "submitAttempt",
	filename: "src/lib/attempts.ts"
}, (opts) => submitAttempt.__executeServer(opts));
var submitAttempt = createServerFn({ method: "POST" }).validator(submitSchema).handler(submitAttempt_createServerFn_handler, async ({ data }) => {
	const grade = gradeExam(data.answers);
	const row = (await (await getSql())`
      insert into attempts (
        player_name, email, phone, score, total, percent, passed,
        streak, duration_seconds, answers
      ) values (
        ${data.name}, ${data.email.toLowerCase()}, ${data.phone},
        ${grade.score}, ${grade.total}, ${grade.percent}, ${grade.passed},
        ${data.streak}, ${data.durationSeconds}, ${JSON.stringify(data.answers)}::jsonb
      )
      returning id, player_name, email, score, total, percent, passed,
                streak, duration_seconds, created_at
    `)[0];
	if (!row) throw new Error("Could not save your result.");
	return {
		...asStanding(row),
		email: row.email
	};
});
var listStandings_createServerFn_handler = createServerRpc({
	id: "45be628f1c4eff09ecfb5ab3fca6fc11f77590d8d8dbcdd6200ee279086ad344",
	name: "listStandings",
	filename: "src/lib/attempts.ts"
}, (opts) => listStandings.__executeServer(opts));
var listStandings = createServerFn({ method: "GET" }).handler(listStandings_createServerFn_handler, async () => {
	return (await (await getSql())`
      select id, player_name, score, total, percent, passed, streak,
             duration_seconds, created_at
      from attempts
      order by percent desc, duration_seconds asc, created_at asc
      limit 50
    `).map(asStanding);
});
var listMyAttempts_createServerFn_handler = createServerRpc({
	id: "2c71ff9fb3b431ed0063d78c8964e600fcd964dba9ced7477f64bc11db77de02",
	name: "listMyAttempts",
	filename: "src/lib/attempts.ts"
}, (opts) => listMyAttempts.__executeServer(opts));
var listMyAttempts = createServerFn({ method: "POST" }).validator(object({ email: string().trim().email().max(120) })).handler(listMyAttempts_createServerFn_handler, async ({ data }) => {
	return (await (await getSql())`
      select id, player_name, score, total, percent, passed, streak,
             duration_seconds, created_at
      from attempts
      where email = ${data.email.toLowerCase()}
      order by created_at desc
      limit 20
    `).map(asStanding);
});
//#endregion
export { listMyAttempts_createServerFn_handler, listStandings_createServerFn_handler, submitAttempt_createServerFn_handler };
