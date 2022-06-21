//los componentes tienen que ir con PascalCase//
//exportrlo
//iportarlo en app
import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "../../pages/contact";

export default function NavBar() {
  const navStyle = {
    color: "violet",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: "1.5rem",
    backgroundColor: "yellow",
    padding:"1rem",
  };

  return (
    <nav className="navPrincipal">
      <ul className="navList" style={navStyle}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/catalogo">Catalogo</NavLink>
        </li>
        <li>
          <NavLink to="/category/puertas">Puertas</NavLink>
        </li>
        <li>
          <NavLink to="/category/hamaca">Hamacas</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacto</NavLink>
        </li>

        <CartWidget />
      </ul>
    </nav>
  );
}
