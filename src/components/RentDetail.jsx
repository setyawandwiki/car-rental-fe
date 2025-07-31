import React from "react";
import "./rentDetail.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const RentDetail = () => {
  const companyCarDetail = useSelector((state) => state.companyCar?.companyCar);
  const queryParams = new URLSearchParams(location.search);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const sd = queryParams.get("sd");
  const ed = queryParams.get("ed");
  const city = queryParams.get("city");

  const startDate = new Date(sd);
  const endDate = new Date(ed);

  const timeDiff = endDate.getTime() - startDate.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  const totalPrice = dayDiff * companyCarDetail.price;

  const handleOrderAndPayment = async () => {
    try {
      const orderPayload = {
        idCompanyCars: companyCarDetail.id,
        pickupDate: sd,
        dropOffDate: ed,
        pickupLoc: city,
        dropOffLoc: city,
      };

      const orderResponse = await fetch("http://localhost:8080/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderPayload),
      });

      if (!orderResponse.ok) {
        throw new Error("Gagal membuat order");
      }

      const orderData = await orderResponse.json();
      const orderId = orderData?.id;

      const paymentResponse = await fetch(
        "http://localhost:8080/api/v1/payments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ orderId }),
        }
      );

      if (!paymentResponse.ok) {
        throw new Error("Gagal membuat pembayaran");
      }

      const paymentData = await paymentResponse.json();
      const invoiceUrl = paymentData?.invoice_url;
      console.log(invoiceUrl);
      if (invoiceUrl) {
        window.open(invoiceUrl, "_blank");
      } else {
        throw new Error("Gagal mendapatkan invoice URL");
      }

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat memproses pembayaran.");
    }
  };

  return (
    <div className="container my-4 w-75">
      <div className="row shadow rounded overflow-hidden">
        <div className="col-lg-8 p-4">
          <div className="d-flex gap-3">
            <img
              src={companyCarDetail?.car?.image}
              alt="Honda Genio"
              className="img-fluid rounded"
              style={{ width: "160px", height: "auto" }}
            />
            <div>
              <h5 className="fw-bold ">
                {companyCarDetail?.car?.name}{" "}
                <span className="">({companyCarDetail?.city})</span>
              </h5>
              <p className="lh-lg mb-1 text-secondary fw-bold fs-normal">
                Disediakan oleh {companyCarDetail?.company?.name}{" "}
                {companyCarDetail?.city}
              </p>
              <div className="d-flex gap-3 text-secondary">
                <span className="fs-small">
                  {companyCarDetail?.car?.seats} kursi
                </span>
                <span className="fs-small">
                  {companyCarDetail?.car?.baggages} bagasi
                </span>
                <span className="fs-small">{companyCarDetail?.car_type}</span>
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
            <div className="mb-4">
              <label
                htmlFor="locationInput"
                className="form-label fw-bold text-dark"
              >
                Pick Up Location
              </label>
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i class="bi bi-geo-alt-fill"></i>
                </span>
                <input
                  type="text"
                  value={companyCarDetail?.city}
                  className="form-control fw-normal fs-normal"
                  id="locationInput"
                  placeholder="Ngurah Rai International Airport (DPS) fs-normal"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="locationInput"
                className="form-label fw-bold text-dark"
              >
                Drop off Location
              </label>
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i class="bi bi-geo-alt-fill"></i>
                </span>
                <input
                  type="text"
                  value={companyCarDetail?.city}
                  className="form-control fw-normal fs-normal"
                  id="locationInput"
                  placeholder="Ngurah Rai International Airport (DPS) fs-normal"
                />
              </div>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Catatan alamat tambahan (opsional)"
              ></textarea>
            </div>
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
            <div className="d-flex gap-2 mt-2 mb-4">
              <h6 className="fw-bold mb-1 lh-lg mb-3">
                {companyCarDetail?.company?.name}
              </h6>
              <img
                src={companyCarDetail?.company?.image}
                style={{ width: "auto", height: "50px" }}
                alt=""
              />
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-star-fill text-primary"></i>
              <span className="fw-bold">
                {companyCarDetail?.company?.rate
                  ? companyCarDetail?.company?.rate
                  : `3.5 (5.0)`}
              </span>
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
            <h4 className="text-danger fw-bold my-3">Rp {totalPrice}</h4>
            <button
              onClick={handleOrderAndPayment}
              className="btn btn-warning w-100 fw-bold text-white"
            >
              Lanjutkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentDetail;
