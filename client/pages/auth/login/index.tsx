import LoginForm from "@/components/website/auth/login-form";
import MainLayout from "@/components/website/layout/main-layout";
import LoadingSpinner from "@/components/website/spinner/loading-spinner";
import AuthContext from "@/contexts/auth-context";
import { useRouter } from "next/router";
import React, { useState, useContext, useEffect } from "react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  // Check if user already login so they can't visit this page again
  if (isLoggedIn) {
    router.push("/user/profile");
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <MainLayout title="Login">
      {isLoading ? <LoadingSpinner /> : <LoginForm />}
    </MainLayout>
  );
};

export default LoginPage;
