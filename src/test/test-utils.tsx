import { isTest } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const getRandom = () => {
  return Math.floor(Math.random() * 3) * 1000;
};

export const wait = async (ms = 0) =>
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });

export const delay = (delay = getRandom()) => wait(isTest() ? 0 : delay);

function render(
  ui: any,
  { path = "/", route = "/", ...renderOptions }: any = {}
) {
  if (route) {
    window.history.pushState({}, "", route);
  }
  function Wrapper({ children }: any) {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 0,
          staleTime: 0,
        },
      },
    });

    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path={path} element={children} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
