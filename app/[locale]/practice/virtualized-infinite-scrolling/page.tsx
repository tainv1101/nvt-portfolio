import ModuleIntroduction from "@/features/practice/virtualized-infinite-scrolling/components/ModuleIntroduction";
import VirtualizedInfiniteContent from "@/features/practice/virtualized-infinite-scrolling/components/VirtualizedInfiniteContent/index";

function VirtualizedInfiniteScrolling() {
  return (
    <div className="flex justify-center mx-auto">
      <div className="flex flex-col gap-4 2xl:flex-row 2xl:gap-10">
        <ModuleIntroduction />
        <VirtualizedInfiniteContent />
      </div>
    </div>
  );
}

export default VirtualizedInfiniteScrolling;