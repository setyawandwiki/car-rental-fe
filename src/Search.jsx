import React from "react";
import "../src/search.css";
import { Outlet } from "react-router";

const Search = () => {
  return (
    <div>
      <div className="container-fluid" style={{ zIndex: 0 }}>
        <div className="row">
          <div className="col-12 px-0 mx-0">
            <img
              className="img-fluid w-100"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/11/29/1574993189791-804afe416b0604b30f51c74193eb57c5.png?tr=h-220,q-75"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container rounded w-75 shadow d-flex justify-align-center align-items-center mb-1 search__section bg-danger">
        <div className="row w-100">
          <div className="col-9 bg-white section__left py-4 px-4">
            <p className="fs-small">Car Rental</p>
            <h1 className="h-3 fw-bold lh-lg">Car Rental Without Driver</h1>
            <p className="fs-normal text-secondary fw-normal1">
              Ngurah Rai International Airport (DPS) • Jum, 25 Jul 2025, 09.00 -
              Min, 27 Jul 2025, 09.00
            </p>
          </div>
          <div className="col-3 text-center d-flex flex-column justify-content-center">
            <div>
              <button className="btn btn-primary fs-normal fw-normal1">
                Ganti Pencarian
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container border rounded shadow-sm p-4 w-75 bg-white">
        <div className="mb-3">
          <h5 className="fw-bold mb-3">Rental Mobil</h5>
          <div className="btn-group" role="group" aria-label="Driver Options">
            <input
              type="radio"
              className="btn-check"
              name="driverOption"
              id="tanpaSopir"
              autocomplete="off"
              checked
            />
            <label
              className="btn btn-outline-primary fs-normal fw-normal1"
              for="tanpaSopir"
            >
              Tanpa Sopir
            </label>

            <input
              type="radio"
              className="btn-check"
              name="driverOption"
              id="denganSopir"
              autocomplete="off"
            />
            <label
              className="btn btn-outline-primary fs-normal fw-normal1"
              for="denganSopir"
            >
              Dengan Sopir
            </label>
          </div>
        </div>

        <hr />

        <div className="row g-3 align-items-end">
          <div className="col-lg-4">
            <label className="form-label fw-bold fs-normal fw-normal1">
              Lokasi Rental Anda
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-geo-alt"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Ngurah Rai International Airport (DPS)"
              />
            </div>
          </div>
          <div className="col-lg-2">
            <label className="form-label fw-bold fs-normal fw-normal1">
              Tanggal Mulai Rental
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-calendar"></i>
              </span>
              <input type="date" className="form-control" value="2025-07-30" />
            </div>
          </div>
          <div className="col-lg-2">
            <label className="form-label fw-bold fs-normal fw-normal1">
              Waktu Mulai
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-clock"></i>
              </span>
              <input type="time" className="form-control" value="09:00" />
            </div>
          </div>

          <div className="col-lg-2">
            <label className="form-label fw-bold fs-normal fw-normal1">
              Tanggal Selesai
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-calendar"></i>
              </span>
              <input type="date" className="form-control" value="2025-07-31" />
            </div>
          </div>
          <div className="col-lg-2">
            <label className="form-label fw-bold fs-normal fw-normal1">
              Waktu Selesai
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-clock"></i>
              </span>
              <input type="time" className="form-control" value="09:00" />
            </div>
          </div>
        </div>

        <div className="d-flex justify-end justify-content-end mt-4">
          <button className="btn btn-primary text-white px-4 fw-bold fs-normal fw-normal1">
            <i className="bi bi-search"></i> Cari Mobil
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Search;
