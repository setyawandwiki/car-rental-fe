import React from "react";
import logoRental from "../../assets/logo-car-rental.png";
const NavTopMenu = () => {
  return (
    <>
      <div className="container-fluid border-bottom border-secondary px-0">
        <div className="row w-100 mx-0 px-0">
          <div className="col-12">
            <div className="container py-2 my-0 py-0 d-flex justify-align-center">
              <div className="row">
                <div className="col-12"></div>
              </div>
              <a
                className="navbar-brand text-white fw-normal fs-normal my-0"
                href="#"
              >
                <img
                  src={logoRental}
                  alt="logo company"
                  className="class-fluid logo my-0 py-0"
                />
              </a>
              <button
                className="navbar-toggler my-0 py-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item me-2 fw-normal2 fs-normal rounded">
                    <a
                      className="nav-link active fw-normal1 fs-normal1 rounded navbar-button text-white navbar-button text-white"
                      aria-current="page"
                      href="#"
                    >
                      Promo
                    </a>
                  </li>
                  <li className="nav-item me-2 fw-normal1 fs-normal rounded">
                    <a className="nav-link navbar-button text-white" href="#">
                      Jadi Mitra
                    </a>
                  </li>
                  <li className="nav-item me-2 fw-normal1 fs-normal">
                    <a className="nav-link navbar-button text-white" href="#">
                      For Corporates
                    </a>
                  </li>
                  <li className="nav-item me-2 fw-normal1 fs-normal rounded">
                    <a className="nav-link navbar-button text-white" href="#">
                      Pesanan
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link fs-normal fw-normal1 dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown link
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavTopMenu;
