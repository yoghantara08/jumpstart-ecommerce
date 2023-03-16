import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  message: any;
  setClose: React.Dispatch<React.SetStateAction<any>>;
}

const SuccessMessage: React.FC<Props> = ({ message, setClose }) => {
  return (
    <div className="w-full flex gap-3 justify-between items-center bg-green-100 border border-green-300 rounded p-3 text-green-400">
      <span className="w-full">{message}</span>
      <AiOutlineCloseCircle
        className="text-2xl cursor-pointer"
        onClick={() => setClose("")}
      />
    </div>
  );
};

export default SuccessMessage;
