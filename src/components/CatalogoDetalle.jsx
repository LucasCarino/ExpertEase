import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { faDollarSign, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Servicios from "./data/Servicios.json";
import DialogoDetalle from "./DialogoDetalle";

function CatalogoServicio() {
  const { id } = useParams();
  const servicio = Servicios.servicios[parseInt(id)];

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
            <p className="font-semibold text-jungle-green-500">Descuento exclusivo!</p>
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
      <section className="py-0 md:py-10 overflow-hidden bg-white dark:bg-gray-800 rounded  shadow-inner px-2 md:px-0">
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
                    <p className="mb-4 text-gray-700 dark:text-gray-400">
                      A cargo de {servicio.nombre}
                    </p>
                    {/* <div className="flex flex-wrap items-center mb-6"> */}
                    {/* <ul className="flex mb-4 mr-2 lg:mb-0">
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                      </ul> */}
                    {/* <a
                        className="mb-4 text-xs underline dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                        href="#"
                      >
                        Be the first to review the product
                      </a> */}
                    {/* </div> */}
                    <div className="border-t border-gray-200 pt-4">
                      <p className="max-w-md mb-4 text-gray-700 dark:text-gray-400">
                        {servicio.descripcion}
                      </p>
                    </div>
                    {/* <div className="p-4 mb-8 border border-gray-300 dark:border-gray-700">
                      <h2 className="mb-4 text-xl font-semibold dark:text-gray-400">
                        Real time{" "}
                        <span className="px-2 bg-blue-500 text-gray-50">
                          26
                        </span>
                        visitors right now!{" "}
                      </h2>
                      <div className="mb-1 text-xs font-medium text-gray-700 dark:text-gray-400">
                        Hurry up! left 23 in Stock
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-600">
                        <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full w-1/2"></div>
                      </div>
                    </div> */}
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
                  {/* <div className="mb-8">
                    <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                      Color
                    </h2>
                    <div className="flex flex-wrap -mb-2">
                      <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                        <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                      </button>
                      <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                        <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                      </button>
                      <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      </button>
                      <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                        <div className="w-6 h-6 rounded-full bg-sky-400"></div>
                      </button>
                    </div>
                  </div> */}
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
          <form class="border-t mt-5 border-gray-300 mx-auto">
            <div class="mb-2 mt-2">
              <textarea
                placeholder="Este servicio me parece..."
                class="w-full mt-5 bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium focus:outline-none focus:bg-white"
              ></textarea>
            </div>
            <div class="flex justify-end px-0 md:px-4">
              <button className="px-6 py-2 rounded  text-white text-sm bg-charcoal-500 hover:bg-charcoal-700 duration-200 ease-in-out">
                Comentar
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CatalogoServicio;
