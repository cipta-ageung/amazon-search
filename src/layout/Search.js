import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search form">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input className="btn-info" onClick={callSearchFunction} type="submit" value="search" />
    </form>
  );
};

export default Search;
