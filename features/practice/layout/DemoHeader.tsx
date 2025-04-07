import { SidebarTrigger } from "@/components/ui/sidebar";

function DemoHeader() {
  return (
    // <div className="relative inset-x-0 top-0 h-20">
    <div className="sticky z-50 inset-0 flex items-center justify-start gap-2 px-8 py-3 bg-white border-b-2 border-accent text-primary">
      <SidebarTrigger className="hover:bg-primary hover:text-white" />
      <h1 className="text-2xl font-bold hover:text-accent">Nguyễn Văn Tài</h1>
    </div>
    // </div>

  );
}

export default DemoHeader;