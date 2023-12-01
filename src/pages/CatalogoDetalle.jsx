import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  faDollarSign,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarsRating from "../components/StarsRating";
import { getServices } from "../helpers/getServices";

function CatalogoServicio() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      const services = await getServices();
      if (services) setServices(services);
    })();
  }, []);

  const { id } = useParams();
  const servicio = services[parseInt(id)];

  const [isOpen, setIsOpen] = useState(false);
  const [isContratarOpen, setIsContratarOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const openContratarDialog = () => {
    setIsContratarOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeContratarDialog = () => {
    setIsContratarOpen(false);
    document.body.style.overflow = "unset";
  };

  const onCommentConfirm = () => {
    alert("Comentario guardado!")
  }


  if (!servicio) {
    return (
      <div className="px-4 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
        <h1>Servicio no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
      <section className="py-0 md:py-10 overflow-hidden bg-whit rounded shadow-inner px-2 md:px-0">
        <div className="lg:px-8 py-4 mx-auto lg:py-8 md:px-6">
          <div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 ">
                <div className="overflow-hidden h-full">
                  <div className="h-full mb-6 lg:mb-10">
                    <img
                      src={process.env.PUBLIC_URL + servicio.imagen}
                      className="object-cover w-full h-full rounded "
                      alt={servicio.nombre}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-5">
                  <div className="pb-6 mb-4 border-b border-gray-200">
                    <h2 className="max-w-xl mt-2 text-xl font-bold  md:text-4xl">
                      {servicio.titulo}
                    </h2>
                    <div>
                      <p className="mb-4 text-gray-700 ">
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
                          <div className="bg-white px-6 mx-4 lg:mx-0 p-4 rounded h-[600px] shadow-md lg:w-5/12 overflow-y-auto">
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
                                  className="hover:text-red-600 ease-in-out duration-200 absolute top-0 right-0"
                                  onClick={closeDialog}
                                >
                                  <FontAwesomeIcon
                                    className="ml-0.5 mr-0.5 mt-1"
                                    size="xl"
                                    icon={faXmark}
                                  />
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
                                  Experiencia
                                </label>
                                <p className="pt-2 pb-4 px-2">
                                  {servicio.experiencia}
                                </p>
                              </div>
                              <div>
                                <label
                                  for="degrees"
                                  className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                  Titulos
                                </label>
                                <p className="pt-2 pb-4 px-2">- Falta -</p>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <label
                                  for="comments"
                                  className="block text-sm font-medium text-gray-900 mb-4"
                                >
                                  Opiniones (2)
                                </label>
                                <div className="mb-2">
                                <div className="px-0">
                                  <div className="flex justify-between">
                                    <input
                                      type="text"
                                      name="price"
                                      id="price"
                                      className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2  mt-1 w-1/2"
                                      placeholder="Nombre"
                                    ></input>
                                    <StarsRating
                                        editable={true}
                                        starSize={"md"}
                                      />
                                  </div>
                                  <textarea
                                    placeholder="Este experto me parece..."
                                    className="w-full mb-2 bg-gray-100 text-sm rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-base focus:outline-none focus:bg-white"
                                  ></textarea>
                                </div>
                                  <div className="flex justify-end">
                                    <button className="px-6 py-2 rounded  text-white text-sm bg-charcoal-500 hover:bg-charcoal-700 duration-200 ease-in-out"
                                      onClick={onCommentConfirm}>
                                      Comentar
                                    </button>
                                  </div>
                                </div>

                                <article class="py-4 border-gray-200 border-b text-base bg-white rounded-lg">
                                  <footer class="flex justify-between items-center mb-2">
                                    <div class="flex items-center">
                                      <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                                        Lucas Carino
                                      </p>
                                      <p class="text-sm text-gray-600">
                                        <time
                                          pubdate
                                          datetime="2022-02-08"
                                          title="February 8th, 2022"
                                        >
                                          Feb. 8, 2022
                                        </time>
                                      </p>
                                    </div>
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
                                        class="w-4 h-4 text-gray-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                    </div>
                                  </footer>
                                  <p class="text-gray-500 ">
                                    ¡El servicio de este experto fue
                                    excepcional! Me ayudó a resolver un problema
                                    complejo en mi negocio en tiempo récord. Su
                                    conocimiento y experiencia son
                                    impresionantes.
                                  </p>
                                </article>

                                <article class="py-4 text-base bg-white rounded-lg 0">
                                  <footer class="flex justify-between items-center mb-2">
                                    <div class="flex items-center">
                                      <p class="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
                                        Laura Perez
                                      </p>
                                      <p class="text-sm text-gray-600 ">
                                        <time
                                          pubdate
                                          datetime="2022-02-08"
                                          title="February 8th, 2022"
                                        >
                                          Feb. 8, 2022
                                        </time>
                                      </p>
                                    </div>
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
                                        class="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                    </div>
                                  </footer>
                                  <p class="text-gray-500">
                                    El experto no solo tiene un profundo
                                    conocimiento en su campo, sino que también
                                    sabe cómo comunicar y explicar las
                                    soluciones de manera clara y comprensible.
                                    ¡Una experiencia de servicio de alta
                                    calidad!
                                  </p>
                                </article>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <p className="max-w-md mb-4 text-gray-700 ">
                        {servicio.descripcion}
                      </p>
                    </div>

                  </div>
                  <div className="pb-0 mb-2 border-b border-gray-300  ">
                    <h2 className="mb-2 text-xl font-bold">
                      Duración
                    </h2>
                    <p className="max-w-md mb-4 md:mb-8 text-gray-700" >
                      <span>{servicio.duracion}</span>
                    </p>
                  </div>
                  <div className="pb-0 mb-2 pt-2 border-b border-gray-300 ">
                    <h2 className="mb-2 text-xl font-bold ">
                      Frecuencia
                    </h2>
                    <p className="max-w-md mb-4 md:mb-8 text-gray-700 ">
                      <span>{servicio.frecuencia}</span>
                    </p>
                  </div>
                  <div className="flex flex-nowrap items-center pt-2">
                    <div className="mb-4 mr-2 lg:mb-0 w-full md:w-auto lg:flex">
                      <div className="mt-1 mr-2">
                        <p className="text-2xl font-semibold text-gray-700">
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
                      </div>
                      <button
                        onClick={openContratarDialog}
                        className={`bg-sandy-brown-600 hover:bg-sandy-brown-700 w-full py-2 md:w-auto flex-grow md:text-xs text-md lg:text-sm text-white px-6 rounded duration-500`}
                      >
                        Contratar ahora
                      </button>
                      {isContratarOpen && (
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
                              <div className="relative">
                                <h1 className="text-center text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5 border-b border-gray-200 pb-2">
                                  Ingresa tus datos
                                </h1>
                                <button
                                  className="hover:text-red-600 ease-in-out duration-200 absolute top-0 right-0"
                                  onClick={closeContratarDialog}
                                >
                                  <FontAwesomeIcon
                                    className="ml-0.5 mr-0.5 mt-1"
                                    size="xl"
                                    icon={faXmark}
                                  />
                                </button>
                              </div>
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
                                  for="email"
                                  className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                  Horario para que te contacte el experto
                                </label>
                                <textarea
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                  placeholder="Me interesa porque..."
                                ></textarea>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
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
