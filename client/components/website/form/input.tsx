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
        className={`relative inline-flex w-full rounded leading-none transition-colors 
        ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border
      border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 
      focus:ring-blue-400 focus:ring-1 focus:ring-opacity-30 ${className} ${
          errors[name]
            ? "transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600"
            : ""
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
