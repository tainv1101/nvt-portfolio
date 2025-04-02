import React, { useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MultiStepFormState, useMultiStepForm } from "@/store/multiStepFormStore";
import { StepElement } from "@/store/stepSlice";
import { StepProcessRef } from "../../types";
import StepProcess from "./StepProcess";
import InformationStep from "./InformationStep";
import SkillStep from "./SkillsStep";
import PreviewMultiStepForm from "./PreviewMultiStepForm";



const steps: StepElement[] = [
  { label: "infor", id: 0 },
  { label: "skills", id: 1 },
  { label: "preview", id: 2 }
]

function MultiStepForm() {
  const stepProcessRef = React.useRef<StepProcessRef>(null);
  const { step: currentStep, isStepValid, informationForm, skillForm } = useMultiStepForm((state: MultiStepFormState) => state);

  // const isStepValid = useMultiStepForm((state: MultiStepFormState) => state.isStepValid);

  const onChangeStep = useMultiStepForm((state: MultiStepFormState) => state.onChangeStep);

  const currentStepIdx = useMemo(() => {
    const stepIds = steps.map((step) => step.id);
    return stepIds.indexOf(currentStep.id);
  }, [currentStep])


  const onChangeNextStep = () => {
    const nextStepIdx = currentStepIdx + 1;
    if (nextStepIdx < steps.length) {
      onChangeStep(steps[nextStepIdx]);
    }
  };

  const onChangePrevStep = () => {
    const prevStepIdx = currentStepIdx - 1;
    if (prevStepIdx >= 0) {
      onChangeStep(steps[prevStepIdx]);
    }
  };

  function handleSetActiveStep(step: number) {
    stepProcessRef.current?.setActiveStep(step);
  };

  const stepUI: { [key: string]: React.ReactNode } = {
    infor: <InformationStep setActiveStep={handleSetActiveStep} />,
    skills: <SkillStep setActiveStep={handleSetActiveStep} />,
    preview: <PreviewMultiStepForm data={{ ...informationForm, ...skillForm }} onChangePrevStep={onChangePrevStep} />,
  }


  // const onChangeNextStep = () => {
  //   const nextStepIdx = currentStepIdx + 1;
  //   const stepLength = steps.length;
  //   if (nextStepIdx < stepLength && !!steps[nextStepIdx]) return onChangeStep(steps[nextStepIdx]);
  //   return onChangeStep(steps[currentStepIdx]);
  // }

  // const onChangePrevStep = () => {
  //   const prevStepIdx = currentStepIdx - 1;
  //   if (prevStepIdx >= 0 && prevStepIdx < currentStepIdx && !!steps[prevStepIdx]) return onChangeStep(steps[prevStepIdx]);
  //   return onChangeStep(steps[currentStepIdx]);
  // }
  // React.useEffect(() => {
  //   console.log("====>stepProcessRef:", stepProcessRef.current);
  // });



  return (
    <ScrollArea className="xl:h-fit h-[520px] w-full overflow-auto scrollbar mt-4">
      <StepProcess
        steps={steps}
        onChangeNextStep={onChangeNextStep}
        onChangePrevStep={onChangePrevStep}
        initialActiveStepId={currentStep.id || steps[0].id}
        ref={stepProcessRef}
        isStepValid={isStepValid}
      />
      <div className="mt-2">
        {stepUI[currentStep.label]}
        {/* <InformationStep /> */}
      </div>
    </ScrollArea>
  );
}

export default MultiStepForm;