import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const pilotSignupSchema = z.object({
  // Block A – Basic contact
  name: z.string().min(1, "Name is required.").max(200, "Name is too long."),
  email: z.string().email("Please enter a valid email address."),
  country: z.string().min(1, "Country is required.").max(100, "Country is too long."),
  city: z.string().min(1, "City is required.").max(100, "City is too long."),
  socialHandle: z.string().max(100, "Social handle is too long.").optional(),

  // Block B – Who you are
  userType: z.enum([
    "full-time-wheelchair-user",
    "part-time-wheelchair-user",
    "caregiver-family",
    "other",
  ], {
    errorMap: () => ({ message: "Please select who you are." }),
  }),
  userTypeOther: z.string().max(200, "Description is too long.").optional(),
  ageRange: z.enum([
    "under-18",
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55-plus",
  ], {
    errorMap: () => ({ message: "Please select your age range." }),
  }),

  // Block C – Wheelchair and daily use
  wheelchairType: z.enum(["manual", "power", "both"], {
    errorMap: () => ({ message: "Please select your wheelchair type." }),
  }),
  usageLocations: z.array(z.string()).min(1, "Please select at least one location."),
  dailyHours: z.enum([
    "less-than-2",
    "2-4",
    "4-8",
    "more-than-8",
  ], {
    errorMap: () => ({ message: "Please select daily usage hours." }),
  }),

  // Block D – Interest and intent
  interestLevel: z.enum([
    "very-interested",
    "curious",
    "not-sure",
  ], {
    errorMap: () => ({ message: "Please select your interest level." }),
  }),
  openToInvasive: z.enum([
    "yes-possibly",
    "maybe-need-info",
    "no",
  ], {
    errorMap: () => ({ message: "Please indicate your interest in trying the device." }),
  }),
  pilotAvailability: z.enum([
    "yes-if-near",
    "maybe-depends",
    "probably-not",
  ], {
    errorMap: () => ({ message: "Please indicate your availability for pilots." }),
  }),
  impactDescription: z
    .string()
    .min(1, "Please describe what this would change for you.")
    .max(2000, "Description is too long."),

  // Block E – Logistics and consent
  timezone: z.string().max(100, "Timezone is too long.").optional(),
  emailIsPreferred: z.boolean(),
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

    // Format the email with all pilot data
    const emailHtml = `
      <h2>New Wheelchair Pilot Signup</h2>
      
      <h3>Contact Information</h3>
      <ul>
        <li><strong>Name:</strong> ${escapeHtml(data.name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(data.email)}</li>
        <li><strong>Location:</strong> ${escapeHtml(data.city)}, ${escapeHtml(data.country)}</li>
        ${data.socialHandle ? `<li><strong>Social Handle:</strong> ${escapeHtml(data.socialHandle)}</li>` : ""}
        ${data.timezone ? `<li><strong>Timezone:</strong> ${escapeHtml(data.timezone)}</li>` : ""}
      </ul>

      <h3>User Profile</h3>
      <ul>
        <li><strong>User Type:</strong> ${formatUserType(data.userType)}${data.userTypeOther ? ` (${escapeHtml(data.userTypeOther)})` : ""}</li>
        <li><strong>Age Range:</strong> ${formatAgeRange(data.ageRange)}</li>
      </ul>

      <h3>Wheelchair Usage</h3>
      <ul>
        <li><strong>Wheelchair Type:</strong> ${formatWheelchairType(data.wheelchairType)}</li>
        <li><strong>Usage Locations:</strong> ${data.usageLocations.map(escapeHtml).join(", ")}</li>
        <li><strong>Daily Hours:</strong> ${formatDailyHours(data.dailyHours)}</li>
      </ul>

      <h3>Interest & Availability</h3>
      <ul>
        <li><strong>Interest Level:</strong> ${formatInterestLevel(data.interestLevel)}</li>
        <li><strong>Interest in Device:</strong> ${formatOpenToInvasive(data.openToInvasive)}</li>
        <li><strong>Pilot Availability:</strong> ${formatPilotAvailability(data.pilotAvailability)}</li>
      </ul>

      <h3>What Would This Change?</h3>
      <pre style="white-space: pre-wrap; font-family: inherit; background: #f5f5f5; padding: 12px; border-radius: 4px;">${escapeHtml(data.impactDescription)}</pre>

      <h3>Contact Preferences</h3>
      <ul>
        <li><strong>Email is Preferred:</strong> ${data.emailIsPreferred ? "Yes" : "No"}</li>
        <li><strong>Wants Updates:</strong> ${data.wantsUpdates ? "Yes" : "No"}</li>
      </ul>
    `;

    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: `Wheelchair Pilot Signup – ${data.name} (${data.city}, ${data.country})`,
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

function formatUserType(type: string): string {
  const map: Record<string, string> = {
    "full-time-wheelchair-user": "Full-time wheelchair user",
    "part-time-wheelchair-user": "Part-time wheelchair user",
    "caregiver-family": "Caregiver/Family member",
    "other": "Other",
  };
  return map[type] || type;
}

function formatAgeRange(range: string): string {
  const map: Record<string, string> = {
    "under-18": "Under 18",
    "18-24": "18-24",
    "25-34": "25-34",
    "35-44": "35-44",
    "45-54": "45-54",
    "55-plus": "55+",
  };
  return map[range] || range;
}

function formatWheelchairType(type: string): string {
  const map: Record<string, string> = {
    "manual": "Manual",
    "power": "Power/Electric",
    "both": "Both",
  };
  return map[type] || type;
}

function formatDailyHours(hours: string): string {
  const map: Record<string, string> = {
    "less-than-2": "Less than 2 hours",
    "2-4": "2-4 hours",
    "4-8": "4-8 hours",
    "more-than-8": "More than 8 hours",
  };
  return map[hours] || hours;
}

function formatInterestLevel(level: string): string {
  const map: Record<string, string> = {
    "very-interested": "Very interested – I'd love to test",
    "curious": "Curious – want to learn more first",
    "not-sure": "Not sure – just exploring",
  };
  return map[level] || level;
}

function formatOpenToInvasive(open: string): string {
  const map: Record<string, string> = {
    "yes-possibly": "Yes, definitely interested",
    "maybe-need-info": "Maybe, need more info",
    "no": "Not interested at this time",
  };
  return map[open] || open;
}

function formatPilotAvailability(avail: string): string {
  const map: Record<string, string> = {
    "yes-if-near": "Yes, if it's near me",
    "maybe-depends": "Maybe, depends on timing and details",
    "probably-not": "Probably not, I mostly want to follow progress",
  };
  return map[avail] || avail;
}
