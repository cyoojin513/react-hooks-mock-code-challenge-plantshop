import React, { useState } from "react";

function Search({handleFilter}) {

  const [searchedName, setSearchedName] = useState("")
  
  function handleOnChange(e) {
    setSearchedName(e.target.value)
    handleFilter(searchedName)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchedName}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Search;
