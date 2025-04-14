// import { useQuery } from "@tanstack/react-query";

import ReactQueryProvider from "@/components/ReactQueryProvider";
import ArticleList from "@/features/practice/react-query/components/ArticleList";

function ReactQuery() {
  return (
    <ReactQueryProvider>
      <ArticleList />
    </ReactQueryProvider>
  )
}

export default ReactQuery;