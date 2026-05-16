"use client";

import { useState } from "react";
import { company } from "@/data/company";

const inputClass =
  "mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-orange-500/30 focus:border-orange-500 focus:ring disabled:bg-slate-50 disabled:text-slate-500";

type FormState = { ok: boolean; message: string };

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const [state, setState] = useState<FormState>({ ok: false, message: "" });
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ ok: false, message: "" });

    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setState({ ok: true, message: "Thank you. Your inquiry has been sent." });
      form.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const companyName = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !companyName || !email || !message) {
      setState({ ok: false, message: "Please complete all required fields." });
      return;
    }

    if (!isValidEmail(email)) {
      setState({ ok: false, message: "Please enter a valid email address." });
      return;
    }

    setPending(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company: companyName,
          email,
          phone,
          message,
        }),
      });

      const result = (await response.json()) as FormState;

      if (response.ok && result.ok) {
        setState({ ok: true, message: result.message });
        form.reset();
        return;
      }

      setState({
        ok: false,
        message:
          result.message ??
          `Could not send your message. Please email us at ${company.contact.email}.`,
      });
    } catch {
      setState({
        ok: false,
        message: `Network error. Please email us at ${company.contact.email}.`,
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <InquiryFields pending={pending} />

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

function InquiryFields({ pending }: { pending: boolean }) {
  return (
    <>
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
    </>
  );
}
