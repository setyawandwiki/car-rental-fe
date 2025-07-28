import React from "react";
import "../../../src/searchResultList.css";
import SearchResult from "./SearchResult";

const SearchResultList = ({ valueSearch, results, setFormValue }) => {
  return (
    <div className="results-list text-dark fs-normal fw-normal">
      {results.map((val, id) => {
        return (
          <SearchResult
            setFormValue={setFormValue}
            valueSearch={valueSearch}
            result={val}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default SearchResultList;
