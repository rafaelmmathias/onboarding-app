import { InfoType } from "@/entities/steps.entities";
import { useStepsManager } from "@/services/hooks";
import { Button, Icon } from "@/ui/components";
import {
  StepInfoContainer,
  StepInfoIconContainer,
  StepInfoIconsContainer,
} from "./step-info.styles";

export const StepInfo: React.FC = () => {
  const { goToNext, currentStep } = useStepsManager();
  const stepInfo = currentStep.data as InfoType;

  return (
    <StepInfoContainer>
      <StepInfoIconsContainer>
        {stepInfo.elements.map(({ icon, text }, i) => (
          <StepInfoIconContainer key={`icon-${i}`}>
            <Icon name={icon} size={3} data-testid="info-icon" />

            <span>{text}</span>
          </StepInfoIconContainer>
        ))}
      </StepInfoIconsContainer>
      <Button onClick={goToNext} data-testid="step-info-button">
        {stepInfo.buttonText}
      </Button>
    </StepInfoContainer>
  );
};
