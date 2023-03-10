import React from "react";
import InputErrorMessage from "./input-error-message";
import { ErrorMessage } from "@hookform/error-message";
import { RegisterOptions } from "react-hook-form";

interface Props {
  name: string;
  label?: string;
  type?: "text" | "email" | "password" | "number";
  className?: string;
  placeholder?: string;
  errors: any;
  register: any;
  validation?: RegisterOptions;
}

const Input: React.FC<Props> = ({
  label,
  name,
  className,
  placeholder,
  errors,
  register,
  validation,
  type = "text",
}) => {
  return (
    <div>
      {label && <label className="mb-1 block">{label}</label>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { ...validation })}
        className={`form-input ${className} ${
          errors[name] ? "form-input-error" : ""
        }`}
      />
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
export default Input;
