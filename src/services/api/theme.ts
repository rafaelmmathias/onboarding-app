import { DefaultTheme } from "styled-components";
import { request } from "./request";
export type GetThemeParams = {
  clientId: string;
};
export const getTheme = async (params: GetThemeParams) => {
  return await request.get<DefaultTheme>("/theme", { params });
};
