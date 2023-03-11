import React from "react";
import {
  FaStripe,
  FaGoogle,
  FaAws,
  FaFacebook,
  FaMicrosoft,
  FaSlack,
  FaAmazon,
  FaApple,
} from "react-icons/fa";

const AboutPartners = () => {
  return (
    <section className="flex justify-center py-6 md:py-16">
      <div className="container flex items-center flex-col ">
        <h2 className="font-semibold text-lg md:text-xl mb-5 md:mb-10 font-montserrat">
          Trusted By Over 50 Big Companies
        </h2>
        <div className="flex w-full justify-center gap-10 md:gap-16 flex-wrap text-4xl md:text-7xl text-gray-500">
          <FaFacebook />
          <FaStripe />
          <FaGoogle />
          <FaAws />
          <FaMicrosoft />
          <FaSlack />
          <FaAmazon />
          <FaApple />
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;
