import { Skeleton } from "@/components/ui/skeleton"

type SkeletonCardProps = {
  style?: React.CSSProperties
}

const SkeletonCard = ({ style = {} }: SkeletonCardProps) => {

  return (
    <div style={{ ...style }}>
      <div className="flex items-start p-2 m-2 gap-3 border border-gray-200 rounded-md xl:max-w-[440px] max-w-full">
        <Skeleton className="relative xl:min-w-24 xl:min-h-24 xl:max-w-24 xl:max-h-24 min-h-10 min-w-10 max-w-10 max-h-10 rounded-full overflow-hidden" />
        <div className="flex flex-col gap-2 w-full">
          <div>
            <Skeleton />
            <Skeleton />
          </div>

          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
}



export default SkeletonCard;