import { SidebarTrigger } from "@/components/ui/sidebar";

function DemoHeader() {
  return (
    <div className="sticky z-50 top-0 inset-x-0 flex items-center justify-start gap-2 px-8 py-3 bg-white border-b-2 border-accent text-primary">
      <SidebarTrigger className="hover:bg-primary hover:text-white" />
      <h1 className="text-2xl font-bold hover:text-accent">Nguyễn Văn Tài</h1>
    </div>
  );
}

export default DemoHeader;