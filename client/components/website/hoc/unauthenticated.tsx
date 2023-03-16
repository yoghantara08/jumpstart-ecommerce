import AuthContext from "@/contexts/auth-context";
import { useRouter } from "next/router";
import React, { useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const UnauthenticatedPage: React.FC<Props> = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  if (isLoggedIn) {
    // if user is logged in, redirect to user profile page
    router.push("/user/profile");
    return null;
  } else {
    // if user is not logged in, show the page content
    return <>{children}</>;
  }
};

export default UnauthenticatedPage;
