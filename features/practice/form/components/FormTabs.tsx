"use client"

import { useState } from "react";
import NormalForm from "./NormalForm/NormalForm";
import ZodForm from "./ZodForm/ZodForm";
import MultiStepForm from "./MultiStepForm/MultiStepForm";

const forms = [
  {
    title: "Normal form",
    des: "React Hook Form: Just only React Hook Form to validate form",
    id: 1
  },
  {
    title: "Form with condition",
    des: "React Hook Form + Zod with condition: Change to the 'Education Level' to try this form",
    id: 2
  },

  {
    title: "Multi step form",
    des: "React Hook Form + Zod + Zustand: Multi-step form with Zustand state data stored in local storage",
    id: 3
  },
]

export default function FormTabs() {
  const [activeTabId, setActiveTabId] = useState<number>(forms[0].id);

  return (
    <div className="flex flex-col items-start  gap-6">
      <TabTrigger activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
      <TabContent activeTabId={activeTabId} />
    </div>
  );
}

function TabTrigger({
  activeTabId,
  setActiveTabId,
}: {
  activeTabId: number;
  setActiveTabId: (id: number) => void;
}) {
  return (
    <div className="flex flex-col xl:flex-row gap-1 w-full items-center justify-center rounded-lg bg-demo-foreground p-2 text-muted-foreground">
      {forms.map((form) => (
        <div
          key={form.id}
          onClick={() => setActiveTabId(form.id)}
          className={`${activeTabId === form.id ? "bg-primary text-white" : "bg-transparent text-demo-subtext"
            } flex-1 hover:bg-primary hover:text-white p-2 w-full rounded-md text-center cursor-pointer transition-all duration-100`}
        >
          <span className="whitespace-nowrap">{form.title}</span>
        </div>
      ))}
    </div>
  );
}


function TabContent({ activeTabId }: { activeTabId: number }) {
  return (
    <div className="space-y-4 h-fit w-full rounded-md border p-4">
      <div >
        <div className="pb-2 px-1 border-b border-primary">
          <p className="text-lg font-medium">📝 {forms.find((f) => f.id === activeTabId)?.title}</p>
          <p className="">{forms.find((f) => f.id === activeTabId)?.des}</p>
        </div>
        <div className="xl:px-6 xl:pb-6 px-2">
          {activeTabId === 1 && (
            <NormalForm />
          )}
          {activeTabId === 2 && (
            <ZodForm />
          )}
          {activeTabId === 3 && (
            <MultiStepForm />
          )}
        </div>

      </div>
    </div>
  );
}
