import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

function Home() {

  let Cards = [
    {name: "Card 1", bgColor:"bg-indigo-400"},
    {name: "Card 2", bgColor:"bg-red-400"},
    {name: "Card 2", bgColor:"bg-blue-300"},
  ]

    return (
      <div className="container px-8 md:px-10 bg-rob-roy-100 pt-24">
        <div className="bg-gradient-to-tr from-charcoal-400 via-charcoal-300 to-rob-roy-200 rounded-sm shadow-inner">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div className="flex flex-col items-center md:w-7/12 pt-5 w-full">
              <h2 className="md:text-4xl text-2xl mt-4 md:mt-0 mb-4 md:mb-8 text-center font-[Quicksand] font-bold md:w-6/12">
                Expertos a tu alcance, Facilidad a tu medida
              </h2>
              <h3 className="text-xs md:pb-2 md:text-lg text-center font-[Poppins] pb-5">
                Comienza a explorar servicios en línea ahora
              </h3>
              <div className="flex flex-row w-full justify-center">
                <div className="text-gray-600 focus-within:text-gray-400 md:w-4/12">
                  <input type="search" className="py-2 text-sm bg-jungle-green-800 rounded-l-md pl-3 pr-3 focus:outline-none focus:bg-white focus:text-gray-900 duration-500 w-full" placeholder="Servicio o experto"/>
                </div>
                <div className=" text-gray-600 focus-within:text-gray-400" >
                  <button className="py-2 px-3 text-sm text-white bg-jungle-green-800 rounded-r-md focus:outline-none focus:bg-white focus:text-gray-900 duration-500">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-6/12">
              <img className="w-10/12 md:py-16" src="https://www.super-ht.com/wp-content/uploads/2023/04/7-Customer-Facing-Technologies-Featured-Image.png" alt="" />
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 mt-5 flex flex-col">
          {
              Cards.map((Card, key) => (
                <div className={`h-[100px] bg-gradient-to-tr from-rob-roy-200 via-rob-roy-300 to-jungle-green-300 hover:from-green-800 hover:via-red-600 hover:to-blue-600 rounded-sm md:mr-2 mt-2 ease-in duration-500`}>
                  <p>{Card.name}</p>
                </div>
              )
          )}
        </div>
      </div>
    );
  }
  
  export default Home;