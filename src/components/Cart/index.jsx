import React from "react";

const Cart = () => {
  return (
    <button className="cart-button">
      <div className="cart-button__info">
        <span className="cart-button__price">0 ₽</span>
      </div>
      <svg
        className="cart-button__icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 4H5L4 6V7H6L8 14H18L20 7H9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="19" r="1.75" fill="currentColor" />
        <circle cx="17" cy="19" r="1.75" fill="currentColor" />
      </svg>
    </button>
  );
};

export default Cart;
