import React, { useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../src/homePage.css";
import DateInputField from "./components/homaPage/DateInputField";
import SearchButton from "./components/homaPage/SearchButton";
import SearchInputField from "./components/homaPage/SearchInputField";

const HomePage = () => {
  const [formValues, setFormValues] = useState({
    search: "",
    type: "Manual",
    startDate: "",
    endDate: "",
  });

  const handleDateChange = (field, value) => {
    const formatted = new Date(value).toISOString().slice(0, 19);
    setFormValues((prev) => ({
      ...prev,
      [field]: formatted,
    }));
  };

  const pickerRef = useRef();

  const getDateOnly = (isoString) => {
    return isoString ? isoString.slice(0, 10) : "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedValue =
      name === "startDate" || name === "endDate"
        ? new Date(value).toISOString() // convert ke format ISO lengkap
        : value;

    setFormValues({
      ...formValues,
      [name]: updatedValue,
    });
  };

  console.log(formValues);

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
                      <label
                        className={`btn btn-primary ${
                          formValues.type === "Manual" ? "active" : null
                        } fs-normal fw-bold`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value="Manual"
                          autoComplete="off"
                          checked={formValues.type === "Manual"}
                          onChange={handleChange}
                        />
                        Manual
                      </label>
                      <label
                        className={`btn btn-primary ${
                          formValues.type === "Automatic" ? "active" : null
                        } fs-normal fw-bold`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value="Automatic"
                          autoComplete="off"
                          checked={formValues.type === "Automatic"}
                          onChange={handleChange}
                        />
                        Automatic
                      </label>
                    </div>
                    <div className="d-flex ">
                      <SearchInputField
                        name="search"
                        label="Your Rental Locatio "
                        classLeft={`border-input-left`}
                        imgSearch={""}
                        setFormValue={setFormValues}
                        imgIcon={
                          "https://d1785e74lyxkqq.cloudfront.net/_next/static/v4.6.0/b/bac1862bc878474d414560fe61746c27.svg"
                        }
                        value={formValues.search}
                        alt="Search Location"
                      />
                      <DateInputField
                        name="startDate"
                        label="Rental Start Date"
                        borderInput="border-input"
                        setFormValue={setFormValues}
                        value={getDateOnly(formValues.startDate)}
                        onChange={(e) =>
                          handleDateChange("startDate", e.target.value)
                        }
                        alt="Calendar"
                      />
                      <DateInputField
                        name="endDate"
                        label="Rental End Date"
                        borderInput="border-input"
                        setFormValue={setFormValues}
                        value={getDateOnly(formValues.endDate)}
                        onChange={(e) =>
                          handleDateChange("endDate", e.target.value)
                        }
                        alt="Calendar"
                      />
                      <SearchButton
                        startDate={formValues.startDate}
                        endDate={formValues.endDate}
                        formValues={formValues}
                      />
                    </div>
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
                    Discount until Rp 240rb
                  </h5>
                  <p className="lh-base fs-small">min. payment Rp 2 juta</p>
                </div>
              </div>
              <div className="p-3 d-flex gap-2 align-items-center">
                <h5
                  className="fs-normal fw-bold lh-lg w-100 p-1"
                  style={{ background: "#f7f9fa" }}
                >
                  COME GO
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
                  COME GO
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
                    Discount until 8% experience
                  </h5>
                  <p className="lh-base fs-small">min. payment Rp 300rb</p>
                </div>
              </div>
              <div className="p-3 d-flex gap-2 align-items-center">
                <h5
                  className="fs-normal fw-bold lh-lg w-100 p-1"
                  style={{ background: "#f7f9fa" }}
                >
                  COME GO
                </h5>
                <button className="btn btn-primary fs-small btn__round fw-bold">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-12 d-flex align-items-center gap-2">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/31/1685509983611-a25f46a53c13da46a43bf8f542076cd2.png?_src=imagekit&tr=q-40,h-24"
              alt=""
              style={{ width: "34px", height: "34px", objectFit: "contain" }}
            />
            <h1 className="h4 fw-bold mb-0">maximize your plans as you like</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div class="card h-100 shadow" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/775294/pexels-photo-775294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="card-img-top"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div class="card-body">
                <h5 class="card-title fs-small fw-bold">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card h-100 shadow" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="card-img-top"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div class="card-body">
                <h5 class="card-title fs-small fw-bold">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card h-100 shadow" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/5416470/pexels-photo-5416470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="card-img-top"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div class="card-body">
                <h5 class="card-title fs-small fw-bold">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card h-100 shadow" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div class="card-body">
                <h5 class="card-title fs-small fw-bold">Card title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-12 d-flex align-items-center gap-2">
            <img
              className="icon__destination"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/01/1685631988109-4e2f068146d14d35aa47c5e9e9add5ff.png?_src=imagekit&tr=q-40,h-24"
              alt=""
            />
            <h1 className="h4 fw-bold mb-0">
              Find what you love in Asia and the world
            </h1>
          </div>
        </div>
      </div>
      <div class="container my-4">
        <h3 class="fw-bold mb-5">
          <i class="bi bi-building"></i> Find what you love in Asia and the
          world
        </h3>
        <div class="row g-4">
          <div class="col-md-4">
            <div className="card border-0 text-white rounded overflow-hidden position-relative">
              <img
                src={
                  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className="card-img destination__card"
                alt="singapore"
              />
              <div
                className="card-img-overlay d-flex flex-column justify-content-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.1))",
                }}
              >
                <h5 className="fw-bold">Singapore</h5>
                <p className="mb-0">644 accommodations</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="card border-0 text-white rounded overflow-hidden position-relative">
              <img
                src={
                  "https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                className="card-img destination__card"
                alt={"Singapura"}
              />
              <div
                className="card-img-overlay d-flex flex-column justify-content-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.1))",
                }}
              >
                <h5 className="fw-bold">Malaysia</h5>
                <p className="mb-0">644 accommodations</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="card border-0 text-white rounded overflow-hidden position-relative">
              <img
                src={
                  "https://images.pexels.com/photos/358229/pexels-photo-358229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className="card-img destination__card"
                alt={"Malaysia"}
              />
              <div
                className="card-img-overlay d-flex flex-column justify-content-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.1))",
                }}
              >
                <h5 className="fw-bold">Thailand</h5>
                <p className="mb-0">644 accommodations</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="card border-0 text-white rounded overflow-hidden position-relative">
              <img
                src={
                  "https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className="card-img destination__card"
                alt={"Thailand"}
              />
              <div
                className="card-img-overlay d-flex flex-column justify-content-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.1))",
                }}
              >
                <h5 className="fw-bold">South Korea</h5>
                <p className="mb-0">644 accommodations</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="card border-0 text-white rounded overflow-hidden position-relative">
              <img
                src={
                  "https://images.pexels.com/photos/6456847/pexels-photo-6456847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className="card-img destination__card"
                alt={"South Korea"}
              />
              <div
                className="card-img-overlay d-flex flex-column justify-content-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.1))",
                }}
              >
                <h5 className="fw-bold">Hong kong</h5>
                <p className="mb-0">644 accommodations</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="card border-0 text-white rounded overflow-hidden position-relative">
              <img
                src={
                  "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className="card-img destination__card"
                alt={"Hong kong"}
              />
              <div
                className="card-img-overlay d-flex flex-column justify-content-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.1))",
                }}
              >
                <h5 className="fw-bold">Japan</h5>
                <p className="mb-0">644 accommodations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
