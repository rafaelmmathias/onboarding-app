import { Step } from "@/entities/steps.entities";
import { Loader } from "@/ui/components";
import { NotFoundPage } from "@/ui/pages";
import FontStyle from "@/ui/themes/font-face";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useClientConfigQuery } from "@/services/api";

type StepsManager = {
  form: any;
  nextStep: Step;
  previousStep: Step;
  currentStep: Step;
  isStepValid: boolean;
  onFormChange: (field: string, value: string) => void;
  goToNext: () => void;
  goToPrevious: () => void;
};

export const StepsManagerContext = React.createContext<StepsManager>({} as any);

type Props = { children: React.ReactNode };
export const StepsManagerProvider: React.FC<Props> = ({ children }) => {
  const { data, isFetching, isLoading } = useClientConfigQuery();
  if (!data) return <Loader />;

  const params = useParams();
  const navigate = useNavigate();

  const currentStep = data.steps.find((x) => x.route === params.step);
  if (!currentStep) return <Loader />;

  const currentStepIndex = data.steps.findIndex(
    (step) => step.route === params.step
  );

  const nextStep = data.steps[currentStepIndex + 1];
  const previousStep = data.steps[currentStepIndex - 1];

  const [stepValues, setStepvalues] = useState<any>({});

  const onFormChange = (field: string, value: string) => {
    setStepvalues({
      ...stepValues,
      [field]: value,
    });
  };

  const goToNext = () => {
    if (!nextStep) return;
    navigate("../" + nextStep.route);
  };
  const goToPrevious = () => {
    if (!previousStep) return;
    navigate("../" + previousStep.route);
  };

  const isStepValid =
    currentStep.type === "info" ||
    (currentStep.type === "form" && stepValues[currentStep.data.field.field]);

  if (isFetching || isLoading) return <Loader />;
  if (data)
    return (
      <ThemeProvider theme={data.theme}>
        <StepsManagerContext.Provider
          value={{
            form: stepValues,
            nextStep,
            previousStep,
            currentStep,
            isStepValid,
            onFormChange,
            goToNext,
            goToPrevious,
          }}
        >
          {children}
          <FontStyle />
        </StepsManagerContext.Provider>
      </ThemeProvider>
    );
  return <NotFoundPage />;
};
