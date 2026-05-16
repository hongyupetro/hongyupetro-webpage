"use client";

import { useActionState } from "react";
import {
  inquiryInitialState,
  submitInquiry,
} from "@/app/actions/submit-inquiry";
import { company } from "@/data/company";

const inputClass =
  "mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-orange-500/30 focus:border-orange-500 focus:ring disabled:bg-slate-50 disabled:text-slate-500";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    inquiryInitialState,
  );

  return (
    <form
      action={formAction}
      className="relative grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name <span className="text-orange-600">*</span>
          <input
            name="name"
            required
            disabled={pending}
            className={inputClass}
            autoComplete="name"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Company <span className="text-orange-600">*</span>
          <input
            name="company"
            required
            disabled={pending}
            className={inputClass}
            autoComplete="organization"
          />
        </label>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Email <span className="text-orange-600">*</span>
          <input
            name="email"
            type="email"
            required
            disabled={pending}
            className={inputClass}
            autoComplete="email"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Phone <span className="font-normal text-slate-400">(optional)</span>
          <input
            name="phone"
            type="tel"
            disabled={pending}
            className={inputClass}
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="text-sm font-medium text-slate-700">
        Inquiry details <span className="text-orange-600">*</span>
        <textarea
          name="message"
          required
          disabled={pending}
          rows={5}
          className={inputClass}
          placeholder="Equipment type, standards, quantity, delivery region…"
        />
      </label>

      <p className="text-xs text-slate-500">
        For urgent matters, call{" "}
        <a
          className="font-medium text-orange-600"
          href={`tel:${company.contact.hotline.replace(/[\s-]/g, "")}`}
        >
          {company.contact.hotline}
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit inquiry"}
      </button>

      {state.message ? (
        <p
          className={`text-sm font-medium ${state.ok ? "text-emerald-700" : "text-red-700"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
