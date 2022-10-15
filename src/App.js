import React from "react";
import Header from "./components/Header/Header";
import Items from "./components/ItemListContainer/IntemListContainer";




const App = () => {

  const informationPage = "Wellcome to Heredero, it will be available soon";

  return (
  <div>
    <Header />
    <Items textInfo={informationPage}/>
  </div>
  );
}

export default App

