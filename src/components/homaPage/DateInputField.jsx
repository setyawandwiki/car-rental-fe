import React, { useState } from "react";

const DateInputField = ({
  value,
  cssClass = "",
  classLeft = "border-0",
  onChange,
  borderInput = "",
  alt = "",
  label = "",
  name = "",
}) => {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="mb-3">
          <label htmlFor="label" className="fs-normal">
            {label}
          </label>
        </div>
        <div className={`d-flex ${borderInput}`}>
          <input
            type="date"
            name={name}
            value={value}
            onChange={onChange}
            className={`form-control rounded-0  ${cssClass} ${classLeft}`}
            alt={alt}
          />
        </div>
      </div>
    </>
  );
};

export default DateInputField;
