import React from "react";
import {
    Stepper,
    Step,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Button from "./Button";

export default function Registro() {
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
                                className="h-4 w-4 bg-gray-300 text-black cursor-pointer"
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
                                className="h-4 w-4 bg-gray-300 text-black cursor-pointer"
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
                            }}>
                            <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5">
                                Comencemos!
                            </h1>
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Cual es tu nombre?
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Juan"
                                ></input>
                            </div>
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Cual es tu email?
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Juan@correo.com"
                                ></input>
                            </div>
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Confirma tu email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Juan@correo.com"
                                ></input>
                            </div>
                            <button
                                        type="submit"
                                        class="w-full text-white mt-3 bg-slate-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Continuar
                                    </button>
                         
                        </form>
                    )}
                    {activeStep === 1 && (
                        <form
                            id="secondForm"
                            className="w-full"
                            method="post"
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            {/* ... Campos del segundo formulario */}
                            <fieldset>
                                <input
                                    placeholder="Campo 1"
                                    type="text"
                                    tabIndex="1"
                                    autoFocus
                                    className="p-2 my-2 w-full"
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Campo 2"
                                    type="text"
                                    tabIndex="2"
                                    className="p-2 my-2 w-full"
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Campo 3"
                                    type="text"
                                    tabIndex="3"
                                    className="p-2 my-2 w-full"
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Campo 4"
                                    type="text"
                                    tabIndex="3"
                                    className="p-2 my-2 w-full"
                                />
                            </fieldset>
                            <fieldset>
                                <button
                                    type="submit"
                                    className="bg-charcoal-600 py-2 w-full my-2 rounded border-2 border-charcoal-600 text-white mb-10 hover:bg-charcoal-400 hover:border-charcoal-400 duration-500"
                                >
                                    Enviar
                                </button>
                            </fieldset>
                        </form>
                    )}
                    {activeStep === 2 && (
                        <form
                            id="contact"
                            className="w-full"
                            method="post"
                            onSubmit={(e) => {
                                e.preventDefault();
                                this.avanzarPaso(); // Avanzar al segundo formulario
                            }}
                        >
                            <fieldset>
                                <input
                                    placeholder="Nombre"
                                    type="text"
                                    tabIndex="1"
                                    autoFocus
                                    className="p-2 my-2 w-full"
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    tabIndex="2"
                                    className="p-2 my-2 w-full"
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Teléfono"
                                    type="tel"
                                    tabIndex="3"
                                    className="p-2 my-2 w-full"
                                />
                            </fieldset>
                            <fieldset>
                                <button
                                    type="submit"
                                    className="bg-charcoal-600 py-2 w-full my-2 rounded border-2 border-charcoal-600 text-white mb-10 hover:bg-charcoal-400 hover:border-charcoal-400 duration-500"
                                >
                                    Continuar
                                </button>
                            </fieldset>
                            <Button type="submit">Finalizar</Button>
                        </form>
                    )}
                </CardHeader>
            </div>
        </div>
    );
}
