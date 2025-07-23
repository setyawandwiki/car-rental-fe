import { useEffect, useState } from "react";
import "../../../src/navbar.css";
import NavBottomMenu from "../navbar/NavBottomMenu";
import NavTopMenu from "../navbar/NavTopMenu";
import { useLocation } from "react-router";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navbarClass = `
    navbar navbar-expand-lg my-0 py-0 d-flex flex-column transition-navbar 
    ${isHomePage ? "fixed-top" : ""}
    ${
      isHomePage
        ? scrolled
          ? "bg-white text-dark shadow-sm"
          : "bg-transparent text-white"
        : "bg-white text-dark shadow-sm"
    }
  `;

  return (
    <nav className={navbarClass}>
      <NavTopMenu isScrolled={scrolled} />
      <NavBottomMenu isScrolled={scrolled} />
    </nav>
  );
};

export default Header;
