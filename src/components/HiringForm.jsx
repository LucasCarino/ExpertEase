import React from "react";
import { postHiring } from "../helpers/postHiring";

export const HiringForm = ({ serviceId }) => {
  const onSubmitReviewForm = (e) => {
    e.preventDefault();
    const phone = e.currentTarget.elements.phone.value;
    const time = e.currentTarget.elements.time.value;
    const email = e.currentTarget.elements.email.value;
    const comment = e.currentTarget.elements.comment.value;
    (async () => {
      const response = await postHiring(phone, time, email, comment, serviceId);
      console.log("🚀 ~ file: HiringForm.jsx:13 ~ response:", response)
      if (response) {
        alert(
          "Formulario de contrato enviado. Debes esperar a que el administrador del servicio lo apruebe."
        );
      }
    })();
    e.target.reset();
  };
  return (
    <form
      className="w-full"
      action="#"
      id="secondForm"
      method="post"
      onSubmit={onSubmitReviewForm}
    >
      <div>
        <label
          for="phone"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Teléfono
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="11 1234-5678"
        ></input>
      </div>
      <div>
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="Juan@correo.com"
        ></input>
      </div>
      <div>
        <label
          for="time"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Horario para que te contacte el experto
        </label>
        <textarea
          type="time"
          name="time"
          id="time"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Me gustaría que me llames de lunes a viernes de 8 a 10 hs"
        ></textarea>
        <label
          for="comment"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          ¿Por qué te interesa este servicio?
        </label>
        <textarea
          name="comment"
          id="comment"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="Me interesa porque..."
        ></textarea>

        <button className="px-6 py-2 rounded  text-white text-sm bg-charcoal-500 hover:bg-charcoal-700 duration-200 ease-in-out">
          Enviar
        </button>
      </div>
    </form>
  );
};
