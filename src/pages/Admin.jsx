import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import DialogEditarClase from "./DialogoEditarClase";

import DialogCrearClase from "./DialogoCrearClase";
import StarsRating from "../components/StarsRating";

const Admin = () => {
  return (
    <div className=" px-8 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
      <div className="relative overflow-x-auto">
        <h2 className="text-2xl pb-5 font-semibold">Mis clases</h2>
        <table className="bg-white text-left rounded-md w-full">
          <thead>
            <tr>
              <th className="w-5/12 py-2">
                <p className="text-semibold opacity-70 text-sm font-semibold pl-2">
                  Titulo
                </p>
              </th>
              <th className="w-4/12">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Personas aceptadas
                </p>
              </th>
              <th className="w-2/12">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Precio
                </p>
              </th>
              <th className="w-1/12 pl-5">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Acciones
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="pl-2.5 py-5">
                <p className="text-sm">Clases de piano</p>
              </td>
              <td>
                <p className="text-sm">3</p>
              </td>
              <td>
                <p className="text-sm">$30</p>
              </td>
              <td className="pl-2">
                <div className="flex justify-end mr-5">
                  <DialogEditarClase />
                <button
                  className="mx-2 bg-red-400 w-5 h-5 lg:w-8 lg:h-8 rounded-md hover:bg-red-300 duration-100"
                  type="button"
                  >
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-5">
          <DialogCrearClase />
        </div>
      </div>

      <div className="mb-6 overflow-x-auto">
        <h2 className="text-2xl pb-5 font-semibold">Solicitudes de Usuarios</h2>
        <table className="bg-white text-left rounded-md  w-full">
          <thead>
            <tr>
              <th className="w-5/12 py-2">
                <p className="text-semibold opacity-70 text-sm font-semibold pl-2">
                  Nombre
                </p>
              </th>
              <th className="w-4/12">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Clase Solicitada
                </p>
              </th>
              <th className="w-2/12">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Contacto
                </p>
              </th>
              <th className="w-1/12">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Acciones
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="pl-2.5">
                <p className="text-sm">Lucas Carino</p>
              </td>
              <td className="">
                <p className="text-sm py-3">Clase de piano</p>
              </td>
              <td className=" text-sm">11 1234 5678</td>
              <td className="">
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option value="aceptar">Aceptar</option>
                  <option value="finalizar">Finalizar</option>
                  <option value="cancelar">Cancelar</option>
                </select>
              </td>
            </tr>
            <tr className="border-b border-gray-200"></tr>
          </tbody>
        </table>
      </div>

      <div className="relative overflow-x-auto">
        <h2 className="text-2xl pb-5 font-semibold">
          Solicitudes de comentarios
        </h2>
        <table className="bg-white text-left rounded-md">
          <thead>
            <tr>
              <th className="w-1/12 text-center py-2">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Calificación
                </p>
              </th>
              <th className="w-10/12 p-2">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Comentario
                </p>
              </th>
              <th className="w-1/12 pl-5">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Acciones
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="pl-2.5">
                <StarsRating
                  initialValue={4}
                  editable={false}
                  starSize={"sm"}
                  starMargin="mx-0.5"
                />
              </td>
              <td className="">
                <p className="text-xs px-2 py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </td>
              <td className="pl-2">
                <button
                  className="mx-2 bg-green-500 w-5 h-5 lg:w-8 lg:h-8 rounded-md hover:bg-green-600 duration-100"
                  type="button"
                >
                  <FontAwesomeIcon icon={faCheck} size="lg" />
                </button>
                <button
                  className="mx-2 bg-red-500 w-5 h-5 lg:w-8 lg:h-8 rounded-md hover:bg-red-600 duration-100"
                  type="button"
                >
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="pl-2.5">
                <StarsRating
                  initialValue={4}
                  editable={false}
                  starSize={"sm"}
                  starMargin="mx-0.5"
                />
              </td>
              <td className="">
                <p className="text-xs px-2 py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </td>
              <td className="pl-2">
                <button
                  className="mx-2 bg-green-500 w-5 h-5 lg:w-8 lg:h-8 rounded-md hover:bg-green-600 duration-100"
                  type="button"
                >
                  <FontAwesomeIcon icon={faCheck} size="lg" />
                </button>
                <button
                  className="mx-2 bg-red-500 w-5 h-5 lg:w-8 lg:h-8 rounded-md hover:bg-red-600 duration-100"
                  type="button"
                >
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
