import React from "react";

function Search({handleSearch}) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="search-icon"></i>
    </div>
  );
}

export default Search;