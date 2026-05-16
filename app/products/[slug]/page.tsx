import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { company } from "@/data/company";
import { mudAgitatorSpecs, productCategories } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) return { title: "Product" };
  return {
    title: category.title,
    description: category.summary,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const isMudAgitator = slug === "mud-agitator";

  return (
    <article className="bg-white">
      <div className="border-b border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="text-sm text-slate-500">
            <Link className="hover:text-orange-600" href="/products">
              Products
            </Link>
            <span className="px-2 text-slate-400">/</span>
            <span className="text-slate-700">{category.title}</span>
          </nav>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
            {category.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">{category.summary}</p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {category.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {isMudAgitator ? (
          <section aria-labelledby="spec-heading">
            <h2 id="spec-heading" className="text-2xl font-semibold text-slate-900">
              Technical parameters (manual-derived)
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Extracted from <em>宏宇搅拌器说明书中英文-2024.pdf</em>. Verify all numeric fields
              against the signed PDF before contractual use.
            </p>
            <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Parameter
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Value
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                  {mudAgitatorSpecs.map((row) => (
                    <tr key={row.parameter} className="hover:bg-slate-50/80">
                      <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                        {row.parameter}
                      </th>
                      <td className="px-4 py-3 align-top">{row.value}</td>
                      <td className="px-4 py-3 align-top text-slate-500">{row.remark ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Specifications</h2>
            <p className="mt-4 text-slate-600">
              Model-level datasheets for this category are not yet transcribed from PDF sources
              (the large brochure file did not yield machine-readable text).{" "}
              <span className="font-medium">TODO:</span> OCR or manually enter tables per SKU.
            </p>
          </section>
        )}

        <section className="mt-12 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          {/* TODO: licensed product render or line art */}
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            Product imagery placeholder
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Do not copy photos from internal PDFs without usage rights.
          </p>
        </section>
      </div>

      <CTASection
        title={`Discuss ${category.title} with ${company.legalNameEn}`}
        description={`Call ${company.contact.hotline} or send drawings — we respond with options grounded in documented equipment.`}
        primary={{ href: "/contact", label: "Request quotation" }}
        secondary={{ href: "/products", label: "Back to catalogue" }}
      />
    </article>
  );
}
