import { FormType } from "@/entities/steps.entities";
import { useStepsManager } from "@/services/hooks";
import { Input, Select } from "@/ui/components";
import { StepFormContainer } from "./step-form.styles";

export const StepForm: React.FC = () => {
  const { form, onFormChange, currentStep } = useStepsManager();
  const stepForm = currentStep.data as FormType;

  return (
    <StepFormContainer>
      {stepForm.field.type === "input" && (
        <Input
          data-testid="input-field"
          label={stepForm.field.label}
          tip={stepForm.field.tip}
          name={stepForm.field.fieldName}
          value={form[stepForm.field.fieldName] || ""}
          onChange={(e) => {
            onFormChange(stepForm.field.fieldName, e.target.value);
          }}
        />
      )}
      {stepForm.field.type === "select" && (
        <Select
          label={stepForm.field.label}
          options={stepForm.field.options}
          selected={form[stepForm.field.fieldName]}
          onChange={(value) => {
            onFormChange(stepForm.field.fieldName, value);
          }}
        />
      )}
    </StepFormContainer>
  );
};
