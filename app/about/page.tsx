export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-12 px-6 py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
          About me
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-100">
          Learning by building
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I am studying web full-stack development and practicing how to
          create clear, useful, and accessible applications.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <article className="border-t border-slate-800 pt-6">
          <h2 className="text-xl font-semibold text-slate-100">Current focus</h2>
          <p className="mt-3 leading-7 text-slate-400">
            React, Next.js App Router, TypeScript, Tailwind CSS, and Git.
          </p>
        </article>
        <article className="border-t border-slate-800 pt-6">
          <h2 className="text-xl font-semibold text-slate-100">Course goal</h2>
          <p className="mt-3 leading-7 text-slate-400">
            Build and deploy a complete full-stack application with a team.
          </p>
        </article>
      </section>
    </main>
  );
}
