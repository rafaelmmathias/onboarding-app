import { Listbox } from "@headlessui/react";
import { SelectContainer } from "./select.styles";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useMemo } from "react";

type SelectOption = {
  value: string;
  label: string;
};
type SelectProps = {
  options: SelectOption[];
  selected: string;
  label?: string;
  onChange: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  selected,
  onChange,
}) => {
  const selectedOption = useMemo(
    () =>
      selected ? options.find((option) => option.value === selected) : null,
    [selected, options]
  );

  return (
    <SelectContainer>
      {label && <div className="label">{label}</div>}
      <Listbox onChange={onChange} value={selected}>
        <Listbox.Button>
          {!selectedOption && (
            <div className="placeholder">Select an option...</div>
          )}
          {selectedOption && <div>{selectedOption.label}</div>}
          <ChevronUpDownIcon />
        </Listbox.Button>

        <Listbox.Options className={"ul-list"}>
          {/* <div className="options-container"> */}
          {options.map((option) => (
            <Listbox.Option value={option.value}>{option.label}</Listbox.Option>
          ))}
          {/* </div> */}
        </Listbox.Options>
      </Listbox>
    </SelectContainer>
  );
};
