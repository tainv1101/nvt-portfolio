import { SkillSchemaType } from "@/features/practice/form/schema";
import { StateCreator } from "zustand";
import { MultiStepFormState } from "./multiStepFormStore";

// skill
type SkillFormState = {
  skillForm: SkillSchemaType;
}

type SkillFormAction = {
  setSkillForm: (data: SkillSchemaType) => void;
}

export type SkillFormSlice = SkillFormState & SkillFormAction

export const createSkillFormSlice: StateCreator<MultiStepFormState, [['zustand/immer', never]], [], SkillFormSlice> = (set) => ({
  skillForm: {
    technologies: [],
    stateManagement: [],
    apiIntegration: [],
    codeManagement: [],
  },
  setSkillForm: (data) =>
    set((state) => {
      state.skillForm = { ...state.skillForm, ...data };
    }),
});