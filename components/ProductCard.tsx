import Link from "next/link";

export type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

export function ProductCard({ title, description, href, tag }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {tag ? (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
            {tag}
          </span>
        ) : null}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      <div className="mt-6">
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-500"
        >
          View details
          <span aria-hidden className="transition group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
