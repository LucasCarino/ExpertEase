import React, { useState } from "react";
// import DateRangePicker from "../components/DateRangePicker";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DialogEditarClase(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  let Categories = [
    { name: "Educación" },
    { name: "Tutoría" },
    { name: "Coaching" },
    { name: "Hogar" },
    { name: "Deportes" },
    { name: "Música" },
    { name: "Otro servicio" },
  ];

  let Duration = [
    { name: "Evento único" },
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
    { name: "Semanal" },
    { name: "Mensual" },
  ];

  const createService = () => {
    alert("clase modificada!")
  }

  return (
    <div>
      <button
        onClick={openDialog}
        className="mx-2 bg-charcoal-400 w-5 h-5 lg:w-8 lg:h-8 rounded-md hover:bg-charcoal-300 duration-100"
        type="button"
      >
        <FontAwesomeIcon icon={faPencil} />
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center z-[100] overflow-y-auto">
          <div className="bg-white px-6 p-4 py-4 rounded mx-2 md:mx-0  shadow-md w-full lg:w-4/12 md:h-[700px] overflow-y-auto">
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
                Editar servicio
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
                <div className="my-4">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Foto de portada
                  </label>
                  <input
                    class=" block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                </div>
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
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
                  <div>
                    <label
                      for="date"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Duración
                    </label>
                    {/* <DateRangePicker /> */}
                    <select
                      id="duration"
                      className=" bg-gray-50 border mb-5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option disabled selected value="">
                        Selecciona la duración...
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
                      for="date"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Frecuencia
                    </label>
                    {/* <DateRangePicker /> */}
                    <select
                      id="frequency"
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
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Ubicación
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Calle 123"
                  ></input>
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
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta possimus exercitationem, eligendi qui reiciendis omnis cump"
                  ></textarea>
                </div>
              </div>
            </form>
            <button
              className="float-right hover:bg-charcoal-500 bg-charcoal-400 ease-in-out duration-200 p-1 px-2 rounded"
              onClick={createService}
            >
              Guardar
            </button>
            <button
              className="float-right hover:text-gray-400 ease-in-out duration-200 py-1 px-2"
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

export default DialogEditarClase;
