import { capitalizeString } from "@/lib/utils";
import { InformationSchemaType, SkillSchemaType } from "../../schema";
import StepFormLayout from "./StepsFormLayout";

interface PreviewMultiStepFormProps {
  data: InformationSchemaType & SkillSchemaType,
  onChangePrevStep: () => void;
}

function PreviewMultiStepForm({ data, onChangePrevStep }: PreviewMultiStepFormProps) {
  return (
    <StepFormLayout handleSubmit={() => { }} isValid={true} onBackStep={onChangePrevStep} backButtonLable="Back">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-4">
          <StepLabel label="Information" />
          <div className="flex flex-col gap-3 w-full p-2">
            <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
              <PreviewField label="Full Name" value={data.fullName} />
              <PreviewField label="Email" value={data.email} />
            </div>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <PreviewField label="Phone Number" value={data.phoneNumber} />
              <PreviewField label="Gender" value={data.gender} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <StepLabel label="Skills" />
          <div className="flex flex-col gap-3 w-full p-2">
            <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
              <PreviewField label="Technologies" value={data?.technologies?.map((el: string) => capitalizeString(el))?.join(", ")} />
              <PreviewField label="State Management" value={data?.stateManagement?.map((el: string) => capitalizeString(el))?.join(", ")} />
            </div>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <PreviewField label="API Integration" value={data.apiIntegration?.map((el: string) => capitalizeString(el))?.join(", ")} />
              <PreviewField label="Code Management" value={data.codeManagement?.map((el: string) => capitalizeString(el))?.join(", ")} />
            </div>
          </div>
        </div>

      </div>
    </StepFormLayout>
  );
}

function StepLabel({ label }: { label: string }) {
  return <h3 className="text-primary h3 pb-2 border-b border-primary w-fit">{label}</h3>;
}

function PreviewField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <span className="text-gray-500">{label}</span>
      <p className="text-primary">{value || "---"}</p>
    </div>
  )
};


export default PreviewMultiStepForm;