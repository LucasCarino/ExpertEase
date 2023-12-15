import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Servicios from "./data/Servicios.json";
import { Rating, initTE } from "tw-elements";
import { Link } from "react-router-dom";
import { faUserTie, faDollarSign } from "@fortawesome/free-solid-svg-icons";
initTE({ Rating });

const Catalogo = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  let Categories = [
    { name: "Música" },
    { name: "Matemática" },
    { name: "Literatura" },
    { name: "Historia" },
    { name: "Biología" },
    { name: "Arte" },
    { name: "Inglés" },
  ];

  const renderTipoServicio = (servicio) => {
    switch (servicio.tipo) {
      case 0:
        return <span></span>;
      case 1:
        return (
          <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-sandy-brown-500 px-3 py-2 text-sm font-medium text-white">
            <div>
              <h2>Nuevo!</h2>
            </div>
          </span>
        );
      case 2:
        return (
          <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-jungle-green-500 px-3 py-2 text-sm font-medium text-white">
            <div>
              <h2>Descuento!</h2>
            </div>
          </span>
        );
      default:
        return null;
    }
  };

  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    setServicios(Servicios.servicios);
  }, []);

  return (
    <div className=" px-8 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
      <div className="mb-2 flex flex-row ">
        <div
          className=" text-gray-600 focus-within:text-gray-400 mr-2"
          onClick={handleClick}
        >
          <button className="py-2 px-3 text-sm text-white bg-jungle-green-800 rounded-lg focus:outline-none active:bg-white active:text-gray-900 duration-500">
            <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
        <div className="text-gray-600 w-full md:w-5/12 focus-within:text-gray-400">
          <input
            type="search"
            className="py-2 text-sm bg-jungle-green-800 rounded-l-lg pl-3 pr-3 focus:outline-none focus:bg-white focus:text-gray-900 duration-500 w-full"
            placeholder="Servicio o experto"
          />
        </div>
        <div className=" text-gray-600 focus-within:text-gray-400">
          <button className="py-2 px-3 text-sm text-white bg-jungle-green-800 rounded-r-lg focus:outline-none active:bg-white active:text-gray-900 duration-500">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div
        className={`duration-300 rounded-lg mb-5 px-5 py-2 flex w-full bg-zinc-100 ease-in-out overflow-hidden shadow-inner ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <form className="grid grid-cols-2 w-full gap-x-6">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Categoria
            </label>
            <select
              id="categories"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected value="">
                Selecciona una categoría...
              </option>
              {Categories.map((category, key) => (
                <option key={key} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tipo de clase
            </label>
            <input
              type="text"
              name="type"
              id="type"
              className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Música"
            ></input>
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Frecuencia
            </label>
            <input
              type="text"
              name="frequency"
              id="frequency"
              className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Frecuencia"
            ></input>
          </div>
          <fieldset>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Calificación
            </label>

            <ul
              className="my-1 flex list-none gap-1 p-0"
              data-te-rating-init
              data-te-readonly="true"
              data-te-value="3"
            >
              <li>
                <span
                  className="text-primary [&>svg]:h-5 [&>svg]:w-5"
                  data-te-rating-icon-ref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <span
                  className="text-primary [&>svg]:h-5 [&>svg]:w-5"
                  data-te-rating-icon-ref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <span
                  className="text-primary [&>svg]:h-5 [&>svg]:w-5"
                  data-te-rating-icon-ref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <span
                  className="text-primary [&>svg]:h-5 [&>svg]:w-5"
                  data-te-rating-icon-ref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <span
                  className="text-primary [&>svg]:h-5 [&>svg]:w-5"
                  data-te-rating-icon-ref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-5">
        {servicios.map((servicio, key) => (
          <li
            key={servicio.id}
            className="text-m lg:text-sm lg:mb-5 lg:mt-0 my-7 lg:font-normal list-none"
          >
            <div className="mx-auto w-full max-w-sm rounded-lg bg-white p-2.5 shadow-inner">
              <Link
                to={`/Catalogo/${servicio.id}`}
                className="inline-block h-64 transform transition-transform duration-300 ease-in-out w-full mb-3"
              >
                <div className="relative flex h-200 justify-center overflow-hidden rounded-lg">
                  <div className="w-full h-48 transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <img
                      src={process.env.PUBLIC_URL + servicio.imagen}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  {renderTipoServicio(servicio)}
                </div>

                <div className="mt-4">
                  <div className="flex items-center">
                    <div>
                      <h2 className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg hover:underline">
                        {servicio.titulo}
                      </h2>
                      <p className="mt-2 line-clamp-1 text-sm text-gray-800">
                        {servicio.ubicacion}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="mt-2 border-t border-gray-200 pt-3 h-28">
                {servicio.descripcion}
              </div>
              <div className="mt-2 grid grid-cols-1 grid-rows-2 border-t border-gray-200 pb-3 pt-3">
                <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                  <FontAwesomeIcon
                    className="mr-2"
                    size="lg"
                    icon={faUserTie}
                  />
                  <span className="xl:mt-0 text-md">{servicio.nombre}</span>
                </p>
                <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                  <FontAwesomeIcon
                    className="ml-0.5 mr-2"
                    size="lg"
                    icon={faDollarSign}
                  />
                  <span className="mt-0 text-lg text-black font-semibold ml-0.5">
                    {servicio.precio}
                  </span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
