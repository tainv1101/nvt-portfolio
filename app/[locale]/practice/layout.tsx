import { AppSidebar } from "@/features/practice/layout/Sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import DemoHeader from "@/features/practice/layout/DemoHeader";
import ReactQueryProvider from "@/components/ReactQueryProvider";
// import ScrollPageProgress from "@/components/ScrollPageProgress";

export const metadata = {
  title: "Practice",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider className="bg-white">
        <AppSidebar />
        <main className="relativebg-white size-full text-primary text-sm leading-snug">
          <div className="size-full">
            {/* <ScrollPageProgress /> */}
            <DemoHeader />
            <div>
              <ReactQueryProvider>
                {children}
              </ReactQueryProvider>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </>
  )
}

export default Layout