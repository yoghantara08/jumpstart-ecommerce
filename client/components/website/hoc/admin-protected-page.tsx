import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MainLayout from "../layout/main-layout";
import LoadingSpinner from "../spinner/loading-spinner";

interface Props {
  children: React.ReactNode;
}

const AdminProtectedPage: React.FC<Props> = ({ children }) => {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  console.log(user.role);

  useEffect(() => {
    // if user is logged in, redirect to user page
    if (user.role && isLoggedIn === "AUTHENTICATED") {
      if (user.role !== "ADMIN") {
        router.push("/");
      }

      if (user.role === "ADMIN") {
        setIsLoading(false);
      }
    }

    if (isLoggedIn === "UNAUTHENTICATED") {
      router.push("/auth/login");
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

export default AdminProtectedPage;
