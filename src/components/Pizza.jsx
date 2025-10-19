import styles from "/src/styles/Pizza.module.scss";
import React from "react";

const Pizza = ({ id, title, imageUrl, sizes, price, types }) => {
  const [pizzaCount, setPizzaCount] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeTesto, setActiveTesto] = React.useState(0);

  const typeNames = ["тонкое", "традиционное"];

  return (
    <section key={id} className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <img
          src={imageUrl}
          alt={`Изображение пиццы ${title}`}
          className={styles.image}
        />
      </div>

      <strong>{price} ₽</strong>
      <div className={styles.controls}>
        <span className={styles.qtyLabel}>Количество:</span>

        <div className={styles.counter}>
          <button
            className={`${styles.button} ${styles.buttonMinus}`}
            onClick={() => setPizzaCount((current) => Math.max(0, current - 1))}
          >
            −
          </button>

          <span className={styles.countValue}>{pizzaCount}</span>
          <span className={styles.countUnit}>шт.</span>

          <button
            className={`${styles.button} ${styles.buttonPlus}`}
            onClick={() => setPizzaCount((current) => current + 1)}
          >
            +
          </button>
        </div>
      </div>
      <ul className={styles.sizes}>
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

      <ul className={styles.sizes}>
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

      <button className={styles.orderButton}>
        Добавить в корзину {pizzaCount === 0 ? "" : `(${price * pizzaCount} ₽)`}
      </button>
    </section>
  );
};

export default Pizza;
