import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Home() {
  let Cards = [
    {
      name: "Card 1",
      img: "https://cdn-icons-png.flaticon.com/256/8712/8712169.png",
      title: "Expertos confiables",
      caption:
        "Obtén la ayuda que necesitas de profesionales altamente calificados",
    },
    {
      name: "Card 2",
      img: "https://cdn-icons-png.flaticon.com/512/2631/2631448.png",
      title: "Solución personalizada",
      caption: "Para cada necesidad, una solución personalizada",
    },
    {
      name: "Card 3",
      img: "https://cdn-icons-png.flaticon.com/512/4137/4137003.png",
      title: "Calidad es nuestra prioridad",
      caption: "Comprometidos a brindarte experiencias excepcionales",
    },
    {
      name: "Card 4",
      img: "https://cdn-icons-png.flaticon.com/512/6747/6747103.png",
      title: "Destaca tu talento",
      caption:
        "Para expertos, es el lugar perfecto para mostrar tus habilidades y ayudar a otros a crecer",
    },
  ];

  const scrollToElement = () => {
    const element = document.getElementById("scrollTarget");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        duration: 10000,
      });
    }
  };

  return (
    <div className="px-8 lg:px-10 bg-[#f9f9f9] pt-24 flex flex-col items-center">
      <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] rounded-sm shadow-inner pb-8 ">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <div className="flex flex-col items-center lg:w-7/12 pt-5 md:pb-10 pb-5 lg:pb-0 w-full">
            <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0 mb-4 lg:mb-8 text-center font-[Quicksand] font-bold md:w-6/12">
              Expertos a tu alcance, facilidad a tu medida
            </h2>
            <h3 className="text-xs lg:pb-2 lg:text-lg text-center font-[Poppins] pb-5">
              Comienza a explorar servicios en línea ahora
            </h3>
            <div className="flex flex-row w-full justify-center">
              <div className="text-gray-600 focus-within:text-gray-400 lg:w-4/12">
                <input
                  type="search"
                  className="py-2 text-sm bg-jungle-green-800 rounded-l-lg pl-3 pr-3 focus:outline-none focus:bg-white focus:text-gray-900 duration-500 w-full"
                  placeholder="Servicio o experto"
                />
              </div>
              <div className=" text-gray-600 focus-within:text-gray-400">
                <button className="py-2 px-3 text-sm text-white bg-jungle-green-800 rounded-r-lg focus:outline-none active:bg-white active:text-gray-900 duration-500">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <img
              className="w-9/12 lg:py-12 hidden lg:block"
              src="https://www.super-ht.com/wp-content/uploads/2023/04/7-Customer-Facing-Technologies-Featured-Image.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:flex items-center justify-center mt-5 hidden">
          <button
            onClick={scrollToElement}
            className="pt-[5px] text-2xl w-[50px] h-[50px] text-white bg-blue-500 rounded-full focus:outline-none hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>
      </div>
      <div
        className="lg:pt-24 lg:pb-20 py-5 flex justify-center"
        id="scrollTarget"
      >
        <h2 className="text-xl md:text-4xl font-[Quicksand] font-bold">
          ¿Por qué ExpertEase?
        </h2>
      </div>
      <div className="lg:py-5 lg:grid lg:grid-cols-4 w-10/12 mx-auto justify-center">
        {Cards.map((Card, key) => (
          <div className="flex flex-col lg:mx-5 mb-5" key={key}>
            <div>
              <img
                src={Card.img}
                className="w-full h-[120px] object-contain"
                alt={`Imagen de ${Card.name}`}
              />
            </div>
            <p className="mt-1 mb-2 text-center font-semibold text-base">
              {Card.title}
            </p>
            <p className="text-center text-sm">{Card.caption}</p>
          </div>
        ))}
      </div>
      <div className="lg:w-1/4 text-center">


        <NavLink to="/Registro" exact>
          <button className="bg-charcoal-600 py-2 px-6 rounded border-2 border-charcoal-600 text-white mb-10 hover:bg-charcoal-400 hover:border-charcoal-400 duration-500">
            Comenzá ahora
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
