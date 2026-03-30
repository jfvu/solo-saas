import type { Metadata } from "next";
import { DashboardShell } from "@/components/layouts/dashboard-shell";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Solo SaaS dashboard",
};

export default function DashboardPage() {
  return (
    <DashboardShell title="Dashboard">
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-600">MRR</p>
          <p className="mt-2 text-3xl font-black">$1,280</p>
        </article>
        <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-600">Active Users</p>
          <p className="mt-2 text-3xl font-black">214</p>
        </article>
        <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-600">Churn</p>
          <p className="mt-2 text-3xl font-black">1.8%</p>
        </article>
      </section>
    </DashboardShell>
  );
}
