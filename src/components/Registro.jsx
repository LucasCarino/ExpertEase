import React, { useState } from "react";
import {
  Stepper,
  Step,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUserTie } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

const Registro = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    event.target.value === "expert" ? setOpen(true) : setOpen(false);
  };

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

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
                className="h-4 w-4 bg-black text-black cursor-pointer z-0"
                activeClassName="ring-0 bg-black text-black"
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
                className="h-4 w-4 bg-gray-400 text-black cursor-pointer z-0"
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
                className="h-4 w-4 bg-gray-400 text-black cursor-pointer z-0"
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
                  value={inputData.name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan López"
                />
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
                  value={inputData.email}
                  onChange={handleInputChange}
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan@correo.com"
                />
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
                  name="confirmEmail"
                  id="confirmEmail"
                  value={inputData.confirmEmail}
                  onChange={handleInputChange}
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Juan@correo.com"
                />
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
                  id="phone"
                  value={inputData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="11 1234-5678"
                />
              </div>

              <Step className="font-normal z-0" onClick={() => setActiveStep(1)}>
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
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Soy...
              </label>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="student"
                    name="hosting"
                    value="student"
                    className="hidden peer"
                    onChange={handleClick}
                    required
                  />
                  <label
                    for="student"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-md cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-sandy-brown-600 peer-checked:text-sandy-brown-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 duration-100 ease-in-out"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Estudiante</div>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faGraduationCap} size="xl" />
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="expert"
                    name="hosting"
                    value="expert"
                    className="hidden peer"
                    onChange={handleClick}
                  />
                  <label
                    for="expert"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-sandy-brown-600 peer-checked:border-sandy-brown-600 peer-checked:text-sandy-brown-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Experto</div>
                    </div>
                    <FontAwesomeIcon icon={faUserTie} size="xl" />
                  </label>
                </li>
              </ul>

              <div
                className={`duration-300 mt-4 flex w-full ease-in-out overflow-hidden ${
                  open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 py-0"
                }`}
              >
                <form className="grid grid-cols-1 w-full">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Cúal es tu título?
                    </label>
                    <input
                      type="text"
                      name="deegre"
                      id="email"
                      className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Lic. en gestión de tecnología de la información"
                    ></input>
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Completa con tu experiencia y títulos
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="UADE 2023"
                    ></input>
                  </div>
                </form>
              </div>

              <Step className="font-normal z-0" onClick={() => setActiveStep(2)}>
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
                Por último, revisa tu información
              </h1>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre
                </label>
                <p className="mb-5">{inputData.name}</p>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <p className="mb-5">{inputData.email}</p>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Teléfono
                </label>
                <p className="mb-5">{inputData.phone}</p>
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
