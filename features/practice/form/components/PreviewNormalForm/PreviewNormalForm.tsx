import { NormalFormType } from "../../types";
import PreviewField from "../../../../../components/PreviewField/PreviewField";
const PreviewNormalForm = ({
  previewData,
  submitSuccess,
}: {
  previewData: NormalFormType;
  submitSuccess: boolean;
}) => {

  return (
    <div className="border p-4 rounded-md bg-gray-100 space-y-2 w-full">
      <h4 className="font-bold text-lg">Preview data:</h4>
      <PreviewField label="User Name" value={previewData.userName} required />
      <PreviewField label="Email" value={previewData.email} required />
      <PreviewField label="Phone Number" value={previewData.phoneNumber} />
      <PreviewField
        label="Accepted Terms"
        value={previewData.acceptTermsAndConditions ? "Yes" : "No"}
      />

      {submitSuccess && <p className="text-green-500 m-auto">🎉 Submitted successfully!</p>}
    </div>
  );
};

export default PreviewNormalForm;

