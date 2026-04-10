import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const pilotSignupSchema = z.object({
  // Contact
  name: z.string().min(1, "Name is required.").max(200, "Name is too long."),
  email: z.string().email("Please enter a valid email address."),
  country: z.string().min(1, "Country is required.").max(100, "Country is too long."),
  city: z.string().min(1, "City is required.").max(100, "City is too long."),

  // Use case
  useCase: z.enum([
    "mobility-wheelchair",
    "forearm-rehabilitation",
    "industrial-fatigue",
    "robotics-exoskeleton",
    "research-clinical",
    "other",
  ], {
    errorMap: () => ({ message: "Please select a primary use case." }),
  }),
  useCaseOther: z.string().max(200, "Description is too long.").optional(),

  // Role
  userRole: z.enum([
    "end-user-patient",
    "caregiver-family",
    "clinician-therapist",
    "researcher-engineer",
    "company-operations",
    "other",
  ], {
    errorMap: () => ({ message: "Please select your role." }),
  }),
  userRoleOther: z.string().max(200, "Description is too long.").optional(),

  // Problem statement
  problemStatement: z.string().max(1000, "Description is too long.").optional(),

  // Pilot readiness
  pilotReadiness: z.enum([
    "ready-now",
    "next-3-6-months",
    "need-more-info",
    "just-updates",
  ], {
    errorMap: () => ({ message: "Please select your pilot readiness." }),
  }),

  // Testing locations
  testingLocations: z.array(z.string()).min(1, "Please select at least one testing location."),

  // Outcome
  outcomeDescription: z.string().max(2000, "Description is too long.").optional(),

  // Consent
  consentPilotContact: z.boolean().refine((val) => val === true, {
    message: "You must consent to be contacted about pilots.",
  }),
  wantsUpdates: z.boolean().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = pilotSignupSchema.safeParse(raw);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      const firstError = Object.values(errors).flat()[0] ?? "Invalid input.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Pilot signup is not configured." },
        { status: 503 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || process.env.RESEND_TO_EMAIL;
    if (!toEmail) {
      console.error("CONTACT_EMAIL (or RESEND_TO_EMAIL) is not set.");
      return NextResponse.json(
        { error: "Pilot signup is not configured." },
        { status: 503 }
      );
    }

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const emailHtml = `
      <h2>New Pilot Signup – ${escapeHtml(formatUseCase(data.useCase))}</h2>

      <h3>Contact Information</h3>
      <ul>
        <li><strong>Name:</strong> ${escapeHtml(data.name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(data.email)}</li>
        <li><strong>Location:</strong> ${escapeHtml(data.city)}, ${escapeHtml(data.country)}</li>
      </ul>

      <h3>Use Case & Role</h3>
      <ul>
        <li><strong>Primary Use Case:</strong> ${escapeHtml(formatUseCase(data.useCase))}${data.useCaseOther ? ` – ${escapeHtml(data.useCaseOther)}` : ""}</li>
        <li><strong>Role:</strong> ${escapeHtml(formatUserRole(data.userRole))}${data.userRoleOther ? ` – ${escapeHtml(data.userRoleOther)}` : ""}</li>
      </ul>

      <h3>Problem Statement</h3>
      <pre style="white-space: pre-wrap; font-family: inherit; background: #f5f5f5; padding: 12px; border-radius: 4px;">${data.problemStatement ? escapeHtml(data.problemStatement) : "<em>Not provided</em>"}</pre>

      <h3>Pilot Details</h3>
      <ul>
        <li><strong>Readiness:</strong> ${escapeHtml(formatPilotReadiness(data.pilotReadiness))}</li>
        <li><strong>Testing Locations:</strong> ${data.testingLocations.map(escapeHtml).join(", ")}</li>
      </ul>

      <h3>What Does Success Look Like?</h3>
      <pre style="white-space: pre-wrap; font-family: inherit; background: #f5f5f5; padding: 12px; border-radius: 4px;">${data.outcomeDescription ? escapeHtml(data.outcomeDescription) : "<em>Not provided</em>"}</pre>

      <h3>Preferences</h3>
      <ul>
        <li><strong>Wants Updates:</strong> ${data.wantsUpdates ? "Yes" : "No"}</li>
      </ul>
    `;

    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: `Pilot Signup – ${data.name} (${formatUseCase(data.useCase)}, ${data.city})`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to submit signup. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: emailData?.id });
  } catch (e) {
    console.error("Pilot signup API error:", e);
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

function formatUseCase(uc: string): string {
  const map: Record<string, string> = {
    "mobility-wheelchair": "Mobility / Wheelchair Control",
    "forearm-rehabilitation": "Forearm Rehabilitation & Diagnostics",
    "industrial-fatigue": "Industrial / Logistics Fatigue Monitoring",
    "robotics-exoskeleton": "Robotics / Exoskeleton Control",
    "research-clinical": "Research / Clinical Trials",
    "other": "Other",
  };
  return map[uc] || uc;
}

function formatUserRole(role: string): string {
  const map: Record<string, string> = {
    "end-user-patient": "End user / Patient",
    "caregiver-family": "Caregiver or Family member",
    "clinician-therapist": "Clinician / Therapist",
    "researcher-engineer": "Researcher / Engineer",
    "company-operations": "Company / Operations Leader",
    "other": "Other",
  };
  return map[role] || role;
}

function formatPilotReadiness(readiness: string): string {
  const map: Record<string, string> = {
    "ready-now": "Ready to join early pilot now",
    "next-3-6-months": "Interested in next 3–6 months",
    "need-more-info": "Interested, but need more info first",
    "just-updates": "Just want product updates for now",
  };
  return map[readiness] || readiness;
}
