import React, { useState } from "react";
import { auth } from "../firebase";
import Button from "../components/Button";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Toast from "../components/Toast";


const RecuperarPassword = () => {
  const [toast, setToast] = useState(null);
  const [email, setEmail] = useState("");
  let history = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRecovery = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email).then(() => {
      setToast({
        message:
          "Se envió un mail a su correo para recuperar su contraseña",
        success: true,
        });
      history("/Ingreso")
    }).catch(error => { console.log(error.code) });
  };

  const closeToast = () => {
    setToast(null);
  }
  

  return (
    <section className="bg-gray-50 ">
      <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen pt-8">
        <div className="flex flex-col items-center py-8 mx-auto md:h-screen">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-full">
            <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
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
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Tu email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
                  {toast && (
                    <Toast
                      message={toast.message}
                      success={toast.success}
                      onClose={closeToast}
                    />
                  )}
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
