/* eslint-disable @next/next/no-img-element */

import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";

interface ArticleCardProps {
  data: {
    id: string;
    url: string;
    height: number;
    width: number;
  }
}
function ArticleCard({ data }: ArticleCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full text-center hover:cursor-pointer">
      <TooltipProvider delayDuration={500} key={data.id}>
        <Tooltip>
          <TooltipTrigger>
            <img
              src={data.url || "/assets/imgs/no-img.jpg"}
              alt={data.id}
              onLoad={() => setLoaded(true)}
              className={`rounded-3xl w-full transition-opacity duration-700 ${loaded ? "opacity-100 block" : "opacity-0 hidden"
                }`}
            />
            {!loaded && <Skeleton className="w-full h-80 animate-pulse" />}
          </TooltipTrigger>
          <TooltipContent>
            <p>{data.id}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

    </div>
  );
}

export default ArticleCard;