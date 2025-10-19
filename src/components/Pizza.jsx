import "/src/styles/Pizza.scss";
import React from "react";

const Pizza = ({ id, title, imageUrl, sizes, price, types }) => {
  const [pizzaCount, setPizzaCount] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeTesto, setActiveTesto] = React.useState(0);

  const typeNames = ["тонкое", "традиционное"];

  return (
    <section key={id} className="pizza-card">
      <div className="pizza-card__header">
        <h3 className="pizza-card__label">{title}</h3>
        <img
          src={imageUrl}
          alt={`Изображение пиццы ${title}`}
          className="pizza-card__image"
        />
      </div>

      <strong>{price} ₽</strong>
      <div className="pizza-card__controls">
        <span className="pizza-card__quantity-label">Количество:</span>

        <div className="pizza-card__counter">
          <button
            className="pizza-card__button pizza-card__button--minus"
            onClick={() => setPizzaCount((current) => Math.max(0, current - 1))}
          >
            −
          </button>

          <span className="pizza-card__count-value">{pizzaCount}</span>
          <span className="pizza-card__count-unit">шт.</span>

          <button
            className="pizza-card__button pizza-card__button--plus"
            onClick={() => setPizzaCount((current) => current + 1)}
          >
            +
          </button>
        </div>
      </div>
      <ul className="sizes">
        {types.map((typeId) => (
          <li
            onClick={() => setActiveTesto(typeId)}
            className={`${activeTesto === typeId ? "active" : ""}`}
            key={typeId}
          >
            {typeNames[typeId]}
          </li>
        ))}
      </ul>

      <ul className="sizes">
        {sizes.map((size, index) => (
          <li
            onClick={() => setActiveSize(index)}
            className={`${activeSize === index ? "active" : ""}`}
            key={index}
          >
            {`${size} см`}
          </li>
        ))}
      </ul>

      <button className="pizza-card__order-button">
        Добавить в корзину {pizzaCount === 0 ? "" : `(${price * pizzaCount} ₽)`}
      </button>
    </section>
  );
};

export default Pizza;
