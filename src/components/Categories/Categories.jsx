import React from "react";
import "./Categories.scss";
export const Categories = () => {
  const navigationList = [
    { id: 1, label: "Мясные", url: "/catalog/myaso-pizza/" },
    { id: 2, label: "Вегетарианские", url: "/basket/vegan-pizza/" },
    { id: 3, label: "Гриль", url: "/basket/grile-pizza/" },
    { id: 4, label: "Острые", url: "/basket/hot-pizza/" },
    { id: 5, label: "Закрытые", url: "/basket/closed-pizza/" },
  ];

  const [activeId, setActiveId] = React.useState(1);

  return (
    <>
      <ul className="categories">
        {navigationList.map((item) => {
          return (
            <li
              onClick={() => setActiveId(item.id)}
              key={item.id}
              className={`categories__navigation ${
                activeId === item.id ? "active" : ""
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
