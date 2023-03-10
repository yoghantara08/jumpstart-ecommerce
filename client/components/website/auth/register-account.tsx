import React from "react";
import { useForm } from "react-hook-form";
import { emailPattern } from "@/utils/email-pattern";
import Input from "../form/input";
import GoogleButton from "./google-button";
import Link from "next/link";

interface IRegisterAccount {
  username: string;
  email: string;
  password: string;
}

const RegisterAccount = () => {
  const {
    register,
    formState: { errors, isLoading },
    handleSubmit,
  } = useForm<IRegisterAccount>({ criteriaMode: "all" });

  if (isLoading) {
    console.log("Loading...");
  }

  const submitHandler = (data: IRegisterAccount) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center py-10 px-6">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full max-w-lg rounded-xl bg-white p-6 sm:p-10 shadow"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Create an account
        </h2>
        <div className="mt-3">
          <Input
            label="Username"
            name="username"
            placeholder="Enter your username"
            errors={errors}
            register={register}
            validation={{
              required: "Username is required!",
              minLength: { value: 3, message: "Minimum 3 characters long!" },
              maxLength: { value: 16, message: "Maximum 16 characters long!" },
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
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            errors={errors}
            register={register}
            validation={{
              required: "Password is required!",
              minLength: { value: 6, message: "Minimum 6 characters long!" },
            }}
            className="p-2 sm:p-3"
          />
        </div>

        <button
          type="submit"
          className="button-primary w-full mt-5 mb-5 py-2 sm:py-3"
        >
          Create account
        </button>

        <GoogleButton />

        <p className="text-center mt-5 font-medium">
          <span className="text-gray-500">Already have an account? </span>
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterAccount;
