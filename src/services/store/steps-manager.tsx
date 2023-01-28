import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Step, Steps } from "@/entities/steps.entities";
import { Loader } from "@/ui/components";
import { NotFoundPage } from "@/ui/pages";
import FontStyle from "@/ui/themes/font-face";
import { useClientConfigQuery, useStepsFormMutation } from "@/services/hooks";

type StepsManager = {
  form: any;
  steps: Steps;
  nextStep: Step;
  previousStep: Step;
  currentStep: Step;
  currentStepIndex: number;
  isStepValid: boolean;
  isSubmitting: boolean;
  isFormValid: boolean;
  isLastStep: boolean;
  onFormChange: (field: string, value: string) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  submitForm: () => void;
};

export const StepsManagerContext = React.createContext<StepsManager>({} as any);

type Props = { children: React.ReactNode };
export const StepsManagerProvider: React.FC<Props> = ({ children }) => {
  const params = useParams();

  const { data, isLoading } = useClientConfigQuery();
  const { mutate, isLoading: isSubmitting } = useStepsFormMutation();
  const [stepValues, setStepvalues] = useState<any>({});
  const navigate = useNavigate();

  const isFormValid = useMemo(() => {
    const allKeys =
      data?.steps
        .filter((x) => x.type === "form")
        .map((step) => step.type === "form" && step.data.field.fieldName) || [];

    return allKeys.every((key) => stepValues[key || ""]);
  }, [data, stepValues]);

  if (!data || isLoading) return <Loader />;

  const currentStep = data.steps.find((x) => x.route === params.step);

  useEffect(() => {
    if (!currentStep) {
      navigate("../" + data.steps[0].route);
    }
  }, [data]);

  if (!currentStep) return <Loader />;

  const currentStepIndex = data.steps.findIndex(
    (step) => step.route === params.step
  );

  const isLastStep = currentStepIndex === data.steps.length - 1;
  const nextStep = data.steps[currentStepIndex + 1];
  const previousStep = data.steps[currentStepIndex - 1];

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

  const submitForm = () => {
    mutate({ clientId: params.clientId || "", form: stepValues });
  };

  const isStepValid =
    currentStep.type === "info" ||
    (currentStep.type === "form" && stepValues[currentStep.data.field.fieldName]);

  if (data)
    return (
      <ThemeProvider theme={data.theme}>
        <StepsManagerContext.Provider
          value={{
            form: stepValues,
            steps: data.steps,
            currentStepIndex,
            nextStep,
            previousStep,
            currentStep,
            isStepValid,
            isFormValid,
            isSubmitting,
            isLastStep,
            onFormChange,
            goToNext,
            goToPrevious,
            submitForm,
          }}
        >
          {children}
          <FontStyle />
        </StepsManagerContext.Provider>
      </ThemeProvider>
    );
  return <NotFoundPage />;
};
