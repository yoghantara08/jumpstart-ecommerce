import Link from "next/link";
import React from "react";

const HeroAbout = () => {
  return (
    <section className="bg-cream1 flex justify-center min-h-[300px]">
      <div className="container grid sm:grid-cols-2 gap-5 pt-5 px-4 overflow-hidden">
        <div className="flex flex-col justify-center md:ml-auto md:mr-20 md:mb-24 pb-5 space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase">
            About Us
          </h1>
          <p className="text-lg w-fit max-w-xs">
            Worldwide retail-chain owns 750 stores nationwide
          </p>
          <Link href="/products" className="button-primary w-fit">
            Shopping Now
          </Link>
        </div>
        <picture className="hidden sm:flex">
          <img
            src="/banner/about-us.png"
            alt="About Us"
            className="max-h-[50vh] pt-5"
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroAbout;
