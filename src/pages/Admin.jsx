import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEye } from "@fortawesome/free-solid-svg-icons";
import DialogEditarClase from "./DialogoEditarClase";
import React, { useState, useEffect } from "react";

import StarsRating from "../components/StarsRating";
import { deleteService } from "../helpers/deleteService";
import { getHiringsByEmail } from "../helpers/getHiringsByEmail";
import { updateHiring } from "../helpers/updateHiring";

import { getServicesByEmail } from "../helpers/getServicesByEmail";
import { Comments } from "../components/Comments";

import DialogCrearClase from "./DialogoCrearClase";

const Admin = () => {
  const [services, setServices] = useState([]);
  const [initialServices, setInitialServices] = useState();
  const [hirings, setHirings] = useState([]);

  useEffect(() => {
    (async () => {
      debugger;
      const services = await getServicesByEmail(
        localStorage.getItem("usuarioCorreo")
      );
      const hirings = await getHiringsByEmail(
        localStorage.getItem("usuarioCorreo")
      );
      if (!initialServices) setInitialServices(services);
      if (services) setServices(services);
      if (hirings) setHirings(hirings);
    })();
  }, [initialServices]);

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      window.location.reload();
    } catch (error) {
      console.error("Error al manejar la eliminación:", error);
    }
  };

  const handleStatusChange = async (id, status) => {

    try {
      await updateHiring(id, status);
      window.location.reload();
    } catch (error) {
      console.error("Error al manejar el cambio de status:", error);
    }
  }

  const findService = (id) => {
    debugger;
    const service = services.find((service) => service.serviceId === id);
    return service ? service.titulo : "";
  }


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
                  Frecuencia
                </p>
              </th>
              <th className="w-2/12">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Precio
                </p>
              </th>
              <th className="w-1/12 text-center pr-3">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Acciones
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, key) => (
              <tr className="border-b border-gray-200">
                <td className="pl-2.5 py-5">
                  <p className="text-sm">{service.titulo}</p>
                </td>
                <td>
                  <p className="text-sm">{service.frecuencia}</p>
                </td>
                <td>
                  <p className="text-sm">${service.precio}</p>
                </td>
                <td className="pl-2">
                  <div className="flex justify-end mr-5">
                    <DialogEditarClase initialData={service} />
                    <button
                      className="mx-2 bg-red-400 w-5 h-5 lg:w-8 lg:h-8 rounded-md hover:bg-red-300 duration-100"
                      onClick={() => handleDelete(service.serviceId)}
                      type="button"
                    >
                      <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
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
              <th className="w-2/12 py-2">
                <p className="text-semibold opacity-70 text-sm font-semibold pl-2">
                  Clase
                </p>
              </th>
              <th className="w-2/12 py-2">
                <p className="text-semibold opacity-70 text-sm font-semibold pl-2">
                  Email de contacto
                </p>
              </th>
              <th className="w-2/12">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Teléfono de contacto
                </p>
              </th>
              <th className="w-4/12">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Mensaje
                </p>
              </th>
              <th className="w-1/12">
                <p className="text-semibold opacity-70 text-sm font-semibold">
                  Status
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
            {hirings.map((hiring, key) => (
              <tr className="border-b border-gray-200">
                <td className="pl-2.5">
                  <p className="text-sm">{findService(hiring.service)}</p>
                </td>
                <td className="pl-2.5">
                  <p className="text-sm">{hiring.contactEmail}</p>
                </td>
                <td className="">
                  <p className="text-sm py-3">{hiring.contactPhone}</p>
                </td>
                <td className=" text-sm">{hiring.messageToProvider}</td>
                <td className=" text-sm">{hiring.status}</td>
                <td className="">
                  <select className="border rounded-md px-2 py-1 text-sm" onClick={() => updateHiring(hiring.service)}>
                    <option value="aceptar">Aceptar</option>
                    <option value="finalizar">Finalizar</option>
                    <option value="cancelar">Cancelar</option>
                  </select>
                </td>
              </tr>
            ))}
            <tr className="border-b border-gray-200"></tr>
          </tbody>
        </table>
      </div>

      <div className="relative overflow-x-auto">
        <h2 className="text-2xl pb-5 font-semibold">
          Solicitudes de comentarios
        </h2>
        <table className="bg-white text-left rounded-md w-full">
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
          <Comments />
        </table>
      </div>
    </div>
  );
};

export default Admin;
