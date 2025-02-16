import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
export const locales = ["vi", "en"] as const;
export type LocaleType= (typeof locales)[number]
export const defaultLocale: LocaleType = "vi"
export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);