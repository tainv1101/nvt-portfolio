import InputWrapper from "@/components/Form/InputWrapper/InputWrapper";
import { GenderEnum } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { informationSchema, InformationSchemaType } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MultiStepFormState, useMultiStepForm } from "@/store/multiStepFormStore";
import StepFormLayout from "./StepsFormLayout";
import { SelectInput } from "@/components/Form/SelectInput/SelectInput";


function InformationStep({ setActiveStep }: { setActiveStep?: (activeStep: number) => void }) {
  const { informationForm, setInformationForm, onChangeStep, validStep }: MultiStepFormState = useMultiStepForm()
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<InformationSchemaType>({
    resolver: zodResolver(informationSchema),
    defaultValues: { ...informationForm },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<InformationSchemaType> = async (data: InformationSchemaType) => {
    await validStep("infor")
    await onChangeStep({ label: "skills", id: 1 })
    await setInformationForm(data)
    setActiveStep?.(1)
  };

  return (
    <StepFormLayout handleSubmit={handleSubmit(onSubmit)} isValid={isValid} submitButtonLable="Next">
      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <InputWrapper
            id="fullName"
            label="Full Name"
            isError={!!errors.fullName}
            errorMessage={errors.fullName?.message}
            inputType="text"
            inputProps={register("fullName")}
          />
          <InputWrapper
            id="email"
            label="Email"
            isError={!!errors.email}
            errorMessage={errors.email?.message}
            inputType="email"
            inputProps={register("email")}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <InputWrapper
            id="phoneNumber"
            label="Phone Number"
            inputType="number"
            isError={!!errors.phoneNumber}
            errorMessage={errors.phoneNumber?.message}
            inputProps={register("phoneNumber")}
          />


          <InputWrapper
            id="gender"
            label="Gender"
            inputProps={register("gender")}
            isSelectWrapper
            render={(props) => (
              <SelectInput inputProps={props} options={Object.values(GenderEnum).map((value) => ({ value, label: value }))} />
            )}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <InputWrapper
            id="password"
            label="Password"
            isError={!!errors.password}
            errorMessage={errors.password?.message}
            inputType="password"
            inputProps={register("password")}
          />
          <InputWrapper
            id="confirmPassword"
            label="Confirm Password"
            isError={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
            inputType="password"
            inputProps={register("confirmPassword")}
          />
        </div>
      </div>

    </StepFormLayout>
  );
}

export default InformationStep;