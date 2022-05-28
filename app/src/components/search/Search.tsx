import React from "react";
import { searchProps } from "./search.types";
import { SearchIcon } from 'assets'

const Search: React.FC<searchProps> = () => {
  return (
    <span className="bg-gray-200 rounded-full py-2 px-4 xs:w-64 ml-2 sm:ml-4 sm:w-6/12 flex items-center">
      <img src={SearchIcon} alt="Search" className="w-4 mr-4" />
      <input type="text" placeholder="Search here" className="bg-gray-200 focus:outline-0 focus:border-0 w-full" />
    </span>
  );
}

export default Search;
