import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import contact from "./pages/contact";
function App() {
  const h1Style = {
    color: "#fff7c0",
    display: "flex",
    justifyContent: "center",
    fontSize:"2rem",
  };
  //los componentes siempre con mayusc inicial
  //importamos ItemListContainer y lo renderizmaos
  //dentro de NavBar importamos y mostramos CartWidget
  return (
    <div className="App">
      <header className="App-header">
        {/* Cuando envolvemos en el BrowserRouter todo los demas son childrens */}
        <BrowserRouter>
          {/* El Navbar va fuera de Routes porque queremos tenerlo siempre */}
          <NavBar />
          <h1 style={h1Style}>Tienda productos para gatos</h1>

          {/* En  el componente Routes vamos a tener todas la rutas que vayamos creando */}
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer gretting="Bienvenidos a la tienda" />}
            ></Route>
            <Route
              path="/Catalogo"
              element={<ItemListContainer gretting="Catalogo" />}
            ></Route>
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer gretting="Categoria de productos" />}
            ></Route>

            <Route
              path="/item/:id"
              element={<ItemDetailContainer gretting="Detalle del producto" />}
            ></Route>
            <Route path="/contact" element={<contact />}></Route>
          </Routes>
          {/* Aca  fuera de Routes hacer el footer */}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
