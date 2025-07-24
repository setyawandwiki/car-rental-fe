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
          <div className="col-6 text-end">
            <div className="dropdown">
              <button
                className="btn btn-light fs-normal fw-bold shadow text-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Urutkan
              </button>
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
            </div>
          </div>
        </div>
        <h1 className="h6 fw-bold">Pilih Penyedia Rental</h1>
        <div className="row shadow my-5 py-4">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <h1 className="h6 fw-bold fs-normal">
                  PT. Bukit Sari Jaya Bali
                </h1>
                <div className="d-flex gap-2 py-0 align-items-center">
                  <i className="bi bi-star fw-bold text-primary"></i>
                  <span className="fw-bold text-primary fs-small">
                    9.1/10.0 (240)
                  </span>
                </div>
              </div>
              <div className="col-6 text-end">
                <h1
                  className="h6 fw-bold fs-normal mr-2"
                  style={{ color: "#ff5e1f" }}
                >
                  Rp 140.000
                </h1>
                <h1 className="h6 fw-normal fs-small">Rp 70.000 /hari</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <h1 className="h7 fw-bold">Yang disukai traveler</h1>
              <p className="fw-normal fs-small lh-base text-secondary">
                Kemudahan proses pengambilan & pengembalian mobil (158)
                Kebersihan mobil (148) Sikap staf (137)
              </p>
            </div>
            <div className="col-4">
              <div className="d-flex gap-1">
                <i class="bi bi-clock text-primary"></i>
                <h1 className="h6 fs-small fw-normal text-primary fw-bold fs-small">
                  Harga 1 hari untuk penggunaan 24 jam
                </h1>
              </div>
              <div className="d-flex gap-1">
                <i class="bi bi-check text-success"></i>
                <h1 className="h6 fs-small fw-normal">Asuransi mobil</h1>
              </div>
              <div className="d-flex gap-1">
                <i class="bi bi-check text-success"></i>
                <h1 className="h6 fs-small fw-normal">Bisa refund</h1>
              </div>
            </div>
            <div className="col-4 text-end pt-3">
              <button
                className="btn w-100 fw-bold text-white"
                style={{ background: "#ff5e1f" }}
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCar;
