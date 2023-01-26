import { useContext } from "react";
import { StepsManagerContext } from "@/services/store/steps-manager";

export const useStepsManager = () => {
  return useContext(StepsManagerContext);
};
