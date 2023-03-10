import React from "react";
import RegisterAccount from "@/components/website/auth/register-account";
import MainLayout from "@/components/website/layout/main-layout";
import RegisterInformation from "@/components/website/auth/register-information";

const RegisterPage = () => {
  return (
    <MainLayout title="Register">
      <RegisterInformation />
    </MainLayout>
  );
};

export default RegisterPage;
