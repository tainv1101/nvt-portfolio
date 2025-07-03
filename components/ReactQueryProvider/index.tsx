"use client"
import { getQueryClient } from "@/lib/get-query-client";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = getQueryClient();
function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient} >
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;