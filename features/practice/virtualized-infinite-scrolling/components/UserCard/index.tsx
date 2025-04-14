import { capitalizeString } from "@/lib/utils"
import { useEffect, useRef } from "react"
type UserCardProps<T extends { email: string } & Record<string, any>> = {
  isScrolling?: boolean
  data: Array<T | undefined>,
  index: number,
  setSize: (index: number, size: number) => void
  style: React.CSSProperties
}

const UserCard = <T extends { email: string } & Record<string, any>>({ data, index, setSize, style }: UserCardProps<T>) => {
  const userDetail = data[index];
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const height = cardRef.current.getBoundingClientRect().height;
      setSize(index, height); // Cập nhật kích thước vào sizeMap
    }
  }, [index, setSize]);

  if (!!data.length && !userDetail) return <div style={style} className="flex justify-center pt-6">No data to fetch</div>

  return (
    <article ref={cardRef} style={{ ...style }}>
      <div className="flex items-start p-2 m-2 gap-3 border border-gray-200 rounded-md w-full max-w-full">
        <div className="relative xl:min-w-24 xl:min-h-24 xl:max-w-24 xl:max-h-24 min-h-12 min-w-12 max-w-12 max-h-12 rounded-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={userDetail?.picture?.large || "/assets/imgs/temp-avatar.jpeg"}
            alt=""
            className="object-cover"
          />
        </div>

        {/* infomation */}
        <div className="flex flex-col gap-2 w-full overflow-hidden">
          <div className="flex flex-col">
            <span className="xl:text-lg text-base text-ellipsis leading-0 font-semibold max-w-full overflow-hidden max-h-7">{`#${index} ${userDetail?.name?.first} ${userDetail?.name?.last}`}</span>
            <span className="text-xs">{userDetail?.email}</span>
          </div>

          <div>
            <DetaiBlock label="Gender" value={capitalizeString(userDetail?.gender)} />
            <DetaiBlock label="Country" value={userDetail?.location?.country} />
            <DetaiBlock label="Phone" value={userDetail?.phone} />
          </div>
        </div>
      </div>
    </article>
  );
}


const DetaiBlock = ({ label, value }: { label: string, value: string }) => {
  return (
    <div className="flex gap-2">
      <label className="text-sm text-gray-400">{label}:</label>
      <span className="text-sm text-ellipsis line-clamp-1">{value}</span>
    </div>
  )
}

export default UserCard;