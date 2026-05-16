import { Resend } from "resend";
import { company } from "@/data/company";

export type InquiryPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export async function sendInquiryEmail(payload: InquiryPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const to = process.env.INQUIRY_TO_EMAIL ?? company.contact.email;
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Hongyu Website <onboarding@resend.dev>";

  const phoneLine = payload.phone || "(not provided)";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `Website inquiry — ${payload.name} (${payload.company})`,
    text: [
      "New inquiry from hongyupetro.com",
      "",
      `Name: ${payload.name}`,
      `Company: ${payload.company}`,
      `Email: ${payload.email}`,
      `Phone: ${phoneLine}`,
      "",
      "Inquiry details:",
      payload.message,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}
