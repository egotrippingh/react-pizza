import React from "react";

const Cart = () => {
    return (
        <div className="cart-widget">
            <div className="cart-widget__row">
                <span className="cart-widget__label">Товаров:</span>
                <strong className="cart-widget__value">3</strong>
            </div>
            <div className="cart-widget__row">
                <span className="cart-widget__label">Сумма:</span>
                <strong className="cart-widget__value">1 150 ₽</strong>
            </div>
        </div>
    )
}

export default Cart