import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import AutenticacionIngreso from '../components/AutenticacionIngreso';

function Navbar() {

    let Links = [
        { name: "Servicios", link: "/Catalogo" },
        { name: "Nosotros", link: "/Nosotros" },
        { name: "Preguntas frecuentes", link: "/PreguntasFrecuentes" },
    ]

    let [open, setOpen] = useState(false);

    return (
        <div>3
            <nav className="shadow-md w-full fixed top-0 left-0 z-[1]">
                <div className='lg:flex items-center justify-between bg-white py-4 lg:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center justify-center font-[Poppins] text-gray-800'>
                        <NavLink className="text-indigo-600 pt-1 lg:pt-0" to="/" exact>
                            <span className='flex h-[34px]'>
                                ExpertEase
                                <img src="https://i.ibb.co/dWgRyw1/imagen.png" alt="logo" className='ml-1'/>
                            </span>
                        </NavLink>
                    </div>
                    <div onClick={() => setOpen(!open)} className="absolute left-8 top-5 cursor-pointer lg:hidden pt-1">
                        <FontAwesomeIcon size='xl' icon={open ? faXmark : faBars} />
                    </div>
                    <ul className={`lg:flex lg:items-center lg:pb-0 pb-7 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-8 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px]'} lg:opacity-100 opacity-0`}>
                        {/* <Dropdown>Buscar servicio</Dropdown> */}
                        {
                            Links.map((Link, key) => (
                                <li key={key} className='lg:ml-8 text-m lg:text-sm lg:my-0 my-7 lg:font-normal'>
                                    <NavLink className="text-gray-500 hover:text-gray-800 duration-500" to={Link.link}>
                                        {Link.name}
                                    </NavLink>
                                </li>
                            )
                            )}
                        <div className='flex justify-between items-center pr-8 lg:pr-0'>
                            <div className="flex gap-4 flex-grow lg:gap-0">
                                <AutenticacionIngreso />
                                {/* <NavLink to="/Registro" className="w-1/2 lg:w-full lg:mx-5">
                                    <Button width="w-full" bgColor="bg-white" bgColorHover="hover:bg-zinc-100" textColor="text-sandy-brown-600" borderColor="border-sandy-brown-500" borderColorHover="hover:border-sandy-brown-500">
                                        Crear Cuenta
                                    </Button>
                                </NavLink>
                                <NavLink to="/Ingreso" className="w-1/2 lg:ml-2">
                                    <Button width="w-full" bgColor="bg-charcoal-600" bgColorHover="hover:bg-charcoal-400" textColor="text-white" borderColor="border-charcoal-600" borderColorHover="hover:border-charcoal-400">
                                        Ingresar
                                    </Button>
                                </NavLink> */}
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;