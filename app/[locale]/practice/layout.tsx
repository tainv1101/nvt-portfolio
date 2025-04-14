import { AppSidebar } from "@/features/practice/layout/Sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import DemoHeader from "@/features/practice/layout/DemoHeader";
import ReactQueryProvider from "@/components/ReactQueryProvider";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-white">
      <AppSidebar />
      <main className="relative pb-8 px-8 bg-white size-full text-primary text-sm leading-snug min-h-[100vh]">
        <div className="size-full space-y-8">
          <DemoHeader />
          <div className="container max-auto">
            <ReactQueryProvider>
              {children}
            </ReactQueryProvider>
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default Layout