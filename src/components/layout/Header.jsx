import "../../../src/navbar.css";
import NavBottomMenu from "../navbar/NavBottomMenu";
import NavTopMenu from "../navbar/NavTopMenu";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg font-white bg-danger my-0 py-0 d-flex flex-column">
      <NavTopMenu />
      <NavBottomMenu />
    </nav>
  );
};

export default Header;
