import Image from "next/image";
import Link from "next/link";
import React from "react";

const GoogleButton = () => {
  return (
    <Link href="/">
      <button className="bg-blue-200 text-blue-500 w-full px-5 py-2 sm:py-3 rounded flex justify-center space-x-2">
        <Image src="/google.png" alt="google" width={24} height={24} />
        <span>Continue with Google</span>
      </button>
    </Link>
  );
};

export default GoogleButton;
