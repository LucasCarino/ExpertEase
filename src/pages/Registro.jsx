import React, { useState } from "react";
import {
  Stepper,
  Step,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

import Button from "../components/Button";

const Registro = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = useState(false);

  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(userCredential.user, { displayName: displayName })
        .then(() => {
          navigate("/Catalogo");
          localStorage.setItem("usuarioCorreo", userCredential.user.email);
          localStorage.setItem("usuarioNombre", userCredential.user.displayName);
        })
        .catch((profileError) => {
          console.error("Error al actualizar el perfil:", profileError);
        });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        setError("El correo electrónico ya está en uso.");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres");
      } else {
        setError("Error al registrarse. Por favor, inténtalo de nuevo");
      }
      console.error(error);
    });
  };

  const [experiencias, setExperiencias] = useState([""]); // Inicializamos con un input vacío

  const agregarExperiencia = () => {
    setExperiencias([...experiencias, ""]);
  };

  const eliminarExperiencia = (index) => {
    const nuevasExperiencias = [...experiencias];
    nuevasExperiencias.splice(index, 1);
    setExperiencias(nuevasExperiencias);
  };

  const handleChange = (index, value) => {
    const nuevasExperiencias = [...experiencias];
    nuevasExperiencias[index] = value;
    setExperiencias(nuevasExperiencias);
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
      <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
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
              id="firstForm"
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
                  name="displayName"
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Juan@correo.com"
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="11 1234-5678"
                />
              </div>

              <Step
                className="font-normal z-0"
                onClick={() => setActiveStep(1)}
              >
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
              className="p-6 w-full sm:p-8 max-h-[400px] overflow-y-auto"
              id="secondForm"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5">
                Ahora contanos sobre vos...
              </h1>

              <div className="duration-300 mt-4 flex w-full ease-in-out overflow-hidden  opacity-100">
                <form className="grid grid-cols-1 w-full">
                  <div>
                    <label
                      for="deegre"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Cúal es tu título?
                    </label>
                    <input
                      type="text"
                      name="deegre"
                      id="deegre"
                      className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Lic. en gestión de tecnología de la información"
                    ></input>
                  </div>

                  <div>
                    <label
                      htmlFor={`experience-0`}
                      className="mb-2 text-sm font-medium text-gray-900 flex items-center"
                    >
                      Completa con tu experiencia y títulos
                      <button
                        type="button"
                        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md"
                        onClick={agregarExperiencia}
                      >
                        +
                      </button>
                    </label>
                    {experiencias.map((experiencia, index) => (
                      <div key={index} className="mb-2 flex">
                        <input
                          type="text"
                          id={`experience-${index}`}
                          className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          placeholder="UADE 2023"
                          value={experiencia}
                          onChange={(e) => handleChange(index, e.target.value)}
                        />
                        {index !== 0 && (
                          <button
                            type="button"
                            className="ml-2 bg-red-500 text-white px-3.5 py-1 rounded-md mb-2"
                            onClick={() => eliminarExperiencia(index)}
                          >
                            -
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </form>
              </div>

              <Step
                className="font-normal z-0"
                onClick={() => setActiveStep(2)}
              >
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
              id="thirdForm"
              onSubmit={signUp}
            >
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5">
                Por último, revisa tu información
              </h1>
              <div>
                <label
                  for="name"
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
                  for="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Teléfono
                </label>
                <p className="mb-5">{inputData.phone}</p>
              </div>
              <Button
                type="submit"
                name="submit"
                width="w-full"
                bgColor="bg-charcoal-600"
                bgColorHover="hover:bg-charcoal-400"
                textColor="text-white"
                borderColor="border-charcoal-600"
                borderColorHover="hover:border-charcoal-400"
              >
                Registrate Ahora
              </Button>
              {error && (
                <div className="mt-2">
                  <p className="text-sm font-light text-red-500">
                    {error}
                    <Link
                      to="/Ingreso"
                      className="text-sm font-medium text-black hover:underline"
                    >
                      Iniciar sesión
                    </Link>
                  </p>
                </div>
              )}
            </form>
          )}
        </CardHeader>
      </div>
    </div>
  );
};

export default Registro;
