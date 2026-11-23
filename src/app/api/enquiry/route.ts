import { NextResponse } from "next/server";
import { validateEnquiry, divisionName, branchName, type EnquiryInput } from "@/lib/enquiry";

/**
 * Enquiry endpoint.
 *
 * Messages are only reported as sent when an email provider has actually
 * accepted them. Configure (all required):
 *   RESEND_API_KEY        – API key from resend.com
 *   ENQUIRY_TO_EMAIL      – where enquiries are delivered
 *   ENQUIRY_FROM_EMAIL    – verified sender, e.g. "HIGH WAY Website <web@your-domain>"
 * Until then the endpoint answers 503 `not_configured` and the form tells the
 * visitor honestly that the message was NOT sent.
 */

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Partial<EnquiryInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ code: "bad_request" }, { status: 400 });
  }

  const input: EnquiryInput = {
    type: body.type === "business" ? "business" : "general",
    name: String(body.name ?? ""),
    company: String(body.company ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    division: String(body.division ?? ""),
    branch: String(body.branch ?? ""),
    message: String(body.message ?? ""),
    website: String(body.website ?? ""),
  };

  // Honeypot: pretend success to bots without sending anything.
  if (input.website) return NextResponse.json({ ok: true });

  const errors = validateEnquiry(input);
  if (Object.keys(errors).length) return NextResponse.json({ code: "invalid", errors }, { status: 422 });

  const { RESEND_API_KEY, ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !ENQUIRY_TO_EMAIL || !ENQUIRY_FROM_EMAIL) {
    return NextResponse.json({ code: "not_configured" }, { status: 503 });
  }

  const lines: [string, string][] = [
    ["Type", input.type === "business" ? "Business / product enquiry" : "General enquiry"],
    ["Name", input.name],
    ["Company", input.company],
    ["Email", input.email],
    ["Phone", input.phone],
    ["Division", divisionName(input.division)],
    ["Preferred outlet", branchName(input.branch)],
  ].filter(([, v]) => v) as [string, string][];

  const html = `<table cellpadding="6">${lines.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join("")}</table><p style="white-space:pre-wrap">${esc(input.message)}</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: ENQUIRY_FROM_EMAIL,
        to: [ENQUIRY_TO_EMAIL],
        reply_to: input.email,
        subject: `Website enquiry — ${input.name}${input.division ? ` — ${divisionName(input.division)}` : ""}`,
        html,
      }),
    });
    if (!res.ok) return NextResponse.json({ code: "provider_error" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ code: "provider_error" }, { status: 502 });
  }
}
