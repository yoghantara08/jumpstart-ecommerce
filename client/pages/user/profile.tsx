import MainLayout from "@/components/website/layout/main-layout";
import UserContainer from "@/components/website/user/container";
import React from "react";

const UserProfile = () => {
  return (
    <MainLayout title="Profile">
      <UserContainer>UserProfile</UserContainer>
    </MainLayout>
  );
};

export default UserProfile;
