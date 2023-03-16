import LoginForm from "@/components/website/auth/login-form";
import UnauthenticatedPage from "@/components/website/hoc/unauthenticated";
import MainLayout from "@/components/website/layout/main-layout";

const LoginPage = () => {
  return (
    <UnauthenticatedPage>
      <MainLayout title="Login">
        <LoginForm />
      </MainLayout>
    </UnauthenticatedPage>
  );
};

export default LoginPage;
