export type UserType =
  | "full-time-wheelchair-user"
  | "part-time-wheelchair-user"
  | "caregiver-family"
  | "other";

export type AgeRange =
  | "under-18"
  | "18-24"
  | "25-34"
  | "35-44"
  | "45-54"
  | "55-plus";

export type WheelchairType = "manual" | "power" | "both";

export type UsageLocation =
  | "at-home"
  | "work-school"
  | "city-outdoors"
  | "hospital-rehab"
  | "other";

export type DailyHours = "less-than-2" | "2-4" | "4-8" | "more-than-8";

export type InterestLevel = "very-interested" | "curious" | "not-sure";

export type OpenToInvasive = "yes-possibly" | "maybe-need-info" | "no";

export type PilotAvailability =
  | "yes-if-near"
  | "maybe-depends"
  | "probably-not";

export interface PilotSignupData {
  // Block A – Basic contact
  name: string;
  email: string;
  country: string;
  city: string;
  socialHandle?: string;

  // Block B – Who you are
  userType: UserType;
  userTypeOther?: string;
  ageRange: AgeRange;

  // Block C – Wheelchair and daily use
  wheelchairType: WheelchairType;
  usageLocations: string[];
  dailyHours: DailyHours;

  // Block D – Interest and intent
  interestLevel: InterestLevel;
  openToInvasive: OpenToInvasive;
  pilotAvailability: PilotAvailability;
  impactDescription: string;

  // Block E – Logistics and consent
  timezone?: string;
  emailIsPreferred: boolean;
  consentPilotContact: boolean;
  wantsUpdates?: boolean;
}
