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
    <article className="border border-slate-800 p-6 transition-colors hover:border-slate-600">
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
        {technologies.map((technology) => (
          <li
            key={technology}
            className="text-sm text-violet-300"
          >
            {technology}
          </li>
        ))}
      </ul>
      {link ? (
        <a
          className="mt-6 inline-block font-medium text-emerald-300 hover:text-emerald-200 hover:underline"
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
