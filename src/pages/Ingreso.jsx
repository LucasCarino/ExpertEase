import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Ingreso = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate("");

  const signIn = (e) => {
    e.preventDefault();
    debugger;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/Catalogo");
        localStorage.setItem('usuarioCorreo', userCredential.user.email);
        localStorage.setItem("usuarioNombre", userCredential.user.displayName);
      })
      .catch((error) => {
        setError("Credenciales incorrectas");
        console.log(error);
      });
  };

  return (
    <section className="bg-gray-50 ">
      <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen pt-8">
        <div className="flex flex-col items-center py-8 mx-auto md:h-screen">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-full">
            <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Ingresa a tu cuenta
                </h1>
                <form className="space-y-4" action="#" onSubmit={signIn}>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Tu email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@company.com"
                      required=""
                    ></input>
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required=""
                    ></input>
                  </div>
                  {error && (
                    <p className="text-sm font-light text-red-500">{error}</p>
                  )}
                  <div className="flex items-start justify-between flex-col md:flex-row md:items-center">
                    <div className="flex items-start">
                      <div className="flex items-center h-5 mb-2 md:mb-0">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                          required=""
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="remember"
                          className="text-gray-500 "
                        >
                          Recuérdame
                        </label>
                      </div>
                    </div>
                    <Link
                      to="/RecuperarPassword"
                      className="text-sm font-medium text-primary-600 hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <div className="mt-5">
                    {/* <NavLink to="/Catalogo" exact> */}
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
                      Ingresar
                    </Button>
                  </div>

                  <p className="text-sm font-light text-gray-500">
                    ¿Aún no tienes una cuenta?{" "}
                    <NavLink to="/Registro" className="font-semibold">
                      ¡Regístrate!
                    </NavLink>
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
