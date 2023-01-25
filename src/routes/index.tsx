import { NotFoundPage, OnboardingPage } from "@/ui/pages";
import { OnboardingConfigManager } from "@/ui/themes/ThemeManager";
import { Route, Routes } from "react-router-dom";

export const OnboardingRouter = () => {
  return (
    <OnboardingConfigManager>
      <Routes>
        <Route index path="/:step?" element={<OnboardingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </OnboardingConfigManager>
  );
};
