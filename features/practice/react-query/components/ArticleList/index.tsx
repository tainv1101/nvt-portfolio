"use client";
import { useInfiniteQuery, } from "@tanstack/react-query";
import ArticleCard from "../ArticleCard";
import { ArticleService } from "@/features/practice/react-query/service/Article.service";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { toast } from "sonner"

import dynamic from "next/dynamic";
import { ResponsiveMasonry } from "react-responsive-masonry";
const Masonry = dynamic(() => import("react-responsive-masonry"), { ssr: false });


function ArticleList() {
  const {
    data,
    // error,
    fetchNextPage,
    isFetching,
    // isFetchingNextPage,
    // status,
    // isPlaceholderData
  } = useInfiniteQuery({
    queryKey: ['masonry-articles'],
    queryFn: ({ pageParam }) => ArticleService.getArticles({ page: pageParam }),
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage?.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined
      }
      return firstPageParam - 1
    },
  })

  const { ref, inView } = useInView();

  console.log(data)
  useEffect(() => {
    if (inView) {
      toast(`Fetching page: ${data?.pageParams?.length || 0}`)
      fetchNextPage()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, fetchNextPage])

  return (
    <div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 639: 2, 640: 3, 900: 3, 1280: 4, 1536: 5 }}
      // gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
      >
        <Masonry className="space-4">
          {data?.pages?.map((page: any) => (
            page.map((item: any) => (
              <ArticleCard key={item.id} data={item} />
            ))
          ))}
          <div ref={ref}></div>

        </Masonry>
      </ResponsiveMasonry>
      {isFetching && <div className="w-full py-2 flex justify-center animate-spin"><Loader /></div>}
    </div>
  )
}

export default ArticleList;