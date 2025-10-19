import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";

import "./App.css";

export const SearchContext = React.createContext();

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="container">
        <div className="topbar">
          <Header />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SearchContext.Provider>
  );
};

export default App;
