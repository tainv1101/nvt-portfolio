import { cn } from "@/lib/utils";
function StepFormLayout({ handleSubmit, isValid, onBackStep, submitButtonLable = "Submit", backButtonLable = "Back", children }: { handleSubmit: () => void, isValid: boolean, submitButtonLable?: string, onBackStep?: () => void, backButtonLable?: string, children: React.ReactNode }) {
  console.log("!!!StepFormLayout", isValid)
  return (
    <form className="mr-2 sapce-y-6" onSubmit={handleSubmit}>
      {children}
      <div className="w-full flex justify-end gap-4">
        {onBackStep && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onBackStep?.()
            }}
            className={`border border-blue-500 text-blue-500 hover:bg-gray-100 py-2 px-4 rounded-md mt-8 flex items-center justify-center transition-all`}
          >
            {backButtonLable}
          </button>
        )}

        <button
          type="submit"
          disabled={!isValid}
          onClick={handleSubmit}
          className={cn(
            `bg-primary text-white py-2 px-4 mt-8 rounded-md cursor-pointer  flex items-center justify-center transition-all hover:scale-105`,
            {
              "opacity-50 cursor-not-allowed": !isValid
            }
          )

          }
        >
          {submitButtonLable}
        </button>
      </div>
    </form >
  );
}

export default StepFormLayout;