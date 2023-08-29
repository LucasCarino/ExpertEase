import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./Button";
function Home() {
    return (
      <div className="container px-8 md:px-10 bg-rob-roy-100 pt-24">
        <div className="bg-gradient-to-tr from-rob-roy-200 via-rob-roy-300 to-jungle-green-300 rounded-sm shadow-inner">
          <div className="flex flex-col md:flex-row justify-between items-center h-96">
            <div className="flex flex-col items-center w-9/12 md:w-7/12 pt-5">
              <p className="text-3xl mb-5 text-center">
                ¿Que servicio estás buscando?
              </p>
              <div className="flex flex-col pt-5">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </span>
                  <input type="search" className="w-full py-3 px-3 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 duration-500 md:w-full" placeholder="Servicio o experto" autocomplete="off"/>
                </div>
                <div className="relative text-gray-600 focus-within:text-gray-400 w-72" >
                  <button className="py-3 px-3 text-sm text-white bg-gray-900 rounded-md mt-5 focus:outline-none focus:bg-white focus:text-gray-900 duration-500 w-full">Buscar</button>
                </div>
              </div>
            </div>
            <div className="w-6/12">
              <img src="https://learn.g2.com/hubfs/graphic-design-dev.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 mt-5 flex flex-col">
          <div className="h-[100px] bg-indigo-700 rounded-sm md:mr-2 mt-2">
            <p>hola</p>
          </div>
          <div className="h-[100px] bg-red-200 rounded-sm md:mx-2 mt-2">
            <p>hola</p>
          </div>
          <div className="h-[100px] bg-zinc-600 rounded-sm md:ml-2 mt-2">
            <p>hola</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;