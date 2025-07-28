import React from "react";
import "../../../src/searchResultList.css";

const SearchResult = ({ valueSearch, result, setFormValue }) => {
  const handleClick = (value) => {
    setFormValue((prev) => {
      console.log(prev);
      return { ...prev, search: value };
    });
    console.log("ini value " + value);
    console.log("ini value search " + valueSearch);
  };

  return (
    <div className="search-result" onClick={() => handleClick(result.name)}>
      {result.name}
    </div>
  );
};

export default SearchResult;
