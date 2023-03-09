import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface Props {
  name: string;
  occupation: string;
  image: string;
}

const OurTeamCard: React.FC<Props> = ({ name, occupation, image }) => {
  return (
    <div className="w-full h-fit bg-white overflow-hidden rounded-lg shadow">
      <picture className="h-64">
        <img src={image} alt={name} className="w-full h-full" />
      </picture>
      <div className="flex flex-col items-center space-y-1 py-2 ">
        <p className="font-bold text-lg">{name}</p>
        <p className="font-medium">{occupation}</p>
        <div className="flex gap-3 text-xl md:text-2xl text-blue-500 pt-2 pb-3">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
