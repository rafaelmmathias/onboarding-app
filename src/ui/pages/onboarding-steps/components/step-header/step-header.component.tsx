import { useStepsManager } from "@/services/hooks";
import {
  StepHeaderContainer,
  StepMarker,
  StepMarkerContainer,
} from "./step-header.styles";

export const StepHeader: React.FC = () => {
  const { currentStepIndex, steps } = useStepsManager();
  const stepsDots = Array.from(Array(steps.length).keys());

  return (
    <StepHeaderContainer>
      <span>
        Step {currentStepIndex + 1} of {steps.length}
      </span>
      <StepMarkerContainer>
        {stepsDots.map((step, i) => (
          <StepMarker
            key={`step-marker-${i}`}
            active={step <= currentStepIndex}
            data-testid="step-marker"
          />
        ))}
      </StepMarkerContainer>
    </StepHeaderContainer>
  );
};
