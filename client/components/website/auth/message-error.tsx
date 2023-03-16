import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  message: any;
  setClose: React.Dispatch<React.SetStateAction<any>>;
}

const ErrorMessage: React.FC<Props> = ({ message, setClose }) => {
  return (
    <div className="w-full flex gap-3 bg-red-100 border border-red-300 rounded p-3 text-red-400">
      <span className="w-full">{message}</span>
      <AiOutlineCloseCircle
        className="text-2xl cursor-pointer"
        onClick={() => setClose(false)}
      />
    </div>
  );
};

export default ErrorMessage;
