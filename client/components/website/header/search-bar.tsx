import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full min-w-fit max-w-80 border rounded px-4 py-2">
      <AiOutlineSearch className="text-xl" />
      <input
        type="text"
        name="search"
        placeholder="Search for products"
        className="px-4 w-full h-full outline-none"
      />
    </div>
  );
};

export default SearchBar;
