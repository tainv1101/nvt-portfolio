import *  as z from "zod" 
import { apiIntegrationValues, codeManagementValues, EducationLevelEnum, GenderEnum, stateManagementValues, technologiesOptionsValues } from "./types";


export const zodValidationFormSchema = z.object({
   fullName: z.string({required_error: "Name is required"}).min(3, {message: "Name must be at least 3 characters."}),
   isWorkExperience: z.boolean(),
   companyName: z.string().optional().nullable(),
   isKnowOtherLanguage: z.boolean(),
   language: z.string().optional().nullable(),
   educationLevel: z.nativeEnum(EducationLevelEnum),
   school: z.string().optional().nullable(),
}).superRefine((data, context) => {
  if(data.isKnowOtherLanguage && !data.language)
    context.addIssue({
      path: ["language"],
      message: "Please enter language",
      code:"custom",
    })

  if(data.isWorkExperience && !data.companyName)
    context.addIssue({
      path: ["companyName"],
      message: "Please enter Company Name",
      code:"custom",
    })

    if((data.educationLevel === EducationLevelEnum.BACHELOR || data.educationLevel === EducationLevelEnum.HIGH_SCHOOL) && !data.school)
    context.addIssue({
      path: ["school"],
      message: "Please enter School",
      code:"custom",
    })
  })

export type ZodValidationFormType = z.infer<typeof zodValidationFormSchema>;

// multi step form 
export const informationSchema = z.object({
  fullName: z.string({ required_error: "Full name is required" }).min(3, { message: "Full name must be at least 3 characters." }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address." }),
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .min(10, { message: "Phone number must be at least 10 characters." })
    .max(10, { message: "Phone number must be at most 10 characters." }),
  gender: z.nativeEnum(GenderEnum),
  password: z.string({ required_error: "Password is required" }).min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z.string({ required_error: "Confirm password is required" }),
}).refine((data) => data.password === data.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] });
export type InformationSchemaType = z.infer<typeof informationSchema>;

export const addressSchema = z.object({
  address: z.string({ required_error: "Address is required" }),
  city: z.string({ required_error: "City is required" }),
  country: z.string({ required_error: "Country is required" }),
  zipCode: z.string({ required_error: "Zip code is required" }),
});
export type AddressSchemaType = z.infer<typeof addressSchema>;

export const skillSchema = z.object({
  technologies: z
    .array(
        z.enum(technologiesOptionsValues)
    )
    .min(1, { message: "Please select at least one technology." }),

    stateManagement: z.array(
      z.enum(stateManagementValues)
  )
  .min(1, { message: "Please select at least one state management." }),

  // enum(stateManagementValues),
  apiIntegration: z.array(
      z.enum(apiIntegrationValues)
  )
  .min(1, { message: "Please select at least one API integration." }),
  
  codeManagement: z.array(
      z.enum(codeManagementValues)
  )
  .min(1, { message: "Please select at least one code management." }),
  // apiIntegration: z.enum(apiIntegrationValues),
  // apiIntegration: z.enum(apiIntegrationValues),
  // codeManagement: z.enum(codeManagementValues),
});
export type SkillSchemaType = z.infer<typeof skillSchema>;


// multi step form
export const multiStepFormSchema = z.object({
  skill: skillSchema,
  information: informationSchema,
});
export type MultiStepFormSchemaType = z.infer<typeof multiStepFormSchema>;








// export const zodValidationWithConditionFormSchema = z.object({
//   name: z.string().min(2, {message: "Name must be at least 2 characters."}),
//   email: z.string().email({message: "Please enter a valid email address."}),
//   message: z.string().min(10, {message: "Message must be at least 10 characters."}),
// })


// export type DemoZodValidationWithConditionFormSchema = z.infer<typeof zodValidationWithConditionFormSchema>;


// Code for Form with translate EN/VI message
// export function getContactFormSchema(translate?: (key: string) => string) {
//   return z.object({
//     name: z.string().min(2, {
//       message: translate ? translate("required") : "Name must be at least 2 characters.",
//     }),
//     email: z.string().email({
//       message: translate ? translate("invalid") : "Please enter a valid email address.",
//     }),
//     message: z.string().min(10, {
//       message: translate ? translate("min") : "Message must be at least 10 characters.",
//     }),
//   });
// }

// export type ContactFormSchema = z.infer<
//   Awaited<ReturnType<typeof getContactFormSchema>>
// >;





