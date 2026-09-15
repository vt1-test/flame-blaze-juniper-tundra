import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";
import { gradeExam } from "@/lib/scoring";
import type { AnswerValue } from "@/lib/questions";

const answersSchema = z.record(
  z.string(),
  z.union([z.string(), z.array(z.string()), z.record(z.string(), z.string())]),
);

const submitSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(7).max(40),
  answers: answersSchema,
  durationSeconds: z.number().int().min(0).max(60 * 60 * 6),
  streak: z.number().int().min(0).max(100),
});

export type Standing = {
  id: number;
  playerName: string;
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  streak: number;
  durationSeconds: number;
  createdAt: string;
};

export type AttemptResult = Standing & {
  email: string;
};

function asStanding(row: {
  id: number;
  player_name: string;
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  streak: number;
  duration_seconds: number;
  created_at: string | Date;
}): Standing {
  return {
    id: row.id,
    playerName: row.player_name,
    score: row.score,
    total: row.total,
    percent: row.percent,
    passed: row.passed,
    streak: row.streak,
    durationSeconds: row.duration_seconds,
    createdAt:
      typeof row.created_at === "string"
        ? row.created_at
        : row.created_at.toISOString(),
  };
}

export const submitAttempt = createServerFn({ method: "POST" })
  .validator(submitSchema)
  .handler(async ({ data }): Promise<AttemptResult> => {
    const grade = gradeExam(data.answers as Record<string, AnswerValue>);
    const sql = await getSql();
    const rows = await sql<{
      id: number;
      player_name: string;
      email: string;
      score: number;
      total: number;
      percent: number;
      passed: boolean;
      streak: number;
      duration_seconds: number;
      created_at: string;
    }>`
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
    `;
    const row = rows[0];
    if (!row) throw new Error("Could not save your result.");
    return { ...asStanding(row), email: row.email };
  });

export const listStandings = createServerFn({ method: "GET" }).handler(
  async (): Promise<Standing[]> => {
    const sql = await getSql();
    const rows = await sql<{
      id: number;
      player_name: string;
      score: number;
      total: number;
      percent: number;
      passed: boolean;
      streak: number;
      duration_seconds: number;
      created_at: string;
    }>`
      select id, player_name, score, total, percent, passed, streak,
             duration_seconds, created_at
      from attempts
      order by percent desc, duration_seconds asc, created_at asc
      limit 50
    `;
    return rows.map(asStanding);
  },
);

export const listMyAttempts = createServerFn({ method: "POST" })
  .validator(z.object({ email: z.string().trim().email().max(120) }))
  .handler(async ({ data }): Promise<Standing[]> => {
    const sql = await getSql();
    const rows = await sql<{
      id: number;
      player_name: string;
      score: number;
      total: number;
      percent: number;
      passed: boolean;
      streak: number;
      duration_seconds: number;
      created_at: string;
    }>`
      select id, player_name, score, total, percent, passed, streak,
             duration_seconds, created_at
      from attempts
      where email = ${data.email.toLowerCase()}
      order by created_at desc
      limit 20
    `;
    return rows.map(asStanding);
  });
