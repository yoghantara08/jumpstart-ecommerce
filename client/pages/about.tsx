import React from "react";
import MainLayout from "@/components/website/layout/main-layout";
import AboutHero from "@/components/website/about/hero";
import AboutCounter from "@/components/website/about/counter";
import AboutPartners from "@/components/website/about/partners";

const AboutPage = () => {
  return (
    <MainLayout title="About Us">
      <AboutHero />
      <AboutCounter />
      <AboutPartners />
    </MainLayout>
  );
};

export default AboutPage;
