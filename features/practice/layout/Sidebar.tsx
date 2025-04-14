"use client"
import { FaWpforms, FaInfinity } from "react-icons/fa6";
import { IoExitOutline, IoServer } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { SiReactquery } from "react-icons/si";
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
import { useCallback } from "react";
import { AppRoutes } from "@/lib/appRoutes";

// Menu items.
const items = [
  // {
  //   title: "Introduction",
  //   url: AppRoutes.introduction.href,
  //   icon: FaWpforms,
  // },

  {
    title: "RHF | Zod | Zustand",
    url: AppRoutes.form.href,
    icon: FaWpforms,
  },
  {
    title: "Virtualized Infinite Scrolling",
    url: AppRoutes.virtualizedInfiniteScrolling.href,
    icon: FaInfinity,
  },
  {
    title: "Server side rendering",
    url: AppRoutes.serverSideRendering.href,
    icon: IoServer,
  },
  {
    title: "React-query",
    url: AppRoutes.reactQuery.href,
    icon: SiReactquery,
  },
  {
    title: "(Updating) Animation - Gsap",
    url: AppRoutes.gsap.href,
    icon: MdAnimation,
  },
  {
    title: "(Updating) Animation - Framer motion",
    url: AppRoutes.framerMotion.href,
    icon: MdAnimation,
  },
]

export function AppSidebar() {
  const pathName = usePathname()
  const checkActive = useCallback((url: string) => {
    if (pathName === url) {
      return true
    }
    return false
  }, [pathName])

  return (
    <Sidebar variant="inset" collapsible="icon" className="bg-white border-solid border-r-2">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className={cn(
                  "border-b-2 border-primary",
                  checkActive(item.url) && "bg-primary text-white"
                )} key={item.title}>
                  <SidebarMenuButton asChild>
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
      <SidebarFooter className="bg-white">
        <Link href={"/"} className="flex flex-row items-center justify-center gap-2 hover:text-primary hover:scale-125">
          <IoExitOutline />
          <span>Exit</span>
        </Link>
      </SidebarFooter>
    </Sidebar >
  )
}
