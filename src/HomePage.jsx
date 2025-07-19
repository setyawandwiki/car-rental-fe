import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../src/homePage.css";
import DateInputField from "./components/homaPage/DateInputField";
import SearchButton from "./components/homaPage/SearchButton";

const HomePage = () => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [showPicker, setShowPicker] = useState(false);

  const pickerRef = useRef();

  const handleChange = (ranges) => {
    setDate(ranges.selection);
    setShowPicker(false); // auto close on select
  };

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="background-img">
      <div className="color-overlay d-flex align-items-end pb-5">
        <div className="container">
          <form className="w-100 d-flex justify-content-center">
            <div className="form-group position-relative" ref={pickerRef}>
              <div className="d-flex">
                <div className="d-flex ">
                  <div
                    className={`w-25 mx-0 d-flex border-input-left bg-white justify-align-center`}
                  >
                    <img
                      className="m-auto"
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v4.6.0/b/bac1862bc878474d414560fe61746c27.svg"
                      alt="calendar"
                    />
                  </div>
                  <input
                    type="text"
                    readOnly
                    value={"Cibinong"}
                    className={`form-control rounded-0 border-input-left w-100`}
                  />
                </div>
                <DateInputField
                  value={date.startDate}
                  onClick={() => setShowPicker(!showPicker)}
                />
                <DateInputField
                  value={date.endDate}
                  onClick={() => setShowPicker(!showPicker)}
                />
                <SearchButton />
              </div>
              {showPicker && (
                <div className="position-absolute z-3 bg-white mt-2 shadow-sm rounded">
                  <DateRangePicker
                    minDate={new Date()}
                    showMonthArrow={true}
                    ranges={[date]}
                    showPreview={false}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
