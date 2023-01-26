import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useClientConfigQuery } from "@/services/hooks";
import { Loader } from "@/ui/components";
import { NotFoundPage } from "@/ui/pages";
import FontStyle from "./font-face";

type Props = { children: React.ReactNode };

export const OnboardingConfigManager: React.FC<Props> = ({ children }) => {
  const { data, isLoading, refetch } = useClientConfigQuery();

  useEffect(() => {
    refetch();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.steps) {
      navigate(data.steps[0].route);
    }
  }, [data]);

  if (isLoading) return <Loader />;
  if (data)
    return (
      <ThemeProvider theme={data.theme}>
        <FontStyle />
        {children}
      </ThemeProvider>
    );
  return <NotFoundPage />;
};
