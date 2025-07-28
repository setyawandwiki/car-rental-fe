import React from "react";
import "../../../src/searchResultList.css";
import SearchResult from "./SearchResult";

const SearchResultList = ({
  setResults,
  valueSearch,
  results,
  setFormValue,
}) => {
  return (
    <div className="results-list text-dark fs-normal fw-normal search-result-list">
      {results &&
        results.map((val, id) => {
          return (
            <SearchResult
              setFormValue={setFormValue}
              valueSearch={valueSearch}
              result={val}
              key={id}
              setResults={setResults}
            />
          );
        })}
    </div>
  );
};

export default SearchResultList;
