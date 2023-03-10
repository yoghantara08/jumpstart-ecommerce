import React from "react";
import RegisterAccount from "@/components/website/auth/register-account";
import MainLayout from "@/components/website/layout/main-layout";

const RegisterPage = () => {
  return (
    <MainLayout title="Register">
      <RegisterAccount />
    </MainLayout>
  );
};

export default RegisterPage;
