import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodValidationFormSchema, ZodValidationFormType } from "../../schema";
import { EducationLevelEnum } from "../../types";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import InputWrapper from "../../../../../components/Form/InputWrapper/InputWrapper";
import PreivewZodDynamicForm from "../PreviewZodDynamicForm/PreivewZodDynamicForm";

const educationLabel = new Map(
  Object.values(EducationLevelEnum).map((key: EducationLevelEnum) => {
    let value = "";
    if (key === EducationLevelEnum.BACHELOR) value = "Bachelor";
    if (key === EducationLevelEnum.HIGH_SCHOOL) value = "High school";
    if (key === EducationLevelEnum.NO_FORMAL_EDUCATION) value = "No formal education";
    return [key, value]
  })
);
const educationOptions = Object.values(EducationLevelEnum).map((item) => {
  return {
    value: item,
    label: educationLabel.get(item),
  };
});

function ZodForm() {

  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset, watch } = useForm<ZodValidationFormType>({
    resolver: zodResolver(zodValidationFormSchema),
    defaultValues: {
      fullName: "",
      isWorkExperience: false,
      companyName: "",
      isKnowOtherLanguage: false,
      language: "",
      educationLevel: EducationLevelEnum.NO_FORMAL_EDUCATION,
      school: "",
    }
  });

  const formDataUseWatch: Partial<ZodValidationFormType> = watch();

  const onSubmit: SubmitHandler<ZodValidationFormType> = async (data) => {

    // Giả lập quá trình submit mất 1.5 giây
    console.log("onSubmit", data);
    await new Promise((resolve) => setTimeout(resolve, 2500));


    // Reset form về giá trị mặc định
    reset();
  };

  return (
    <div>
      <ScrollArea className="xl:h-fit h-[520px] w-full overflow-auto scrollbar pt-8">
        <form className="mr-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="flex flex-col gap-6 w-full">
              <InputWrapper
                id="fullName"
                label="Full Name"
                inputProps={register("fullName")}
                isError={!!errors.fullName}
                errorMessage={errors.fullName?.message}
              />

              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  autoComplete="off"
                  {...register("isWorkExperience")}
                  className="hidden peer"
                />
                <div className="w-5 h-5 border-2 border-gray-500 rounded-md peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
                <span className="ml-2 capitalize">Work experience</span>
              </label>

              {!!formDataUseWatch.isWorkExperience && (
                <InputWrapper
                  id="companyName"
                  label="Company Name"
                  inputProps={register("companyName")}
                  isError={!!errors.companyName}
                  errorMessage={errors.companyName?.message}
                />
              )}

              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  autoComplete="off"
                  {...register("isKnowOtherLanguage")}
                  className="hidden peer"
                />
                <div className="w-5 h-5 border-2 border-gray-500 rounded-md peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
                <span className="ml-2 capitalize">Know other language</span>
              </label>

              {formDataUseWatch.isKnowOtherLanguage && (
                <InputWrapper
                  id="language"
                  label="Language"
                  inputProps={register("language")}
                  isError={!!errors.language}
                  errorMessage={errors.language?.message}
                />
              )}

              <div>
                <label htmlFor="gender">Education level</label>
                <div className="flex flex-col xl:flex-row gap-4 mt-2 mb-1">
                  {educationOptions.map(({ label, value }) => (
                    <label key={value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        autoComplete="off"
                        value={value}
                        {...register("educationLevel")}
                        className="hidden peer"
                      />
                      <div className="w-5 h-5 border-2 border-gray-500 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
                      <span className="ml-2">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formDataUseWatch.educationLevel !== EducationLevelEnum.NO_FORMAL_EDUCATION && (
                <InputWrapper
                  id="school"
                  label="School"
                  inputProps={register("school")}
                  isError={!!errors.school}
                  errorMessage={errors.school?.message}
                />
              )}


            </div>
            <div className="w-full">
              <PreivewZodDynamicForm
                previewData={formDataUseWatch}
                submitSuccess={isSubmitSuccessful}
              />
            </div>
          </div>
        </form>

      </ScrollArea>
      <div className="flex justify-end">
        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600  mt-8 flex items-center justify-center transition-all ${isSubmitting && "animate-pulse"}`}
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default ZodForm;