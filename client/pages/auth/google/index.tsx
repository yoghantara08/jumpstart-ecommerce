import MainLayout from "@/components/website/layout/main-layout";
import LoadingSpinner from "@/components/website/spinner/loading-spinner";
import AuthContext from "@/contexts/auth-context";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const GoogleLoginCallback = () => {
  const [runOnce, setRunOnce] = useState(true);
  const { login } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    const { token, error } = router.query;
    if (token && runOnce) {
      // If a token is present, set it in the auth context to login the user
      login(token as string);
      router.replace("/user/profile");
      setRunOnce(false);
    }

    if (error) {
      // If an error is present, redirect to the login page with the error message
      router.replace("/auth/login?error=" + error);
    }
  }, [login, router, runOnce]);

  return (
    <MainLayout>
      <LoadingSpinner />
    </MainLayout>
  );
};

export default GoogleLoginCallback;
