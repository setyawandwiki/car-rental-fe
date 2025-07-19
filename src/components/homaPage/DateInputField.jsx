import { format } from "date-fns";
import React from "react";

const DateInputField = ({ value, onClick, cssClass = "" }) => {
  return (
    <div className="d-flex border-input">
      <div
        className={`w-25 mx-0 d-flex border-icon justify-align-center bg-white ${cssClass}`}
      >
        <img
          className="m-auto"
          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v4.6.0/8/8a992b71cd9f07c964e49491a3337d36.svg"
          alt="calendar"
        />
      </div>
      <input
        type="text"
        readOnly
        onClick={onClick}
        value={format(value, "dd MMM yyyy")}
        className={`form-control rounded-0 border-0 ${cssClass}`}
      />
    </div>
  );
};

export default DateInputField;
