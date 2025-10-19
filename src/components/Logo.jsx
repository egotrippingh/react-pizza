import React from "react";
import { Link } from "react-router-dom";
import pizzaLogo from "src/assets/pizza_logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={pizzaLogo} alt="Pizza logo" style={{ height: 60 }} />
    </Link>
  );
};

export default Logo;
