import { useClientConfigQuery } from "@/services/api";
import { ThemeProvider } from "styled-components";
import { Loader } from "@/ui/components";
import { NotFoundPage } from "../pages";
import FontStyle from "./font-face";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Props = { children: React.ReactNode };

export const OnboardingConfigManager: React.FC<Props> = ({ children }) => {
  const { data, isFetching, isLoading } = useClientConfigQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.steps) {
      navigate(data.steps[0].route);
    }
  }, [data]);

  if (isFetching || isLoading) return <Loader />;
  if (data)
    return (
      <ThemeProvider theme={data.theme}>
        <FontStyle />
        {children}
      </ThemeProvider>
    );
  return <NotFoundPage />;
};
