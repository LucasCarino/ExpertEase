const Nosotros = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
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
            src="https://img.freepik.com/free-vector/3d-cartoon-people-concept-online-meeting-virtual-conference-video-call_40876-3762.jpg?w=900&t=st=1695817940~exp=1695818540~hmac=7c0504e78e0abbf75aa3c1845b2ae2e57f9b17806633141b10eec9c72b699c68"
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
            src="https://img.freepik.com/free-photo/3d-render-hands-giving-fist-bump-business-concept_107791-15403.jpg?w=996&t=st=1695820512~exp=1695821112~hmac=26da8187a8cba5bd66401ceed059594eb5cec85e455c073d0a8f300660f6c050"
            alt="A group of People"
          />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
