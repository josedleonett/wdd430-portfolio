interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-800"
          >
            {technology}
          </li>
        ))}
      </ul>
      {link ? (
        <a
          className="mt-6 inline-block font-semibold text-cyan-700 hover:text-cyan-900 hover:underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View project
        </a>
      ) : null}
    </article>
  );
}
