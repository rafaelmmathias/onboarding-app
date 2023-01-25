import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ErrorBoundaryBase } from "@/ui/features/error-handlers";
import { AppRouter } from "./routes";
import { isDev, isProduction } from "./config";
import "./test/server";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: 60000, // 1 minute
      retry: false,
    },
  },
});

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});

export const App = () => (
  <ErrorBoundaryBase>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      {!isProduction() && <ReactQueryDevtools initialIsOpen={isDev()} />}
    </QueryClientProvider>
  </ErrorBoundaryBase>
);
