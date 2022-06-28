import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import contact from "./pages/contact";
import { CartProvider } from "./contexto/CartContext";

function App() {
  const h1Style = {
    color: "#fff7c0",
    display: "flex",
    justifyContent: "center",
    fontSize: "2rem",
  };

  return (
    <div className="App">
      <header className="App-header">
        <CartProvider>
          {/* Cuando envolvemos en el BrowserRouter todo los demas son childrens */}
          <BrowserRouter>
            {/* El Navbar va fuera de Routes porque queremos tenerlo siempre */}
            <NavBar />
            <h1 style={h1Style}>Tienda productos para gatos</h1>
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
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/contact" element={<contact />}></Route>
            </Routes>
          
          </BrowserRouter>
        </CartProvider>
      </header>
    </div>
  );
}

export default App;
