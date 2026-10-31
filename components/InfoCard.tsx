interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <article className="border-t border-slate-800 pt-6">
      <h2 className="text-xl font-semibold text-slate-100">{title}</h2>
      <p className="mt-3 leading-7 text-slate-400">{description}</p>
    </article>
  );
}
