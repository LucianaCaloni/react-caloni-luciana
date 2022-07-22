import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer class=" bottom-0  w-full p-4  shadow md:px-6 md:py-8 bg-sky-200">
      <div class="sm:flex sm:items-center sm:justify-between text-2xl">
        <NavLink to="/">
          <img
            className="flex items-center mb-4 sm:mb-0 w-1/3"
            src="https://res.cloudinary.com/di9ergurx/image/upload/v1658127155/proyecto/latte_and_mocca_logoasd_rq4xlp.png"
            alt="logo"
          ></img>
        </NavLink>
        <div className=" flex w-3/12 justify-around text-zinc-900 mb-6 sm:mb-0 ">
          <a href="https://www.instagram.com" className="hover:text-pink-500 ">
          <i class="fa-brands fa-instagram"> </i>
          </a>
          <a href="https://www.whatsapp.com/" className="hover:text-pink-500 ">
          <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/" className="hover:text-pink-500 ">
          <i class="fa-brands fa-facebook"></i>
          </a>
        </div>
        <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
          <NavLink to="/contact">
          <li className="mr-4 text-2xl text-zinc-900 hover:underline hover:text-pink-500  md:mr-6 ">
            Contacto
          </li>
          </NavLink>
          <NavLink to="/Sobrenosotros">
          <li className="mr-4 text-2xl text-zinc-900 hover:underline hover:text-pink-500  md:mr-6 ">
            Sobre nosotros
          </li>
          </NavLink>
          <NavLink to="/Faq">
          <li className="mr-4 text-2xl text-zinc-900 hover:underline hover:text-pink-500  md:mr-6 ">
            Faq
          </li>
          </NavLink>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-2xl text-pink-500  sm:text-center ">
        © 2022 Copyright: Caloni Luciana. Proyecto Coder House ReactJS.
      </span>
    </footer>
  );
}

export default Footer;
