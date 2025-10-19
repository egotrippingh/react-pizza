import React from "react";
import { Link } from "react-router-dom";
import styles from "/src/styles/Header.module.scss";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import Search from "./Search";

const Header = ({}) => {
  return (
    <>
      <div className={styles.header}>
        <Logo />
        <Search />
        <Link to="/cart">
          <CartIcon />
        </Link>
      </div>
    </>
  );
};

export default Header;
