import RegisterAccount from "@/components/website/auth/register-account";
import UnauthenticatedPage from "@/components/website/hoc/unauthenticated";
import MainLayout from "@/components/website/layout/main-layout";

const RegisterPage = () => {
  return (
    <UnauthenticatedPage>
      <MainLayout title="Register">
        <RegisterAccount />
      </MainLayout>
    </UnauthenticatedPage>
  );
};

export default RegisterPage;
