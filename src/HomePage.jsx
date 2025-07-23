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
    <>
      <div className="background-img">
        <div className="row d-flex justify-content-center w-100">
          <div className="color-overlay d-flex align-items-end pb-5">
            <div className="col-12">
              <div className="container">
                <form className="w-100 d-flex justify-content-center">
                  <div className="form-group" ref={pickerRef}>
                    <div
                      className="btn-group btn-group-toggle w-25 mb-3"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-primary active fs-normal fw-bold">
                        <input
                          type="radio"
                          name="options"
                          id="option1"
                          autocomplete="off"
                          checked
                        />{" "}
                        Without Driver
                      </label>
                      <label className="btn btn-primary fs-normal fw-bold">
                        <input
                          type="radio"
                          name="options"
                          id="option3"
                          autocomplete="off"
                        />{" "}
                        Driver
                      </label>
                    </div>
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
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2024/09/04/1725447475210-6886260457851a5434e89e2220fa78e7.png?_src=imagekit&tr=q-40,h-24"
                alt="coupon-icon"
                style={{ width: "24px", height: "24px" }}
              />
              <div>
                <h1 className="h6 mb-0 fw-bold lh-base">8% New User Coupons</h1>
                <p className="mb-0 small text-muted lh-base">
                  Valid for First Transaction on Traveloka App
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <div className="shadow container-fluid d-flex flex-column">
              <div className="p-3 rounded d-flex gap-2">
                <div className="icon pt-2">
                  <img
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2025/05/23/1747984102192-b011862fcb1be69cda58c42b6daf9d33.png?tr=q-75,w-16,h-16"
                    alt=""
                  />
                </div>
                <div className="w-100 border-bottom pb-3">
                  <h5 className="fs-normal fw-bold lh-lg">
                    Diskon s.d Rp 240rb
                  </h5>
                  <p className="lh-base fs-small">min. transaksi Rp 2 juta</p>
                </div>
              </div>
              <div className="p-3 d-flex gap-2 align-items-center">
                <h5
                  className="fs-normal fw-bold lh-lg w-100 p-1"
                  style={{ background: "#f7f9fa" }}
                >
                  JALANYUK
                </h5>
                <button className="btn btn-primary fs-small btn__round fw-bold">
                  Copy
                </button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="shadow container-fluid d-flex flex-column">
              <div className="p-3 rounded d-flex gap-2">
                <div className="icon pt-2">
                  <img
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2024/09/04/1725430501755-32753a37864cf1f071eb7521f83ce92e.png?tr=q-75,w-16,h-16"
                    alt=""
                  />
                </div>
                <div className="w-100 border-bottom pb-3">
                  <h5 className="fs-normal fw-bold lh-lg">Diskon 8% Hotel</h5>
                  <p className="lh-base fs-small">min. transaksi Rp 500rb</p>
                </div>
              </div>
              <div className="p-3 d-flex gap-2 align-items-center">
                <h5
                  className="fs-normal fw-bold lh-lg w-100 p-1"
                  style={{ background: "#f7f9fa" }}
                >
                  JALANYUK
                </h5>
                <button className="btn btn-primary fs-small btn__round fw-bold">
                  Copy
                </button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="shadow container-fluid d-flex flex-column">
              <div className="p-3 rounded d-flex gap-2">
                <div className="icon pt-2">
                  <img
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2024/09/04/1725430522798-aa1ba70fe63f784a80cd039efd01b520.png?tr=q-75,w-16,h-16"
                    alt=""
                  />
                </div>
                <div className="w-100 border-bottom pb-3">
                  <h5 className="fs-normal fw-bold lh-lg">
                    Diskon s.d 8% Xperience
                  </h5>
                  <p className="lh-base fs-small">min. transaksi Rp 300rb</p>
                </div>
              </div>
              <div className="p-3 d-flex gap-2 align-items-center">
                <h5
                  className="fs-normal fw-bold lh-lg w-100 p-1"
                  style={{ background: "#f7f9fa" }}
                >
                  JALANYUK
                </h5>
                <button className="btn btn-primary fs-small btn__round fw-bold">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3 d-flex align-items-center gap-2">
        <img
          src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/31/1685509983611-a25f46a53c13da46a43bf8f542076cd2.png?_src=imagekit&tr=q-40,h-24"
          alt=""
          style={{ width: "34px", height: "34px", objectFit: "contain" }}
        />
        <h1 className="h4 fw-bold mb-0">Maksimalkan rencanamu sesukamu</h1>
      </div>
    </>
  );
};

export default HomePage;
