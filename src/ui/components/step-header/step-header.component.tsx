import {
  StepHeaderContainer,
  StepMarker,
  StepMarkerContainer,
} from "./step-header.styles";

type StepsHeaderProps = {
  stepsLength: number;
  currentStepIndex: number;
};

export const StepHeader: React.FC<StepsHeaderProps> = ({
  stepsLength,
  currentStepIndex,
}) => {
  const steps = Array.from(Array(stepsLength).keys());

  return (
    <StepHeaderContainer>
      Step {currentStepIndex + 1} of {stepsLength}
      <StepMarkerContainer>
        {steps.map((step) => (
          <StepMarker active={step <= currentStepIndex} />
        ))}
      </StepMarkerContainer>
    </StepHeaderContainer>
  );
};
