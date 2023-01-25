import { useThemeQuery } from "@/services/hooks";
import { ThemeProvider } from "styled-components";
import { Loader } from "@/ui/components";
import { NotFoundPage } from "../pages";
import FontStyle from "./font-face";

type Props = { children: React.ReactNode };

export const OnboardingConfigManager: React.FC<Props> = ({ children }) => {
  const { data, isFetching, isLoading } = useThemeQuery();

  if (isFetching || isLoading) return <Loader />;
  if (data)
    return (
      <ThemeProvider theme={data}>
        {children}
        <FontStyle />
      </ThemeProvider>
    );
  return <NotFoundPage />;
};
