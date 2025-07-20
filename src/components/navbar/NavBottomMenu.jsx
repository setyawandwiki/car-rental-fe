import React from "react";

const NavBottomMenu = () => {
  return (
    <>
      <div className="container-fluid px-0 border-bottom border-secondary text-secondary">
        <div className="row w-100 px-0 mx-0">
          <div className="col-12">
            <div className="container">
              <div className="row w-100">
                <div className="col-12">
                  <ul className="navbar-nav ms-auto d-flex justify-content-start">
                    <li className=" py-1 nav-item me-2 fw-normal2 fs-normal rounded">
                      <a
                        className="nav-link active fw-normal2 text-white fs-normal1 rounded navbar-button navbar-button"
                        aria-current="page"
                        href="#"
                      >
                        Hotel
                      </a>
                    </li>
                    <li className=" py-1 nav-item me-2 fw-normal1 fs-normal rounded">
                      <a className="nav-link text-white navbar-button" href="#">
                        Tiket Pesawat
                      </a>
                    </li>
                    <li className=" py-1 nav-item me-2 fw-normal1 fs-normal">
                      <a className="nav-link text-white navbar-button" href="#">
                        Tiket Kreta Api
                      </a>
                    </li>
                    <li className=" py-1 nav-item me-2 fw-normal1 fs-normal rounded">
                      <a className="nav-link text-white navbar-button" href="#">
                        Tiket Bus & Travel
                      </a>
                    </li>
                    <li className=" py-1 nav-item me-2 fw-normal1 fs-normal rounded">
                      <a className="nav-link text-white navbar-button" href="#">
                        Antar Jemput Bandara
                      </a>
                    </li>
                    <li className=" py-1 nav-item me-2 fw-normal1 fs-normal">
                      <a className="nav-link text-white navbar-button" href="#">
                        Rental Mobil
                      </a>
                    </li>
                    <li className=" py-1 nav-item me-2 fw-normal1 fs-normal rounded">
                      <a className="nav-link text-white navbar-button" href="#">
                        Atraksi dan aktivitas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBottomMenu;
