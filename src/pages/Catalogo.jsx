import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useCallback } from "react";
import Servicios from "../components/data/Servicios.json";
import { Rating, initTE } from "tw-elements";
import { Link } from "react-router-dom";
import {
  faUserTie,
  faDollarSign,
  faFilterCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import StarsRating from "../components/StarsRating";
initTE({ Rating });

const Catalogo = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const allCategorias = new Set(
    Servicios.servicios.map((servicio) => servicio.categoria),
  );

  const allClases = new Set(
    Servicios.servicios.map((servicio) => servicio.clase),
  );

  const allFrecuencias = new Set(
    Servicios.servicios.map((servicio) => servicio.frecuencia),
  );

  
  const Categorias = [...allCategorias];
  const Clases = [...allClases];
  const Frencuencias = [...allFrecuencias];
  const [calificacionFilter, setCalificacionFilter] = useState(null);
  
  const [servicios, setServicios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedClases, setSelectedClases] = useState("");
  const [selectedFrencuencia, setSelectedFrecuencia] = useState("");

  useEffect(() => {
    setServicios(Servicios.servicios);
  }, []);

  const handleSearchChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleRatingChange = (rating) => {
    setCalificacionFilter(rating);
  };
  

  const filteredServices = servicios.filter((servicio) => {
    const tituloMatches = servicio.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const nombreMatches = servicio.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const categoriaMatches =
      selectedCategoria === "" || servicio.categoria === selectedCategoria;
    const claseMatches =
      selectedClases === "" || servicio.clase === selectedClases;
    const frecuenciaMatches =
      selectedFrencuencia === "" || servicio.frecuencia === selectedFrencuencia;

    return (tituloMatches || nombreMatches) && categoriaMatches && claseMatches && frecuenciaMatches;
  });

  const updateServicios = useCallback(() => {
    const filtered = Servicios.servicios.filter((servicio) => {
      const tituloMatches = servicio.titulo
        .toLowerCase()
        .includes(busqueda.toLowerCase());
      const nombreMatches = servicio.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());
      const categoriaMatches =
        selectedCategoria === "" || servicio.categoria === selectedCategoria;
      const claseMatches =
        selectedClases === "" || servicio.clase === selectedClases;
      const frecuenciaMatches =
        selectedFrencuencia === "" || servicio.frecuencia === selectedFrencuencia;
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

    setServicios(filtered);
  }, [busqueda, selectedCategoria, selectedClases, selectedFrencuencia, calificacionFilter]);

  useEffect(() => {
    updateServicios();
  }, [updateServicios]);

  const handleReset = () => {
    setSelectedCategoria("");
    setSelectedClases("");
    setSelectedFrecuencia("");
    setBusqueda("");
    setCalificacionFilter(null);
  };

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
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected value="">
                Selecciona una frecuencia...
              </option>
              {Frencuencias.map((frecuencia, key) => (
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
            <StarsRating onRatingChange={handleRatingChange} reset={calificacionFilter === null} />
              <button onClick={handleReset} className="py-2 px-2.5 bg-sandy-brown-500 text-white rounded-lg hover:bg-sandy-brown-600 duration-500" type="button">
                <FontAwesomeIcon icon={faFilterCircleXmark} />
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-5">
        {filteredServices.length === 0 ? (
          <p>No se encontró ningún servicio con ese nombre.</p>
        ) : (
          filteredServices.map((servicio, key) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Catalogo;
