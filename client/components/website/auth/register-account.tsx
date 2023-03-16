import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { emailPattern } from "@/utils/validation-pattern";
import Input from "../form/input";
import GoogleButton from "./google-button";
import Link from "next/link";
import { IRegisterAccount } from "@/types/user-type";
import { registerAPI } from "@/lib/auth-api";
import ErrorMessage from "./message-error";
import SuccessMessage from "./message-succes";

const RegisterAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<"ERROR" | "SUCCESS" | "">("");
  const [errorMessage, setErrorMessage] = useState<any>();
  const [successMessage, setSuccessMessage] = useState<any>();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IRegisterAccount>({ criteriaMode: "all" });

  const submitHandler = async (data: IRegisterAccount) => {
    setIsLoading(true);
    try {
      const response = await registerAPI(data);
      setSuccessMessage(response.data.message);
      setIsError("SUCCESS");
      reset();
    } catch (error: any) {
      setIsError("ERROR");
      setErrorMessage(error.response.data.errors[0].msg);
    }
    setIsLoading(false);
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
        {isError === "ERROR" && (
          <ErrorMessage message={errorMessage} setClose={setIsError} />
        )}
        {isError === "SUCCESS" && (
          <SuccessMessage message={successMessage} setClose={setIsError} />
        )}
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
          disabled={isLoading}
          className="button-primary w-full mt-5 mb-5 py-2 sm:py-3 disabled:cursor-not-allowed"
        >
          {isLoading ? "Submitting..." : "Create account"}
        </button>

        <GoogleButton disabled={isLoading} />

        <p className="text-center mt-5 font-medium">
          <span className="text-gray-500">Already have an account? </span>
          <Link href="/auth/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterAccount;
