
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware'
import { createSkillFormSlice, SkillFormSlice } from './skillFormSlice';
// import { AddressFormSlice, createAddressFormSlice } from './addresssFormSlice';
import { createStepSlice, StepSlice } from './stepSlice';
import { InformationFormSlice, createInfomationFormSlice } from './informationFormSlice';

export type MultiStepFormState = StepSlice & InformationFormSlice & SkillFormSlice;

export const useMultiStepForm = create<MultiStepFormState>()(
  persist(
    immer((...a) => ({
      ...createStepSlice(...a),
      ...createInfomationFormSlice(...a),
      // ...createAddressFormSlice(...a),
      ...createSkillFormSlice(...a),
    })),
    {
      name: "form",
      storage:createJSONStorage(() => localStorage)
    }
  ),
);