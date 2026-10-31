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
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-20 px-6 py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
          WDD 430 portfolio
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-6xl">
          Building the next useful thing.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I am Jose Leonett, a web development student learning React,
          Next.js, TypeScript, databases, and deployment.
        </p>
      </section>

      <section>
        <div className="mb-7">
          <h2 className="text-2xl font-semibold text-slate-100">
            Selected work
          </h2>
          <p className="mt-2 text-slate-400">Projects I am building.</p>
        </div>
        <ProjectList projects={projects} />
      </section>

      <section className="max-w-3xl border-t border-slate-800 pt-8">
        <h2 className="text-2xl font-semibold text-slate-100">
          What I am learning
        </h2>
        <p className="mt-3 leading-7 text-slate-400">
          This portfolio is my first Next.js App Router project. It will grow
          as I learn how frontend pages, backend routes, and databases work
          together.
        </p>
        <div className="mt-6 max-w-xl">
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
