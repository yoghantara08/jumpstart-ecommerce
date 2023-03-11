import { useRouter } from "next/router";
import { useEffect } from "react";

const UserPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/user/dashboard");
  }, [push]);

  return;
};

export default UserPage;
