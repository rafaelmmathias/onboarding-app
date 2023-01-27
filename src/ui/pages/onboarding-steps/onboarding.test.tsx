import { screen, waitFor } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { OnboardingPage } from "./onboarding";

describe("OnboardingPage", () => {
  it("should render dashboard and render text from api", async () => {
    render(<OnboardingPage />);

    await waitFor(() => screen.findByText("API TEXT"));
  });
});

export {};
