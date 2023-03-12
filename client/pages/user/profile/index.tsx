import MainLayout from "@/components/website/layout/main-layout";
import UserContainer from "@/components/website/layout/container";
import ProfileContact from "@/components/website/user/profile-contact";
import ProfileInformation from "@/components/website/user/profile-information";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserProfile = () => {
  return (
    <MainLayout title="Profile">
      <UserContainer>
        <div className="w-full flex items-center gap-4">
          <div className="w-16 lg:w-20 h-16 lg:h-20 rounded-full overflow-hidden">
            <Image
              src="/user-default.png"
              alt="user"
              width={126}
              height={126}
              className="w-full h-full"
            />
          </div>
          <p className="text-xl lg:text-2xl mb-3 font-medium">Alex Sulivan</p>
        </div>
        <div className="grid sm:grid-cols-2 mt-5 gap-2">
          <ProfileInformation
            name="Alex Sulivan"
            country="Indonesia"
            city="Bali"
            address="Bali, Indonesia"
            birthdate=""
            postalCode=""
          />
          <ProfileContact
            email="alexsulivan@gmail.com"
            phoneNumber="0812315415"
          />
        </div>
        <Link
          href="/user/settings"
          className="block w-fit px-6 sm:px-8 py-2 sm:py-3 font-medium rounded bg-amber-300 mt-3 mb-3"
        >
          Edit Profile
        </Link>
      </UserContainer>
    </MainLayout>
  );
};

export default UserProfile;
