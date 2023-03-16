import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { emailPattern } from "@/utils/validation-pattern";
import Input from "../form/input";
import GoogleButton from "./google-button";
import Link from "next/link";
import { loginAPI } from "@/lib/auth-api";
import ErrorMessage from "./message-error";
import AuthContext from "@/contexts/auth-context";
import { useRouter } from "next/router";

export interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ILoginForm>({ criteriaMode: "all" });

  const submitHandler = async (data: ILoginForm) => {
    setIsLoading(true);

    try {
      const response = await loginAPI(data);
      const token = response.data.token;
      login(token);
      router.replace("/user/profile");
      setIsError(false);
      reset();
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.response.data.message);
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
          Login to your account
        </h2>
        {isError && (
          <ErrorMessage setClose={setIsError} message={errorMessage} />
        )}
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
            validation={{ required: "Password is required!" }}
            className="p-2 sm:p-3"
          />
        </div>

        <button
          type="submit"
          className="button-primary w-full mt-5 mb-5 py-2 sm:py-3"
        >
          {isLoading ? "Loading..." : "Login Now"}
        </button>

        <GoogleButton disabled={isLoading} />

        <p className="text-center mt-5 font-medium">
          <span className="text-gray-500">Don&apos;t have an account? </span>
          <Link href="/auth/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
