import *  as z from "zod" 


export const demoZodValidationFormSchema = z.object({
  name: z.string().min(2, {message: "Name must be at least 2 characters."}),
  email: z.string().email({message: "Please enter a valid email address."}),
  message: z.string().min(10, {message: "Message must be at least 10 characters."}),
})


export type DemoZodValidationFormSchema = z.infer<typeof demoZodValidationFormSchema>;


export const demoZodValidationWithConditionFormSchema = z.object({
  name: z.string().min(2, {message: "Name must be at least 2 characters."}),
  email: z.string().email({message: "Please enter a valid email address."}),
  message: z.string().min(10, {message: "Message must be at least 10 characters."}),
})


export type DemoZodValidationWithConditionFormSchema = z.infer<typeof demoZodValidationWithConditionFormSchema>;

