import { DefaultTheme } from "styled-components";
import { Steps } from "@/entities/steps.entities";
import { request } from "./request";

export type GetClientConfigParams = {
  clientId: string;
};

export type ClientConfig = {
  theme: DefaultTheme;
  steps: Steps;
};

export const getClientConfigRequest = async (params: GetClientConfigParams) => {
  return await request.get<ClientConfig>("/config", { params });
};
