import { useParams } from "react-router-dom";
import { useQueryBase } from "@/services/core";
import {
  ClientConfig,
  getClientConfigRequest,
  GetClientConfigParams,
} from "@/services/api";

export const useClientConfigQuery = () => {
  const { clientId = "" } = useParams();

  return useQueryBase<ClientConfig, GetClientConfigParams>(
    "client-config",
    getClientConfigRequest,
    {
      clientId,
    },
    { enabled: false }
  );
};
