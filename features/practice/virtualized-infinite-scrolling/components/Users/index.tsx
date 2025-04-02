"use client"
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader"
import { VariableSizeList } from 'react-window';
import { useCallback, useRef } from "react";
import UserCard from "../UserCard";

interface UsersProps {
  users: Array<(Record<string, string> & { email: string }) | undefined>;
  fetchMoreUsers: () => Promise<void>;
  hasMore: boolean;
}
function Users({ users, fetchMoreUsers, hasMore }: UsersProps) {
  const sizeMap = useRef<Record<number, number>>({}); // Lưu kích thước từng item
  const listRef = useRef<VariableSizeList>(null); // Tham chiếu danh sách

  // Hàm đo kích thước thực tế của item
  const setSize = (index: number, size: number) => {
    if (sizeMap.current[index] !== size) {
      sizeMap.current[index] = size;
      listRef?.current?.resetAfterIndex(index); // Cập nhật danh sách
    }
  };

  const getSize = (index: number) => sizeMap.current[index] || 148 + 6;
  const isItemLoaded = useCallback((index: number) => index < users.length, [users]);

  return (
    <div className="p-4 border rounded-md">
      <div>
        <h4 className="text-lg font-bold">User List: </h4>
        <div className="flex gap-4">
          <span>Total User: {hasMore ? users.length : users.length - 1}</span>
          <span>Page: {Math.floor(users.length / 10)}</span>
          <span>Offset: 10</span>
        </div>
      </div>

      <AutoSizer disableWidth style={{ height: "65vh", padding: "16px 0", overflow: "hidden" }} className="xl:w-[450px] w-full">
        {({ height }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={hasMore ? users.length + 1 : users.length}
            loadMoreItems={fetchMoreUsers}
          >
            {({ onItemsRendered }) => (
              <>
                <VariableSizeList
                  height={height}
                  width="100%"
                  itemCount={hasMore ? users.length + 1 : users.length}
                  itemSize={getSize}
                  onItemsRendered={onItemsRendered}
                  useIsScrolling
                  itemData={users}
                >
                  {({ index, style, data, isScrolling }) =>
                    hasMore && !data[index] ? <Loader /> :
                      <>
                        <UserCard isScrolling={isScrolling} data={data} index={index} setSize={setSize} style={style} />
                      </>
                  }
                </VariableSizeList>
              </>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
}

function Loader() {
  return (
    <div className="w-full flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={"animate-spin"}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  )
}

export default Users;