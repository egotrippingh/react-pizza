import React from "react";

export const Logo = () => {
  return (
    <a href="/">
      <img
        src={new URL("@/assets/pizza_logo.png", import.meta.url).href}
        alt="Pizza logo"
        style={{ height: 60 }}
      />
    </a>
  );
};
