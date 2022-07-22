import React from "react";

function Faq() {
  return (
    <div className=" m-8 ">
      <h1 className=" m-8 text-center text-4xl">Preguntas frecuentes</h1>
      <div className="text-center divide-y divide-cyan-400  space-y-7 ">
        <h2 className="m-10 rounded-lg shadow-xl bg-fuchsia-200 text-pink-500 text-3xl">
          Cómo comprar
          <p className="text-3xl text-purple-500">
            Una vez que hayas elegido los productos que quieras, completa el
            formulario con tus datos y haz click en el boton de finalizar
            compra. Se te dará el número de compra y nos pondremos en contacto
            con e-mail.
          </p>
        </h2>

        <h2 className="m-10 rounded-lg shadow-xl bg-fuchsia-200 text-pink-500 text-3xl">
          Cuánto tardará en llegarme el pedido{" "}
          <p className="text-3xl text-purple-500 ">
            Una vez hecha la compra solamente tenes que esperar entre 24 a 72
            hrs a que se procese la transacción, en la cual te llegará un mail
            para avisarte. A partir de que este acreditado. En los proximos dias
            lo empaquetares y lo enviaremos al destino. Depende tu zona tardará
            entre 3 a 4 días.
          </p>
        </h2>

        <h2 className="m-10 rounded-lg shadow-xl bg-fuchsia-200 text-pink-500 text-3xl">
          Formas de pago
          <p className="text-3xl text-purple-500 ">
            Formas de Pago Podes abonar tu compra por transferencia bancaria o
            con tarjetas de credito y/o debito a traves de Mercadopago.
          </p>
        </h2>

        <h2 className="m-10 rounded-lg shadow-xl bg-fuchsia-200 text-pink-500 text-3xl">
          Si el producto llega roto o tengo algun inconveniente?
          <p className="text-3xl text-purple-500 ">
            Podes contactarte con nosotros vía e-mail o con un numero que se te
            brindara en el momento de la compra.
          </p>
        </h2>
      </div>
    </div>
  );
}

export default Faq;
