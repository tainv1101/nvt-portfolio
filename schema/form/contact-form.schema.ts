import * as z from "zod";

// from with translate fc
export function getContactFormSchema(translate?: (key: string) => string) {
  return z.object({
    name: z.string().min(2, {
      message: translate ? translate("required") : "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: translate ? translate("invalid") : "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
      message: translate ? translate("min") : "Message must be at least 10 characters.",
    }),
  });
}

export type ContactFormSchema = z.infer<
  Awaited<ReturnType<typeof getContactFormSchema>>
>;