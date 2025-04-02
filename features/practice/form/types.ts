import { SetStateAction } from "react";

export enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export enum RoleEnum {
 CLIENT = "client",
 ADMIN = "admin",
}

export enum EducationLevelEnum {
  NO_FORMAL_EDUCATION = "NO_FORMAL_EDUCATION",
  HIGH_SCHOOL = "HIGH_SCHOOL",
  BACHELOR = "BACHELOR",
}

// Inter Face
export interface NormalFormType {
  userName: string;
  gender: GenderEnum;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  acceptTermsAndConditions: boolean;
  age: number;
}

//Multi Step Frorms

export interface StepProcessRef {
  activeStep: number;
  setActiveStep: React.Dispatch<SetStateAction<number>>;
}


//Type data
// technologiesOptions
export const technologiesOptionsLabels = ["TypeScript", "ReactJS", "NextJS", "TailWindCss"] as const;
export const technologiesOptionsValues = ["typescript", "reactjs", "nextjs", "tailwindcss"] as const;

// stateManager
export const stateManagerLabels = ["Redux", "Zustand", "Recoil"] as const;
export const stateManagementValues = ["redux", "zustand", "recoil"] as const;

// apiIntegration
export const apiIntegrationLabels = ["Axios", "ReactQuery"] as const;
export const apiIntegrationValues = ["axios", "reactquery"] as const;

// codeManagement
export const codeManagementLabels = ["Github"] as const;
export const codeManagementValues = ["github"] as const;
