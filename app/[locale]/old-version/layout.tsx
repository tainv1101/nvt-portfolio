
//components

import Header from "@/components/layout/locale-layout/Header";
import PageTransition from "@/components/PageTransition";
import StairsTransition from "@/components/StairsTransition";

export const metadata = {
  title: "Tai Portfolio",
  description: "By Nextjs 15"
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  // Ensure that the incoming `locale` is valid
  // Providing all messages to the client
  // side is the easiest way to get started

  return (
    <main>
      <StairsTransition />
      <PageTransition>
        <Header />
        {children}
      </PageTransition>
    </main>
  );
}