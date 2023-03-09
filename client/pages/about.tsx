import React from "react";
import HeroAbout from "@/components/website/about/hero";
import MainLayout from "@/components/website/layout/main-layout";
import AboutCounter from "@/components/website/about/counter";

const AboutPage = () => {
  return (
    <MainLayout title="About Us">
      <HeroAbout />
      <AboutCounter />
    </MainLayout>
  );
};

export default AboutPage;
