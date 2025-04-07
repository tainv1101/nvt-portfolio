"use client"
import { useState } from "react";
import UserService from "../../service/User.service";
import Users from "../Users";
import ModuleIntroduction from "../ModuleIntroduction";

function VirtualizedInfiniteContent() {
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

  return (
    <div className="flex justify-center mx-auto">
      <div className="flex flex-col gap-4 2xl:flex-row 2xl:gap-10">
        <ModuleIntroduction />
        <Users users={users} fetchMoreUsers={fetchMoreUsers} hasMore={hasMore} />
      </div>
    </div>
  );
}

export default VirtualizedInfiniteContent;