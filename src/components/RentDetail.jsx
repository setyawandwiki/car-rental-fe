import React from "react";
import "./rentDetail.css";

const RentDetail = () => {
  return (
    <div className="container my-4 w-75">
      <div className="row shadow rounded overflow-hidden">
        <div className="col-lg-8 p-4">
          <div className="d-flex gap-3">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/01/26/1674730572253-02af9e48a2bc5b753259d9e71c433652.jpeg?tr=q-75,w-140"
              alt="Honda Genio"
              className="img-fluid rounded"
              style={{ width: "160px", height: "auto" }}
            />
            <div>
              <h5 className="fw-bold ">
                Honda Genio <span className="">(Pool Kuta, area Bandara)</span>
              </h5>
              <p className="lh-lg mb-1 text-secondary fw-bold fs-normal">
                Disediakan oleh PT. Bukit Sari Jaya Bali
              </p>
              <div className="d-flex gap-3 text-secondary">
                <span className="fs-small">2 kursi</span>
                <span className="fs-small">0 bagasi</span>
                <span className="fs-small">Automatic</span>
                <span className="fs-small">Tahun 2017+</span>
              </div>
              <div className="mt-2 d-flex gap-2">
                <span className="badge insurance__background">
                  Asuransi Mobil
                </span>
                <span className="badge insurance__background">Bisa Refund</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h6 className="fw-bold my-4">Kebijakan Rental</h6>
            <ul className="list-unstyled">
              <li className="fs-small fw-normal py-2">
                <i className="bi bi-info-circle text-primary me-2"></i>
                Penggunaan hingga 24 jam per hari rental
              </li>
              <li className="fs-small fw-normal py-2">
                <i className="bi bi-info-circle text-primary me-2"></i>
                Penggunaan terbatas di dalam kota. Jika digunakan di luar kota,
                biaya tambahan berlaku.
              </li>
              <li className="fs-small fw-normal py-2">
                <i className="bi bi-fuel-pump text-primary me-2"></i>Kembalikan
                bensin seperti semula
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h6 className="fw-bold py-3">Informasi Penting</h6>
            <p className="fw-bold mb-1 pb-2">Sebelum Anda pesan</p>
            <ul style={{ listStyle: "circle", color: "black" }}>
              <li className="fs-small text-secondary lh-lg">
                Pastikan untuk membaca syarat rental
              </li>
            </ul>
            <p className="fw-bold my-2">Setelah Anda pesan</p>
            <ul style={{ listStyle: "circle" }}>
              <li className="fs-small text-secondary lh-lg">
                Penyedia akan menghubungi melalui WhatsApp untuk dokumen
              </li>
            </ul>
            <p className="fw-bold my-2">Saat pengambilan</p>
            <ul style={{ listStyle: "circle" }}>
              <li className="fs-small text-secondary lh-lg">
                Bawa KTP, SIM A, dan dokumen yang dibutuhkan
              </li>
              <li className="fs-small text-secondary lh-lg">
                Periksa kondisi mobil bersama staf
              </li>
              <li className="fs-small text-secondary lh-lg">
                Tandatangani perjanjian saat pengambilan
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 border-start p-4 bg-light">
          <div className="mb-3">
            <small className="text-muted fs-small lh-base">oleh</small>
            <h6 className="fw-bold mb-1 lh-lg mb-3">
              PT. Bukit Sari Jaya Bali
            </h6>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-star-fill text-primary"></i>
              <span className="fw-bold">9.1</span>
              <small className="text-muted">(240 review)</small>
            </div>
            <div className="mt-2">
              <span className="badge bg-light text-success border">
                Kemudahan Proses
              </span>
              <span className="badge bg-light text-success border">
                Kebersihan Mobil
              </span>
              <span className="badge bg-light text-success border">
                Sikap Staf
              </span>
            </div>
          </div>
          <div className="border-top pt-3">
            <p className="fw-bold mb-1">Harga Total</p>
            <h4 className="text-danger fw-bold">Rp 140.000</h4>
            <button className="btn btn-warning w-100 fw-bold text-white">
              Lanjutkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentDetail;
