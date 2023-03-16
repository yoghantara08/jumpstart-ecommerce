import MainLayout from "@/components/website/layout/main-layout";
import UserContainer from "@/components/website/layout/container";
import UserSettingsImage from "@/components/website/user/settings-image";
import UserSettingsProfile from "@/components/website/user/settings-profile";
import React from "react";
import AuthenticatedPage from "@/components/website/hoc/authenticated";

const UserSettingsPage = () => {
  return (
    <AuthenticatedPage>
      <MainLayout title="Settings">
        <UserContainer>
          <h2 className="text-xl md:text-2xl font-medium">Settings</h2>
          <UserSettingsImage />
          <UserSettingsProfile />
        </UserContainer>
      </MainLayout>
    </AuthenticatedPage>
  );
};

export default UserSettingsPage;
