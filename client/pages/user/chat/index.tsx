import MainLayout from "@/components/website/layout/main-layout";
import UserContainer from "@/components/website/user/container";
import React from "react";

const UserChatPage = () => {
  return (
    <MainLayout title="Chat">
      <UserContainer>UserChatPage</UserContainer>
    </MainLayout>
  );
};

export default UserChatPage;
