export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16">
      <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
          About me
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
          Learning by building
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I am studying web full-stack development and practicing how to
          create clear, useful, and accessible applications.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Current focus</h2>
          <p className="mt-3 leading-7 text-slate-600">
            React, Next.js App Router, TypeScript, Tailwind CSS, and Git.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Course goal</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Build and deploy a complete full-stack application with a team.
          </p>
        </article>
      </section>
    </main>
  );
}
