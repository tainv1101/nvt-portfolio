"use client"
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader"
import { VariableSizeList } from 'react-window';
import { useCallback, useRef, useState } from "react";
import UserCard from "../UserCard";
import UserService from "../../service/User.service";

function Users() {
  const [users, setUsers] = useState<Array<(Record<string, string> & { email: string }) | undefined>>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreUsers = async () => {
    const res = await UserService.getUsers({ page: page, results: 10 });
    const data = res.data.results

    // Check when no more data
    if (!data.length) {
      setUsers((prev) => [...prev, undefined]);

      return setHasMore(false);
    }
    setUsers((prev) => [...prev, ...data]);
    setPage((prev) => prev + 1);
  };

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
    <div className="p-4 border rounded-md w-full">
      <div className="border-b pb-3">
        <h4 className="text-lg font-bold">User List: </h4>
        <div className="flex gap-4">
          <span>Total User: {hasMore ? users.length : users.length - 1}</span>
          <span>Page: {Math.floor(users.length / 10)}</span>
          <span>Offset: 10</span>
        </div>
      </div>

      <AutoSizer disableWidth style={{ height: "700px" }} className="w-full">
        {({ }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={hasMore ? users.length + 1 : users.length}
            loadMoreItems={fetchMoreUsers}
          >
            {({ onItemsRendered }) => (
              <>
                <VariableSizeList
                  height={700}
                  width="100%"
                  itemCount={hasMore ? users.length + 1 : users.length}
                  itemSize={getSize}
                  onItemsRendered={onItemsRendered}
                  useIsScrolling
                  itemData={users}
                  style={{ overflow: "auto" }}
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