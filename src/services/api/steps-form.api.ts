import { request } from "./request";

export type SubmitStepsFormParams = {
  form: any;
  clientId: string;
};
export const submitStepsForm = async (payload: SubmitStepsFormParams) => {
  return await request.post<void>("/steps-submit", payload);
};
