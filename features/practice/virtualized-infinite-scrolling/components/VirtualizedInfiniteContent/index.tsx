"use client"
import Users from "../Users";
import ReactQueryProvider from "@/components/ReactQueryProvider";

function VirtualizedInfiniteContent() {
  return (
    <ReactQueryProvider>
      <Users />
    </ReactQueryProvider>
  );
}

export default VirtualizedInfiniteContent;