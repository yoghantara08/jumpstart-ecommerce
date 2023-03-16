import { GOOGLE_LOGIN_URL } from "@/lib/config";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  disabled?: boolean;
}

const GoogleButton: React.FC<Props> = ({ disabled }) => {
  const router = useRouter();

  const clickHandler = (e: any) => {
    if (disabled) {
      e.preventDefault();
    }
    router.push(GOOGLE_LOGIN_URL);
  };

  return (
    <button
      className="bg-blue-200 text-blue-500 w-full px-5 py-2 sm:py-3 rounded flex justify-center space-x-2 
      cursor-pointer disabled:cursor-not-allowed"
      type="button"
      disabled={disabled}
      onClick={clickHandler}
    >
      <Image src="/google.png" alt="google" width={24} height={24} />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleButton;
