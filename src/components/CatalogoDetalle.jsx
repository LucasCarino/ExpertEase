// CatalogoServicio.js
import React from "react";
import { useParams } from "react-router-dom";
import Servicios from "./data/Servicios.json";

function CatalogoServicio() {
  const { id } = useParams();
  const servicio = Servicios.servicios[parseInt(id)];

  if (!servicio) {
    return (
      <div className="px-4 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
        <h1>Servicio no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
      <section className="py-0 md:py-10 overflow-hidden bg-white dark:bg-gray-800 rounded-sm shadow-inner px-2 md:px-0">
        <div className="lg:px-8 py-4 mx-auto lg:py-8 md:px-6">
          <div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 ">
                <div className="overflow-hidden h-full">
                  <div className="h-full mb-6 lg:mb-10">
                    <img
                      src={process.env.PUBLIC_URL + servicio.imagen}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-5">
                  <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                      {servicio.titulo}
                    </h2>
                    <div className="flex flex-wrap items-center mb-6">
                      <ul className="flex mb-4 mr-2 lg:mb-0">
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
                      </ul>
                      {/* <a
                        className="mb-4 text-xs underline dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                        href="#"
                      >
                        Be the first to review the product
                      </a> */}
                    </div>
                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                      {servicio.descripcion}
                    </p>
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
                      <span>$994.00</span>
                      <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                        $1500.00
                      </span>
                    </p>
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
                  <div className="pb-6 mb-8 border-b border-gray-300 dark:border-gray-700">
                    <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                      Frecuencia
                    </h2>
                    <div className="flex flex-wrap -mb-2">
                      {servicio.frecuencias.map((frecuencia, index) => (
                        <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                          {frecuencia.dia}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center ">
                    <div className="mb-4 mr-4 lg:mb-0">
                      <button className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                        Contratar ahora
                      </button>
                    </div>
                    
                    <div className="mb-4 lg:mb-0">
                      <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className=" bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form class="max-w-2xl bg-white rounded-lg border p-2 mx-auto mt-20">
    <div class="px-3 mb-2 mt-2">
        <textarea placeholder="comment" class="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
    </div>
    <div class="flex justify-end px-4">
        <input type="submit" class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value="Comment"/>
    </div>
</form>
    </div>
  );
}

export default CatalogoServicio;
