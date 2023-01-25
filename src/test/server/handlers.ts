import { API_BASE_URL, isTest } from "@/config";
import { rest } from "msw";
import { delay } from "../test-utils";
import { client1Theme } from "./clients/client-1/theme";
import { client2Theme } from "./clients/client-2/theme";

const apiEndpoint = API_BASE_URL;

const handlers = [
  rest.get<{}, { clientId: string }>(
    `${apiEndpoint}/theme`,
    async (req, res, ctx) => {
      const clientId = req.url.searchParams.get("clientId") as
        | "client1"
        | "client2";

      const clientThemes = {
        client1: client1Theme,
        client2: client2Theme,
      };

      await delay();
      return res(ctx.json(clientThemes[clientId]));
    }
  ),
];

export { handlers };
