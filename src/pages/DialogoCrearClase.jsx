import React, { useState } from "react";

function DialogCrearClase(props) {
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
        className={`bg-charcoal-600 hover:bg-charcoal-700 w-full py-2 md:w-auto flex-grow md:text-xs text-md lg:text-sm text-white px-6 rounded duration-500`}
      >
        Crear Clase
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
                Crea una nueva clase/curso
              </h1>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Título
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Clases de..."
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Precio
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="$100"
                ></input>
              </div>
              <div>
                <label
                  for="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Descripción de la clase/curso
                </label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Me gustaría que me llames de lunes a viernes de 8 a 10 hs"
                ></textarea>
                <label
                  for="date"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Duración
                </label>
                <div class="relative w-full mb-5">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    datepicker
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Selecciona la fecha de inicio y fin"
                  />
                </div>
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

export default DialogCrearClase;
