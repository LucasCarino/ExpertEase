import React, { useState } from "react";
import { createService } from "../helpers/createService";
// import DateRangePicker from "../components/DateRangePicker";

function DialogCrearClase(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [frequency, setFrequency] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [classType, setClassType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const Categories = [
    {name: "Deportes"}, 
    {name: "Arte y Cultura"}, 
    {name: "Música"}, 
    {name: "Idiomas"}, 
    {name: "Cocina"}, 
    {name: "Tecnología"}, 
    {name: "Salud"}, 
    {name: "Belleza"}, 
    {name: "Hogar"}, 
    {name: "Otros"}
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

  let ClassType = [{ name: "Individual" }, { name: "Grupal" }];

  const onHandleCreate = async () => {

    const toBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

    let imageBase64 = "";
    const fileInput = document.getElementById('file_input');
    if (fileInput.files[0]) {
      imageBase64 = await toBase64(fileInput.files[0]);
    }

    let data = {
      name: name,
      description: description,
      duration: duration,
      frequency: frequency,
      cost: price,
      category: selectedCategory,
      classType: classType,
      rating: null,
      image: imageBase64,
      location: location,
      promotion: "",
      type: 0,
      published: true,
      userEmail: localStorage.getItem("usuarioCorreo"),
      userName: localStorage.getItem("usuarioNombre"),
    };
    createService(data);
  };

  return (
    <div>
      <button
        onClick={openDialog}
        className={`bg-charcoal-600 hover:bg-charcoal-700 w-full py-2 md:w-auto flex-grow md:text-xs text-md lg:text-sm text-white px-6 rounded duration-500`}
      >
        Crear Clase
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
                Crea un nuevo servicio
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
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className=" bg-gray-50 border mb-5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
              </div>
              <div className="mb-4">
                <label
                  for="attachment"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Foto de portada
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 rounded-none"
                  id="file_input"
                  type="file"
                  name="file_input"
                  accept="image/*"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Clases de canto"
                ></input>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Duración
                    </label>
                    <select
                      onChange={(e) => setDuration(e.target.value)}
                      value={duration}
                      id="categories"
                      className=" bg-gray-50 border mb-5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option disabled selected value="">
                        Selecciona un tipo...
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
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Frecuencia
                    </label>
                    <select
                      onChange={(e) => setFrequency(e.target.value)}
                      value={frequency}
                      id="categories"
                      className=" bg-gray-50 border mb-5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                    for="location"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Ubicación
                  </label>
                  <input
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    type="text"
                    name="location"
                    id="location"
                    className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Calle 123"
                  ></input>
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
                      onChange={(e) => setClassType(e.target.value)}
                      value={classType}
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
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Descripción de la clase/curso
                  </label>
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    name="description"
                    id="description"
                    className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores corporis consequatur nam laboriosam doloremque repellendus "
                  ></textarea>
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
                onClick={onHandleCreate}
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

export default DialogCrearClase;
