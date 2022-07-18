import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer class=" bottom-0  w-full p-4  shadow md:px-6 md:py-8 bg-sky-200">
      <div class="sm:flex sm:items-center sm:justify-between">
        <NavLink to="/">
          <img
            className="flex items-center mb-4 sm:mb-0 w-1/3"
            src="https://res.cloudinary.com/di9ergurx/image/upload/v1658127155/proyecto/latte_and_mocca_logoasd_rq4xlp.png"
            alt="logo"
          ></img>
        </NavLink>
        <div>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-facebook"></i>

        </div>
        <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
          <li className="mr-4 text-2xl text-zinc-900 hover:underline md:mr-6 ">
            Contacto
          </li>
          <li className="mr-4 text-2xl text-zinc-900 hover:underline md:mr-6 ">
            Sobre nosotros
          </li>
          <li className="mr-4 text-2xl text-zinc-900 hover:underline md:mr-6 ">
            Faq
          </li>
        
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-2xl text-pink-500  sm:text-center ">
        2022. Caloni Luciana. Proyecto Coder House ReactJS.
      </span>
    </footer>
    // <footer className="bg-sky-200">
    //   <div className="text-center font-black">
    //     <h2>Tienda de gatos</h2>
    //   </div>
    //   <div className="flex flex-row">
    //     <span>
    //       <img className="w-1/3" src="https://res.cloudinary.com/di9ergurx/image/upload/v1658127155/proyecto/latte_and_mocca_logoasd_rq4xlp.png"></img>
    //     </span>
    //     <span>
    //       <ul>
    //         <li>asda</li>
    //       </ul>
    //       <ul>
    //         <li>adsd</li>
    //       </ul>
    //       <ul>
    //         <li>adsad</li>
    //       </ul>
    //     </span>
    //      <div className="flex flex-col content-end">
    //       <span>redes sociales</span>
    //       <span>Medios de pago</span>
    //   </div>
    //   </div>

    // </footer>
  );
}

export default Footer;
