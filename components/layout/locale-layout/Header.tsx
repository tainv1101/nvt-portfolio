import { AppRoutes } from "@/lib/appRoutes";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";


function Header() {
  const translate = useTranslations("Header")
  return (
    <header>
      <div className="py-8 xl:py-10 border-b-[1px] border-primary">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={AppRoutes.home.href}>
            <h1 className="text-xl lg:text-4xl font-semibold hover:text-accent">{translate("my_name")}</h1>
          </Link>

          {/* destop nav */}
          <div className="hidden xl:flex">
            <Nav />
          </div>

          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
          <div className="">
            <LocaleSwitcherSelect />
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-white mx-12"></div>
    </header>
  );
}

export default Header;