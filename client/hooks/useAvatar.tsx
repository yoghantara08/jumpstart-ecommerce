import AuthContext from "@/contexts/auth-context";
import { IMAGE_URL } from "@/lib/config";
import { useContext, useEffect, useState } from "react";

const useAvatar = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    if (isLoggedIn) {
      if (user.provider === "LOCAL") {
        setImageSrc(`${IMAGE_URL}${user.profile.image}`);
      }

      if (user.provider === "GOOGLE") {
        setImageSrc(user.profile.image);
      }
    }
  }, [isLoggedIn, user.profile.image, user.provider]);

  return { imageSrc };
};

export default useAvatar;
