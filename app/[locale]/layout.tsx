import PageTransition from "@/components/PageTransition";
import StairsTransition from "@/components/StairsTransition";

export const metadata = {
  title: "Tai Portfolio Home",
  description: "By Nextjs 15"
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  return (
    <div>
      <StairsTransition />
      <PageTransition>
        {children}
      </PageTransition>
    </div>

  );
}