import React from "react";
import logoRental from "../../assets/logo-car-rental.png";
import { Link } from "react-router";
const NavTopMenu = ({ isScrolled }) => {
  return (
    <>
      <div className="container-fluid border-bottom border-secondary px-0">
        <div className="row w-100 mx-0 px-0 my-0 py-0">
          <div className="col-12 my-0 mx-0 px-0">
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
                  className="class-fluid w-50 logo my-0 py-0"
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
                <ul className="navbar-nav ms-auto d-flex justify-content-between w-50">
                  <li className="nav-item me-2 fw-normal2 fs-normal rounded">
                    <a
                      className={`nav-link ${
                        isScrolled ? `text-dark` : `text-white`
                      } active fw-normal1 fs-normal1 rounded navbar-button navbar-button`}
                      aria-current="page"
                      href="#"
                    >
                      Promo
                    </a>
                  </li>
                  <li className="nav-item me-2 fw-normal1 fs-normal rounded">
                    <a
                      className={`nav-link navbar-button ${
                        isScrolled ? `text-dark` : `text-white`
                      }`}
                      href="#"
                    >
                      Jadi Mitra
                    </a>
                  </li>
                  <li className="nav-item me-2 fw-normal1 fs-normal">
                    <a
                      className={`nav-link navbar-button ${
                        isScrolled ? `text-dark` : `text-white`
                      }`}
                      href="#"
                    >
                      For Corporates
                    </a>
                  </li>
                  <li className="nav-item me-2 fw-normal1 fs-normal rounded">
                    <a
                      className={`nav-link navbar-button ${
                        isScrolled ? `text-dark` : `text-white`
                      }`}
                      href="#"
                    >
                      Pesanan
                    </a>
                  </li>
                  <li className="nav-item border rounded">
                    <Link
                      to="/login"
                      className={`nav-link navbar-button fw-normal1 fs-normal ${
                        isScrolled ? `text-dark` : `text-white`
                      }`}
                      href="#"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item bg-primary rounded">
                    <Link
                      to="/register"
                      className={`nav-link navbar-button fw-normal1 fs-normal ${
                        isScrolled ? `text-dark` : `text-white`
                      }`}
                      href="#"
                    >
                      Register
                    </Link>
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
