import { API_BASE_URL, isTest } from "@/config";
import { rest } from "msw";
import { delay } from "../test-utils";
import { getConfigByClientId } from "./db/config";

const apiEndpoint = API_BASE_URL;

const handlers = [
  rest.get<{}, { clientId: string }>(
    `${apiEndpoint}/config`,
    async (req, res, ctx) => {
      const clientId = req.url.searchParams.get("clientId") as
        | "client1"
        | "client2";
      if (!["client1", "client2"].includes(clientId)) {
        return res(ctx.status(404));
      }
      const config = getConfigByClientId(clientId);
      await delay();
      return res(ctx.json(config));
    }
  ),
  rest.post<{}, { clientId: string }>(
    `${apiEndpoint}/steps-submit`,
    async (req, res, ctx) => {
      await delay();
      return res(ctx.status(200));
    }
  ),
];

export { handlers };
