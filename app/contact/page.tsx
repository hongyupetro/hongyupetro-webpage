import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${company.legalNameEn} for equipment inquiries and technical support.`,
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <div className="border-b border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            Engineering & procurement inquiries
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Share project parameters, standards, and delivery expectations. For immediate support,
            use the service hotline published in company materials.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">Direct contacts</h2>
          <dl className="mt-6 space-y-4 text-sm text-slate-600">
            <div>
              <dt className="font-medium text-slate-900">Service hotline</dt>
              <dd className="mt-1">
                <a className="text-orange-600 hover:text-orange-500" href={`tel:${company.contact.hotline.replace(/-/g, "")}`}>
                  {company.contact.hotline}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-900">Postal address</dt>
              <dd className="mt-1 leading-relaxed">{company.registeredAddress}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-900">Email</dt>
              <dd className="mt-1">
                {company.contact.email ? (
                  <a className="text-orange-600 hover:text-orange-500" href={`mailto:${company.contact.email}`}>
                    {company.contact.email}
                  </a>
                ) : (
                  <span className="text-slate-500">TODO: publish an inquiry mailbox.</span>
                )}
              </dd>
            </div>
          </dl>
          <p className="mt-8 text-xs leading-relaxed text-slate-500">
            Internal PDF reference materials live under <code className="rounded bg-slate-200 px-1">ref/</code>{" "}
            and are not exposed here by default. Summaries are maintained in{" "}
            <code className="rounded bg-slate-200 px-1">docs/content-brief.md</code>.
          </p>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
