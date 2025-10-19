import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/Header.scss";
import Logo from "../Logo/Logo";
import CartIcon from "./CartIcon";
import Search from "../Search/Search";

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
