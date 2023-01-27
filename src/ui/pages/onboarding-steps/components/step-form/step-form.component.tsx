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
          label={stepForm.field.label}
          tip={stepForm.field.tip}
          name={stepForm.field.field}
          value={form[stepForm.field.field] || ""}
          onChange={(e) => {
            onFormChange(stepForm.field.field, e.target.value);
          }}
        />
      )}
      {stepForm.field.type === "select" && (
        <Select
          label={stepForm.field.label}
          options={stepForm.field.options}
          selected={form[stepForm.field.field]}
          onChange={(value) => {
            onFormChange(stepForm.field.field, value);
          }}
        />
      )}
    </StepFormContainer>
  );
};
