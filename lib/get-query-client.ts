import { QueryClient, isServer } from "@tanstack/react-query";


function makeQueryClient() {
  return new QueryClient(
    // {defaultOptions: { queries: { staleTime: 5 * 60 * 1000 } } }
  );
}

let queryClient: QueryClient | undefined = undefined;
export function getQueryClient()  {
  if(isServer) return makeQueryClient();
  else if(!queryClient) queryClient = makeQueryClient();
    return queryClient;
  
}