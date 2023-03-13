import React from "react";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SearchInput: React.FC<Props> = ({ setValue }) => {
  return (
    <input
      className="form-input py-3 px-5 max-w-xs"
      placeholder="Search..."
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
