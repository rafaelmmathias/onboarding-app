import { API_BASE_URL } from "@/config";
import { useOnboardingQuery } from "@/services/hooks";
import axios from "axios";
import { useState } from "react";

export const OnboardingPage = () => {
  const { data } = useOnboardingQuery();

  return (
    <div>
      onboarding-page <div>{data}</div>
    </div>
  );
};
