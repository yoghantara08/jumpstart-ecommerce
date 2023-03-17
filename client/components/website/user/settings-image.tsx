import AuthContext from "@/contexts/auth-context";
import useAvatar from "@/hooks/useAvatar";
import Image from "next/image";
import React, { useContext } from "react";

const UserSettingsImage = () => {
  const { user } = useContext(AuthContext);
  const { imageSrc } = useAvatar();

  return (
    <div className="my-3 flex flex-wrap lg:flex-nowrap gap-3 lg:gap-5 items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <Image
          src={imageSrc || "/user-default.png"}
          alt={user.profile.firstName}
          width={256}
          height={256}
          className="w-full h-full"
        />
      </div>
      <div className="space-y-1">
        <p className="text-xl lg:text-2xl font-medium">
          {user.profile.firstName}
        </p>
        <button className="button-primary py-2">Change Avatar</button>
        <p className="text-sm text-gray-500">
          For best results, use an image at least 256px by 256px in either .jpg
          or .png format
        </p>
      </div>
    </div>
  );
};

export default UserSettingsImage;
