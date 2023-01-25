import { useQueryBase } from "@/services/core";
import { useMemo } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { DefaultTheme } from "styled-components";
import { getTheme, GetThemeParams } from "../api/theme";

export const useThemeQuery = () => {
  const { clientId = "" } = useParams();

  return useQueryBase<DefaultTheme, GetThemeParams>(
    "theme",
    getTheme,
    {
      clientId,
    },
    { enabled: !!clientId }
  );
};
