import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router";

const HeaderFooter = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HeaderFooter;
