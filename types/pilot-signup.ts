export type UseCase =
  | "mobility-wheelchair"
  | "forearm-rehabilitation"
  | "industrial-fatigue"
  | "robotics-exoskeleton"
  | "research-clinical"
  | "other";

export type UserRole =
  | "end-user-patient"
  | "caregiver-family"
  | "clinician-therapist"
  | "researcher-engineer"
  | "company-operations"
  | "other";

export type PilotReadiness =
  | "ready-now"
  | "next-3-6-months"
  | "need-more-info"
  | "just-updates";

export type TestingLocation =
  | "home"
  | "clinic-rehab"
  | "workplace-industrial"
  | "lab-university"
  | "other";

export interface PilotSignupData {
  name: string;
  email: string;
  country: string;
  city: string;
  useCase: UseCase;
  useCaseOther?: string;
  userRole: UserRole;
  userRoleOther?: string;
  problemStatement?: string;
  pilotReadiness: PilotReadiness;
  testingLocations: string[];
  outcomeDescription?: string;
  consentPilotContact: boolean;
  wantsUpdates?: boolean;
}
