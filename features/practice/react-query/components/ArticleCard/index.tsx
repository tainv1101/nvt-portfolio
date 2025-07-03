import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
      <LazyLoadImage
        effect="blur"
        src={data.url || "/assets/imgs/no-img.jpg"}
        alt={data.id}
        onLoad={() => setLoaded(true)}
        className='rounded-3xl w-full'
      />
      {!loaded && <Skeleton className="w-full h-80 rounded-3xl animate-pulse blur" />}
    </div>
  );
}

export default ArticleCard;