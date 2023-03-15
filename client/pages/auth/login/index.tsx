import LoginForm from "@/components/website/auth/login-form";
import MainLayout from "@/components/website/layout/main-layout";
import React from "react";

const LoginPage = () => {
  return (
    <MainLayout title="Login">
      <LoginForm />
    </MainLayout>
  );
};

export default LoginPage;
