import { NextResponse } from "next/server";
import { sendInquiryEmail } from "@/lib/send-inquiry-email";

function trim(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const data = body as Record<string, unknown>;

  if (trim(data.website)) {
    return NextResponse.json({ ok: true, message: "Thank you. Your inquiry has been sent." });
  }

  const name = trim(data.name);
  const companyName = trim(data.company);
  const email = trim(data.email);
  const phone = trim(data.phone);
  const message = trim(data.message);

  if (!name || !companyName || !email || !message) {
    return NextResponse.json(
      { ok: false, message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    await sendInquiryEmail({ name, company: companyName, email, phone, message });
  } catch (error) {
    console.error("Inquiry email failed:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Could not send your message right now. Please email us directly at hongyupetro@gmail.com.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you. Your inquiry has been sent.",
  });
}
