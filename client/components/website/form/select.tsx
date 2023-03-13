import { Listbox } from "@headlessui/react";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import InputErrorMessage from "./input-error-message";

interface Props {
  field: any;
  options: any[];
  name: string;
  label?: string;
  className?: string;
  errors: any;
}

const Select: React.FC<Props> = ({
  label,
  name,
  className,
  errors,
  options,
  field,
}) => {
  return (
    <div>
      <Listbox value={field.value || ""} onChange={field.onChange}>
        {label && <Listbox.Label className="mb-1 block">{label}</Listbox.Label>}
        <div className="relative w-full">
          <Listbox.Button
            className={`leading-none w-full relative rounded border border-gray-300 bg-gray-50 flex items-center justify-between space-x-2 ${className} ${
              errors[name] ? "form-input-error" : ""
            }`}
          >
            {field.value || (
              <span className="text-gray-500 ">Select Options</span>
            )}
            <FiChevronDown className="h-5 w-5" />
          </Listbox.Button>
          <Listbox.Options
            className="absolute z-10 mt-1 w-full right-0 rounded bg-gray-50 border border-gray-300 py-1"
            placeholder="Test"
          >
            {options.map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className="py-2 px-3 cursor-pointer hover:bg-gray-200"
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <InputErrorMessage key={type}>{message}</InputErrorMessage>
              ))
            : null;
        }}
      />
    </div>
  );
};
export default Select;
