import React from 'react';
import { Header } from './components/Header/Header.jsx'
import {Pizza} from "./components/Pizza/Pizza.jsx";
import {Sort} from "./components/Sort/Sort.jsx";
import './App.css'


export const App = () => {

  const [pizzas, setPizzas] = React.useState([])

React.useEffect(() => {
  const fetchPizzas = async () => {
    try {
      const res = await fetch("https://68e2aa938e14f4523dab802e.mockapi.io/items")

      if (!res.ok) {
        throw new Error ("Ошибка при подключении к серверу")
      }
     
      const data = await res.json()
      setPizzas(data) 
    } catch (err) {
      console.error(err)
    }
  }

  fetchPizzas()
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




