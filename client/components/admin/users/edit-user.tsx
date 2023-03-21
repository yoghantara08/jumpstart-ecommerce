import Input from "@/components/website/form/input";
import { useAuth } from "@/contexts/auth-context";
import { editUserAPI } from "@/lib/admin-api";
import { IUserEditForm } from "@/types/admin-type";
import { IProfile } from "@/types/user-type";
import { numberPattern } from "@/utils/validation-pattern";
import { Dialog } from "@headlessui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiX } from "react-icons/bi";

interface Props {
  userId: string;
  user: IProfile;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditUser: React.FC<Props> = ({ user, isOpen, setIsOpen, userId }) => {
  const { token } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IUserEditForm>({
    criteriaMode: "all",
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      city: user.city,
      address: user.address,
      phoneNumber: user.phoneNumber,
      postalCode: user.postalCode,
    },
  });

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const submitHandler = async (data: IUserEditForm) => {
    if (token) {
      try {
        await editUserAPI(token, data, userId);
        window.location.reload();
      } catch (error: any) {
        console.log(error);
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
              Edit User
            </span>
            <BiX className="text-2xl cursor-pointer" onClick={closeHandler} />
          </Dialog.Title>

          <form className="px-5 py-3" onSubmit={handleSubmit(submitHandler)}>
            <div className="mt-3">
              <Input
                label="First Name"
                name="firstName"
                type="text"
                errors={errors}
                register={register}
                validation={{
                  required: "First name is required!",
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
                label="Last Name"
                name="lastName"
                type="text"
                errors={errors}
                register={register}
                className="py-3 px-5"
              />
            </div>
            <div className="mt-3">
              <Input
                label="Country"
                name="country"
                type="text"
                errors={errors}
                register={register}
                className="py-3 px-5"
              />
            </div>
            <div className="mt-3">
              <Input
                label="City"
                name="city"
                type="text"
                errors={errors}
                register={register}
                className="py-3 px-5"
              />
            </div>
            <div className="mt-3">
              <Input
                label="Address"
                name="address"
                type="text"
                errors={errors}
                register={register}
                className="py-3 px-5"
              />
            </div>
            <div className="mt-3">
              <Input
                label="Phone Number"
                name="phoneNumber"
                type="text"
                errors={errors}
                register={register}
                validation={{
                  pattern: numberPattern,
                }}
                className="py-3 px-5"
              />
            </div>
            <div className="mt-3">
              <Input
                label="Postal Code"
                name="postalCode"
                type="text"
                errors={errors}
                register={register}
                className="py-3 px-5"
                validation={{
                  pattern: numberPattern,
                }}
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
                Edit User
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditUser;
