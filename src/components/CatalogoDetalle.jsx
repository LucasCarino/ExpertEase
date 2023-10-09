import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { faDollarSign, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Servicios from "./data/Servicios.json";
import DialogoDetalle from "./DialogoDetalle";

function CatalogoServicio(props) {
  const { id } = useParams();
  const servicio = Servicios.servicios[parseInt(id)];

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const renderTipoServicio = (item) => {
    switch (item.tipo) {
      case 1:
        return (
          <div>
            <p className="font-semibold text-sandy-brown-500">Nuevo!</p>
          </div>
        );
      case 2:
        return (
          <div>
            <p className="font-semibold text-jungle-green-500">
              Descuento exclusivo!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  if (!servicio) {
    return (
      <div className="px-4 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
        <h1>Servicio no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
      <section className="py-0 md:py-10 overflow-hidden bg-white dark:bg-gray-800 rounded shadow-inner px-2 md:px-0">
        <div className="lg:px-8 py-4 mx-auto lg:py-8 md:px-6">
          <div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 ">
                <div className="overflow-hidden h-full">
                  <div className="h-full mb-6 lg:mb-10">
                    <img
                      src={process.env.PUBLIC_URL + servicio.imagen}
                      className="object-cover w-full h-full rounded "
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-5">
                  <div className="pb-6 mb-4 border-b border-gray-200 dark:border-gray-700">
                    {renderTipoServicio(servicio)}
                    <h2 className="max-w-xl mt-2 text-xl font-bold dark:text-gray-300 md:text-4xl">
                      {servicio.titulo}
                    </h2>
                    <div>
                      <p className="mb-4 text-gray-700 dark:text-gray-400">
                        A cargo de{" "}
                        <span
                          className="font-semibold hover:underline cursor-pointer"
                          onClick={openDialog}
                        >
                          {servicio.nombre}
                        </span>
                      </p>
                      {isOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center z-[100]">
                          <div className="bg-white px-6 p-4 py-4 rounded h-[600px] shadow-md lg:w-5/12 overflow-y-auto">
                            <form
                              className="w-full"
                              action="#"
                              id="secondForm"
                              method="post"
                              onSubmit={(e) => {
                                e.preventDefault();
                              }}
                            >
                              <div className="relative">
                                <h1 className="text-center text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5 border-b border-gray-200 pb-2">
                                  Información del experto
                                </h1>
                                <button
                                  className="hover:text-gray-400 ease-in-out duration-200 absolute top-0 right-0"
                                  onClick={closeDialog}
                                >
                                  X
                                </button>
                              </div>
                              <div>
                                <label
                                  for="name"
                                  className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                  Nombre
                                </label>
                                <p className="pt-2 pb-4 px-2">
                                  {servicio.nombre}
                                </p>
                              </div>
                              <div>
                                <label
                                  for="degrees"
                                  className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                  Título
                                </label>
                                <p className="pt-2 pb-4 px-2">
                                  {servicio.experiencia}
                                </p>
                              </div>
                              <div>
                                <label
                                  for="reputation"
                                  className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                  Reputación
                                </label>
                                <div class="flex items-center space-x-1 pl-2 mb-4 pt-2">
                                  <svg
                                    class="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-4 h-4 text-gray-300 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <label
                                  for="comments"
                                  className="block text-sm font-medium text-gray-900 mb-4"
                                >
                                  Comentarios (20)
                                </label>
                                <div className="mb-2">
                                  <textarea
                                    placeholder="Este experto me parece..."
                                    className="w-full bg-gray-100 text-sm rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-base focus:outline-none focus:bg-white"
                                  ></textarea>
                                </div>
                                <div className="flex px-0">
                                  <button className="px-6 py-2 rounded  text-white text-sm bg-charcoal-500 hover:bg-charcoal-700 duration-200 ease-in-out">
                                    Comentar
                                  </button>
                                </div>

                                <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                                  <footer class="flex justify-between items-center mb-2">
                                    <div class="flex items-center">
                                      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                        <img
                                          class="mr-2 w-6 h-6 rounded-full"
                                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                          alt="Michael Gough"
                                        />
                                        Michael Gough
                                      </p>
                                      <p class="text-sm text-gray-600 dark:text-gray-400">
                                        <time
                                          pubdate
                                          datetime="2022-02-08"
                                          title="February 8th, 2022"
                                        >
                                          Feb. 8, 2022
                                        </time>
                                      </p>
                                    </div>
                                    <button
                                      id="dropdownComment1Button"
                                      data-dropdown-toggle="dropdownComment1"
                                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                      type="button"
                                    >
                                      <svg
                                        class="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 16 3"
                                      >
                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                      </svg>
                                      <span class="sr-only">
                                        Comment settings
                                      </span>
                                    </button>
                                    <div
                                      id="dropdownComment1"
                                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                    >
                                      <ul
                                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton"
                                      >
                                        <li>
                                          <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                          >
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                          >
                                            Remove
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                          >
                                            Report
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </footer>
                                  <p class="text-gray-500 dark:text-gray-400">
                                    Very straight-to-point article. Really worth
                                    time reading. Thank you! But tools are just
                                    the instruments for the UX designers. The
                                    knowledge of the design tools are as
                                    important as the creation of the design
                                    strategy.
                                  </p>
                                  <div class="flex items-center mt-4 space-x-4">
                                    <button
                                      type="button"
                                      class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                                    >
                                      <svg
                                        class="mr-1.5 w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 18"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                                        />
                                      </svg>
                                      Reply
                                    </button>
                                  </div>
                                </article>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <p className="max-w-md mb-4 text-gray-700 dark:text-gray-400">
                        {servicio.descripcion}
                      </p>
                    </div>
                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          className="ml-0.5 mr-0.5"
                          size="md"
                          icon={faDollarSign}
                        />
                        {servicio.precio}
                      </span>
                    </p>
                    {servicio.tipo === 2 && (
                      <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                        $1500.00
                      </span>
                    )}
                  </div>
                  <div className="pb-0 md:pb-6 mb-8 border-none md:border-b border-gray-300 dark:border-gray-700 ">
                    <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                      Duración
                    </h2>
                    <p className="max-w-md mb-4 md:mb-8 text-gray-700 dark:text-gray-400">
                      <span>{servicio.duracion}</span>
                    </p>
                    <div className="grid grid-cols-5 md:flex md:flex-wrap -mb-2 gap-1">
                      {servicio.frecuencias.map((frecuencia, index) => (
                        <button
                          type="button"
                          disabled={!frecuencia.disponible}
                          className={`py-1 mb-2 mr-0 md:mr-1 border w-auto md:w-11  rounded  text-white ${
                            frecuencia.disponible
                              ? "bg-slate-600 hover:bg-charcoal-300 ease-in-out duration-150"
                              : "bg-gray-300"
                          }`}
                        >
                          {frecuencia.dia}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-nowrap items-center ">
                    <div className="mb-4 mr-2 lg:mb-0 w-full md:w-auto">
                      <DialogoDetalle />
                    </div>
                    <div className="mb-4 lg:mb-0">
                      <button
                        className={`bg-sandy-brown-600 hover:bg-sandy-brown-700 flex-grow text-xs lg:text-sm text-white md:py-2 py-3 px-3 rounded  duration-500`}
                      >
                        <FontAwesomeIcon icon={faHeart} size="md" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CatalogoServicio;
