import React from "react";
import styles from "/src/styles/Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "src/redux/slices/filterSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);

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
              onClick={() => dispatch(setCategoryId(i))}
              key={i}
              className={`${styles.item} ${categoryId === i ? "active" : ""}`}
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
