import { useEffect, useState } from "react";
import "../../../src/navbar.css";
import NavBottomMenu from "../navbar/NavBottomMenu";
import NavTopMenu from "../navbar/NavTopMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // ubah threshold sesuai kebutuhan
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top my-0 py-0 d-flex flex-column transition-navbar ${
        scrolled ? "bg-white text-dark shadow-sm" : "bg-transparent text-white"
      }`}
    >
      <NavTopMenu isScrolled={scrolled} />
      <NavBottomMenu isScrolled={scrolled} />
    </nav>
  );
};

export default Header;
