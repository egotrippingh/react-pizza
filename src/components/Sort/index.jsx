import React from "react";
import "./Sort.scss";

const Sort = ({value, onChangeSort, desc, setDescSort}) => {
  const [open, setOpen] = React.useState(false);
  
  const list = [
    { name: "популярности", sortProp: "rating" },
    { name: "цене", sortProp: "price" },
    { name: "алфавиту", sortProp: "title" },
  ];


  return (
    <div>
      <b>Сортировка по:</b>
      <span onClick={() => setOpen(!open)}>{value.name}</span>
      <div className="sort-popup">
        {open && (
          <div className={`${open ? "visible" : ""}`}>
            <ul>
              {list.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => (onChangeSort(obj), setOpen(false))}
                  className={value.sortProp === obj.sortProp ? "active" : ""}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <span onClick={setDescSort}>{desc ? '↓' : '↑'}</span>
    </div>
  );
};

export default Sort;


