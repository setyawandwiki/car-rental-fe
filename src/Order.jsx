import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrder } from "./features/orderSlice";

const Order = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.order.data);

  useEffect(() => {
    dispatch(getUserOrder());

    const interval = setInterval(() => {
      dispatch(getUserOrder());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

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
      <div className="container w-75">
        <div className="row">
          {data
            ? data.map((val) => {
                return (
                  <>
                    <div className="col-12 rounded shadow my-3">
                      <div className="row py-3">
                        <div className="col-2">
                          <img
                            src={`${val.car_response.image}`}
                            alt=""
                            className="img-fluid w-100 h-100 object-fit-cover"
                          />
                        </div>
                        <div className="col-6">
                          <div className="title">
                            <h1 className="h6 fw-bold">
                              {val.car_response.name} {`(${val.pickup_loc})`}
                            </h1>
                          </div>
                          <div className="car__type d-flex align-items-center gap-2">
                            <img
                              src="../src/assets/steer.svg"
                              alt=""
                              style={{ height: 24, width: 16 }}
                            />
                            <p className="fs-normal fw-normal1">
                              {val.company_response.name}
                            </p>
                          </div>
                          <div className="description d-flex gap-3">
                            <div className="baggage d-flex gap-2 align-items-center">
                              <img
                                src="../src/assets/lugage.svg"
                                alt=""
                                style={{ height: 24, width: 16 }}
                              />
                              <p className="fs-normal fw-normal1">
                                {val.car_response.baggages} baggages
                              </p>
                            </div>
                            <div className="baggage d-flex gap-2 align-items-center">
                              <img
                                src="../src/assets/chair.svg"
                                alt=""
                                style={{ height: 24, width: 16 }}
                              />
                              <p className="fs-normal fw-normal1">
                                {val.car_response.seats} seats
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
                              Price Rp. {val.price_total}
                            </p>
                            <button
                              className={`p-3 rounded text-white fw-bold fs-normal ${
                                val.status === "PAID"
                                  ? "bg-success"
                                  : "bg-secondary"
                              } w-50`}
                              style={{ border: "none" }}
                              // onClick={() => handleClick(val.id)}
                            >
                              {val.status === "PAID" ? "PAID" : "PENDING"}
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
    </div>
  );
};

export default Order;
