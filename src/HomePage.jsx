import React, { useEffect, useRef, useState } from "react";
import "../src/homePage.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

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
      <div className="color-overlay d-flex justify-content-center align-items-center">
        <form>
          <div className="form-group position-relative" ref={pickerRef}>
            <label>Rental Date Range</label>
            <div className="d-flex gap-2">
              <input
                type="text"
                readOnly
                onClick={() => setShowPicker(!showPicker)}
                value={format(date.startDate, "dd MMM yyyy")}
                className="form-control"
              />
              <input
                type="text"
                readOnly
                onClick={() => setShowPicker(!showPicker)}
                value={format(date.endDate, "dd MMM yyyy")}
                className="form-control"
              />
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
  );
};

export default HomePage;
