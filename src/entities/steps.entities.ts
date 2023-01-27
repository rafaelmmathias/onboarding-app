type DataInfoElement = {
  icon: "wheel" | "car" | "chart";
  text: string;
};

export type InfoType = {
  title: string;
  description: string;
  buttonText: string;
  elements: DataInfoElement[];
};

type Option = {
  label: string;
  value: string;
};

type InputField = {
  type: "input";
  field: string;
  label: string;
  tip: string;
};

type SelectField = {
  type: "select";
  field: string;
  label: string;
  tip: string;
  options: Option[];
};

type Field = InputField | SelectField;

export type FormType = {
  title: string;
  description: string;
  field: Field;
};

type StepInfo = {
  route: string;
  type: "info";
  data: InfoType;
};

export type StepForm = {
  route: string;
  type: "form";
  data: FormType;
};

export type Step = StepInfo | StepForm;
export type Steps = Step[];
