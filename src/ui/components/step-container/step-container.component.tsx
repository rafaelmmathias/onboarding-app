import { StepContainerStyled } from "./box.styles";

type StepContainerProps = {
  children: React.ReactNode;
};

export const StepContainer: React.FC<StepContainerProps> = ({ children }) => {
  return <StepContainerStyled>{children}</StepContainerStyled>;
};
