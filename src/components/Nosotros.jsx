const Nosotros = () => {
  return (
    <div className="container px-8 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 pb-8 gap-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Sobre nosotros
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            En ExpertEase, estamos dedicados a transformar la educación en línea
            en una experiencia excepcional. Nuestra pasión por el aprendizaje y
            el empoderamiento educativo nos impulsa a ofrecer clases en línea de
            la más alta calidad. Con un equipo diverso de expertos en diferentes
            campos, estamos comprometidos en brindar a nuestros estudiantes las
            herramientas y el conocimiento necesario para alcanzar sus metas
            académicas y profesionales. Creemos en la accesibilidad, la
            innovación y la excelencia educativa como pilares fundamentales de
            nuestro enfoque. Únete a nosotros en este emocionante viaje
            educativo y descubre un mundo de posibilidades a través de la
            plataforma ExpertEase.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src="\assets\3d-rendering-people-avatars-zoom-call-removebg.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Nuestra historia
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Nuestra historia comienza como el ambicioso proyecto de dos
            estudiantes apasionados por la educación y la tecnología. A medida
            que nuestra visión tomaba forma, decidimos unir fuerzas para crear
            una plataforma de clases en línea única. Desde sus modestos inicios
            hasta su evolución actual, nuestro proyecto es un testimonio de
            dedicación y un deseo compartido de transformar la educación en
            línea.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src="/assets/6263-removebg-preview.png"
            alt="A group of People"
          />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
