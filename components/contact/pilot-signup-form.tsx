"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type {
  UserType,
  AgeRange,
  WheelchairType,
  DailyHours,
  InterestLevel,
  OpenToInvasive,
  PilotAvailability,
} from "@/types/pilot-signup";

const USAGE_LOCATIONS = [
  { id: "at-home", label: "At home" },
  { id: "work-school", label: "At work / school" },
  { id: "city-outdoors", label: "Around the city / outdoors" },
  { id: "hospital-rehab", label: "Hospital / rehab setting" },
  { id: "other", label: "Other" },
];

export function PilotSignupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedLocations, setSelectedLocations] = useState<Set<string>>(new Set());

  function toggleLocation(locationId: string) {
    const newLocations = new Set(selectedLocations);
    if (newLocations.has(locationId)) {
      newLocations.delete(locationId);
    } else {
      newLocations.add(locationId);
    }
    setSelectedLocations(newLocations);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate at least one usage location is selected
    if (selectedLocations.size === 0) {
      setStatus("error");
      setErrorMessage("Please select at least one usage location.");
      return;
    }

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      country: formData.get("country") as string,
      city: formData.get("city") as string,
      socialHandle: formData.get("socialHandle") as string,
      userType: formData.get("userType") as UserType,
      userTypeOther: formData.get("userTypeOther") as string,
      ageRange: formData.get("ageRange") as AgeRange,
      wheelchairType: formData.get("wheelchairType") as WheelchairType,
      usageLocations: Array.from(selectedLocations),
      dailyHours: formData.get("dailyHours") as DailyHours,
      interestLevel: formData.get("interestLevel") as InterestLevel,
      openToInvasive: formData.get("openToInvasive") as OpenToInvasive,
      pilotAvailability: formData.get("pilotAvailability") as PilotAvailability,
      impactDescription: formData.get("impactDescription") as string,
      timezone: formData.get("timezone") as string,
      emailIsPreferred: formData.get("emailIsPreferred") === "on",
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
      {/* Block A – Basic contact */}
      <div className="space-y-6">
        <h3 className="text-lg font-mono uppercase text-foreground/90">Contact Information</h3>
        
        <div>
          <label htmlFor="name" className={labelClassName}>
            Name *
          </label>
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
          <label htmlFor="email" className={labelClassName}>
            Email *
          </label>
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
            <label htmlFor="country" className={labelClassName}>
              Country *
            </label>
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
            <label htmlFor="city" className={labelClassName}>
              City *
            </label>
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

        <div>
          <label htmlFor="socialHandle" className={labelClassName}>
            Instagram / Facebook handle (optional)
          </label>
          <input
            id="socialHandle"
            name="socialHandle"
            type="text"
            disabled={status === "loading"}
            placeholder="@yourhandle"
            className={inputClassName}
          />
        </div>
      </div>

      {/* Block B – Who you are */}
      <div className="space-y-6">
        <h3 className="text-lg font-mono uppercase text-foreground/90">About You</h3>

        <div>
          <label className={labelClassName}>Which best describes you? *</label>
          <div className={radioGroupClassName}>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="userType"
                value="full-time-wheelchair-user"
                required
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>I'm a full-time wheelchair user</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="userType"
                value="part-time-wheelchair-user"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>I use a wheelchair part-time</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="userType"
                value="caregiver-family"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>I'm a caregiver/family member answering for someone</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="userType"
                value="other"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Other</span>
            </label>
          </div>
          <input
            name="userTypeOther"
            type="text"
            disabled={status === "loading"}
            placeholder="If other, please describe"
            className={cn(inputClassName, "mt-3")}
          />
        </div>

        <div>
          <label className={labelClassName}>Age range *</label>
          <select
            name="ageRange"
            required
            disabled={status === "loading"}
            className={inputClassName}
          >
            <option value="">Select age range</option>
            <option value="under-18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55-plus">55+</option>
          </select>
        </div>
      </div>

      {/* Block C – Wheelchair and daily use */}
      <div className="space-y-6">
        <h3 className="text-lg font-mono uppercase text-foreground/90">Wheelchair Usage</h3>

        <div>
          <label className={labelClassName}>What type of wheelchair do you mainly use? *</label>
          <div className={radioGroupClassName}>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="wheelchairType"
                value="manual"
                required
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Manual</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="wheelchairType"
                value="power"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Power / Electric</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="wheelchairType"
                value="both"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Both</span>
            </label>
          </div>
        </div>

        <div>
          <label className={labelClassName}>Where do you use your wheelchair most? (select all that apply) *</label>
          <div className="flex flex-col gap-2">
            {USAGE_LOCATIONS.map((location) => (
              <label
                key={location.id}
                className={cn(
                  radioLabelClassName,
                  selectedLocations.has(location.id) && "bg-primary/10 border-primary/60"
                )}
              >
                <input
                  type="checkbox"
                  checked={selectedLocations.has(location.id)}
                  onChange={() => toggleLocation(location.id)}
                  disabled={status === "loading"}
                  className="w-4 h-4 accent-primary"
                />
                <span>{location.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClassName}>How many hours a day do you typically use your wheelchair? *</label>
          <select
            name="dailyHours"
            required
            disabled={status === "loading"}
            className={inputClassName}
          >
            <option value="">Select daily hours</option>
            <option value="less-than-2">Less than 2 hours</option>
            <option value="2-4">2-4 hours</option>
            <option value="4-8">4-8 hours</option>
            <option value="more-than-8">More than 8 hours</option>
          </select>
        </div>
      </div>

      {/* Block D – Interest and intent */}
      <div className="space-y-6">
        <h3 className="text-lg font-mono uppercase text-foreground/90">Interest & Availability</h3>

        <div>
          <label className={labelClassName}>How interested are you in trying an EMG-based way to control your wheelchair? *</label>
          <div className={radioGroupClassName}>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="interestLevel"
                value="very-interested"
                required
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Very interested – I'd love to test</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="interestLevel"
                value="curious"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Curious – want to learn more first</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="interestLevel"
                value="not-sure"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Not sure – just exploring</span>
            </label>
          </div>
        </div>

        <div>
          <label className={labelClassName}>Would you be interested in trying our EMG armband device? *</label>
          <div className={radioGroupClassName}>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="openToInvasive"
                value="yes-possibly"
                required
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Yes, definitely interested</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="openToInvasive"
                value="maybe-need-info"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Maybe, need more info</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="openToInvasive"
                value="no"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Not interested at this time</span>
            </label>
          </div>
        </div>

        <div>
          <label className={labelClassName}>Would you be open to joining a pilot or study in the future? *</label>
          <div className={radioGroupClassName}>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="pilotAvailability"
                value="yes-if-near"
                required
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Yes, if it's near me</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="pilotAvailability"
                value="maybe-depends"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Maybe, depends on timing and details</span>
            </label>
            <label className={radioLabelClassName}>
              <input
                type="radio"
                name="pilotAvailability"
                value="probably-not"
                disabled={status === "loading"}
                className="w-4 h-4 accent-primary"
              />
              <span>Probably not, I mostly want to follow progress</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="impactDescription" className={labelClassName}>
            If this technology worked perfectly for you, what would it change in your everyday life? *
          </label>
          <textarea
            id="impactDescription"
            name="impactDescription"
            required
            rows={5}
            disabled={status === "loading"}
            placeholder="Tell us what this would mean for you..."
            className={cn(
              inputClassName,
              "resize-y min-h-[120px]"
            )}
          />
        </div>
      </div>

      {/* Block E – Logistics and consent */}
      <div className="space-y-6">
        <h3 className="text-lg font-mono uppercase text-foreground/90">Final Details</h3>

        <div>
          <label htmlFor="timezone" className={labelClassName}>
            Timezone (optional)
          </label>
          <input
            id="timezone"
            name="timezone"
            type="text"
            disabled={status === "loading"}
            placeholder="e.g., PST, EST, GMT+1"
            className={inputClassName}
          />
        </div>

        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="emailIsPreferred"
              disabled={status === "loading"}
              className="w-4 h-4 mt-1 accent-primary"
            />
            <span className="text-sm text-foreground/80">
              Email is the best way to reach me
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consentPilotContact"
              required
              disabled={status === "loading"}
              className="w-4 h-4 mt-1 accent-primary"
            />
            <span className="text-sm text-foreground/80">
              <strong>*</strong> I understand this is an early-stage product not yet on the market, and that you'll contact me only about pilots, studies, or updates related to this project.
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
      </div>

      {status === "error" && errorMessage && (
        <div className="p-4 rounded bg-red-500/10 border border-red-500/30">
          <p className="text-sm text-red-400" role="alert">
            {errorMessage}
          </p>
        </div>
      )}

      {status === "success" && (
        <div className="p-4 rounded bg-green-500/10 border border-green-500/30">
          <p className="text-sm text-green-400" role="status">
            Thank you for signing up! We'll review your information and reach out when we're closer to pilots in your area.
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

      <p className="text-xs text-foreground/50 -mt-4">
        * Required fields
      </p>
    </form>
  );
}
