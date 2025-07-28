import React from "react";
import "../../../src/searchResultList.css";

const SearchResult = ({ setResults, result, setFormValue }) => {
  const handleClick = (value) => {
    setFormValue((prev) => {
      return { ...prev, search: value };
    });
    setResults([]);
  };

  return (
    <div
      className="search-result border"
      onClick={() => handleClick(result.name)}
    >
      {result.name}
      <h1 className="fs-small fw-bold pt-2">Indonesia</h1>
    </div>
  );
};

export default SearchResult;
