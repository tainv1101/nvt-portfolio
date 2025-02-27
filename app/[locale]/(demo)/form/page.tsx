"use client"

import { TabsList, Tabs, TabsTrigger, TabsContent } from "@/components/ui/tabs";


const forms = [
  {
    title: "Normal form",
    des: "React use form hoook",
    id: "1"
  },
  {
    title: "Zod form",
    des: "React hook form + Zod validation",
    id: "2"
  },
  {
    title: "Zod form with condition",
    des: "React hook form + Zod with condition",
    id: "3"
  },
  {
    title: "Mutiple steps form ",
    des: "React hook form + Zod with condition + Zustand",
    id: "4"
  },
]
function FormPage() {

  return (
    <div className="size-full">
      <div className="container mx-auto max-h-[80vh]">
        <Tabs
          defaultValue={forms[0].id}
          className="flex flex-col xl:flex-row gap-[40px] h-full"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            {forms.map((form, idx) => (
              <TabsTrigger value={form.id} key={idx}>
                {form.title}
              </TabsTrigger>
            ))}
          </TabsList>


          <div className="h-full w-full">
            {forms.map((form, idx) => (
              <TabsContent value={form.id} key={idx} className="p-4 bg-primary text-accent rounded-md">
                {form.des}
              </TabsContent>
            ))}
          </div>
        </Tabs>

      </div>
    </div>
  );
}

export default FormPage;