"use client"
import { AppSidebar } from "@/features/practice/layout/Sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import DemoHeader from "@/features/practice/layout/DemoHeader";
import ReactQueryProvider from "@/lib/ReactQueryProvider";


function Layout({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider className="bg-white">
      <AppSidebar />
      {/* <main className="w-full"> */}
      <main className="relative pb-8 px-8 bg-white size-full text-primary text-sm leading-snug min-h-[100vh]">
        <DemoHeader />
        <ReactQueryProvider>
          <div className="pt-4 h-full">
            {children}
          </div>
        </ReactQueryProvider>
      </main>
      {/* </main> */}
    </SidebarProvider>
  )
}

export default Layout