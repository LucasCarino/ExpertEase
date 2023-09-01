import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

function Home() {

  let Cards = [
    {name: "Card 1", bgColor:"bg-indigo-400"},
    {name: "Card 2", bgColor:"bg-red-400"},
    {name: "Card 2", bgColor:"bg-blue-300"},
  ]

  const scrollToElement = () => {
    const element = document.getElementById("scrollTarget");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", duration: 10000 });
    }
  }

    return (
      <div className="px-8 lg:px-10 bg-rob-roy-100 pt-24">
      <div className="bg-gradient-to-tr from-charcoal-400 via-charcoal-300 to-rob-roy-200 rounded-sm shadow-inner pb-8 ">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <div className="flex flex-col items-center lg:w-7/12 pt-5 md:pb-10 pb-5 lg:pb-0 w-full">
            <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0 mb-4 lg:mb-8 text-center font-[Quicksand] font-bold md:w-6/12">
              Expertos a tu alcance, Facilidad a tu medida
            </h2>
            <h3 className="text-xs lg:pb-2 lg:text-lg text-center font-[Poppins] pb-5">
              Comienza a explorar servicios en línea ahora
            </h3>
            <div className="flex flex-row w-full justify-center">
              <div className="text-gray-600 focus-within:text-gray-400 lg:w-4/12">
                <input type="search" className="py-2 text-sm bg-jungle-green-800 rounded-l-lg pl-3 pr-3 focus:outline-none focus:bg-white focus:text-gray-900 duration-500 w-full" placeholder="Servicio o experto"/>
              </div>
              <div className=" text-gray-600 focus-within:text-gray-400" >
                <button className="py-2 px-3 text-sm text-white bg-jungle-green-800 rounded-r-lg focus:outline-none active:bg-white active:text-gray-900 duration-500">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <img className="w-9/12 lg:py-12 hidden lg:block" src="https://www.super-ht.com/wp-content/uploads/2023/04/7-Customer-Facing-Technologies-Featured-Image.png" alt="" />
          </div>
        </div>
        <div className="lg:flex items-center justify-center mt-5 hidden">
          <button onClick={scrollToElement} className="duration-1000 pt-[5px] text-2xl w-[50px] h-[50px] text-white bg-blue-500 rounded-full focus:outline-none hover:bg-blue-600">
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>
      </div>
      <div className="py-6 flex justify-center" id="scrollTarget">
        <h2 className="text-xl md:text-3xl font-[Quicksand] font-bold">¿Por qué ExpertEase?</h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col">
        {
            Cards.map((Card, key) => (
              <div className={`h-[100px] bg-gradient-to-tr from-rob-roy-200 via-rob-roy-300 to-jungle-green-300 hover:from-green-800 hover:via-red-600 hover:to-blue-600 rounded-sm lg:mr-2 mt-2 ease-in duration-500`}>
                <p>{Card.name}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}
  
  export default Home;