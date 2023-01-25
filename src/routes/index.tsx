import { NotFoundPage, OnboardingPage } from "@/ui/pages";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
