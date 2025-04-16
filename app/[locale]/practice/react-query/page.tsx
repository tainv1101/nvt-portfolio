// import { useQuery } from "@tanstack/react-query";

import ReactQueryProvider from "@/components/ReactQueryProvider";
import ArticleList from "@/features/practice/react-query/components/ArticleList";
export const metadata = {
  title: "Practice | React Query",
};
function ReactQuery() {
  return (
    <ReactQueryProvider>
      <ArticleList />
    </ReactQueryProvider>
  )
}

export default ReactQuery;