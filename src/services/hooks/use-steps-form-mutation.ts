import { submitStepsForm, SubmitStepsFormParams } from "@/services/api";
import { useMutationBase } from "@/services/core";

export const useStepsFormMutation = () => {
  return useMutationBase<void, SubmitStepsFormParams>(submitStepsForm);
};
