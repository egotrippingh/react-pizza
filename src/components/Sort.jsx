import React from "react";
import styles from "/src/styles/Sort.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { setSort, setDesc } from "src/redux/slices/filterSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const desc = useSelector((state) => state.filter.desc);

  const [open, setOpen] = React.useState(false);

  const list = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  return (
    <div>
      <b>Сортировка по:</b>
      <span onClick={() => setOpen(!open)}>{sort.name}</span>
      <div className={styles.popup}>
        {open && (
          <div className={`${open ? "visible" : ""}`}>
            <ul>
              {list.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => {
                    dispatch(setSort(obj));
                    setOpen(false);
                  }}
                  className={
                    sort.sortProperty === obj.sortProperty ? "active" : ""
                  }
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <span onClick={() => dispatch(setDesc(!desc))}>{desc ? "↓" : "↑"}</span>
    </div>
  );
};

export default Sort;
