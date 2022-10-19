import React from "react";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/IntemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";



const App = () => {

  const informationPage = "Wellcome to Heredero, it will be available soon";

  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/categoria/:id" element={<ItemListContainer greeting={informationPage} />}/>
    {/* <ItemListContainer textInfo={informationPage}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App

