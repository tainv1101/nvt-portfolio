import React from "react";

function useMultiStepForm({ steps }: { steps: React.ReactNode[] }) {
  
 return {
  steps
 }
}

export default useMultiStepForm;