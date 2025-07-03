import { StateCreator } from "zustand";
import { MultiStepFormState } from "./multiStepFormStore";

export type StepName = "infor" | "skills" | "preview";

export type StepElement = {
  label: StepName;
  id: number;
}

type StepState = {
  step: StepElement;
  isStepValid: { infor: boolean; skills: boolean; preview: boolean };
}

type StepAction = {
  onChangeStep: (nextStep: StepElement) => void;
  validStep: (step: StepName, isValid?: boolean) => void;
}

export type StepSlice = StepState & StepAction

export const createStepSlice: StateCreator<MultiStepFormState, [['zustand/immer', never]], [], StepSlice> = (set) => ({
  step: { label:"infor", id: 0},
  isStepValid: { infor: false, skills: false, preview: false },
  onChangeStep: (nextStep) => {
    set(() =>({
        step: nextStep 
    }));
  },
  validStep: (step, isValid = true) => {
    set((state: MultiStepFormState) => {
      state.isStepValid[step] = isValid;
    });
  },
});

