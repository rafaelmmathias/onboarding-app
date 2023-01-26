import { config1 } from "./clients/client-1/config";
import { client1Theme } from "./clients/client-1/theme";
import { config2 } from "./clients/client-2/config";
import { client2Theme } from "./clients/client-2/theme";

export const getConfigByClientId = (clientId: "client1" | "client2") => {
  const clientThemes = {
    client1: client1Theme,
    client2: client2Theme,
  };
  const clientConfigs = {
    client1: config1,
    client2: config2,
  };

  const config = {
    theme: clientThemes[clientId],
    steps: clientConfigs[clientId],
  };
  return config;
};
