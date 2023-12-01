import { useState } from "react";
import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StaticInfo = () => (
  <>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 py-1.5">
        Nombre completo
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 p-1.5">
        Lucas Carino
      </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 py-1.5">Email</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 p-1.5">
        lucascarino2@gmail.com
      </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 py-1.5">Contraseña</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 p-1.5">
        *****
      </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 py-1.5">
        Número de contacto
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 p-1.5">
        (54) 11 12345678
      </dd>
    </div>
  </>
);


const EditForm = ({ handleConfirmClick, handleCancelClick }) => (
  <>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500  py-1.5">
        Nombre completo
      </dt>
      <dd className="mt-1 text-sm ml-4 text-gray-900 sm:mt-0 sm:col-span-2 ">
        <input
          type="text"
          className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5"
          defaultValue="Lucas Carino"
        />
      </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500  py-1.5">Email</dt>
      <dd className="mt-1 text-sm ml-4 text-gray-900 sm:mt-0 sm:col-span-2 ">
        <input
          type="text"
          className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5"
          defaultValue="lucascarino2@gmail.com"
        />
      </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500  py-1.5">Contraseña</dt>
      <dd className="mt-1 text-sm ml-4 text-gray-900 sm:mt-0 sm:col-span-2 ">
        <input
          type="text"
          className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5"
          defaultValue="******"
        />
      </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500  py-1.5">
        Número de contacto
      </dt>
      <dd className="mt-1 text-sm ml-4 text-gray-900 sm:mt-0 sm:col-span-2 ">
        <input
          type="text"
          className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5"
          defaultValue="(54) 11 12345678"
        />
      </dd>
    </div>
    <div className="py-3 flex justify-end sm:px-6">
      <button
        type="button"
        className="ml-2 bg-red-500 text-white px-2 py-0.5 rounded-md hover:bg-red-400 duration-100 mr-2"
        onClick={handleCancelClick}
      >
        Cancelar
      </button>
      <button
        type="button"
        className="bg-green-500 text-white px-2 py-0.5 rounded-md hover:bg-green-400 duration-100"
        onClick={handleConfirmClick}
      >
        Confirmar
      </button>
    </div>
  </>
);

const Perfil = () => {
  const [editing, setEditing] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleConfirmClick = () => {
    // Lógica para confirmar los cambios
    setEditing(false);
  };

  const handleEditExperienceClick = () => {
    setEditingExperience(true);
  };
  
  const handleCancelExperienceClick = () => {
    setEditingExperience(false);
  };
  
  const handleConfirmExperienceClick = () => {
    // Lógica para confirmar los cambios en la experiencia
    setEditingExperience(false);
  };


  return (
    <div className="px-8 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
      <div className="flex flex-col lg:flex-row">
        <div className="flex">
          <div className="bg-white overflow-hidden shadow rounded-lg border w-full ">
            <div className="px-4 py-5 sm:px-6 flex">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Perfil del experto
              </h3>
              <button
                type="button"
                className="ml-2 bg-charcoal-500 text-white px-2 py-0.5 rounded-md hover:bg-charcoal-400 duration-100"
                onClick={handleEditClick}
              >
                <FontAwesomeIcon icon={faPencil} size={"sm"} />
              </button>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <div className="sm:divide-y sm:divide-gray-200">
                {editing ? (
                  <EditForm
                    handleConfirmClick={handleConfirmClick}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <StaticInfo />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg border w-full lg:w-[60%] lg:ml-5 mt-5 lg:mt-0">
          <div class="px-4 py-5 sm:px-6 flex">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Mi experiencia
            </h3>
            <button
              type="button"
              className="ml-2 bg-charcoal-500 text-white px-2 py-0.5 rounded-md hover:bg-charcoal-400 duration-100"
              onClick={handleEditExperienceClick}
            >
              <FontAwesomeIcon icon={faPlus} size={"sm"} />
            </button>
          </div>
          <div className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non at
                maiores possimus aliquam doloremque ad sequi architecto error.
              </dd>
            </div>
          {editingExperience ? (
            <>
              <div className="py-3 sm:px-6">
                <input
                  type="text"
                  placeholder="Nueva experiencia"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="py-3 sm:px-6 flex justify-end">
                <button
                  type="button"
                  className="bg-green-500 text-white px-2 py-0.5 rounded-md hover:bg-green-400 duration-100"
                  onClick={handleConfirmExperienceClick}
                >
                  Confirmar
                </button>
                <button
                  type="button"
                  className="ml-2 bg-red-500 text-white px-2 py-0.5 rounded-md hover:bg-red-400 duration-100"
                  onClick={handleCancelExperienceClick}
                >
                  Cancelar
                </button>
              </div>
            </>
          ) : <></>}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
