import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router";
import { getCompanyCarDetail } from "../../features/companyCar";

const SearchSection = () => {
  const companyCar = useSelector((state) => state.companyCar.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
    dispatch(getCompanyCarDetail(id));
    const searchParams = new URLSearchParams(location.search);
    const cleanParams = decodeURIComponent(searchParams.toString());
    navigate(`/search/${id}?${cleanParams.toString()}`);
  };
  return (
    <div className="container w-75">
      <div className="row">
        {companyCar
          ? companyCar.map((val) => {
              return (
                <>
                  <div className="col-12 rounded shadow my-3">
                    <div className="row py-3">
                      <div className="col-2">
                        <img
                          src={`${val.car.image}`}
                          alt=""
                          className="img-fluid w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="col-6">
                        <div className="title">
                          <h1 className="h6 fw-bold">
                            {val.car.name} {`(${val.city})`}
                          </h1>
                        </div>
                        <div className="car__type d-flex align-items-center gap-2">
                          <img
                            src="../src/assets/steer.svg"
                            alt=""
                            style={{ height: 24, width: 16 }}
                          />
                          <p className="fs-normal fw-normal1">{val.car_type}</p>
                        </div>
                        <div className="description d-flex gap-3">
                          <div className="baggage d-flex gap-2 align-items-center">
                            <img
                              src="../src/assets/lugage.svg"
                              alt=""
                              style={{ height: 24, width: 16 }}
                            />
                            <p className="fs-normal fw-normal1">
                              {val.car.baggages} baggages
                            </p>
                          </div>
                          <div className="baggage d-flex gap-2 align-items-center">
                            <img
                              src="../src/assets/chair.svg"
                              alt=""
                              style={{ height: 24, width: 16 }}
                            />
                            <p className="fs-normal fw-normal1">
                              {val.car.seats} seats
                            </p>
                          </div>
                        </div>
                        <div className="driver__type pt-3">
                          <p className="fs-small">Tanpa Sopir</p>
                        </div>
                      </div>
                      <div className="col-4 text-end">
                        <div className="price__container h-100 d-flex flex-column align-items-end">
                          <p
                            className="py-3 fw-bold"
                            style={{ color: "#ff5e1f" }}
                          >
                            Rp. {val.price} / Hari
                          </p>
                          <button
                            className="btn btn-primary w-50"
                            style={{ background: "#ff5e1f", border: "none" }}
                            onClick={() => handleClick(val.id)}
                          >
                            Lanjutkan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default SearchSection;
