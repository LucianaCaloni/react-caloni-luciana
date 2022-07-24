import React, { useState } from "react";
import Swal from "sweetalert2";



const Contact = () => {
  
  const [contact, setContact] = useState({
    user: "",
    email: "",
    phone: "",
    msj: "",
  });
  const ValForm = () => {
    if (
      (contact.user === "") |
      (contact.phone === "") |
      (contact.email === "") |
      (contact.msj === "")
    ) {
      return true;
    }
  };
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [field]: value,
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: "Mensaje enviado! Nos pondremos en contacto lo mas rapido posible",
      confirmButtonText: "Volver al Inicio",
    }).then(() => {
      return (window.location.href = "/");
    });
  };
  return (
    <form action="" className="container mx-auto flex flex-col sm:flex-nowrap flex-wrap items-center text-center m-8 space-x-5 bg-blue-200 rounded-lg">
      <span>
      <h1 className="text-3xl">Contactanos!</h1>
      </span>
      <label htmlFor="name" className="text-2xl">Nombre</label>
      <input type="text" name="name" className="rounded-md" onChange={handleChange} required/>

      <label htmlFor="email" className="text-2xl" >E-mail</label>
      <input type="email" name="email" className="rounded-md" onChange={handleChange} required />

      <label htmlFor="phone" className="text-2xl">Telefono</label>
      <input type="number"name="phone" className="rounded-md" onChange={handleChange} required />

      <label htmlFor="mensj" className="text-2xl" >Mensaje</label>
      <textarea name="mensj"cols="30"rows="10"className="text-2xl"onChange={handleChange}></textarea>
      <button className="text-2xl rounded-lg hover:bg-violet-300 bg-red-300 m-2 p-2 " onClick={handleForm} disabled={ValForm()}>
        Send
      </button>
    </form>
  );
};

export default Contact;
