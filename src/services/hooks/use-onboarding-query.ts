import { useQueryBase } from "@/services/core";
import { getOnboarding } from "../api/onboarding";

export const useOnboardingQuery = () => {
  return useQueryBase<string>("onboarding", getOnboarding);
};
