import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons';

import DialogCrearClase from './DialogoCrearClase';

const Admin = () => {
  return (
    <div className=" px-8 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
      <div class="relative overflow-x-auto rounded-md">
        <h2 className='text-2xl pb-5 font-semibold'>Mis clases</h2>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Titulo
              </th>
              <th scope="col" class="px-6 py-3">
                Cantidad de alumnos
              </th>
              <th scope="col" class="px-6 py-3">
                Días
              </th>
              <th scope="col" class="px-2 py-3 w-[10px]">
              </th>
              <th scope="col" class="px-2 py-3 w-[10px]">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Clase de piano
              </th>
              <td class="px-6 py-4">2</td>
              <td class="px-6 py-4">Literatura</td>
              <td class="px-6 py-4"><FontAwesomeIcon icon={faPenToSquare} /></td>
              <td class="px-6 py-4"><FontAwesomeIcon icon={faX} /></td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Clase de música
              </th>
              <td class="px-6 py-4">4</td>
              <td class="px-6 py-4">Literatura</td>
              <td class="px-6 py-4"><FontAwesomeIcon icon={faPenToSquare} /></td>
              <td class="px-6 py-4"><FontAwesomeIcon icon={faX} /></td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-5">
          <DialogCrearClase />
        </div>
      </div>
      <div class="relative overflow-x-auto rounded-md">
        <h2 className='text-2xl pb-5 font-semibold'>Solicitudes de usuario</h2>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Nombre
              </th>
              <th scope="col" class="px-6 py-3">
                Clase solicitada
              </th>
              <th scope="col" class="px-6 py-3">
                Contacto
              </th>
              <th scope="col" class="px-2 py-3 w-[10px]">
              </th>
              <th scope="col" class="px-2 py-3 w-[10px]">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lucas Carino
              </th>
              <td class="px-6 py-4">Clase de piano</td>
              <td class="px-6 py-4">11 1234 5678</td>
              <td class="px-6 py-4"><button className='py-1 px-2 bg-charcoal-600 hover:bg-charcoal-300 text-white rounded-md duration-200 ease-in-out'>Aprobar</button></td>
              <td class="px-6 py-4"><button className='py-1 px-2 bg-red-500 hover:bg-red-300 text-white rounded-md duration-200 ease-in-out'>Rechazar</button></td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                María Fernanda Bohorquez
              </th>
              <td class="px-6 py-4">Clase de música</td>
              <td class="px-6 py-4">11 1234 5678</td>
              <td class="px-6 py-4"><button className='py-1 px-2 bg-charcoal-600 hover:bg-charcoal-300 text-white rounded-md duration-200 ease-in-out'>Aprobar</button></td>
              <td class="px-6 py-4"><button className='py-1 px-2 bg-red-500 hover:bg-red-300 text-white rounded-md duration-200 ease-in-out'>Rechazar</button></td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Juan Lopez
              </th>
              <td class="px-6 py-4">Clase de música</td>
              <td class="px-6 py-4">11 1234 5678</td>
              <td class="px-6 py-4"><button className='py-1 px-2 bg-charcoal-600 hover:bg-charcoal-300 text-white rounded-md duration-200 ease-in-out'>Aprobar</button></td>
              <td class="px-6 py-4"><button className='py-1 px-2 bg-red-500 hover:bg-red-300 text-white rounded-md duration-200 ease-in-out'>Rechazar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
