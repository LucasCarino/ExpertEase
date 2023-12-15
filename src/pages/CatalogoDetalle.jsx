import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faDollarSign, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServices } from "../helpers/getServices";
import ReviewForm from "../components/ReviewForm";
import { HiringForm } from "../components/HiringForm";
import { getReviews } from "../helpers/getReviews";
import StarsRating from "../components/StarsRating";

function CatalogoServicio() {
  const [services, setServices] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    (async () => {
      const services = await getServices();
      if (services) setServices(services);
    })();
  }, []);

  const { id } = useParams(); // Extract the service ID from the URL
  const servicio = services[parseInt(id)];

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching reviews...');
      if (servicio) {
        const reviewsData = await getReviews(servicio.serviceId);
        if (reviewsData) {
          setReviewsData(reviewsData);
        }
      }
    };

    fetchData();
  }, [servicio]);

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

  if (!servicio) {
    return (
      <div className="px-4 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
        <h1>Servicio no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
      <section className="py-0 md:py-10 overflow-hidden bg-whit rounded shadow-inner px-2 md:px-0 bg-white">
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
                            {/* <div>
                              <label
                                for="degrees"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Titulos
                              </label>
                              <p className="pt-2 pb-4 px-2">- Falta -</p>
                            </div> */}
                            <div className="border-t border-gray-200 pt-4">
                              <label
                                for="comments"
                                className="block text-sm font-medium text-gray-900 mb-4"
                              >
                                Opiniones ({reviewsData.length})
                              </label>
                              <ReviewForm serviceId={servicio.serviceId} />
                              {reviewsData
                                .filter(
                                  (review) => review.published === "published"
                                )
                                .map((review, key) => (
                                  <article class="py-4 border-gray-200 border-b text-base bg-white rounded-lg">
                                    <footer class="flex justify-between items-center mb-2">
                                      <div class="flex items-center">
                                        <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                                          {review.name}
                                        </p>
                                        <p class="text-sm text-gray-600">
                                          <time
                                            pubdate
                                            datetime="2022-02-08"
                                            title="February 8th, 2022"
                                          >
                                            {new Intl.DateTimeFormat("es-ES", {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric",
                                            }).format(
                                              new Date(review.postedAt)
                                            )}
                                          </time>
                                        </p>
                                      </div>
                                      <div class="flex items-center space-x-1 pl-2 mb-4 pt-2">
                                        <StarsRating
                                          editable={false}
                                          initialValue={review.rating}
                                        />
                                      </div>
                                    </footer>
                                    <p class="text-gray-500 ">{review.text}</p>
                                  </article>
                                ))}
                            </div>
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
                    <h2 className="mb-2 text-xl font-bold">Duración</h2>
                    <p className="max-w-md mb-4 md:mb-8 text-gray-700">
                      <span>{servicio.duration}</span>
                    </p>
                  </div>
                  <div className="pb-0 mb-2 pt-2 border-b border-gray-300 ">
                    <h2 className="mb-2 text-xl font-bold ">Frecuencia</h2>
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
                            <HiringForm serviceId={servicio.serviceId} />
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
