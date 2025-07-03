import { InformationSchemaType } from "@/features/practice/form/schema";
import { StateCreator } from "zustand";
import { MultiStepFormState } from "./multiStepFormStore";
import { GenderEnum } from "@/features/practice/form/types";

type InformationForState = {
  informationForm: InformationSchemaType;
}

type InfomationFormAction = {
  setInformationForm: (data: InformationSchemaType) => void;
}

// information
export type InformationFormSlice = InformationForState & InfomationFormAction

export const createInfomationFormSlice: StateCreator<MultiStepFormState, [['zustand/immer', never]], [], InformationFormSlice> = (set) => ({
  informationForm: {
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: GenderEnum.female,
    password: "",
    confirmPassword: "",
  },
  setInformationForm: (data) =>
    set((state:MultiStepFormState) => {
      state.informationForm = { ...state.informationForm, ...data };
    }),
});