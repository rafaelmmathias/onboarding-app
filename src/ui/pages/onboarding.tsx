import { useStepsManager } from "@/services/hooks";
import { Header } from "../components";
import { Box } from "../components/box";

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
    onFormChange,
    goToNext,
    goToPrevious,
    submitForm,
  } = useStepsManager();

  const isForm = currentStep.type === "form";

  return (
    <div>
      <Header />

      <Box>onboarding-page: {currentStep.data.title}</Box>
      <div>
        {isForm && currentStep.data.field.type === "input" && (
          <input
            name={currentStep.data.field.field}
            value={form[currentStep.data.field.field] || ""}
            onChange={(e) => {
              onFormChange(currentStep.data.field.field, e.target.value);
            }}
          />
        )}

        {isForm && currentStep.data.field.type === "select" && (
          <select
            defaultValue={form[currentStep.data.field.field]}
            name={currentStep.data.field.field}
            onChange={(e) => {
              onFormChange(currentStep.data.field.field, e.target.value);
            }}
          >
            <option value={""}>choose an option...</option>
            {currentStep.data.field.options.map((field, index) => (
              <option value={field.value} key={`option-${field.value}-index`}>
                {field.label}
              </option>
            ))}
          </select>
        )}
      </div>

      {previousStep && <button onClick={goToPrevious}>back</button>}
      {nextStep && (
        <button disabled={!isStepValid} onClick={goToNext}>
          next
        </button>
      )}
      {isLastStep && (
        <button disabled={!isFormValid || isSubmitting} onClick={submitForm}>
          send
        </button>
      )}
    </div>
  );
};
