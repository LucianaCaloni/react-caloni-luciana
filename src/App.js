import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexto/CartContext";
import CartView from "./components/CartView/CartView";
import Footer from "./components/Footer/Footer";
import Faq from "./pages/Faq";
import SobreNosotros from "./pages/SobreNosotros";
import Contact from "./pages/Contact";


function App() {

  const h1Style = {
    color: "#fff7c0",
    display: "flex",
    justifyContent: "center",
    fontSize: "3rem",
  };

  return (
    <div className="App">
      <header className="App-header">
        <CartProvider>
          
          <BrowserRouter>
            
            <NavBar />
            <h1 style={h1Style}>Tienda de productos para gatos</h1>
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer gretting="Bienvenidos a la tienda" />
                }
              ></Route>
              <Route
                path="/Catalogo"
                element={<ItemListContainer gretting="Catalogo" />}
              ></Route>
              <Route
                path="/category/:categoryId"
                element={
                  <ItemListContainer gretting="Categoria de productos" />
                }
              ></Route>
              <Route
                path="/item/:id"
                element={
                  <ItemDetailContainer gretting="Detalle del producto" />
                }
              ></Route>
              <Route path="/cart"  element={<CartView/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/Faq" element={<Faq />}></Route>
              <Route path="/Sobrenosotros" element={<SobreNosotros/>}></Route>
            </Routes>
            <Footer/>
          
          </BrowserRouter>
        </CartProvider>
      </header>
    </div>
  );
}

export default App;
