import './App.css'
import { Header } from './components/Header/Header.tsx'
import {Pizza} from "./components/Pizza/Pizza.jsx";

import pizzas from './db/pizza.json'


export const App = () => {


  return (<>
      <div className="container">
        <Header />
        <div className="pizza-container">
          {pizzas.map(obj => (<Pizza key={obj.id} {...obj}
          />))}
        </div>
      </div>


    </>
  )
}




