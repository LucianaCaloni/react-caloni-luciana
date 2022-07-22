//los componentes tienen que ir con PascalCase//
//exportrlo
//iportarlo en app
import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "../../pages/Contact";

export default function NavBar() {
  const navStyle = {
    // color: "violet",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: "2.5rem",
    backgroundColor: "yellow",
    padding:"1rem",
  };

  return (
    <nav className="navPrincipal text-pink-500">
      <ul className="items-center font-mediumnavList" style={navStyle}>
        <li >
          <NavLink to="/"><img className="w-1/2 hover:scale-125"  src="https://res.cloudinary.com/di9ergurx/image/upload/v1658127155/proyecto/latte_and_mocca_logoasd_rq4xlp.png" alt="logo"></img></NavLink>
        </li>

        <li className="hover:text-purple-500">
          <NavLink to="/catalogo">Catalogo</NavLink>
        </li>
        <li className="hover:text-purple-500">
          <NavLink to="/category/puertas">Puertas</NavLink>
        </li>
        <li className="hover:text-purple-500">
          <NavLink to="/category/hamaca">Hamacas</NavLink>
        </li>
        <li className="hover:text-purple-500">
          <NavLink to="/category/torre">Torres</NavLink>
        </li>
        <li className="hover:text-purple-500">
          <NavLink to="/category/arenero">Areneros</NavLink>
        </li>
        <li className="hover:text-purple-500">
          <NavLink to="/category/misc">Miscelaneos</NavLink>
        </li>
        
        <li className="hover:text-purple-500">
          <NavLink to="/contact">Contacto</NavLink>
        </li>
        <li className="hover:text-purple-500">
          <NavLink to="/Faq">Faq</NavLink>
        </li>

        <CartWidget/>
      </ul>
    </nav>
  );
}
