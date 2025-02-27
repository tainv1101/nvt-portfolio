import { SidebarTrigger } from "@/components/ui/sidebar";

function DemoHeader() {
  return (
    <div className="flex items-center justify-start h-12 border-b-2 border-accent bg-primary opacity-75">
      <SidebarTrigger className="" />
      <h1 className="text-2xl font-bold text-white">Nguyễn Văn Tài</h1>

    </div>
  );
}

export default DemoHeader;