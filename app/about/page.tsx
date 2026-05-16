import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description: `Facility footprint, workshops, certifications, and patents for ${company.legalNameEn}.`,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-[#0b1220] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">About</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Factory-backed petroleum machinery manufacturing
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">{company.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Company introduction</h2>
          <p className="mt-4 text-slate-600">
            {company.legalNameEn} ({company.legalNameZh}) was founded in{" "}
            <strong>{company.foundedYear}</strong> and is located in {company.facility.zone}.{" "}
            {company.facility.logistics}
          </p>
          <p className="mt-4 text-slate-600">
            The company reports a {company.facility.siteAreaM2.toLocaleString()} m² site with{" "}
            {company.facility.workshopAreaM2.toLocaleString()} m² of workshop area,{" "}
            {company.facility.equipmentCount} pieces of processing equipment, and{" "}
            {company.facility.employeeCount} employees (per the 2021 qualification compilation
            cover sheet — <span className="font-medium">TODO: confirm current figures</span> if
            marketing new collateral).
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">Manufacturing & engineering</h2>
          <p className="mt-4 text-slate-600">
            Workshop disciplines named in source materials include:{" "}
            {company.facility.shops.join(", ").toLowerCase()}. Product manuals (for example the
            TCNJ mud agitator) document installation tolerances, lubrication grades, and
            preventive maintenance intervals suitable for field service teams.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">Quality & HSE systems</h2>
          <p className="mt-4 text-slate-600">
            The qualification compilation states certification to ISO 9001, ISO 45001, and ISO
            14001. Certificate identifiers, scopes, and expiry dates should be published only after
            transcription from the scanned certificate pages.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">Innovation & IP</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600">
            {company.patents.map((p) => (
              <li key={p.number}>
                <span className="font-medium text-slate-900">{p.titleZh}</span> — patent{" "}
                {p.number}, publication {p.publication}, granted {p.granted}.
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Registered address (patent certificates)</h2>
          <p className="mt-2 text-sm text-slate-600">{company.registeredAddress}</p>
          <p className="mt-3 text-xs text-slate-500">
            Use this block for formal correspondence; add export sales contacts when approved.
          </p>
        </section>
      </div>

      <CTASection
        title="Schedule a factory review or technical call."
        description="Share your solids control layout and tank drawings — we will respond with equipment options grounded in our documented product scope."
        primary={{ href: "/contact", label: "Start an inquiry" }}
        secondary={{ href: "/products", label: "Browse equipment" }}
      />
    </div>
  );
}
