# Pilot Signup Implementation

## Overview

The `/contact` page has been redesigned as a wheelchair pilot signup form to capture high-intent leads from wheelchair users for investor validation. The form collects structured data about wheelchair usage patterns, interest levels, and availability for future pilots.

This is for a **non-invasive EMG armband** - a wearable device that detects muscle signals without any implants or medical procedures.

## Files Created/Modified

### New Files

1. **`app/api/pilot-signup/route.ts`**
   - API endpoint for pilot signup form submissions
   - Uses Zod for validation matching the existing `contact` route pattern
   - Sends formatted email via Resend with all pilot data
   - Returns `{ success: true, id: string }` on success

2. **`components/contact/pilot-signup-form.tsx`**
   - Comprehensive form component with 5 logical blocks:
     - Block A: Basic contact info (name, email, location)
     - Block B: User profile (wheelchair user type, age range)
     - Block C: Wheelchair usage (type, locations, daily hours)
     - Block D: Interest & availability (interest level, interest in trying the device, pilot availability, impact description)
     - Block E: Logistics & consent (timezone, contact preferences, consent)
   - Follows existing form pattern from `contact-form.tsx`
   - Includes loading states, error handling, and success messages

3. **`types/pilot-signup.ts`**
   - TypeScript types for all form fields
   - Exports enums and the main `PilotSignupData` interface

### Modified Files

1. **`app/contact/page.tsx`**
   - Updated to use `PilotSignupForm` instead of simple contact form
   - Added "Why we're asking" and "What happens next" sections
   - Tailored content for wheelchair users coming from Facebook

## Data Structure

The form captures:

- **Demographics**: Name, email, location, age range
- **Wheelchair usage**: Type (manual/power), locations, daily hours
- **Interest signals**: Very interested / Curious / Not sure
- **Device interest**: Yes definitely / Maybe need info / Not interested at this time
- **Pilot availability**: Yes if near / Maybe / Probably not
- **Qualitative data**: Open-ended "what would this change" question
- **Consent**: Required checkbox for pilot contact

## Email Format

Emails sent to `CONTACT_EMAIL` include:
- Subject: `Wheelchair Pilot Signup – [Name] ([City], [Country])`
- Structured HTML with all form data formatted in readable sections
- Reply-to set to user's email for easy follow-up

## Environment Variables

Uses existing Resend configuration:
- `RESEND_API_KEY` - Required
- `CONTACT_EMAIL` or `RESEND_TO_EMAIL` - Where signups are sent
- `CONTACT_FROM_EMAIL` - Optional, defaults to `onboarding@resend.dev`

## Investor Validation

This structure allows you to easily generate metrics for investors:

```typescript
// Example queries you can run on your signup data:
- Total signups
- Geographic distribution (city, country)
- Age range breakdown
- Wheelchair type distribution
- Daily usage hours (proxy for dependency/need)
- Interest level percentages
- Openness to invasive approach
- Pilot availability breakdown
```

## Testing

To test locally:
1. Ensure environment variables are set
2. Navigate to `/contact`
3. Fill out the form
4. Check the email sent to `CONTACT_EMAIL`

## Notes

- The old simple contact form is preserved at `components/contact/contact-form.tsx` if needed
- Form validation matches your existing pattern with Zod schemas
- All fields use semantic HTML and include proper accessibility attributes
- Form uses the existing design system (Button, input styles, Reveal animations)
