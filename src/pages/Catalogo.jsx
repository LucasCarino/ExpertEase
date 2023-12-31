import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useCallback } from "react";
import { Rating, initTE } from "tw-elements";
import { Link, useLocation } from "react-router-dom";
import {
  faUserTie,
  faDollarSign,
  faFilterCircleXmark,
  faFilter,
  faStar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import StarsRating from "../components/StarsRating";
import { getServices } from "../helpers/getServices";
initTE({ Rating });

const Catalogo = (props) => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [initialServices, setInitialServices] = useState();
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const Categorias = [
    "Educación",
    "Deportes",
    "Arte y Cultura",
    "Música",
    "Idiomas",
    "Cocina",
    "Tecnología",
    "Salud",
    "Belleza",
    "Hogar",
    "Otros",
  ];

  let Frecuencia = [
    "Evento único",
    "Diario",
    "Semanal",
    "Quincena",
    "Mensual",
    "Otro",
  ];

  let Clases = ["Individual", "Grupal", "Evento", "Otro"];

  const [calificacionFilter, setCalificacionFilter] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchValue = params.get("search") || "";
    setBusqueda(searchValue);
  }, [location.search]);

  const [busqueda, setBusqueda] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedClases, setSelectedClases] = useState("");
  const [selectedFrencuencia, setSelectedFrecuencia] = useState("");

  const handleSearchChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleRatingChange = (rating) => {
    setCalificacionFilter(rating);
  };

  const updateServicios = useCallback(() => {
    const filtered = services.filter((servicio) => {
      const tituloMatches =
        servicio.titulo &&
        (busqueda
          ? servicio.titulo
              .toString()
              .toLowerCase()
              .includes(busqueda.toString().toLowerCase())
          : true);
      const nombreMatches =
        servicio.nombre &&
        (busqueda
          ? servicio.nombre
              .toString()
              .toLowerCase()
              .includes(busqueda.toString().toLowerCase())
          : true);
      const categoriaMatches =
        selectedCategoria === "" || servicio.categoria === selectedCategoria;
      const claseMatches =
        selectedClases === "" || servicio.clase === selectedClases;
      const frecuenciaMatches =
        selectedFrencuencia === "" ||
        servicio.frecuencia === selectedFrencuencia;
      const calificacionMatches =
        calificacionFilter === null ||
        servicio.calificacion >= calificacionFilter;
      return (
        (tituloMatches || nombreMatches) &&
        categoriaMatches &&
        claseMatches &&
        frecuenciaMatches &&
        calificacionMatches
      );
    });
    setFilteredServices(filtered);
  }, [
    busqueda,
    selectedCategoria,
    selectedClases,
    selectedFrencuencia,
    calificacionFilter,
    services,
  ]);

  useEffect(() => {
    setLoading(true); // Indicar que la carga está en progreso
    (async () => {
      try {
        const servicesData = await getServices();
        if (!initialServices) setInitialServices(servicesData);
        if (servicesData) {
          setServices(servicesData);
        }
      } catch (error) {
        console.error("Error al obtener servicios:", error);
      } finally {
        setLoading(false); // Indicar que la carga ha finalizado
      }
    })();
  }, [initialServices]);

  useEffect(() => {
    updateServicios();
  }, [
    updateServicios,
    busqueda,
    selectedCategoria,
    selectedClases,
    selectedFrencuencia,
    calificacionFilter,
    services,
  ]);

  const handleReset = () => {
    setSelectedCategoria("");
    setSelectedClases("");
    setSelectedFrecuencia("");
    setBusqueda("");
    setCalificacionFilter(null);
    setServices(initialServices);
  };

  return (
    <div className=" px-8 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
      <div className="flex flex-row ">
        <div
          className=" text-gray-600 focus-within:text-gray-400 mr-2"
          onClick={handleClick}
        >
          <button className="py-2 px-3 text-sm text-white bg-jungle-green-800 rounded-lg focus:outline-none active:bg-white active:text-gray-900 duration-500">
            <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
        <div className="text-gray-600 w-full lg:w-5/12 focus-within:text-gray-400">
          <input
            type="search"
            onChange={handleSearchChange}
            value={busqueda}
            className="py-2 text-sm bg-jungle-green-800 rounded pl-3 pr-3 focus:outline-none focus:bg-white focus:text-gray-900 duration-500 w-full"
            placeholder="Servicio o experto"
          />
        </div>
      </div>
      <div
        className={`duration-200 rounded-lg my-2 px-5 w-full bg-zinc-100 lg:flex-row ease-in-out overflow-hidden shadow-inner ${
          open ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <form className="grid grid-cols-1 lg:grid-cols-4 w-full gap-x-6">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Categoria
            </label>
            <select
              id="Categorias"
              value={selectedCategoria}
              onChange={(e) => {
                setSelectedCategoria(e.target.value);
              }}
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option disabled selected value="">
                Selecciona una categoría...
              </option>
              {Categorias.map((Categoria, key) => (
                <option key={key} value={Categoria}>
                  {Categoria}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-sm mb-1 mt-3 lg:mt-0 font-medium text-gray-900"
            >
              Tipo de clase
            </label>
            <select
              id="clases"
              value={selectedClases}
              onChange={(e) => {
                setSelectedClases(e.target.value);
              }}
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option disabled selected value="">
                Selecciona un tipo de clase...
              </option>
              {Clases.map((clase, key) => (
                <option key={key} value={clase}>
                  {clase}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-sm mb-1 mt-3 lg:mt-0 font-medium text-gray-900"
            >
              Frecuencia
            </label>
            <select
              id="Frecuencia"
              value={selectedFrencuencia}
              onChange={(e) => {
                setSelectedFrecuencia(e.target.value);
              }}
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option disabled selected value="">
                Selecciona una frecuencia...
              </option>
              {Frecuencia.map((frecuencia, key) => (
                <option key={key} value={frecuencia}>
                  {frecuencia}
                </option>
              ))}
            </select>
          </div>
          <fieldset className="flex-1">
            <label
              htmlFor="email"
              className="block text-sm mb-1 mt-3 lg:mt-0 font-medium text-gray-900"
            >
              Calificación
            </label>
            <div className="flex justify-between">
              <StarsRating
                onRatingChange={handleRatingChange}
                reset={calificacionFilter === null}
                editable={true}
              />
              <button
                onClick={handleReset}
                className="py-2 px-2.5 bg-sandy-brown-500 text-white rounded-lg hover:bg-sandy-brown-600 duration-500"
                type="button"
              >
                <FontAwesomeIcon icon={faFilterCircleXmark} />
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-5">

          {loading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}

        {filteredServices.length === 0 ? (
          <p>No se encontró ningún servicio con ese nombre.</p>
        ) : (
          filteredServices.map((servicio, key) => (
            <li
              key={servicio.id}
              className="text-m lg:text-sm lg:mb-5 lg:mt-0 my-7 lg:font-normal list-none"
            >
              <div className="flex flex-col h-full mx-auto w-full max-w-sm rounded-lg bg-white p-2.5 shadow-inner">
                <Link
                  to={`/Catalogo/${servicio.id}`}
                  className="inline-block h-64 transform transition-transform duration-300 ease-in-out w-full mb-3"
                >
                  <div className="relative flex h-200 justify-center overflow-hidden rounded-lg">
                    <div className="w-full h-48 transform transition-transform duration-500 ease-in-out hover:scale-110">
                      <img
                        src={servicio.imagen}
                        alt=""
                        className="object-cover h-full w-full"
                      />
                    </div>
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
                <div className="mt-2 border-t border-gray-200 pt-3">
                  {servicio.descripcion}
                </div>
                <div className="mt-2 grid grid-cols-2 grid-rows-2 border-t border-gray-200 pb-3 pt-3 gap-x-10">
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
                      className="mr-2"
                      size="lg"
                      icon={faClock}
                    />
                    <span className="xl:mt-0 text-md">
                      {servicio.frecuencia}
                    </span>
                  </p>
                  <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                    <FontAwesomeIcon
                      className=" mr-2"
                      size="lg"
                      icon={faStar}
                    />
                    <span className="mt-0 text-lg text-black">
                      {servicio.calificacion}
                    </span>
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
          ))
        )}
      </div>
      
    </div>
  );
};

export default Catalogo;
