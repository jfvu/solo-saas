export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[radial-gradient(circle_at_20%_20%,#ffe0b2_0%,#fff8ef_40%,#f3f8ff_100%)] px-6 py-16">
      <main className="w-full max-w-4xl rounded-3xl border border-zinc-200/70 bg-white/80 p-10 shadow-[0_20px_50px_rgba(17,24,39,0.08)] backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
          Solo SaaS Launchpad
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">
          需求入，代码出，线上跑
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-700">
          基于 Next.js + Prisma + Playwright 的一人公司模板。你可以从这里直接进入登录流、仪表盘和计费页，再逐步接入 Supabase 与 Stripe。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/login"
            className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-700"
          >
            进入登录
          </a>
          <a
            href="/dashboard"
            className="rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-400"
          >
            打开仪表盘
          </a>
        </div>
      </main>
    </div>
  );
}
