import React, { useEffect, useState} from "react";
import { auth, app } from "../firebase";
import Navbar from "../pages/Navbar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";


const Autenticacion = () => {
    const [authenticatedUser, setAuthenticatedUser] = useState("");

    useEffect(() => {
        const listenAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticatedUser(user);
            } else {
                setAuthenticatedUser(null);
            }
        })
        return () => listenAuth()
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign out");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
        {authenticatedUser === null ? 
            <>
                <NavLink to="/Registro" className="w-1/2 lg:w-full lg:mx-5">
                    <Button width="w-full" bgColor="bg-white" bgColorHover="hover:bg-zinc-100" textColor="text-sandy-brown-600" borderColor="border-sandy-brown-500" borderColorHover="hover:border-sandy-brown-500">
                        Crear Cuenta
                    </Button>
                </NavLink>
                <NavLink to="/Ingreso" className="w-1/2 lg:ml-2">
                    <Button width="w-full" bgColor="bg-charcoal-600" bgColorHover="hover:bg-charcoal-400" textColor="text-white" borderColor="border-charcoal-600" borderColorHover="hover:border-charcoal-400">
                        Ingresar
                    </Button>
                </NavLink>
            </>
            :
            <>
                <NavLink to="/" onClick={userSignOut} className="w-1/2 lg:ml-2">
                <Button bgColor="bg-sandy-brown-600" bgColorHover="hover:bg-sandy-brown-400" textColor="text-white" borderColor="border-sandy-brown-600" borderColorHover="hover:border-sandy-brown-400">
                        Salir
                    </Button>
                </NavLink>
            </>
        }
        </>
    );
}

export default Autenticacion;
