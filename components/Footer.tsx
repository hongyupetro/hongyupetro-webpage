import Link from "next/link";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070b12] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-white">{company.legalNameEn}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {company.legalNameZh}
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Website copy is compiled from internal reference PDFs in{" "}
            <code className="rounded bg-slate-800 px-1 py-0.5">ref/</code> — see{" "}
            <code className="rounded bg-slate-800 px-1 py-0.5">docs/content-brief.md</code>.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="hover:text-white" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <p className="mt-3 text-sm">
            Service hotline:{" "}
            <a className="text-orange-400 hover:text-orange-300" href={`tel:${company.contact.hotline.replace(/-/g, "")}`}>
              {company.contact.hotline}
            </a>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {company.registeredAddress}
          </p>
          {company.contact.email ? (
            <p className="mt-2 text-sm">
              Email:{" "}
              <a className="text-orange-400 hover:text-orange-300" href={`mailto:${company.contact.email}`}>
                {company.contact.email}
              </a>
            </p>
          ) : (
            <p className="mt-2 text-xs text-slate-500">TODO: add public inquiry email.</p>
          )}
        </div>
      </div>
      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} {company.legalNameEn}. All rights reserved.</span>
          <span className="text-slate-600">Static marketing prototype — verify claims before external launch.</span>
        </div>
      </div>
    </footer>
  );
}
