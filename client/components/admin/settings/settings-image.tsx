import Image from "next/image";
import React from "react";

const AdminSettingsImage = () => {
  return (
    <div className="my-3 flex flex-wrap lg:flex-nowrap gap-3 lg:gap-5 items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <Image
          src="/user-default.png"
          alt="user"
          width={256}
          height={256}
          className="w-full h-full"
        />
      </div>
      <div className="space-y-1">
        <p className="text-xl lg:text-2xl font-medium">Alex Sulivan</p>
        <button className="button-primary py-2">Change Avatar</button>
        <p className="text-sm text-gray-500">
          For best results, use an image at least 256px by 256px in either .jpg
          or .png format
        </p>
      </div>
    </div>
  );
};

export default AdminSettingsImage;
