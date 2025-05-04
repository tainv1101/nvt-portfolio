import Container from "@/components/Container";
import ModuleIntroduction from "@/features/practice/virtualized-infinite-scrolling/components/ModuleIntroduction";
import Users from "@/features/practice/virtualized-infinite-scrolling/components/Users";

export const metadata = {
  title: "Practice | Virtualized Infinite Scrolling",
};
function VirtualizedInfiniteScrolling() {
  return (
    <Container>
      <div className="flex justify-center mx-auto">
        <div className="flex flex-col gap-4 2xl:flex-row 2xl:gap-8">
          <ModuleIntroduction />
          <Users />
        </div>
      </div>
    </Container>
  );
}

export default VirtualizedInfiniteScrolling;