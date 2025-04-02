import { ZodValidationFormType } from "../../schema";
import { EducationLevelEnum } from "../../types";
import PreviewField from "../../../../../components/PreviewField/PreviewField";
interface PreivewZodDynamicFormProps {
  previewData: Partial<ZodValidationFormType>;
  submitSuccess: boolean;
}
function PreivewZodDynamicForm({ previewData, submitSuccess }: PreivewZodDynamicFormProps) {
  return (
    <div className="border p-4 rounded-md bg-gray-100 space-y-2 w-full">
      <h4 className="font-bold text-lg">Preview data:</h4>
      <PreviewField
        label="Work Experience"
        value={previewData.isWorkExperience ? "Yes" : "No"}
      />
      <PreviewField label="Company" value={previewData.companyName} required={previewData.isWorkExperience} />

      <PreviewField
        label="Know other languages"
        value={previewData.isKnowOtherLanguage ? "Yes" : "No"}
      />

      <PreviewField label="Language" value={previewData.language} required={previewData.isKnowOtherLanguage} />
      <PreviewField label="Education Level" value={previewData.educationLevel?.split("_").join(" ")} required />
      <PreviewField label="School" value={previewData.school} required={previewData.educationLevel !== EducationLevelEnum.NO_FORMAL_EDUCATION} />

      {submitSuccess && <p className="text-green-500 m-auto">🎉 Submitted successfully!</p>}
    </div>
  );
}

export default PreivewZodDynamicForm;