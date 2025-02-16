import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { AppRoutes } from "@/lib/appRoutes";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

function Header() {
  const translate = useTranslations("Header")
  return (
    <header>
      <div className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={AppRoutes.home.href}>
            <h1 className="text-4xl font-semibold">{translate("my_name")}</h1>
          </Link>

          {/* destop nave */}
          <div className="hidden xl:flex">
            <Nav />
          </div>

          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
          <Button>CV</Button>
          <div className="hidden xl:block">
            <LocaleSwitcherSelect />
          </div>


        </div>
      </div>
      <div className="border-b-[1px] border-white mx-12"></div>
    </header>
  );
}

export default Header;