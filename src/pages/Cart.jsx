import React from "react";

const Cart = () => {
    return (
        <div className="cart-page">
            <h1 style={{ margin: "20px 0" }}>Корзина</h1>
            <div className="cart-items">
                <div className="cart-item">
                    <img src="/pizzaImage.jpg" alt="Пицца Пепперони" className="cart-item__image" />
                    <div className="cart-item__info">
                        <div className="cart-item__title">Пепперони</div>
                        <div className="cart-item__meta">тонкое тесто, 30 см</div>
                    </div>
                    <div className="cart-item__qty">x1</div>
                    <div className="cart-item__price">450 ₽</div>
                </div>

                <div className="cart-item">
                    <img src="/pizzaImage.jpg" alt="Пицца Маргарита" className="cart-item__image" />
                    <div className="cart-item__info">
                        <div className="cart-item__title">Маргарита</div>
                        <div className="cart-item__meta">традиционное тесто, 35 см</div>
                    </div>
                    <div className="cart-item__qty">x2</div>
                    <div className="cart-item__price">700 ₽</div>
                </div>
            </div>

            <div className="cart-summary">
                <div className="cart-summary__row">
                    <span>Итого</span>
                    <strong>1 150 ₽</strong>
                </div>
                <div className="cart-summary__actions">
                    <a href="/" className="btn btn--ghost">Продолжить покупки</a>
                    <button className="btn btn--accent" type="button">Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;