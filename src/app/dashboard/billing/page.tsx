import type { Metadata } from "next";
import { DashboardShell } from "@/components/layouts/dashboard-shell";

export const metadata: Metadata = {
  title: "Billing Dashboard",
  description: "Subscription and billing",
};

export default function BillingPage() {
  return (
    <DashboardShell title="Billing">
      <div className="max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-amber-700">
          Plan Status
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-900">
          Upgrade to Pro Plan
        </h2>
        <p className="mt-3 text-zinc-700">
          Unlock advanced analytics, automation flows, and priority support.
        </p>
        <button
          type="button"
          className="mt-6 rounded-lg bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
        >
          Upgrade
        </button>
      </div>
    </DashboardShell>
  );
}
