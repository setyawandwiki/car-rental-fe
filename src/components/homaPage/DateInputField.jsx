import React from "react";

const DateInputField = ({
  value,
  onClick,
  cssClass = "",
  classLeft = "border-0",
  borderInput = "",
  readOnly = false,
  imgIcon = "https://d1785e74lyxkqq.cloudfront.net/_next/static/v4.6.0/8/8a992b71cd9f07c964e49491a3337d36.svg",
  alt = "",
}) => {
  return (
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
        value={value}
        className={`form-control rounded-0  ${cssClass} ${classLeft}`}
        alt={alt}
      />
    </div>
  );
};

export default DateInputField;
