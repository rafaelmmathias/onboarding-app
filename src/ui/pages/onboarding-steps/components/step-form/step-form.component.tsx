import { FormType } from "@/entities/steps.entities";
import { useStepsManager } from "@/services/hooks";

type StepFormProps = {
  stepForm: FormType;
};

export const StepForm: React.FC<StepFormProps> = ({ stepForm }) => {
  const { form, onFormChange } = useStepsManager();

  return (
    <>
      {stepForm.field.type === "input" && (
        <input
          name={stepForm.field.field}
          value={form[stepForm.field.field] || ""}
          onChange={(e) => {
            onFormChange(stepForm.field.field, e.target.value);
          }}
        />
      )}
      {stepForm.field.type === "select" && (
        <select
          defaultValue={form[stepForm.field.field]}
          name={stepForm.field.field}
          onChange={(e) => {
            onFormChange(stepForm.field.field, e.target.value);
          }}
        >
          <option value={""}>choose an option...</option>
          {stepForm.field.options.map((field, index) => (
            <option value={field.value} key={`option-${field.value}-index`}>
              {field.label}
            </option>
          ))}
        </select>
      )}
    </>
  );
};
