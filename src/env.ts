// src/env.ts — Zod 校验的类型安全环境变量（禁止直接用 process.env）
import { z } from "zod";

const envSchema = z.object({
  // 数据库
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url(),

  // NextAuth
  NEXTAUTH_URL: z.string().url().optional(),
  NEXTAUTH_SECRET: z.string().min(32),

  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  SUPABASE_SERVICE_ROLE_KEY: z.string(),

  // Sentry (可选)
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),

  // 应用
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

export const env = envSchema.parse(process.env);
