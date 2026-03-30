"use client";

import Link from "next/link";
import { useState } from "react";

type DashboardShellProps = {
  title: string;
  children: React.ReactNode;
};

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/billing", label: "Billing" },
  { href: "/", label: "Home" },
];

export function DashboardShell({ title, children }: DashboardShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f5f7fb] text-zinc-900">
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        className="fixed left-4 top-4 z-40 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold shadow md:hidden"
        aria-label="Menu"
      >
        Menu
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 border-r border-zinc-200 bg-white p-5 transition-transform md:static md:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
          Solo SaaS
        </p>
        <p className="mt-2 text-xl font-extrabold">Control Room</p>

        <nav className="mt-8 flex flex-col gap-2" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col md:ml-0">
        <header className="border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur md:px-10">
          <h1 className="text-2xl font-black tracking-tight">{title}</h1>
        </header>
        <main className="flex-1 p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
}
