import Button from "./Button";

const Ingreso = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen pt-8">
        <div className="flex flex-col items-center py-8 mx-auto md:h-screen">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-full">
            <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Ingresa a tu cuenta
                </h1>
                <form className="space-y-4" action="#">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tu email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    ></input>
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    ></input>
                  </div>
                  <div className="flex items-start justify-between flex-col md:flex-row md:items-center">
                    <div className="flex items-start">
                      <div className="flex items-center h-5 mb-2 md:mb-0">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Recuerdame
                        </label>
                      </div>
                    </div>
                    <a
                      href="/#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Olvidaste tu contraseña?
                    </a>
                  </div>
                    <Button width="w-full" bgColor="bg-charcoal-600" bgColorHover="hover:bg-charcoal-400" textColor="text-white" borderColor="border-charcoal-600" borderColorHover="hover:border-charcoal-400">
                        Ingresar
                    </Button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Aún no tienes una cuenta?{" "}
                    <a
                      href="/#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Registrate!
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingreso;
