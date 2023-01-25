import { request } from "./request";

export const getOnboarding = async () => {
  return await request.get<string>("/onboarding");
};
