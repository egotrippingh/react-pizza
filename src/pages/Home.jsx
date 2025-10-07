import React from "react";
import Pizza from "../components/Pizza";
import Sort from "../components/Sort";
import PizzaSkeleton from "../components/PizzaSkeleton";
import Categories from "../components/Categories";


const Home = () => {


    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
      const fetchPizzas = async () => {
        try {
          const res = await fetch(
            "https://68e2aa938e14f4523dab802e.mockapi.io/items"
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
    }, []);

    return (
      <>
        <div className="filters-row">
          <Categories />
          <Sort />
        </div>
        <div className="pizza-container">
          {isLoading
            ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
            : pizzas.map((obj) => <Pizza key={obj.id} {...obj} />)}
        </div>
      </>
    );
}

export default Home;