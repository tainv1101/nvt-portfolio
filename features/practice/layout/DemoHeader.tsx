import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "@/i18n/routing";

function DemoHeader() {
  return (
    <div className="sticky h-[var(--practice-header-height)] z-50 inset-0 flex items-center justify-start gap-2 px-8 py-3 bg-white border-b-2 border-accent text-primary">
      <SidebarTrigger className="hover:bg-primary hover:text-white" />
      <Link href="/">
        <h1 className="text-2xl font-bold hover:text-accent">Portfolio</h1>
      </Link>
    </div>
  );
}

export default DemoHeader;