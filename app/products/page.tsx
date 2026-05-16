import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: `Solids control equipment, mud agitators, pumps, and fabricated tanks from ${company.legalNameEn}.`,
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-[#0b1220] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            Products
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Solids control & surface equipment
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Categories mirror the product list in the company qualification profile. Detailed
            datasheets will be added as they are transcribed from authoritative PDFs — nothing
            here is guessed.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {productCategories.map((c) => (
            <ProductCard
              key={c.slug}
              title={c.title}
              description={c.summary}
              href={`/products/${c.slug}`}
            />
          ))}
        </div>
      </div>

      <CTASection
        title="Need a tailored package or tank layout review?"
        description="Send tank dimensions, expected mud weights, and electrical area classification — we will align equipment selections with documented manuals."
        primary={{ href: "/contact", label: "Contact engineering" }}
      />
    </div>
  );
}
