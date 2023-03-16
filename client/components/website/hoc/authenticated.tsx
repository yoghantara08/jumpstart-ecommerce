import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/contexts/auth-context";
import LoadingSpinner from "../spinner/loading-spinner";
import MainLayout from "../layout/main-layout";

interface Props {
  children: React.ReactNode;
}

const AuthenticatedPage: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // if user is not logged in, redirect to login page
    if (!isLoggedIn) {
      router.push("/auth/login");
    } else {
      setIsLoading(false);
    }
  }, [isLoggedIn, router]);

  return (
    <>
      {isLoading ? (
        <MainLayout>
          <LoadingSpinner />
        </MainLayout>
      ) : (
        children
      )}
    </>
  );
};

export default AuthenticatedPage;
