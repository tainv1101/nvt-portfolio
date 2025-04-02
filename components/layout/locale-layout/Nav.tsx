"use client"

import { Link, usePathname } from "@/i18n/routing"
import { AppRoutes } from "@/lib/appRoutes";
import { useTranslations } from "next-intl";

const links = (translate: (key: string) => string) => [
  {
    name: translate("home"),
    path: "/"
  },
  // {
  //   name: translate("services"),
  //   path: "/services"
  // },
  {
    name: translate("experience"),
    path: AppRoutes.experience.href
  },
  // {
  //   name: translate("work"),
  //   path: "/work"
  // },
  // {
  //   name: translate("contact"),
  //   path: "/contact"
  // },
  // {
  //   name: translate("info"),
  //   path: AppRoutes.info.href
  // },
  {
    name: translate("practice"),
    path: AppRoutes.practice.href
  },
]

const Nav = () => {
  const pathname = usePathname();
  const translate = useTranslations("Nav")
  return <nav className="flex gap-8">
    {links(translate).map((link, idx) => (
      <Link
        href={link.path}
        key={idx}
        className={`${link.path === pathname && "text-accent border-b-2 border-accent"
          } font-medium hover:text-accent transition-all`}
      >
        {link.name}
      </Link>
    ))}
  </nav>
}

export default Nav