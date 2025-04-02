import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { apiIntegrationValues, codeManagementValues, stateManagementValues, technologiesOptionsValues } from "@/features/practice/form/types";
import { skillSchema, SkillSchemaType } from "@/features/practice/form/schema";
import { MultiStepFormState, useMultiStepForm } from "@/store/multiStepFormStore";
import InputWrapper from "@/components/Form/InputWrapper/InputWrapper";
import { MultiSelect } from "@/components/Form/MultiSelect/MultiSelect";
import StepFormLayout from "./StepsFormLayout";

function SkillStep({ setActiveStep }: { setActiveStep?: (activeStep: number) => void }) {
  const { skillForm, setSkillForm, onChangeStep, validStep }: MultiStepFormState = useMultiStepForm();

  const { register, handleSubmit, trigger, formState: { errors, isValid }, control } = useForm({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      technologies: skillForm.technologies || [],
      stateManagement: skillForm.stateManagement || [],
      apiIntegration: skillForm.apiIntegration || [],
      codeManagement: skillForm.codeManagement || [],
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SkillSchemaType> = (data: SkillSchemaType) => {
    validStep("skills");
    onChangeStep({ label: "preview", id: 2 });
    setActiveStep?.(2);
    setSkillForm(data);
  };

  const onBackStep = () => {
    console.log("onBack");
    onChangeStep({ label: "infor", id: 0 });
    setActiveStep?.(0);
  };

  return (
    <StepFormLayout handleSubmit={handleSubmit(onSubmit)} isValid={isValid} onBackStep={onBackStep} submitButtonLable="Next">
      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <InputWrapper
            id="technologies"
            label="Technologies"
            inputProps={register("technologies")}
            isSelectWrapper
            errorMessage={errors.technologies?.message}
            isError={!!errors.technologies}
            render={() => (
              <Controller
                name={"technologies"}
                control={control}
                render={({ field, formState: { defaultValues } }) => (
                  <MultiSelect
                    inputId="technologies"
                    trigger={trigger}
                    defaultValue={defaultValues?.technologies || []}
                    options={technologiesOptionsValues.map((value) => ({ value, label: value }))}
                    onValueChange={field.onChange}
                    onBlur={field.onBlur}
                    placeholder="Select options"
                    variant="inverted"
                    maxCount={3}
                  />
                )}
              />
            )}
          />

          <InputWrapper
            id="stateManagement"
            label="State Management"
            inputProps={register("stateManagement")}
            isSelectWrapper
            errorMessage={errors.stateManagement?.message}
            isError={!!errors.stateManagement}
            render={() => (
              <Controller
                name={"stateManagement"}
                control={control}
                // defaultValue={[]}
                render={({ field, formState: { defaultValues } }) => (
                  <MultiSelect
                    inputId="stateManagement"
                    trigger={trigger}
                    defaultValue={defaultValues?.stateManagement || []}
                    options={stateManagementValues.map((value) => ({ value, label: value }))}
                    onValueChange={field.onChange}
                    onBlur={field.onBlur}
                    placeholder="Select options"
                    variant="inverted"
                    maxCount={3}
                  />
                )}
              />
            )}
          />
        </div>


        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <InputWrapper
            id="apiIntegration"
            label="API Integration"
            inputProps={register("apiIntegration")}
            isSelectWrapper
            errorMessage={errors.apiIntegration?.message}
            isError={!!errors.apiIntegration}
            render={() => (
              <Controller
                name={"apiIntegration"}
                control={control}
                render={({ field, formState: { defaultValues } }) => (
                  <MultiSelect
                    inputId="apiIntegration"
                    trigger={trigger}
                    defaultValue={defaultValues?.apiIntegration || []}
                    options={apiIntegrationValues.map((value) => ({ value, label: value }))}
                    onValueChange={field.onChange}
                    onBlur={field.onBlur}
                    placeholder="Select options"
                    variant="inverted"
                    maxCount={3}
                  />
                )}
              />
            )}
          />

          <InputWrapper
            id="codeManagement"
            label="Code Management"
            inputProps={register("codeManagement")}
            isSelectWrapper
            errorMessage={errors.codeManagement?.message}
            isError={!!errors.codeManagement}
            render={() => (
              <Controller
                name={"codeManagement"}
                control={control}
                render={({ field, formState: { defaultValues } }) => (
                  <MultiSelect
                    inputId="codeManagement"
                    trigger={trigger}
                    defaultValue={defaultValues?.codeManagement || []}
                    options={codeManagementValues.map((value) => ({ value, label: value }))}
                    onValueChange={field.onChange}
                    onBlur={field.onBlur}
                    placeholder="Select options"
                    variant="inverted"
                    maxCount={3}
                  />
                )}
              />
            )}
          />
        </div>

      </div>
    </StepFormLayout>
  );
}

export default SkillStep;