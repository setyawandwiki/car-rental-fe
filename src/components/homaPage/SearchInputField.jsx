import React, { useEffect, useState } from "react";
import SearchResultList from "./SearchResultList";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../features/citySlice";

const SearchInputField = ({
  setFormValue,
  value,
  onClick,
  cssClass = "",
  classLeft = "border-0",
  borderInput = "",
  readOnly = false,
  imgIcon = "https://d1785e74lyxkqq.cloudfront.net/_next/static/v4.6.0/8/8a992b71cd9f07c964e49491a3337d36.svg",
  alt = "",
  label = "",
  name = "",
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    fetchData(value);
  };

  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.city.data);

  const fetchData = (value) => {
    // fetch(`http://localhost:8080/api/v1/city?name=${value}`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((json) => {
    //     const results = json.content.filter((val) => {
    //       return (
    //         val &&
    //         val.name &&
    //         val.name.toLowerCase().includes(value.toLowerCase())
    //       );
    //     });
    //     setResults(results);
    //   });
    dispatch(getCity({ value }));
    setResults(data);
  };

  useEffect(() => {
    const debouncedFetch = debounce(() => {
      fetchData(value);
    }, 300);

    if (value) {
      debouncedFetch();
    }

    return () => {
      debouncedFetch.cancel();
    };
  }, [value]);

  return (
    <>
      <div className="d-flex flex-column search-wrapper">
        <div className="mb-3">
          <label htmlFor="label" className="fs-normal">
            {label}
          </label>
        </div>
        <div className={`d-flex ${borderInput}`}>
          <div
            className={`w-25 mx-0 d-flex border-icon justify-align-center bg-white ${cssClass} ${classLeft}`}
          >
            <img className="m-auto" src={imgIcon} alt="calendar" />
          </div>
          <input
            type="text"
            readOnly={readOnly}
            onClick={onClick}
            name={name}
            value={value}
            onChange={handleChange}
            className={`form-control rounded-0  ${cssClass} ${classLeft}`}
            alt={alt}
          />
        </div>
        {value ? (
          <SearchResultList
            value={value}
            setFormValue={setFormValue}
            results={results}
            setResults={setResults}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SearchInputField;
