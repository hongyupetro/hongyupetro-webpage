"use client";

import { useState } from "react";
import { company } from "@/data/company";

/**
 * UI-only inquiry form. TODO: connect to email API, server action, or CRM.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
      noValidate
    >
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input
            name="name"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-orange-500/30 focus:border-orange-500 focus:ring"
            autoComplete="name"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Company
          <input
            name="company"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-orange-500/30 focus:border-orange-500 focus:ring"
            autoComplete="organization"
          />
        </label>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-orange-500/30 focus:border-orange-500 focus:ring"
            autoComplete="email"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Phone
          <input
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-orange-500/30 focus:border-orange-500 focus:ring"
            autoComplete="tel"
          />
        </label>
      </div>
      <label className="text-sm font-medium text-slate-700">
        Inquiry details
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-orange-500/30 focus:border-orange-500 focus:ring"
          placeholder="Equipment type, standards, quantity, delivery region…"
        />
      </label>
      <p className="text-xs text-slate-500">
        This prototype does not transmit data. For urgent matters, call{" "}
        <a className="font-medium text-orange-600" href={`tel:${company.contact.hotline.replace(/-/g, "")}`}>
          {company.contact.hotline}
        </a>
        .
      </p>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-400"
      >
        Submit inquiry (demo)
      </button>
      {submitted ? (
        <p className="text-sm font-medium text-emerald-700" role="status">
          Demo only — no message was sent. TODO: wire to backend or mail provider.
        </p>
      ) : null}
    </form>
  );
}
