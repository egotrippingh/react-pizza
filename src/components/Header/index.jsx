import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../Logo";
import CartIcon from "../CartIcon";
import Search from "../Search";

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className="header">
        <Logo />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Link to="/cart">
          <CartIcon />
        </Link>
      </div>
    </>
  );
};

export default Header;
