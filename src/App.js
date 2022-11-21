import React from "react";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/IntemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LoadingPage } from "./components/Loading/LoadingPage";
import Items from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { EventComponent } from "./components/EventCntainer/EventContainer";
import { Users } from "./components/UserInformation/UserAdd";
import { CartProvider } from "./components/Context/CartContesxt";
import ItemCount from "./components/ItemCount/ItemCount";
import Checkout from "./components/Chackout/Checkout";

const App = () => {

  const informationPage = "Wellcome to Heredero, it will be available soon";

  return (
<CartProvider>
  <BrowserRouter>
    <Header>
      <ItemCount/>
    </Header>
    {/* <Users/> */}
    {/* <EventComponent/> */}
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/categoria/:id" element={<ItemListContainer greeting={informationPage} />}/>
    {/* <ItemListContainer textInfo={informationPage}/> */}
      <Route path="/cart" element={<Cart />}/> 
      <Route path="/producto/:id" element={<Items />}/>
      <Route path="/checkout" element={<Checkout />}/>

    </Routes>
  </BrowserRouter>
</CartProvider>

  );
}

export default App

