import React from "react";
import "./search.css";

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
      <div className="container bg-danger w-75 shadow p-3 mb-3 search__section">
        <div className="row">
          <div className="col-12">
            <div className="section__left">
              <p>Car Rental</p>
              <p>Car Rental Without Driver</p>
              <p>
                Ngurah Rai International Airport (DPS) • Jum, 25 Jul 2025, 09.00
                - Min, 27 Jul 2025, 09.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
