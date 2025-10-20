import React from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from '../redux/slices/filterSlice'

import Header from "../components/Header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";


import "./App.css";




export const SearchContext = React.createContext();

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");
  
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
        <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>




    // <SearchContext.Provider value={{ searchValue, setSearchValue }}>
    //   <div className="container">
    //     <div className="topbar">
    //       <Header />
    //     </div>
    //   </div>
    //   <Routes>
    //     <Route path="/" element={<Home searchValue={searchValue} />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </SearchContext.Provider>
  );
};

export default App;
