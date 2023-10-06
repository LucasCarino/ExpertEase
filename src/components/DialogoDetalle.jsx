import React, { useState } from "react";

function Dialog(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openDialog}
        className={`bg-sandy-brown-600 hover:bg-sandy-brown-700 w-full py-2 md:w-auto flex-grow md:text-xs text-md lg:text-sm text-white px-6 rounded duration-500`}
      >
        Contratar ahora
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center z-[100]">
          <div className="bg-white px-6 p-4 py-4 rounded  shadow-md lg:w-4/12">
            <form
              className="w-full"
              action="#"
              id="secondForm"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h1 className="text-center text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5">
                Ingresa tus datos
              </h1>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan@correo.com"
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Horario para que te contacte el experto
                </label>
                <textarea
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Me gustaría que me llames de lunes a viernes de 8 a 10 hs"
                ></textarea>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ¿Por qué te interesa este servicio?
                </label>
                <textarea
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Me interesa porque..."
                ></textarea>
              </div>
            </form>
            <button
              className="float-right hover:text-gray-400 ease-in-out duration-200"
              onClick={closeDialog}
            >
              Cerrar
            </button>
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dialog;
