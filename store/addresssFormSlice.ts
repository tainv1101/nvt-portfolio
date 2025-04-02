// import { AddressSchemaType } from "@/features/demo/form/schema";
// import { StateCreator } from "zustand";
// import { MultiStepFormState } from "./multiStepFormStore";

// type AddressFormState = {
//   addressForm: Partial<AddressSchemaType>;
// }

// type AddressFormAction = {
//   setAddressForm: (data: Partial<AddressSchemaType>) => void;
// }

// export type AddressFormSlice = AddressFormState & AddressFormAction
// export const createAddressFormSlice: StateCreator<MultiStepFormState, [['zustand/immer', never]], [], AddressFormSlice> = (set) => ({
//   addressForm: {},
//   setAddressForm: (data) =>
//     set((state: MultiStepFormState) => {
//       state.addressForm = { ...state.addressForm, ...data };
//     }),
// });
