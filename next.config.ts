import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin("./i18n/request.ts")
 
/** @type {import('next').NextConfig} */
const nextConfig = {
};
 
module.exports = withNextIntl(nextConfig);

// module.exports = {
//   images: {
//     remotePatterns: [new URL('https://cdn2.thecatapi.com/**')],
//   },
// }