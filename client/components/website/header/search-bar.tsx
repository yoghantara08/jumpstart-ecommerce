import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    let path = "/products";

    if (router.pathname === "/products") {
      path = router.pathname;
    }
    router.push({
      pathname: path,
      query: {
        ...router.query,
        q: search,
      },
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center w-full min-w-fit border rounded px-4 py-2"
    >
      <AiOutlineSearch className="text-xl" />
      <input
        type="text"
        placeholder="Search..."
        className="px-4 w-full h-full outline-none"
        onChange={(e: any) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
