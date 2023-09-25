import React, { Component } from "react";

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pasoActual: 1, // Inicialmente mostramos el primer formulario
        };
    }

    avanzarPaso = () => {
        // Avanzar al siguiente paso al hacer clic en "Continuar"
        this.setState({ pasoActual: 2 });
    };

    render() {
        const { pasoActual } = this.state;

        return (
            <div className="px-8 lg:px-10 bg-rob-roy-100 h-screen pt-24">
                <div className="bg-gradient-to-tr from-charcoal-400 via-charcoal-300 to-rob-roy-200 lg:w-1/2 px-5 rounded-sm shadow-inner pb-8">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                        <div className="flex flex-col items-center pt-5 md:pb-10 pb-5 lg:pb-0 w-full">
                            {pasoActual === 1 && (
                                <div>
                                    {/* Primer formulario */}
                                    <h2 className="lg:text-3xl text-2xl mt-4 lg:mt-0 mb-4 lg:mb-8 text-center font-[Quicksand] font-bold md:w-6/12">
                                        Crea tu cuenta ExpertEase ahora
                                    </h2>
                                    <div className="flex flex-row w-full justify-center">
                                        <form
                                            id="contact"
                                            className="w-full"
                                            method="post"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                this.avanzarPaso(); // Avanzar al segundo formulario
                                            }}
                                        >
                                            {/* ... Campos del primer formulario */}
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
                                        </form>
                                    </div>
                                </div>
                            )}

                            {pasoActual === 2 && (
                                <div>
                                    {/* Segundo formulario */}
                                    <h2 className="lg:text-3xl text-2xl mt-4 lg:mt-0 mb-4 lg:mb-8 text-center font-[Quicksand] font-bold md:w-6/12">
                                        Segundo Formulario
                                    </h2>
                                    <div className="flex flex-row w-full justify-center">
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
                                                <button
                                                    type="submit"
                                                    className="bg-charcoal-600 py-2 w-full my-2 rounded border-2 border-charcoal-600 text-white mb-10 hover:bg-charcoal-400 hover:border-charcoal-400 duration-500"
                                                >
                                                    Enviar
                                                </button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registro;
