"use client";
import { StepElement } from "@/store/stepSlice";
import { motion } from "motion/react"
import { forwardRef, useImperativeHandle, useState } from "react";


interface StepProcessRef {
  activeStep: number;
  setActiveStep: (nextStep: number) => void;
}

interface StepProcessProps {
  steps: StepElement[];
  initialActiveStepId?: number;
  isStepValid: { [key: string]: boolean };
  onChangeNextStep?: () => void;
  onChangePrevStep?: () => void;
}
const StepProcess = forwardRef<StepProcessRef, StepProcessProps>(
  ({ steps, initialActiveStepId = 0 }, ref) => {

    const [activeStep, setActiveStep] = useState(initialActiveStepId);

    useImperativeHandle(ref, () => ({
      activeStep,
      setActiveStep: (step: number) => {
        setActiveStep(step)
      }
    }));

    // const handleChangeStep = (nextStepId: number) => {
    //   const currentStep = steps.find((step) => step.id === activeStep) || steps[0];
    //   if (activeStep === nextStepId) return;
    //   // change to next step
    //   if (activeStep < nextStepId && isStepValid?.[currentStep.label]) {
    //     setActiveStep(nextStepId)
    //     onChangeNextStep?.()
    //   }
    //   // change to prev step
    //   if (activeStep > nextStepId) {
    //     console.log("handleChangeStep prev!!!!")

    //     setActiveStep(nextStepId)
    //     onChangePrevStep?.()
    //   };
    // }

    return (
      <div className="relative w-full mt-4">
        <ConnectLine totalNodes={steps.length} activeNode={activeStep} />
        <div className="flex justify-between">
          {steps.map((step) => (
            <ProcessNode
              key={`proccess-node-${step.id}`}
              // onChangeStep={() => handleChangeStep(step.id)}
              isActiveNode={step.id <= activeStep}
              nodeLabel={step.label}
              nodeNumber={step.id + 1}
            />
          ))}
        </div>
      </div>
    );
  }
);

StepProcess.displayName = "StepProcess";

export default StepProcess;

const ConnectLine = ({
  totalNodes,
  activeNode,
}: {
  totalNodes: number;
  activeNode: number;
}) => {

  return (
    <div className="relative h-[2px] w-full bg-slate-200">
      <div className="absolute top-0 left-0 flex w-full">
        {[...Array(totalNodes - 1)].map((_, idx) => (
          <motion.div
            key={idx}
            className="h-[2px] flex-1"
            initial={{ width: "0%" }}
            animate={{
              width: activeNode > idx ? "100%" : "0%",
              backgroundColor: activeNode > idx ? "black" : "#e2e8f0",
            }}
            transition={{ duration: 1, ease: "linear" }}
          />
        ))}
      </div>
    </div>

  )
};


interface ProcessNodeProps {
  // onChangeStep: () => void;
  isActiveNode: boolean;
  nodeLabel: string;
  nodeNumber: number;
}

const ProcessNode = ({
  // onChangeStep,
  isActiveNode,
  nodeLabel,
  nodeNumber
}: ProcessNodeProps) => {

  return (
    <div
      // onClick={onChangeStep}
      className="xl:flex xl:pt-0 xl:items-center justify-items-center pt-4 cursor-pointer user-select-none -translate-y-1/2 gap-2 bg-white"
      role="button"
      aria-label={`Go to step ${nodeNumber}`}
    >
      <div
        className={`flex items-center justify-center rounded-full size-7 transition-all duration-500 ease-out ${isActiveNode ? "bg-primary text-accent" : "bg-slate-200"}`}
      >
        {nodeNumber}
      </div>
      <span className="capitalize">{nodeLabel}</span>
    </div>
  )

}