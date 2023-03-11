import React from "react";

const AboutCounter = () => {
  return (
    <section className="flex justify-center py-6 md:py-16 px-4">
      <div className="grid grid-cols-3 w-full max-w-[765px]">
        <div className="text-center">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">15K</h2>
          <p className="text-xs font-medium sm:text-base text-gray-500 font-montserrat">
            Total Customers
          </p>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">150K</h2>
          <p className="text-xs font-medium sm:text-base text-gray-500 font-montserrat">
            Monthly Visitors
          </p>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">750</h2>
          <p className="text-xs font-medium sm:text-base text-gray-500 font-montserrat">
            Stores Worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCounter;
