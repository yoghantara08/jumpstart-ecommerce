import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MainLayout from "../layout/main-layout";
import LoadingSpinner from "../spinner/loading-spinner";

interface Props {
  children: React.ReactNode;
}

const AuthenticatedPage: React.FC<Props> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // if user is not logged in, redirect to login page
    if (isLoggedIn === "UNAUTHENTICATED") {
      router.push("/auth/login");
    }

    if (isLoggedIn === "AUTHENTICATED") {
      setIsLoading(false);
    }
  }, [isLoggedIn, router]);

  if (isLoading) {
    return (
      <MainLayout>
        <LoadingSpinner />
      </MainLayout>
    );
  }

  return <>{children}</>;
};

export default AuthenticatedPage;
