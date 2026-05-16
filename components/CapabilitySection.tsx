type Item = {
  title: string;
  description: string;
};

type CapabilitySectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: Item[];
};

export function CapabilitySection({
  id,
  eyebrow,
  title,
  description,
  items,
}: CapabilitySectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{description}</p>
      ) : null}
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="rounded-lg border border-slate-200 bg-slate-50/80 p-5"
          >
            <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
