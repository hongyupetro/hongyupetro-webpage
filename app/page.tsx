import Link from "next/link";
import { CapabilitySection } from "@/components/CapabilitySection";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Engineered equipment for drilling fluids and surface systems."
        subtitle={company.tagline}
        primaryCta={{ href: "/contact", label: "Request a quote" }}
        secondaryCta={{ href: "/products", label: "Explore products" }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Company positioning
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            Established in <strong>{company.foundedYear}</strong>, {company.legalNameEn}{" "}
            operates integrated workshops for casting, machining, mud tank fabrication, and
            finishing in {company.facility.zone}. {company.positioning[0]}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            {company.positioning[1]}
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                Catalogue
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                Product categories
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Lines listed in the company qualification profile, organized for quick B2B
                navigation.
              </p>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-orange-600 hover:text-orange-500"
            >
              View all products →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {productCategories.map((c) => (
              <ProductCard
                key={c.slug}
                title={c.title}
                description={c.summary}
                href={`/products/${c.slug}`}
                tag="Category"
              />
            ))}
          </div>
        </div>
      </section>

      <CapabilitySection
        id="capabilities"
        eyebrow="Manufacturing"
        title="Core capabilities grounded in facility facts"
        description={`${company.facility.siteAreaM2.toLocaleString()} m² site footprint, ${company.facility.workshopAreaM2.toLocaleString()} m² of workshop space, ${company.facility.equipmentCount} processing machines, and ${company.facility.employeeCount} staff (per internal qualification compilation).`}
        items={company.facility.shops.map((title) => ({
          title,
          description:
            "In-house process step supporting petroleum machinery fabrication and assembly.",
        }))}
      />

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                Featured product
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                TCNJ series mud agitator
              </h2>
              <p className="mt-4 text-slate-600">
                Horizontal agitator for drilling-fluid tanks — mixes additives, supports solids
                suspension, and helps maintain stable fluid properties within the solids control
                system (per bilingual operation manual).
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li>• Explosion-proof motor with single-stage worm reducer and guarded driveline.</li>
                <li>• Documented maintenance intervals and lubricant grades for field service.</li>
                <li>• Designed to complement shakers, desanders, and desilters.</li>
              </ul>
              <Link
                href="/products/mud-agitator"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Review technical summary
              </Link>
            </div>
            {/* TODO: replace with licensed product photography — do not lift images from PDFs without rights */}
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 shadow-inner"
              aria-label="Product imagery placeholder"
            >
              <div className="absolute inset-8 rounded-md border border-dashed border-slate-400/80" />
              <p className="absolute bottom-4 left-4 right-4 text-center text-xs font-medium uppercase tracking-widest text-slate-500">
                Imagery placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Quality, certification, and IP
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Management system certifications and utility patents documented in internal PDF
            materials.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Certifications</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {company.certifications.map((c) => (
                  <li key={c.name}>
                    <strong className="text-slate-900">{c.name}</strong> — {c.note}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Patents (utility models)</h3>
              <ul className="mt-4 space-y-4 text-sm text-slate-600">
                {company.patents.map((p) => (
                  <li key={p.number}>
                    <p className="font-medium text-slate-900">{p.titleZh}</p>
                    <p className="mt-1">
                      {p.number} · {p.publication} · granted {p.granted}
                    </p>
                  </li>
                ))}
                <li className="text-xs text-slate-500">
                  TODO: transcribe additional patent certificates if scans are OCR’d.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Industries served</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Source materials explicitly reference petroleum drilling and production equipment for
            the China market, including supply relationships with CNPC and Sinopec.{" "}
            <span className="font-medium text-slate-900">TODO:</span> add other sectors only when
            confirmed in writing.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Why choose us</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Documented field support",
                body: "Manuals include installation, commissioning, lubrication, and troubleshooting guidance for mud agitators.",
              },
              {
                title: "Integrated fabrication shops",
                body: "Casting through finishing under one roof — see facility facts on the About page.",
              },
              {
                title: "Audited management systems",
                body: "ISO 9001, ISO 45001, and ISO 14001 stated in the qualification compilation — attach certificate details when available.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Talk with engineering about your next solids control package."
        description={`Call ${company.contact.hotline} or send an inquiry — we will route you to the right product team.`}
        primary={{ href: "/contact", label: "Contact sales" }}
        secondary={{ href: "/about", label: "About the factory" }}
      />
    </>
  );
}
