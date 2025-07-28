import React, { useState } from "react";
import SearchResultList from "./SearchResultList";

const DateInputField = ({
  setFormValue,
  value,
  valueSearch = "",
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
    setFormValue((prev) => ({ ...prev, [name]: value }));
    fetchData(valueSearch);
  };

  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return user && user.name && user.name.toLowerCase().includes(value);
        });
        setResults(results);
      });
  };

  return (
    <>
      <div className="d-flex flex-column">
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
        {valueSearch ? <SearchResultList results={results} /> : <></>}
      </div>
    </>
  );
};

export default DateInputField;
