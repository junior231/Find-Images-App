import { useState } from "react";
import { useContext } from "react";
import { ImageContext } from "../pages/index";

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const { fetchData, setSearchQuery } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchVal}&client_id=${process.env.ACCESS_KEY}`
    );
    setSearchVal("");
    setSearchQuery(searchVal);
    window.localStorage.setItem("query", searchVal);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchVal}&client_id=${process.env.ACCESS_KEY}`
      );
      setSearchVal("");
      setSearchQuery(searchVal);
      window.localStorage.setItem("query", searchVal);
    }
  };

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search"
        value={searchVal}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleSearch}
        disabled={!searchVal}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-1 focus:ring-blue-300 disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
