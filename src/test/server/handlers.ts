import { API_BASE_URL, isTest } from "@/config";
import { rest } from "msw";
import { delay } from "../test-utils";

const apiEndpoint = API_BASE_URL;

const handlers = [
  rest.get(`${apiEndpoint}/onboarding`, async (req, res, ctx) => {
    await delay();
    return res(ctx.json("API TEXT"));
  }),
];

export { handlers };
