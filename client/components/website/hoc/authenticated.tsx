import AuthContext from "@/contexts/auth-context";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const AuthenticatedPage: React.FC<Props> = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // if user is not logged in, redirect to login page
    if (!isLoggedIn) {
      router.push("/auth/login");
    }
  }, [isLoggedIn, router]);

  return <>{children}</>;
};

export default AuthenticatedPage;
