"use client"
import { FaWpforms, FaInfinity } from "react-icons/fa6";
import { SiReactquery, SiLazyvim } from "react-icons/si";
import { BiSolidMemoryCard } from "react-icons/bi";
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
import { Link } from "@/i18n/routing";

// Menu items.
const items = [
  {
    title: "Form",
    url: "#",
    icon: FaWpforms,
  },
  {
    title: "React-query",
    url: "#",
    icon: SiReactquery,
  },
  {
    title: "Catching",
    url: "#",
    icon: BiSolidMemoryCard,
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
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Nguyễn Văn Tài</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
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
