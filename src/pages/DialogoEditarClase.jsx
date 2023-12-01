import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function DialogCrearClase(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const createService = () => {
    alert("creado!")
  }

  let Categories = [
    { name: "Educación" },
    { name: "Tutoría" },
    { name: "Hogar" },
    { name: "Coaching" },
    { name: "Deportes" },
    { name: "Música" },
    { name: "Otro servicio" },
  ];

  let Duration = [
    { name: "Evento único" },
    { name: "1 semana" },
    { name: "1 mes" },
    { name: "2 meses" },
    { name: "3 meses" },
    { name: "4 meses" },
    { name: "5 meses" },
    { name: "6 meses" },
    { name: "1 año" },
    { name: "Indefinido" },
  ];

  let Frequency = [
    { name: "Evento único" },
    { name: "Diario" },
    { name: "Semanal" },
    { name: "Quincena" },
    { name: "Mensual" },
    { name: "Otro" }
  ];

  return (
    <div>
      <button
        onClick={openDialog}
        className={`mx-2 bg-charcoal-400 w-5 h-5 lg:w-8 lg:h-8 rounded-md hover:bg-charcoal-300 duration-100`}
      >
        <FontAwesomeIcon icon={faPencil} />
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center z-[100]">
          <div className="bg-white px-6 p-4 py-4 rounded  shadow-md lg:w-5/12 h-[650px] overflow-y-auto">
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
                Editar Servicio
              </h1>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Servicio
                </label>
                <select
                  id="categories"
                  className=" bg-gray-50 border mb-5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled selected value="">
                    Selecciona un tipo...
                  </option>
                  {Categories.map((category, key) => (
                    <option key={key} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  for="attachment"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Foto de portada
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 rounded-none"
                  id="file_input"
                  type="file"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Clases de canto"
                ></input>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Duración
                    </label>
                    <select
                      id="categories"
                      className=" bg-gray-50 border mb-5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option disabled selected value="">
                        Selecciona un tipo...
                      </option>
                      {Duration.map((duration, key) => (
                        <option key={key} value={duration.name}>
                          {duration.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Frecuencia
                    </label>
                    <select
                      id="categories"
                      className=" bg-gray-50 border mb-5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option disabled selected value="">
                        Selecciona la frecuencia...
                      </option>
                      {Frequency.map((frequency, key) => (
                        <option key={key} value={frequency.name}>
                          {frequency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    for="location"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Ubicación
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Calle 123"
                  ></input>
                </div>

                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Costo
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
                </div>
              </div>
            </form>
            <div className="flex justify-end">
              <button
                className="hover:text-gray-400 ease-in-out duration-200"
                onClick={closeDialog}
              >
                Cerrar
              </button>
              <button
                className="ml-4 bg-charcoal-400 hover:bg-charcoal-500 ease-in-out duration-200 px-1 rounded-sm"
                onClick={createService}
              >
                Guardar
              </button>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
}

export default DialogCrearClase;
