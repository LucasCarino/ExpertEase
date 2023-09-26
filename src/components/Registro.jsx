import React from "react";
import {
    Stepper,
    Step,
    CardHeader,
    Typography,
} from "@material-tailwind/react";

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
                                Comencemos!
                            </h1>
                            <div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Cual es tu nombre?
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
                                    Cual es tu email?
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
                            <Button
                                width="w-full"
                                bgColor="bg-charcoal-600"
                                bgColorHover="hover:bg-charcoal-400"
                                textColor="text-white"
                                borderColor="border-charcoal-600"
                                borderColorHover="hover:border-charcoal-400"
                            >
                                Continuar
                            </Button>
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
                                Formulario 2
                            </h1>
                            <div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Cual es tu nombre?
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
                                    Cual es tu email?
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
                            <Button
                                width="w-full"
                                bgColor="bg-charcoal-600"
                                bgColorHover="hover:bg-charcoal-400"
                                textColor="text-white"
                                borderColor="border-charcoal-600"
                                borderColorHover="hover:border-charcoal-400"
                            >
                                Continuar
                            </Button>
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
                                    Cual es tu nombre?
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
                                    Cual es tu email?
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
                            <Button
                                width="w-full"
                                bgColor="bg-charcoal-600"
                                bgColorHover="hover:bg-charcoal-400"
                                textColor="text-white"
                                borderColor="border-charcoal-600"
                                borderColorHover="hover:border-charcoal-400"
                            >
                                Registrarme ahora
                            </Button>
                        </form>
                    )}
                </CardHeader>
            </div>
        </div>
    );
}

export default Registro;