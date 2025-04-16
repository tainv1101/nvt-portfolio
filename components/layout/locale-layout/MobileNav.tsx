"use client"
import { AppRoutes } from "@/lib/appRoutes";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Link, usePathname } from "@/i18n/routing";
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
const MobileNav = () => {
  const translate = useTranslations("Nav")
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center text-white">
        {/* fix error digalog title is required */}
        <SheetTitle className="sr-only">menu</SheetTitle>
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
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;