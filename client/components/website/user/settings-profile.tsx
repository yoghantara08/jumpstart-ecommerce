import { dateData, monthData } from "@/utils/date-data";
import { emailPattern, numberPattern } from "@/utils/validation-pattern";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../form/input";
import SelectDate from "../form/select-date";

interface IFormInformation {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  year: string;
}

const UserSettingsProfile = () => {
  const [date, setDate] = useState<number>(1);
  const [month, setMonth] = useState<string>("January");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInformation>({ criteriaMode: "all" });

  const submitHandler = (data: IFormInformation) => {
    let birthDate = "";

    if (!data.year) {
      birthDate = `${date}-${month}-${"0000"}`;
    } else {
      birthDate = `${date}-${month}-${data.year}`;
    }

    console.log(birthDate);
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
              placeholder="Enter your first name"
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
              label="Email"
              name="email"
              type="email"
              placeholder="sulivan@gmail.com"
              errors={errors}
              register={register}
              validation={{
                required: "Email is required!",
                pattern: emailPattern,
              }}
              className="p-2 sm:p-3"
            />
          </div>
          <div className="mt-3">
            <Input
              label="Country"
              name="country"
              placeholder="Enter your country"
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
              placeholder="Enter your address"
              errors={errors}
              register={register}
              validation={{
                required: "Address is required!",
              }}
              className="p-2 sm:p-3"
            />
          </div>
          <div className="mt-3">
            <label className="mb-1">Date of birth</label>
            <div className="flex w-full gap-3">
              <SelectDate datas={dateData} value={date} setValue={setDate} />
              <SelectDate datas={monthData} value={month} setValue={setMonth} />
              <Input
                name="year"
                placeholder="Year"
                errors={errors}
                register={register}
                validation={{ pattern: numberPattern }}
                className="h-full text-center"
              />
            </div>
          </div>
        </div>
        <div className="second-col">
          <div className="mt-3">
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              errors={errors}
              register={register}
              validation={{
                required: "Last name is required!",
              }}
              className="p-2 sm:p-3"
            />
          </div>
          <div className="mt-3">
            <Input
              label="Phone number"
              name="phoneNumber"
              placeholder="08123456789"
              errors={errors}
              register={register}
              validation={{
                required: "Phone number is required!",
                pattern: numberPattern,
              }}
              className="p-2 sm:p-3"
            />
          </div>
          <div className="mt-3">
            <Input
              label="City"
              name="city"
              placeholder="Enter your city"
              errors={errors}
              register={register}
              validation={{
                required: "City is required!",
              }}
              className="p-2 sm:p-3"
            />
          </div>
          <div className="mt-3">
            <Input
              label="Postal code"
              name="postalCode"
              placeholder="Enter your postal code"
              errors={errors}
              register={register}
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
