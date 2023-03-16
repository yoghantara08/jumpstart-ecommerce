import AuthContext from "@/contexts/auth-context";
import { registerInformationAPI } from "@/lib/auth-api";
import { dateData, monthData } from "@/utils/date-data";
import { numberPattern } from "@/utils/validation-pattern";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../form/input";
import SelectDate from "../form/select-date";

export interface IRegisterInformation {
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  birthday: string;
}

const RegisterInformation = () => {
  const [date, setDate] = useState<number>(1);
  const [month, setMonth] = useState<string>("January");
  const { token } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterInformation>({ criteriaMode: "all" });

  const submitHandler = (data: IRegisterInformation) => {
    if (!data.birthday) {
      data.birthday = `${date} ${month}, 2000`;
    } else {
      data.birthday = `${date} ${month}, ${data.birthday}`;
    }

    registerInformationAPI(token, data)
      .then((res) => {
        console.log(res);

        router.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center py-10 px-6">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full max-w-xl rounded-xl bg-white p-6 sm:p-10 shadow"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Fill your information
        </h2>
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
          <Input
            label="Postal code"
            name="postalCode"
            placeholder="Enter your postal code"
            errors={errors}
            register={register}
            className="p-2 sm:p-3"
          />
        </div>
        <div className="mt-3">
          <label className="mb-1">Date of birth</label>
          <div className="flex w-full gap-3">
            <SelectDate datas={dateData} value={date} setValue={setDate} />
            <SelectDate datas={monthData} value={month} setValue={setMonth} />
            <Input
              name="birthday"
              placeholder="Year"
              errors={errors}
              register={register}
              validation={{ pattern: numberPattern }}
              className="h-full text-center"
            />
          </div>
        </div>

        <button
          type="submit"
          className="button-primary w-full mt-5 mb-5 py-2 sm:py-3"
        >
          Submit and Continue
        </button>
      </form>
    </div>
  );
};

export default RegisterInformation;
