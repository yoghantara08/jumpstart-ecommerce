import React, { useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/contexts/auth-context";

interface Props {
  children: React.ReactNode;
}

const AuthenticatedPage: React.FC<Props> = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  if (!isLoggedIn) {
    // if user is not logged in, redirect to login page
    router.push("/auth/login");
    return null;
  } else {
    // if user is logged in, show the page content
    return <>{children}</>;
  }
};

export default AuthenticatedPage;
