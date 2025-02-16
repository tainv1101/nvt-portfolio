import { JetBrains_Mono } from "next/font/google"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./globals.css"
import Header from '@/components/Header';

const jetbrainMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata = {
  title: "Tai Portfolio",
  description: "By Nextjs 15"
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {



  // Ensure that the incoming `locale` is valid
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning >
      <body className={jetbrainMono.variable}>
        <NextIntlClientProvider messages={messages}>
          <div>
            <Header />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}