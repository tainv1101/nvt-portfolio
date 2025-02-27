"use client"
import { FaWpforms, FaInfinity } from "react-icons/fa6";
import { SiLazyvim } from "react-icons/si";
import { IoExitOutline } from "react-icons/io5";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  // SidebarMenuAction,
  // SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarMenuSub,
  // SidebarMenuSubButton,
  // SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
// import { AppRoutes } from "@/lib/appRoutes";
import { useCallback } from "react";

// Menu items.
const items = [
  {
    title: "Introduction",
    // url: AppRoutes.introduction.href,
    url: "#",
    icon: FaWpforms,
  },
  // {
  //   title: "React-query",
  //   url: AppRoutes.reactQuery.href,
  //   icon: SiReactquery,
  // },
  {
    title: "Use Form Hook + Zod",
    // url: AppRoutes.form.href,
    url: "#",
    icon: FaWpforms,
  },
  {
    title: "Permission",
    url: "#",
    icon: IoExitOutline,
  },

  {
    title: "Lazy loading",
    url: "#",
    icon: SiLazyvim,
  },
  {
    title: "Infinity loading",
    url: "#",
    icon: FaInfinity,
  },
]

export function AppSidebar() {
  // collapsible="offcanvas | icon | none"
  const pathName = usePathname()
  const checkActive = useCallback((url: string) => {
    if (pathName === url) {
      return true
    }
    return false
  }, [pathName])

  return (
    <Sidebar variant="inset" collapsible="icon" className="border-b-2 border-black">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Demo menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className={cn(
                  // checkActive(item.url) && "active"
                  "border-b-2 border-primary",
                  checkActive(item.url) && "bg-primary text-white"

                )} key={item.title}>
                  <SidebarMenuButton asChild>
                    {/* <div onClick={() => router.push("/demo?form")}>
                      <item.icon />
                      <span>{item.title}</span>
                    </div> */}
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


        {/* <SidebarGroup>
          <SidebarGroupLabel>Liaw</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton />
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton />
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton />
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              <SidebarMenuAction>
                lalala
              </SidebarMenuAction>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}

      </SidebarContent>
      <SidebarFooter >

        <Link href={"/"} className="flex flex-row items-center justify-center gap-2 hover:text-primary hover:scale-125">
          <IoExitOutline />
          <span>Exit</span>
        </Link>
      </SidebarFooter>
    </Sidebar >
  )
}
