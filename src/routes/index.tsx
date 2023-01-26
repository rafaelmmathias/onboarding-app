import { StepsManagerProvider } from "@/services/store/steps-manager";
import { NotFoundPage, OnboardingPage } from "@/ui/pages";
import { OnboardingConfigManager } from "@/ui/themes/ThemeManager";
import { Route, Routes } from "react-router-dom";

export const OnboardingRouter = () => {
  return (
    <OnboardingConfigManager>
      <Routes>
        <Route
          path="/:step/*"
          element={
            <StepsManagerProvider>
              <OnboardingPage />
            </StepsManagerProvider>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </OnboardingConfigManager>
  );
};
