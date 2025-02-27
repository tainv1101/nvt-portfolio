"use client"
import { AppSidebar } from "@/features/demo/layout/Sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import DemoHeader from "@/features/demo/layout/DemoHeader";
import ReactQueryProvider from "@/lib/ReactQueryProvider";


function Layout({ children }: { children: React.ReactNode }) {

  return (

    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <DemoHeader />
        <SidebarInset className="p-8 bg-slate-500 h-full">
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </SidebarInset>
      </main>
    </SidebarProvider>
  )
}

Layout.useLayout = false;

export default Layout