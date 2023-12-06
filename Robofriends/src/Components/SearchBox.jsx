import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="p-2 ">
      <input
        className=" focus:outline-none focus:border-blue-300 focus:scale-101 p-3 border border-green-200 bg-blue-100"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
