import React from "react";

const RentCar = () => {
  return (
    <div>
      <div className="container w-75">
        <div className="row my-3">
          <div className="col-12 d-flex gap-3 align-items-center">
            <div className="back__section">
              <img
                src="../../src/assets/arrow-left.svg"
                className="arrow__left_icon"
                alt=""
              />
            </div>
            <h1 className="h6 fw-bold fs-normal mb-0">Ke Halaman Sebelumnya</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4 shadow rounded p-3 my-2">
            <div className="row">
              <div className="col-3">
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2023/01/26/1674730572253-02af9e48a2bc5b753259d9e71c433652.jpeg?tr=q-75,w-140"
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="col-9">
                <h1 className="h6 fw-bold fs-normal">
                  Honda Genio (Pool Kuta, area Bandara)
                </h1>
                <p className="fw-bold fs-small">Rp. 70.000 /hari</p>
                <div className="d-flex gap-2">
                  <div className="baggage d-flex gap-1 align-items-center">
                    <img
                      src="../src/assets/lugage.svg"
                      alt=""
                      style={{ height: 24, width: 16 }}
                    />
                    <p className="fs-normal fw-small">0</p>
                  </div>
                  <div className="baggage d-flex gap-1 align-items-center">
                    <img
                      src="../src/assets/chair.svg"
                      alt=""
                      style={{ height: 24, width: 16 }}
                    />
                    <p className="fs-normal fw-small">Automatic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 shadow rounded p-3 my-2">
            <div className="row">
              <div className="col-3">
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2023/01/26/1674730572253-02af9e48a2bc5b753259d9e71c433652.jpeg?tr=q-75,w-140"
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="col-9">
                <h1 className="h6 fw-bold fs-normal">
                  Honda Genio (Pool Kuta, area Bandara)
                </h1>
                <p className="fw-bold fs-small">Rp. 70.000 /hari</p>
                <div className="d-flex gap-2">
                  <div className="baggage d-flex gap-1 align-items-center">
                    <img
                      src="../src/assets/lugage.svg"
                      alt=""
                      style={{ height: 24, width: 16 }}
                    />
                    <p className="fs-normal fw-small">0</p>
                  </div>
                  <div className="baggage d-flex gap-1 align-items-center">
                    <img
                      src="../src/assets/chair.svg"
                      alt=""
                      style={{ height: 24, width: 16 }}
                    />
                    <p className="fs-normal fw-small">Automatic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 shadow rounded p-3 my-2">
            <div className="row">
              <div className="col-3">
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2023/01/26/1674730572253-02af9e48a2bc5b753259d9e71c433652.jpeg?tr=q-75,w-140"
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="col-9">
                <h1 className="h6 fw-bold fs-normal">
                  Honda Genio (Pool Kuta, area Bandara)
                </h1>
                <p className="fw-bold fs-small">Rp. 70.000 /hari</p>
                <div className="d-flex gap-2">
                  <div className="baggage d-flex gap-1 align-items-center">
                    <img
                      src="../src/assets/lugage.svg"
                      alt=""
                      style={{ height: 24, width: 16 }}
                    />
                    <p className="fs-normal fw-small">0</p>
                  </div>
                  <div className="baggage d-flex gap-1 align-items-center">
                    <img
                      src="../src/assets/chair.svg"
                      alt=""
                      style={{ height: 24, width: 16 }}
                    />
                    <p className="fs-normal fw-small">Automatic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex gap-2 mb-3 mt-5">
            <div className="selected__car bg-danger">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/01/26/1674730572253-02af9e48a2bc5b753259d9e71c433652.jpeg?tr=q-75,w-140"
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="detail__selected_car">
              <h1 className="fw-normal text-secondary">Tipe Mobil</h1>
              <h1 className="h6 fw-bold fs-small">
                Honda Genio (Pool Kuta, area Bandara)
              </h1>
              <h1 className="fw-normal text-secondary">Automatic</h1>
            </div>
          </div>
          <div className="col-6">2</div>
        </div>
      </div>
    </div>
  );
};

export default RentCar;
