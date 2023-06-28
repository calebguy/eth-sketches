"use client";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default Providers;
