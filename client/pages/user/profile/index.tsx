import RegisterInformation from "@/components/website/auth/register-information";
import AuthenticatedPage from "@/components/website/hoc/authenticated";
import UserContainer from "@/components/website/layout/container";
import MainLayout from "@/components/website/layout/main-layout";
import ProfileContact from "@/components/website/user/profile-contact";
import ProfileInformation from "@/components/website/user/profile-information";
import LoadingSpinner from "@/components/website/spinner/loading-spinner";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import Link from "next/link";
import { IMAGE_URL } from "@/lib/config";

const UserProfile = () => {
  const { isLoading, user, profile } = useUser();

  let src;
  let birthdate;
  if (profile) {
    src = `${IMAGE_URL}${profile.image}`;
    const date = new Date(profile.birthday);
    birthdate = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
  }

  if (user && user.isFirstLogin) {
    return (
      <AuthenticatedPage>
        <MainLayout title="User Information">
          <RegisterInformation />
        </MainLayout>
      </AuthenticatedPage>
    );
  }

  if (isLoading) {
    return (
      <AuthenticatedPage>
        <MainLayout>
          <LoadingSpinner />
        </MainLayout>
      </AuthenticatedPage>
    );
  }

  return (
    <AuthenticatedPage>
      <MainLayout title="Profile">
        <UserContainer>
          <div className="w-full flex items-center gap-4">
            <div className="w-16 lg:w-20 h-16 lg:h-20 rounded-full overflow-hidden">
              <Image
                src={src || "/user-default.png"}
                alt={profile.firstName}
                width={126}
                height={126}
                className="w-full h-full"
              />
            </div>
            <p className="text-xl lg:text-2xl mb-3 font-medium">
              {profile.firstName}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 mt-5 gap-2">
            <ProfileInformation
              name={profile.firstName}
              country={profile.country}
              city={profile.city}
              address={profile.address}
              birthdate={birthdate}
              postalCode={profile.phoneNumber}
            />
            <ProfileContact
              email={user.email}
              phoneNumber={profile.phoneNumber}
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
    </AuthenticatedPage>
  );
};

export default UserProfile;
