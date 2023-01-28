import { isTest } from "@/config";
import { OnboardingRouter } from "@/routes";
import { NotFoundPage } from "@/ui/pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
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

export const waitForLoadersDone = async () => {
  const loading = await screen.findByText("Loading...");
  expect(loading).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
};

function render({ path = "/", route = "/", ...renderOptions }: any = {}) {
  if (route) {
    window.history.pushState({}, "", route);
  }
  function Wrapper({ children }: any) {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 0,
          staleTime: 0,
          retry: false,
        },
      },
    });

    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/:clientId/*" element={<OnboardingRouter />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    );
  }
  return rtlRender(<></>, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
