import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./Button";
function Home() {
    return (
      <div className="container px-8 md:px-10 bg-rob-roy-100 h-screen pt-24">
        <div className="bg-gradient-to-tr from-rob-roy-200 via-rob-roy-300 to-jungle-green-300 rounded-sm shadow-inner ">
          <div className="flex flex-col md:flex-row justify-between items-center h-96">
            <div className="flex flex-col items-center w-6/12">
              <p className="text-3xl mb-5">
                ¿Que servicio estás buscando?
              </p>
              <div class="relative text-gray-600 focus-within:text-gray-400 md:w-72">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </span>
                <input type="search" className="py-3 px-3 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 duration-500 md:w-full" placeholder="Servicio o experto" autocomplete="off"/>
              </div>
              <div class="relative text-gray-600 focus-within:text-gray-400 w-72" >
                <button type="search" className="py-3 px-3 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 duration-500 w-full"/>
              </div>
            </div>
            <div className="w-6/12">
              <img src="https://learn.g2.com/hubfs/graphic-design-dev.svg" alt="" />
            </div>
          </div>

        </div>
      </div>
    );
  }
  
  export default Home;