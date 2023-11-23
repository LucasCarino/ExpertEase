import React, { useEffect, useState } from "react";
import { auth, app } from "../firebase";
import Navbar from "../pages/Navbar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileDropdown from "../pages/ProfileDropdown";

const Autenticacion = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
    return () => listenAuth();
  }, []);



  return (
    <>
      {authenticatedUser === null ? (
        <>
          <NavLink to="/Registro" className="w-1/2 lg:w-full lg:mx-5">
            <Button
              width="w-full"
              bgColor="bg-white"
              bgColorHover="hover:bg-zinc-100"
              textColor="text-sandy-brown-600"
              borderColor="border-sandy-brown-500"
              borderColorHover="hover:border-sandy-brown-500"
            >
              Crear Cuenta
            </Button>
          </NavLink>
          <NavLink to="/Ingreso" className="w-1/2 lg:ml-2">
            <Button
              width="w-full"
              bgColor="bg-charcoal-600"
              bgColorHover="hover:bg-charcoal-400"
              textColor="text-white"
              borderColor="border-charcoal-600"
              borderColorHover="hover:border-charcoal-400"
            >
              Ingresar
            </Button>
          </NavLink>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center w-full lg:w-auto">
            <ProfileDropdown>
              <button className="rounded-full py-1.5 px-2.5 w-full overflow-hidden transition duration-300 hover:bg-blue-600 bg-blue-500">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </ProfileDropdown>
          </div>
        </>
      )}
    </>
  );
};

export default Autenticacion;
