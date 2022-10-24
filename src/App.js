import React from "react";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/IntemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LoadingPage } from "./components/Loading/LoadingPage";
import Items from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {

  const informationPage = "Wellcome to Heredero, it will be available soon";

  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<LoadingPage />}/>
      <Route path="/categoria/:id" element={<ItemListContainer greeting={informationPage} />}/>
    {/* <ItemListContainer textInfo={informationPage}/> */}
      {/* <Route path="/cart" element={<Cart />}/>  */}
      <Route path="/producto/:id" element={<Items />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App

