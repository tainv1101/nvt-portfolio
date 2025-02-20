
//components
import Header from "@/components/layout/locale-layout/Header";
import PageTransition from "@/components/layout/locale-layout/PageTransition";
import StairsTransition from "@/components/layout/locale-layout/StairsTransition";


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