// import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["vi", "en"] as const;
export type LocaleType= (typeof locales)[number]
export const defaultLocale: LocaleType = "vi"

export default getRequestConfig(async({ requestLocale }) => {
  let currentLocale: string = await requestLocale  || defaultLocale ;
  if(!locales.includes(currentLocale as any)) currentLocale = defaultLocale
    return {
      messages: (await import(`./language/${currentLocale}.json`)).default
    }
})