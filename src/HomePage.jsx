import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../src/homePage.css";
import DateInputField from "./components/homaPage/DateInputField";
import SearchButton from "./components/homaPage/SearchButton";
import { format } from "date-fns";

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
            <div className="form-group" ref={pickerRef}>
              <div className="d-flex">
                <DateInputField
                  label="Your Rental Locatio "
                  classLeft={`border-input-left`}
                  imgSearch={""}
                  imgIcon={
                    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v4.6.0/b/bac1862bc878474d414560fe61746c27.svg"
                  }
                  value={"Cibinong"}
                  alt="Search Location"
                />
                <DateInputField
                  label="Rental Start Date"
                  value={format(date.startDate, "dd MMM yyyy")}
                  onClick={() => setShowPicker(!showPicker)}
                  borderInput="border-input"
                  readOnly={true}
                  alt="Calendar"
                />
                <DateInputField
                  label="Rental End Date"
                  value={format(date.endDate, "dd MMM yyyy")}
                  borderInput="border-input"
                  onClick={() => setShowPicker(!showPicker)}
                  readOnly={true}
                  alt="Calendar"
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
