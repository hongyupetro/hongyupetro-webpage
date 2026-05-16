"use server";

import { company } from "@/data/company";

export type InquiryState = {
  ok: boolean;
  message: string;
};

function getField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  if (getField(formData, "website")) {
    return { ok: true, message: "Thank you. Your inquiry has been sent." };
  }

  const name = getField(formData, "name");
  const companyName = getField(formData, "company");
  const email = getField(formData, "email");
  const phone = getField(formData, "phone");
  const message = getField(formData, "message");

  if (!name || !companyName || !email || !message) {
    return { ok: false, message: "Please complete all required fields." };
  }

  if (!isValidEmail(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const recipient = company.contact.email;
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        company: companyName,
        email,
        phone: phone || "(not provided)",
        message,
        _subject: `Website inquiry — ${name} (${companyName})`,
        _template: "table",
        _replyto: email,
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      console.error("FormSubmit error:", response.status, await response.text());
      return {
        ok: false,
        message: "Could not send your message. Please try again or contact us by phone.",
      };
    }

    const data = (await response.json()) as { success?: string };
    if (data.success !== "true") {
      return {
        ok: false,
        message: "Could not send your message. Please try again or contact us by phone.",
      };
    }
  } catch (error) {
    console.error("FormSubmit request failed:", error);
    return {
      ok: false,
      message: "Could not send your message. Please try again or contact us by phone.",
    };
  }

  return { ok: true, message: "Thank you. Your inquiry has been sent." };
}

export const inquiryInitialState: InquiryState = { ok: false, message: "" };
