import { AppSidebar } from "@/components/demo/Sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export const metadata = {
  layout: null
};
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-black w-full">
        <SidebarTrigger />
        <SidebarInset>
          <main>{children}</main>
        </SidebarInset>
      </main>
    </SidebarProvider>

  )
}

Layout.useLayout = false;

export default Layout