import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MainLayout from "../layout/main-layout";
import LoadingSpinner from "../spinner/loading-spinner";

interface Props {
  children: React.ReactNode;
}

const UnauthenticatedPage: React.FC<Props> = ({ children }) => {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // if user is logged in, redirect to user page
    if (isLoggedIn === "AUTHENTICATED" && user.role) {
      if (user.role === "USER") {
        router.push("/user");
      }
      if (user.role === "ADMIN") {
        router.push("/admin");
      }
    }

    if (isLoggedIn === "UNAUTHENTICATED") {
      setIsLoading(false);
    }
  }, [isLoggedIn, router, user.role]);

  if (isLoading) {
    return (
      <MainLayout>
        <LoadingSpinner />
      </MainLayout>
    );
  }
  return <>{children}</>;
};

export default UnauthenticatedPage;
