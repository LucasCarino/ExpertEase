import React from "react";
import {
  Stepper,
  Step,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

import Button from "./Button";

const Registro = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="px-8 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen pt-16 flex flex-col items-center justify-center">
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <CardHeader
          floated={false}
          variant="gradient"
          className="grid m-0 place-items-center bg-white rounded-lg"
        >
          <div className="w-full px-16 md:px-20 pt-8 pb-8 ">
            <Stepper
              activeStep={activeStep}
              lineClassName="bg-black"
              activeLineClassName="bg-black"
            >
              <Step
                className="h-4 w-4 bg-black text-black cursor-pointer"
                activeClassName="ring-0 !bg-black text-black"
                completedClassName="!bg-black text-black"
                onClick={() => setActiveStep(0)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">
                    Paso 1
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-4 w-4 bg-charcoal-300 text-black cursor-pointer"
                activeClassName="ring-0 bg-black text-black"
                completedClassName="!bg-black text-black"
                onClick={() => setActiveStep(1)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">
                    Paso 2
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-4 w-4 bg-charcoal-300 text-black cursor-pointer"
                activeClassName="ring-0 bg-black text-black"
                completedClassName="!bg-black text-black"
                onClick={() => setActiveStep(2)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">
                    Paso 3
                  </Typography>
                </div>
              </Step>
            </Stepper>
          </div>
          {activeStep === 0 && (
            <form
              className="p-6 w-full sm:p-8"
              action="#"
              id="secondForm"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5">
                ¡Comencemos!
              </h1>
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ¿Cuál es tu nombre completo?
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan López"
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ¿Cuál es tu email?
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan@correo.com"
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirma tu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan@correo.com"
                ></input>
              </div>
              <div>
                <label
                  for="tel"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ¿Cúal es tu télefono?
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="tel"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="11 1234-5678"
                ></input>
              </div>

              <Step className="font-normal" onClick={() => setActiveStep(1)}>
                <Button
                  width="w-full"
                  bgColor="bg-charcoal-600"
                  bgColorHover="hover:bg-charcoal-400"
                  textColor="text-white"
                  borderColor="border-charcoal-600"
                  borderColorHover="hover:border-charcoal-400"
                  onClick={() => setActiveStep(1)}
                >
                  Continuar
                </Button>
              </Step>
            </form>
          )}
          {activeStep === 1 && (
            <form
              className="p-6 w-full sm:p-8"
              action="#"
              id="secondForm"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5">
                Ahora contanos sobre vos...
              </h1>
              <ul class="grid w-full gap-6 md:grid-cols-2">
    <li>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-full text-lg font-semibold">0-50 MB</div>
                <div class="w-full">Good for small websites</div>
            </div>
            <svg class="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="block">
                <div class="w-full text-lg font-semibold">500-1000 MB</div>
                <div class="w-full">Good for large websites</div>
            </div>
            <svg class="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
</ul>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ¿Cuál es tu email?
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan@correo.com"
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirma tu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan@correo.com"
                ></input>
              </div>
              <Step className="font-normal" onClick={() => setActiveStep(2)}>
                <Button
                  width="w-full"
                  bgColor="bg-charcoal-600"
                  bgColorHover="hover:bg-charcoal-400"
                  textColor="text-white"
                  borderColor="border-charcoal-600"
                  borderColorHover="hover:border-charcoal-400"
                  onClick={() => setActiveStep(1)}
                >
                  Continuar
                </Button>
              </Step>
            </form>
          )}
          {activeStep === 2 && (
            <form
              className="p-6 w-full sm:p-8"
              action="#"
              id="secondForm"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5">
                Formulario 3
              </h1>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ¿Cuál es tu nombre?
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan"
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ¿Cuál es tu email?
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan@correo.com"
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirma tu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan@correo.com"
                ></input>
              </div>
              <NavLink to="/Catalogo" exact>
                <Button
                  width="w-full"
                  bgColor="bg-charcoal-600"
                  bgColorHover="hover:bg-charcoal-400"
                  textColor="text-white"
                  borderColor="border-charcoal-600"
                  borderColorHover="hover:border-charcoal-400"
                >
                  Registrate Ahora
                </Button>
              </NavLink>
            </form>
          )}
        </CardHeader>
      </div>
    </div>
  );
};

export default Registro;
