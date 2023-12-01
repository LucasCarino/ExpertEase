import React, { useState } from "react";
import { auth } from "../firebase";
import Button from "../components/Button";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const RecuperarPassword = () => {
  const [email, setEmail] = useState("");
  let history = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRecovery = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email).then(() => {
      alert("Se envió un mail a su correo para recuperar su contraseña");
      history("/Ingreso")
    }).catch(error => { console.log(error.code) });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen pt-8">
        <div className="flex flex-col items-center py-8 mx-auto md:h-screen">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-full">
            <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  ¿Olvidaste tu contraseña?
                </h1>
                <h2>
                  Completá los datos y te enviaremos por mail los pasos para
                  elegir una nueva.
                </h2>
                <form
                  className="space-y-4"
                  action="#"
                  onSubmit={handleRecovery}
                >
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
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  ></input>
                  <Button
                    type="submit"
                    name="submit"
                    width="w-full"
                    bgColor="bg-charcoal-600"
                    bgColorHover="hover:bg-charcoal-400"
                    textColor="text-white"
                    value="Ingresar"
                    borderColor="border-charcoal-600"
                    borderColorHover="hover:border-charcoal-400"
                  >
                    Enviar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecuperarPassword;
