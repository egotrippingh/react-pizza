import React from 'react';
import { Header } from './components/Header/Header.jsx'
import {Pizza} from "./components/Pizza/Pizza.jsx";
import {Sort} from "./components/Sort/Sort.jsx";
import './App.css'


export const App = () => {



  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    const pizzas = () => fetch("https://68e2aa938e14f4523dab802e.mockapi.io/")
      .then((res) => res.json())
      .then((arr) => setItems(arr))
  }, [])

  return (<>
      <div className="container">
        <Header />
        <Sort />
        <div className="pizza-container">
          {pizzas.map(obj => (<Pizza key={obj.id} {...obj}
          />))}
        </div>
      </div>


    </>
  )
}




