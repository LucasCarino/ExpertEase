import React, { useState } from "react";

const PreguntasFrecuentes = () => { 
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);

    return (
        <section>
            <div className="px-4 md:px-8 lg:px-10 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] pt-24 p-8 gap-4">
            <div className = "w-full relative object-center object-fit z-0">
                <div className="relative flex flex-col items-center justify-center sm:px-0 z-20 pb-20">
                    <div className="md:py-20 py-10">
                        <h1 role="heading" className="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white">
                            Preguntas Frecuentes
                        </h1>
                    </div>
                    <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
                        <div className="bg-white shadow rounded p-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-none text-gray-800">¿Por qué deberías utilizar ExpertEase?</h2>
                                </div>
                                <button onClick={() => setBox1(!box1)} className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box1 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {box1 && (
                                <ul className="">
                                    <li>
                                        <p className="text-base leading-normal text-gray-600 pt-3">Porque somos la plataforma n° 1 de clases en línea. </p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="bg-white shadow rounded p-8 mt-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-none text-gray-800">¿Qué método de pago puedo usar?</h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setBox2(!box2);
                                    }}
                                    data-menu
                                    className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                >
                                    {box2 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box2 && (
                                <ul>
                                    <li>
                                        <p className="text-base leading-normal text-gray-600 pt-3">Puedes usar Paypal, Visa, Payoneer, Master Card, Tarjeta de Débito, Mercado Pago, Pago Fácil.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="bg-white shadow rounded p-8 mt-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-none text-gray-800">¿Qué tipo de clases puedo tomar?</h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setBox3(!box3);
                                    }}
                                    data-menu
                                    className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                >
                                    {box3 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box3 && (
                                <ul>
                                    <li>
                                        <p className="text-base leading-normal text-gray-600 pt-3">¡Todo tipo de clases! Desde clases de música, matemática, álgebra, programación, cocina, hasta clases de adiestramiento canino.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="bg-white shadow rounded p-8 mt-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-none text-gray-800">¿Cómo puedo recuperar la contraseña?</h2>
                                </div>
                                <button onClick={() => setBox4(!box4)} data-menu className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box4 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box4 && (
                                <ul>
                                    <li>
                                        <p className="text-base leading-normal text-gray-600 pt-3">Por medio del botón "¿Olvidaste tu contraseña? de la página de ingreso.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </section>
    );
}

export default PreguntasFrecuentes;