// src/app/api/health/route.ts — 健康检查端点（供 CI 和监控服务调用）
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version ?? "unknown",
    },
    { status: 200 }
  );
}
