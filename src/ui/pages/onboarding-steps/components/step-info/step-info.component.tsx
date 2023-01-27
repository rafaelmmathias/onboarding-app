import { InfoType } from "@/entities/steps.entities";
import { useStepsManager } from "@/services/hooks";
import { Button } from "@/ui/components";
import { Icon } from "@/ui/components/Icon";
import {
  StepInfoContainer,
  StepInfoIconContainer,
  StepInfoIconsContainer,
} from "./step-info.styles";

type StepInfoProps = {
  stepInfo: InfoType;
};
export const StepInfo: React.FC<StepInfoProps> = ({ stepInfo }) => {
  const { goToNext } = useStepsManager();
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
