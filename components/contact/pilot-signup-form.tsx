"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { UseCase, UserRole, PilotReadiness } from "@/types/pilot-signup";

const TESTING_LOCATIONS = [
  { id: "home", label: "Home" },
  { id: "clinic-rehab", label: "Clinic / Rehab center" },
  { id: "workplace-industrial", label: "Workplace / Industrial site" },
  { id: "lab-university", label: "Lab / University" },
  { id: "other", label: "Other" },
];

export function PilotSignupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedLocations, setSelectedLocations] = useState<Set<string>>(new Set());
  const [useCase, setUseCase] = useState<UseCase | "">("");
  const [userRole, setUserRole] = useState<UserRole | "">("");

  function toggleLocation(locationId: string) {
    const next = new Set(selectedLocations);
    if (next.has(locationId)) {
      next.delete(locationId);
    } else {
      next.add(locationId);
    }
    setSelectedLocations(next);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (selectedLocations.size === 0) {
      setStatus("error");
      setErrorMessage("Please select at least one testing location.");
      return;
    }

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      country: formData.get("country") as string,
      city: formData.get("city") as string,
      useCase: formData.get("useCase") as UseCase,
      useCaseOther: formData.get("useCaseOther") as string,
      userRole: formData.get("userRole") as UserRole,
      userRoleOther: formData.get("userRoleOther") as string,
      problemStatement: formData.get("problemStatement") as string,
      pilotReadiness: formData.get("pilotReadiness") as PilotReadiness,
      testingLocations: Array.from(selectedLocations),
      outcomeDescription: formData.get("outcomeDescription") as string,
      consentPilotContact: formData.get("consentPilotContact") === "on",
      wantsUpdates: formData.get("wantsUpdates") === "on",
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/pilot-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(responseData.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
      setSelectedLocations(new Set());
      setUseCase("");
      setUserRole("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  const inputClassName = cn(
    "w-full rounded border border-border bg-background/60 px-4 py-3 font-mono text-foreground",
    "placeholder:text-foreground/40 outline-none transition-colors",
    "focus:border-primary/60 focus:ring-2 focus:ring-primary/20",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  const labelClassName = "block text-sm font-mono uppercase text-foreground/70 mb-2";

  const radioGroupClassName = "flex flex-col gap-2";

  const radioLabelClassName = cn(
    "flex items-center gap-3 p-3 rounded border border-border bg-background/30 cursor-pointer transition-colors",
    "hover:bg-background/60 hover:border-primary/40"
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-2xl">

      {/* Block A – Contact */}
      <div className="space-y-6">
        <h3 className="text-lg font-mono uppercase text-foreground/90">Contact Information</h3>

        <div>
          <label htmlFor="name" className={labelClassName}>Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={status === "loading"}
            placeholder="Your full name"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={status === "loading"}
            placeholder="you@example.com"
            className={inputClassName}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="country" className={labelClassName}>Country *</label>
            <input
              id="country"
              name="country"
              type="text"
              required
              disabled={status === "loading"}
              placeholder="United States"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="city" className={labelClassName}>City *</label>
            <input
              id="city"
              name="city"
              type="text"
              required
              disabled={status === "loading"}
              placeholder="San Francisco"
              className={inputClassName}
            />
          </div>
        </div>
      </div>

      {/* Block B – Use case */}
      <div className="space-y-6">
        <h3 className="text-lg font-mono uppercase text-foreground/90">Your Use Case</h3>

        <div>
          <label className={labelClassName}>Primary use case *</label>
          <div className={radioGroupClassName}>
            {[
              { value: "mobility-wheelchair", label: "Mobility / Wheelchair control" },
              { value: "forearm-rehabilitation", label: "Forearm rehabilitation & diagnostics" },
              { value: "industrial-fatigue", label: "Industrial / Logistics fatigue monitoring" },
              { value: "robotics-exoskeleton", label: "Robotics / Exoskeleton control" },
              { value: "research-clinical", label: "Research / Clinical trials" },
              { value: "other", label: "Other" },
            ].map(({ value, label }) => (
              <label key={value} className={radioLabelClassName}>
                <input
                  type="radio"
                  name="useCase"
                  value={value}
                  required
                  disabled={status === "loading"}
                  onChange={() => setUseCase(value as UseCase)}
                  className="w-4 h-4 accent-primary"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
          {useCase === "other" && (
            <input
              name="useCaseOther"
              type="text"
              disabled={status === "loading"}
              placeholder="Please describe your use case"
              className={cn(inputClassName, "mt-3")}
            />
          )}
        </div>

        <div>
          <label className={labelClassName}>Your role *</label>
          <div className={radioGroupClassName}>
            {[
              { value: "end-user-patient", label: "End user / Patient" },
              { value: "caregiver-family", label: "Caregiver or family member" },
              { value: "clinician-therapist", label: "Clinician / Therapist" },
              { value: "researcher-engineer", label: "Researcher / Engineer" },
              { value: "company-operations", label: "Company / Operations leader" },
              { value: "other", label: "Other" },
            ].map(({ value, label }) => (
              <label key={value} className={radioLabelClassName}>
                <input
                  type="radio"
                  name="userRole"
                  value={value}
                  required
                  disabled={status === "loading"}
                  onChange={() => setUserRole(value as UserRole)}
                  className="w-4 h-4 accent-primary"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
          {userRole === "other" && (
            <input
              name="userRoleOther"
              type="text"
              disabled={status === "loading"}
              placeholder="Please describe your role"
              className={cn(inputClassName, "mt-3")}
            />
          )}
        </div>

        <div>
          <label htmlFor="problemStatement" className={labelClassName}>
            What problem are you trying to solve? *
          </label>
          <textarea
            id="problemStatement"
            name="problemStatement"
            required
            rows={3}
            disabled={status === "loading"}
            placeholder="Describe in 1–2 sentences the challenge you're facing…"
            className={cn(inputClassName, "resize-y min-h-[80px]")}
          />
        </div>
      </div>

      {/* Block C – Pilot readiness */}
      <div className="space-y-6">
        <h3 className="text-lg font-mono uppercase text-foreground/90">Pilot Availability</h3>

        <div>
          <label className={labelClassName}>When could you join a pilot? *</label>
          <div className={radioGroupClassName}>
            {[
              { value: "ready-now", label: "Ready to join an early pilot now" },
              { value: "next-3-6-months", label: "Interested in the next 3–6 months" },
              { value: "need-more-info", label: "Interested, but need more info first" },
              { value: "just-updates", label: "Just want product updates for now" },
            ].map(({ value, label }) => (
              <label key={value} className={radioLabelClassName}>
                <input
                  type="radio"
                  name="pilotReadiness"
                  value={value}
                  required
                  disabled={status === "loading"}
                  className="w-4 h-4 accent-primary"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClassName}>
            Where would pilot / testing happen? (select all that apply) *
          </label>
          <div className="flex flex-col gap-2">
            {TESTING_LOCATIONS.map((loc) => (
              <label
                key={loc.id}
                className={cn(
                  radioLabelClassName,
                  selectedLocations.has(loc.id) && "bg-primary/10 border-primary/60"
                )}
              >
                <input
                  type="checkbox"
                  checked={selectedLocations.has(loc.id)}
                  onChange={() => toggleLocation(loc.id)}
                  disabled={status === "loading"}
                  className="w-4 h-4 accent-primary"
                />
                <span>{loc.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="outcomeDescription" className={labelClassName}>
            What would success look like for you? *
          </label>
          <textarea
            id="outcomeDescription"
            name="outcomeDescription"
            required
            rows={4}
            disabled={status === "loading"}
            placeholder="Tell us what a meaningful outcome would be for you or your team…"
            className={cn(inputClassName, "resize-y min-h-[100px]")}
          />
        </div>
      </div>

      {/* Block D – Consent */}
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consentPilotContact"
            required
            disabled={status === "loading"}
            className="w-4 h-4 mt-1 accent-primary"
          />
          <span className="text-sm text-foreground/80">
            <strong>*</strong> I understand this is an early-stage product not yet on the market, and that Kinesia Labs will contact me only about pilots, studies, or updates related to this project.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="wantsUpdates"
            disabled={status === "loading"}
            className="w-4 h-4 mt-1 accent-primary"
          />
          <span className="text-sm text-foreground/80">
            I'd like to receive occasional updates about Kinesia Labs' progress
          </span>
        </label>
      </div>

      {status === "error" && errorMessage && (
        <div className="p-4 rounded bg-red-500/10 border border-red-500/30">
          <p className="text-sm text-red-400" role="alert">{errorMessage}</p>
        </div>
      )}

      {status === "success" && (
        <div className="p-4 rounded bg-green-500/10 border border-green-500/30">
          <p className="text-sm text-green-400" role="status">
            Thank you for signing up. We'll review your information and reach out when we're closer to a pilot relevant to you.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        size="default"
        className="self-start"
      >
        {status === "loading" ? "Submitting…" : "Join the pilot list"}
      </Button>

      <p className="text-xs text-foreground/50 -mt-4">* Required fields</p>
    </form>
  );
}
