import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SearchInput: React.FC<Props> = ({ setValue }) => {
  return (
    <div className="flex items-center max-w-xs bg-gray-50 border rounded px-4 py-2">
      <AiOutlineSearch />
      <input
        className="px-4 w-full h-full outline-none bg-gray-50"
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
