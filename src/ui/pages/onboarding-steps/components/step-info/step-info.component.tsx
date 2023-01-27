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
        {stepInfo.elements.map(({ icon, text }) => (
          <StepInfoIconContainer>
            <Icon name={icon} size={3} />

            <span>{text}</span>
          </StepInfoIconContainer>
        ))}
      </StepInfoIconsContainer>
      <Button onClick={goToNext}>{stepInfo.buttonText}</Button>
    </StepInfoContainer>
  );
};
