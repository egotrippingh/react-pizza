import React from "react";
import Pagination from "../components/Pagination";
import Pizza from "../components/Pizza";
import Sort from "../components/Sort";
import PizzaSkeleton from "../components/PizzaSkeleton";
import Categories from "../components/Categories";
import { SearchContext } from "src/app/App";
import { useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  // Используем Redux вместо локального состояния
  const { categoryId, sort, desc } = useSelector((state) => state.filter);
  const pizzasItems = pizzas.map((obj) => <Pizza key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));
  const search = searchValue ? `&search=${searchValue}` : "";

  // Смена страницы при смене категории или поискового запроса
  React.useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, searchValue]);

  // Загрузка пицц через API
  React.useEffect(() => {
    const axiosGetPizzas = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://68e2aa938e14f4523dab802e.mockapi.io/items?page=${currentPage}&limit=6&${
            categoryId > 0 ? `category=${categoryId}&` : ""
          }sortBy=${sort.sortProperty}&order=${desc ? "desc" : "asc"}${search}`
        );

        setPizzas(response.data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);

        if (error.response?.status === 404) {
          setPizzas([]);
        } else {
          console.error("Network or server error:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    axiosGetPizzas();
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, desc, searchValue, currentPage]);

  return (
    <>
      <div className="filters-row">
        <Categories />
        <Sort />
      </div>
      <div className="pizza-container">
        {isLoading ? skeletons : pizzasItems}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
