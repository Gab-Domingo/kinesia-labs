import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  message: z
    .string()
    .min(1, "Message is required.")
    .max(5000, "Message is too long."),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = bodySchema.safeParse(raw);

    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors;
      const message =
        first.email?.[0] ?? first.message?.[0] ?? "Invalid input.";
      return NextResponse.json({ error: message }, { status: 400 });
    }

    const { email, message } = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Contact form is not configured." },
        { status: 503 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || process.env.RESEND_TO_EMAIL;
    if (!toEmail) {
      console.error("CONTACT_EMAIL (or RESEND_TO_EMAIL) is not set.");
      return NextResponse.json(
        { error: "Contact form is not configured." },
        { status: 503 }
      );
    }

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Kinesia Labs – Contact from ${email}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
