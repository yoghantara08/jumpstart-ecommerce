import React from "react";
import HeroAbout from "@/components/website/about/hero";
import MainLayout from "@/components/website/layout/main-layout";

const AboutPage = () => {
  return (
    <MainLayout title="About Us">
      <HeroAbout />
    </MainLayout>
  );
};

export default AboutPage;
