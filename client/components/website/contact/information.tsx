import React from "react";
import { AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const ContactInformation = () => {
  return (
    <div className="p-5 bg-cream1 order-1 md:order-2 border-b md:border-b-0 md:border-l border-gray-300 space-y-6">
      <div className="flex w-full items-center space-x-3">
        <div className="rounded-full bg-red-400 w-14 h-14 flex justify-center items-center text-white text-2xl">
          <AiOutlineMail />
        </div>
        <div className="text-sm sm:text-base">
          <p>
            <span className="font-medium">Phone: </span>
            <span>+6281 234 5854</span>
          </p>
          <p>
            <span className="font-medium">Email: </span>
            <span>jumpstart@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="flex w-full items-center space-x-3">
        <div className="rounded-full bg-red-400 w-14 h-14 flex justify-center items-center text-white text-3xl">
          <IoLocationOutline />
        </div>
        <div className="text-sm sm:text-base">
          <p>
            <span className="font-medium">Address: </span>
            <span>Bali, Indonesia</span>
          </p>
        </div>
      </div>
      <div className="flex w-full items-center space-x-3">
        <div className="rounded-full bg-red-400 w-14 h-14 flex justify-center items-center text-white text-2xl">
          <AiOutlineInfoCircle />
        </div>
        <div className="text-sm sm:text-base">
          <p>Customer Service </p>
          <p>For Over 24 Hour</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
