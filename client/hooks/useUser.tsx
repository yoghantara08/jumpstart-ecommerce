import AuthContext from "@/contexts/auth-context";
import { profileAPI } from "@/lib/auth-api";
import { IProfile, IUser } from "@/types/user-type";
import { useContext, useEffect, useState } from "react";

const useUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUser>({
    _id: "",
    email: "",
    isFirstLogin: false,
    role: "",
    provider: "",
    createdAt: "",
    updatedAt: "",
  });
  const [profile, setProfile] = useState<IProfile>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    birthday: "",
    image: "",
  });
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      profileAPI(token)
        .then((res) => {
          setUser(res.data);
          setProfile(res.data.profile);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  return { isLoading, user, profile };
};

export default useUser;
