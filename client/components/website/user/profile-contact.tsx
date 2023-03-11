import React from "react";

interface Props {
  email: string;
  phoneNumber: string | number;
}

const ProfileContact: React.FC<Props> = ({ email, phoneNumber }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Contact</h3>
      <div className="grid grid-cols-2 mb-2 gap-3">
        <p>Email</p>
        <p>{email}</p>
      </div>
      <div className="grid grid-cols-2 mb-2 gap-3">
        <p>Phone number</p>
        <p>{phoneNumber || "-"}</p>
      </div>
    </div>
  );
};

export default ProfileContact;
