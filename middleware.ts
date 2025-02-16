// import createMiddleware from "next-intl/middleware";
// import { locales, defaultLocale} from "./i18n";
// export default createMiddleware({
//   locales,
//   defaultLocale
// })

// export const config ={
//   // matcher: ["/", `/(${locales.join("|")})/:path*`]
//   matcher: ["/", `/(vi|en)/:path*`]

// }
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(vi|en)/:path*']
};