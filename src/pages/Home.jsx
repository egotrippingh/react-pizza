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

  // Смена страницы при смене категории или поискового запроса
  React.useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, searchValue]);

  // Загрузка пицц через API
  React.useEffect(() => {
    const axiosGetPizzas = async () => {
      setIsLoading(true);

      try {
        // Если есть поисковый запрос с категорией, получаем все данные категории и фильтруем на клиенте
        // так как MockAPI некорректно обрабатывает search вместе с category
        if (searchValue && categoryId > 0) {
          // Получаем все данные категории без пагинации
          const url = `https://68e2aa938e14f4523dab802e.mockapi.io/items?sortBy=${
            sort.sortProperty
          }&order=${desc ? "desc" : "asc"}&category=${categoryId}`;

          const response = await axios.get(url);
          const allPizzas = response.data;

          // Фильтруем по поисковому запросу на клиенте
          const searchLower = searchValue.toLowerCase();
          const filtered = allPizzas.filter(
            (pizza) =>
              pizza.title.toLowerCase().includes(searchLower) ||
              (pizza.description &&
                pizza.description.toLowerCase().includes(searchLower))
          );

          // Применяем пагинацию на клиенте
          const startIndex = (currentPage - 1) * 6;
          const endIndex = startIndex + 6;
          const paginatedPizzas = filtered.slice(startIndex, endIndex);

          setPizzas(paginatedPizzas);
        } else {
          // Обычный запрос с пагинацией на сервере
          let url = `https://68e2aa938e14f4523dab802e.mockapi.io/items?page=${currentPage}&limit=6&sortBy=${
            sort.sortProperty
          }&order=${desc ? "desc" : "asc"}`;

          // Добавляем параметр category только если выбрана категория
          if (categoryId > 0) {
            url += `&category=${categoryId}`;
          }

          // Добавляем параметр поиска только если есть значение и не выбрана категория
          if (searchValue && categoryId === 0) {
            url += `&search=${encodeURIComponent(searchValue)}`;
          }

          const response = await axios.get(url);
          setPizzas(response.data);
        }
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
