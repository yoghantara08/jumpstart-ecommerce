import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const InputErrorMessage: React.FC<Props> = ({ children, className }) => {
  return <p className={`text-sm text-red-600 ${className}`}>{children}</p>;
};

export default InputErrorMessage;
