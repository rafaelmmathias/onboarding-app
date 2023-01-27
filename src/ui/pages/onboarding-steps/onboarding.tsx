import { useStepsManager } from "@/services/hooks";
import { Header } from "@/ui/components";
import { StepForm, StepHeader, StepInfo } from "./components";
import { StepFooter } from "./components/step-footer";
import { StepContainer, TitleContainer } from "./onboarding.styles";

export const OnboardingPage = () => {
  const { currentStep } = useStepsManager();

  const isFormStep = currentStep.type === "form";
  const isInfoStep = currentStep.type === "info";

  return (
    <div>
      <Header />
      <StepHeader />
      <StepContainer>
        <TitleContainer>
          <span className="title">{currentStep.data.title}</span>
          <span className="description">{currentStep.data.description}</span>
        </TitleContainer>

        {isInfoStep && <StepInfo />}
        {isFormStep && <StepForm />}

        <StepFooter />
      </StepContainer>
    </div>
  );
};
