import React from "react";
import styles from "/src/styles/Categories.module.scss";

const Categories = ({ value, onClickCategory }) => {
  const navigationList = [
    { label: "Все" },
    { label: "Мясные" },
    { label: "Вегетарианские" },
    { label: "Гриль" },
    { label: "Острые" },
    { label: "Закрытые" },
  ];

  return (
    <>
      <ul className={styles.root}>
        {navigationList.map((item, i) => {
          return (
            <li
              onClick={() => onClickCategory(i)}
              key={i}
              className={`${styles.item} ${value === i ? "active" : ""}`}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Categories;
