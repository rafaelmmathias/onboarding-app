import { useQueryBase } from "@/services/core";
import { useParams } from "react-router-dom";
import { ClientConfig, getClientConfigRequest, GetClientConfigParams } from "../client-config.request";

export const useClientConfigQuery = () => {
  const { clientId = "" } = useParams();

  return useQueryBase<ClientConfig, GetClientConfigParams>(
    "theme",
    getClientConfigRequest,
    {
      clientId,
    },
    { enabled: !!clientId }
  );
};
