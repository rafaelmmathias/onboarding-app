import { useStepsManager } from "@/services/hooks";
import { Button } from "@/ui/components";
import { StepFooterContainer } from "./step-footer.styles";

export const StepFooter = () => {
  const {
    nextStep,
    previousStep,
    currentStep,
    isStepValid,
    isSubmitting,
    isFormValid,
    isLastStep,
    goToNext,
    goToPrevious,
    submitForm,
  } = useStepsManager();

  const isInfoStep = currentStep.type === "info";
  return (
    <StepFooterContainer>
      {!isInfoStep && previousStep && (
        <Button onClick={goToPrevious} className="outline">
          back
        </Button>
      )}
      {!isInfoStep && nextStep && (
        <Button disabled={!isStepValid} onClick={goToNext}>
          next
        </Button>
      )}
      {isLastStep && (
        <Button disabled={!isFormValid || isSubmitting} onClick={submitForm}>
          submit
        </Button>
      )}
    </StepFooterContainer>
  );
};
