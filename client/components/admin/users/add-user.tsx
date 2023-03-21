import ErrorMessage from "@/components/website/auth/message-error";
import Input from "@/components/website/form/input";
import Select from "@/components/website/form/select";
import { useAuth } from "@/contexts/auth-context";
import { addUserAPI } from "@/lib/admin-api";
import { IUserAddForm } from "@/types/admin-type";
import { emailPattern } from "@/utils/validation-pattern";
import { Dialog } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiX } from "react-icons/bi";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const roleOptions = ["USER", "ADMIN"];

const AddUser: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const { token } = useAuth();
  const [isError, setIsError] = useState<any>();
  const [errorMessage, setErrorMessage] = useState<any>();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<IUserAddForm>({ criteriaMode: "all" });

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const submitHandler = async (data: IUserAddForm) => {
    if (token) {
      try {
        await addUserAPI(token, data);
        setIsError("SUCCESS");
        reset();
        window.location.reload();
      } catch (error: any) {
        setIsError("ERROR");
        setErrorMessage(error.response.data.errors[0].msg);
      }
    }
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      as="div"
      className="relative z-50"
    >
      <Dialog.Overlay className="fixed inset-5 bg-black opacity-30 top-0 left-0 w-full h-full" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-xl rounded-lg bg-white shadow">
          <Dialog.Title className="border-b px-5 py-3 flex justify-between items-center gap-3 text-slate-700">
            <span className="text-xl font-montserrat font-medium">
              Add user
            </span>
            <BiX className="text-2xl cursor-pointer" onClick={closeHandler} />
          </Dialog.Title>

          <form className="px-5 py-3" onSubmit={handleSubmit(submitHandler)}>
            {isError === "ERROR" && (
              <ErrorMessage message={errorMessage} setClose={setIsError} />
            )}
            <div className="mt-3">
              <Input
                label="Username"
                name="username"
                type="text"
                errors={errors}
                register={register}
                validation={{
                  required: "Username is required!",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters long!",
                  },
                  maxLength: {
                    value: 16,
                    message: "Maximum 16 characters long!",
                  },
                }}
                className="py-3 px-5"
              />
            </div>
            <div className="mt-3">
              <Input
                label="Email"
                name="email"
                type="email"
                errors={errors}
                register={register}
                validation={{
                  required: "Email is required!",
                  pattern: emailPattern,
                }}
                className="py-3 px-5"
              />
            </div>
            <div className="mt-3">
              <Input
                label="Password"
                name="password"
                type="password"
                errors={errors}
                register={register}
                validation={{
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters long!",
                  },
                }}
                className="py-3 px-5"
              />
            </div>
            <div className="mt-3">
              <Controller
                name="role"
                control={control}
                rules={{ required: "Role is required" }}
                render={({ formState: { errors }, field }) => (
                  <Select
                    name="role"
                    errors={errors}
                    field={field}
                    options={roleOptions}
                    label="Role"
                    className="py-3 px-5"
                  />
                )}
              />
            </div>
            <div className="flex justify-between mt-5 mb-1">
              <button
                className="rounded bg-slate-500 text-white px-8 py-2 font-medium"
                onClick={closeHandler}
              >
                Close
              </button>
              <button
                className="rounded bg-lightBlue text-white px-5 py-2 font-medium"
                type="submit"
              >
                Add User
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AddUser;
