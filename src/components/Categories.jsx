import React from "react";
import "/src/styles/Categories.scss";

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
      <ul className="categories">
        {navigationList.map((item, i) => {
          return (
            <li
              onClick={() => onClickCategory(i)}
              key={i}
              className={`categories__navigation ${
                value === i ? "active" : ""
              }`}>
              {item.label}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Categories;
