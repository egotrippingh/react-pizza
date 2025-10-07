import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo.jsx";
import Cart from "../Cart";
const Header = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <Cart />
      </div>
    </>
  );
};

export default Header;
