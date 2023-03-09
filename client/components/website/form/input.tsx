import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import InputErrorMessage from "./input-error-message";

interface Props {
  name: string;
  label: string;
  type?: "text" | "email" | "password";
  className?: string;
  placeholder?: string;
  errors: any;
  register: any;
  validation: any;
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
      {label && <label className="">{label}</label>}
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
