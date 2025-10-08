import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../Logo";
import CartIcon from "../CartIcon";
const Header = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <Link to="/cart"><CartIcon /></Link>
      </div>
    </>
  );
};

export default Header;


