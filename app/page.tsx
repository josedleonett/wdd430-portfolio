import ProjectCard from "../components/ProjectCard";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "FitFuel",
    description:
      "A personal fitness and nutrition planner for workouts, meals, and daily goals.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "https://github.com/josedleonett",
  },
  {
    title: "Learning Full-Stack Development",
    description:
      "A collection of exercises and notes from my web development courses.",
    technologies: ["React", "JavaScript", "Git"],
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-16">
      <section className="rounded-3xl bg-slate-900 px-8 py-16 text-white shadow-xl sm:px-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          WDD 430 Portfolio
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Building useful web applications with modern full-stack tools.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I am Jose Leonett, a web development student learning React,
          Next.js, TypeScript, databases, and deployment.
        </p>
      </section>

      <section>
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Selected work
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Projects I am building
          </h2>
        </div>
        <ProjectList projects={projects} />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">What I am learning</h2>
        <p className="mt-3 leading-7 text-slate-600">
          This portfolio is my first Next.js App Router project. It will grow
          as I learn how frontend pages, backend routes, and databases work
          together.
        </p>
        <div className="mt-6">
          <ProjectCard
            title="Next step"
            description="Add persistent data and interactive features during the next course weeks."
            technologies={["Next.js", "React", "TypeScript"]}
          />
        </div>
      </section>
    </main>
  );
}
