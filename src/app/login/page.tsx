"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    document.cookie = "solo_saas_session=ok; path=/";
    localStorage.setItem("solo_saas_session", "ok");

    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-16">
      <main className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
          Authentication
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight">Sign In</h1>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-amber-300 transition focus:ring"
              defaultValue="test@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-semibold"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-amber-300 transition focus:ring"
              defaultValue="password123"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </main>
    </div>
  );
}
