import { useStepsManager } from "@/services/hooks";
import { Button, Header } from "@/ui/components";
import { StepHeader } from "@/ui/components";
import { StepForm, StepInfo } from "./components";
import { StepContainer, TitleContainer } from "./onboarding.styles";

export const OnboardingPage = () => {
  const {
    nextStep,
    previousStep,
    currentStep,
    form,
    isStepValid,
    isSubmitting,
    isFormValid,
    isLastStep,
    currentStepIndex,
    steps,
    onFormChange,
    goToNext,
    goToPrevious,
    submitForm,
  } = useStepsManager();

  const isFormStep = currentStep.type === "form";
  const isInfoStep = currentStep.type === "info";

  return (
    <div>
      <Header />
      <StepHeader
        currentStepIndex={currentStepIndex}
        stepsLength={steps.length}
      />
      <StepContainer>
        <TitleContainer>
          <span className="title">{currentStep.data.title}</span>
          <span className="description">{currentStep.data.description}</span>
        </TitleContainer>

        {isInfoStep && <StepInfo stepInfo={currentStep.data} />}
        {isFormStep && <StepForm stepForm={currentStep.data} />}

        {previousStep && <Button onClick={goToPrevious}>back</Button>}
        {!isInfoStep && nextStep && (
          <Button disabled={!isStepValid} onClick={goToNext}>
            next
          </Button>
        )}
        {isLastStep && (
          <Button disabled={!isFormValid || isSubmitting} onClick={submitForm}>
            send
          </Button>
        )}
      </StepContainer>
    </div>
  );
};
