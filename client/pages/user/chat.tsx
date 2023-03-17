import MainLayout from "@/components/website/layout/main-layout";
import UserContainer from "@/components/website/layout/container";
import React from "react";
import AuthenticatedPage from "@/components/website/hoc/authenticated";

const UserChatPage = () => {
  return (
    <AuthenticatedPage>
      <MainLayout title="Chat">
        <UserContainer>UserChatPage</UserContainer>
      </MainLayout>
    </AuthenticatedPage>
  );
};

export default UserChatPage;
