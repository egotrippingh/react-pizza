import React from "react";
import "./Categories.scss";
const Categories = ({ value, onClickCategory }) => {
  const navigationList = [
    { id: 1, label: "Мясные", url: "/catalog/myaso-pizza/" },
    { id: 2, label: "Вегетарианские", url: "/basket/vegan-pizza/" },
    { id: 3, label: "Гриль", url: "/basket/grile-pizza/" },
    { id: 4, label: "Острые", url: "/basket/hot-pizza/" },
    { id: 5, label: "Закрытые", url: "/basket/closed-pizza/" },
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
              }`}
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
