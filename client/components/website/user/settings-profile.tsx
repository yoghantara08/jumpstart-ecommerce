import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import Input from "../form/input";
import AuthContext from "@/contexts/auth-context";
import { numberPattern } from "@/utils/validation-pattern";
import { editProfileAPI } from "@/lib/user-api";
import { useRouter } from "next/router";

export interface IFormInformation {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
}

const UserSettingsProfile = () => {
  const { user, updateUser, token } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInformation>({
    criteriaMode: "all",
    defaultValues: {
      firstName: user.profile.firstName,
      lastName: user.profile.lastName,
      country: user.profile.country,
      city: user.profile.city,
      address: user.profile.address,
      phoneNumber: user.profile.phoneNumber,
      postalCode: user.profile.postalCode,
    },
  });

  const submitHandler = (data: IFormInformation) => {
    editProfileAPI(token, data)
      .then((res) => {
        updateUser(res.data.user);
        if (res.data.user.role === "USER") {
          router.push("/user");
        }
        if (res.data.user.role === "ADMIN") {
          router.push("/admin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="my-3">
      <h2 className="text-xl md:text-2xl font-medium">Profile Information</h2>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid xl:grid-cols-2 xl:gap-5"
      >
        <div className="first-col">
          <div className="mt-3">
            <Input
              label="First Name"
              name="firstName"
              errors={errors}
              register={register}
              validation={{
                required: "First name is required!",
              }}
              className="p-2 sm:p-3"
            />
          </div>
          <div className="mt-3">
            <Input
              label="Country"
              name="country"
              errors={errors}
              register={register}
              validation={{
                required: "Country is required!",
              }}
              className="p-2 sm:p-3"
            />
          </div>
          <div className="mt-3">
            <Input
              label="Address"
              name="address"
              errors={errors}
              register={register}
              validation={{
                required: "Address is required!",
              }}
              className="p-2 sm:p-3"
            />
          </div>
          <div className="mt-3">
            <Input
              label="Postal code"
              name="postalCode"
              errors={errors}
              register={register}
              className="p-2 sm:p-3"
            />
          </div>
        </div>
        <div className="second-col">
          <div className="mt-3">
            <Input
              label="Last Name"
              name="lastName"
              errors={errors}
              register={register}
              className="p-2 sm:p-3"
            />
          </div>
          <div className="mt-3">
            <Input
              label="Phone number"
              name="phoneNumber"
              errors={errors}
              register={register}
              validation={{
                pattern: numberPattern,
              }}
              className="p-2 sm:p-3"
            />
          </div>
          <div className="mt-3">
            <Input
              label="City"
              name="city"
              errors={errors}
              register={register}
              validation={{
                required: "City is required!",
              }}
              className="p-2 sm:p-3"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 xl:mt-0">
          <Link
            href="/user"
            className="button-primary-outlined text-center block py-2 sm:py-3"
          >
            Cancel
          </Link>
          <button type="submit" className="button-primary py-2 sm:py-3">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSettingsProfile;
