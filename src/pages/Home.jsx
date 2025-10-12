import React from "react";
import Pizza from "../components/Pizza";
import Sort from "../components/Sort";
import PizzaSkeleton from "../components/PizzaSkeleton";
import Categories from "../components/Categories";

const Home = ({ searchValue }) => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [descSort, setDescSort] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProp: "rating",
  });

  const pizzasItems = pizzas.map((obj) => <Pizza key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));

  const search = searchValue ? `&search=${searchValue}` : "";

  React.useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://68e2aa938e14f4523dab802e.mockapi.io/items?${
            categoryId > 0 ? `category=${categoryId}&` : ""
          }sortBy=${sortType.sortProp}&order=$
          {descSort ? "desc" : "asc"}
          ${search}`
        );
        if (!res.ok) {
          throw new Error("Ошибка при подключении к серверу");
        }
        const data = await res.json();
        setPizzas(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPizzas();
    window.scrollTo(0, 0);
  }, [categoryId, sortType.sortProp, descSort, searchValue]);

  return (
    <>
      <div className="filters-row">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort
          value={sortType}
          onChangeSort={(obj) => setSortType(obj)}
          desc={descSort}
          setDescSort={() => setDescSort(!descSort)}
        />
      </div>
      <div className="pizza-container">
        {isLoading ? skeletons : pizzasItems}
      </div>
    </>
  );
};

export default Home;
