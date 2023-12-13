import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { updateService } from "../helpers/updateService";

function DialogEditarClase(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [serviceData, setServiceData] = useState({
    id: "",
    titulo: "",
    descripcion: "",
    duracion: "",
    frecuencia: "",
    precio: "",
    categoria: "",
    tipoClase: "",
    rating: "",
    ubicacion: "",
    promotion: "",
    type: "",
    imagen: "",
  });

  const [titulo, setTitulo] = useState(serviceData.titulo);
  const [ubicacion, setUbicacion] = useState(serviceData.ubicacion);
  const [price, setPrice] = useState(serviceData.precio);
  const [description, setDescription] = useState(serviceData.descripcion);
  const [published, setPublished] = useState(serviceData.published);

  useEffect(() => {
    setServiceData({
      id: props.initialData.serviceId,
      titulo: props.initialData.titulo || "",
      descripcion: props.initialData.descripcion || "",
      duracion: props.initialData.duration || "",
      frecuencia: props.initialData.frecuencia || "",
      precio: props.initialData.precio || "",
      categoria: props.initialData.categoria || "",
      tipoClase: props.initialData.tipo || "",
      rating: props.initialData.rating || 0,
      ubicacion: props.initialData.ubicacion || "",
      promotion: "",
      published: props.initialData.published || true,
      type: "",
      imagen: props.initialData.imagen || "",
    });
  }, [props.initialData]);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const saveService = () => {
    updateService(serviceData);
    window.location.reload();
  };

  const updateServiceData = (field, value) => {
    setServiceData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

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
    { name: "Otro" },
  ];

  let Published = [
    { value: true, name: "Si" },
    { value: false, name: "No" },
  ];

  let ClassType = [{ name: "Individual" }, { name: "Grupal" }];

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
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Servicio
                </label>
                <select
                  id="categories"
                  value={serviceData.categoria}
                  onChange={(e) =>
                    updateServiceData("categoria", e.target.value)
                  }
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option disabled value="">
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
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Servicio disponible
                </label>

                <select
                  id="published"
                  value={serviceData.published.toString()}
                  onChange={(e) =>
                    updateServiceData("published", e.target.value)
                  }
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option disabled value="">
                    Selecciona la disponibilidad...
                  </option>
                  {Published.map((published, key) => (
                    <option key={key} value={published.value.toString()}>
                      {published.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Clases de canto"
                  value={serviceData.titulo}
                  onChange={(e) => {
                    setTitulo(e.target.value);
                    updateServiceData("titulo", e.target.value);
                  }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Duración
                    </label>
                    <select
                      value={serviceData.duracion}
                      id="duration"
                      onChange={(e) =>
                        updateServiceData("duracion", e.target.value)
                      }
                      className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option disabled value="">
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
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Frecuencia
                    </label>
                    <select
                      value={serviceData.frecuencia}
                      id="frequency"
                      onChange={(e) =>
                        updateServiceData("frecuencia", e.target.value)
                      }
                      className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option disabled value="">
                        Selecciona una frecuencia...
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
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Ubicación
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Calle 123"
                    value={serviceData.ubicacion}
                    onChange={(e) => {
                      setUbicacion(e.target.value);
                      updateServiceData("ubicacion", e.target.value);
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      for="type"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Tipo de clase
                    </label>
                    <select
                      onChange={(e) =>
                        updateServiceData("tipoClase", e.target.value)
                      }
                      value={serviceData.tipoClase}
                      id="categories"
                      className=" bg-gray-50 border mb-5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option disabled selected value="">
                        Tipo de clase...
                      </option>
                      {ClassType.map((classType, key) => (
                        <option key={key} value={classType.name}>
                          {classType.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Costo
                    </label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      type="number"
                      name="price"
                      id="price"
                      className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="$100"
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Descripción de la clase/curso
                  </label>

                  <textarea
                    type="textarea"
                    name="description"
                    id="description"
                    className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Calle 123"
                    value={serviceData.descripcion}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      updateServiceData("descripcion", e.target.value);
                    }}
                  />
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
                onClick={saveService}
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

export default DialogEditarClase;
