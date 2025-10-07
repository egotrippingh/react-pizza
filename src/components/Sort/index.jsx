import React from "react";
import "./Sort.scss";

const Sort = ({}) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const list = ["популярности", "цене", "алфавиту"];

  return (
    <div>
      <b>Сортировка по:</b>
      <span onClick={() => setOpen(!open)}>{list[selected]}</span>
      <div className="sort-popup">
        {open && (
          <div className={`${open ? "visible" : ""}`}>
            <ul>
              {list.map((name, i) => (
                <li
                  key={i}
                  onClick={() => (setSelected(i), setOpen(false))}
                  className={selected === i ? "active" : ""}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;


