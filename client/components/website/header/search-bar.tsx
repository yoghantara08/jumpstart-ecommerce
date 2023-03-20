import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <form className="flex items-center w-full min-w-fit border rounded px-4 py-2">
      <AiOutlineSearch className="text-xl" />
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="px-4 w-full h-full outline-none"
      />
    </form>
  );
};

export default SearchBar;
