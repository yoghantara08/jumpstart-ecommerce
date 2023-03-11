import React from "react";

interface Props {
  name: string;
  country: string;
  city: string;
  address: string;
  postalCode: string | number;
  birthdate: string;
}

const ProfileInformation: React.FC<Props> = ({
  name,
  country,
  city,
  address,
  postalCode,
  birthdate,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Basic Information</h3>
      <div className="grid grid-cols-2 mb-2 gap-3">
        <p>Name</p>
        <p>{name}</p>
      </div>
      <div className="grid grid-cols-2 mb-2 gap-3">
        <p>Country</p>
        <p>{country || "-"}</p>
      </div>
      <div className="grid grid-cols-2 mb-2 gap-3">
        <p>City</p>
        <p>{city || "-"}</p>
      </div>
      <div className="grid grid-cols-2 mb-2 gap-3">
        <p>Address</p>
        <p>{address || "-"}</p>
      </div>
      <div className="grid grid-cols-2 mb-2 gap-3">
        <p>Postal Code</p>
        <p>{postalCode || "-"}</p>
      </div>
      <div className="grid grid-cols-2 mb-2 gap-3">
        <p>Birthdate</p>
        <p>{birthdate || "-"}</p>
      </div>
    </div>
  );
};

export default ProfileInformation;
