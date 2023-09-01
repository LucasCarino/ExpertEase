import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import Button from './Button';

function Navbar() {
    
    let Links = [
        {name: "Nosotros", link: "/About"},
        {name: "Preguntas frecuentes", link: "/PreguntasFrecuentes"},
    ]
    
    let [open,setOpen] = useState(false);


    return (
        <div>
            <nav className="shadow-md w-full fixed top-0 left-0 z-[1]">
                <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center justify-center font-[Poppins] text-gray-800'>
                        <NavLink className="text-indigo-600 pt-1 md:pt-0" to="/" exact>
                            ExpertEase
                        </NavLink>
                    </div>
                    <div onClick={()=>setOpen(!open)} className="absolute left-8 top-5 cursor-pointer md:hidden pt-1">
                        <FontAwesomeIcon size='xl' icon={open ? faXmark : faBars} />
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-7 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                        <Dropdown>Buscar servicio</Dropdown>
                        {
                            Links.map((Link, key) => (
                                <li key={key} className='md:ml-8 text-m md:text-sm md:my-0 my-7 md:font-normal'>
                                    {/* <a className='text-gray-500 hover:text-gray-800 duration-500' href={Link.link}>{Link.name}</a> */}
                                    <NavLink className="text-gray-500 hover:text-gray-800 duration-500" to={Link.link}>
                                        {Link.name}
                                        {/* ExpertEase */}
                                    </NavLink>
                                </li>
                            )
                        )}
                        <div className='flex justify-between items-center pr-8 md:pr-0'>
                            <div className="flex gap-4 flex-grow md:gap-0">
                                <Button bgColor="bg-white" bgColorHover="hover:bg-zinc-100" textColor="text-sandy-brown-600" borderColor="border-sandy-brown-500" borderColorHover="hover:border-sandy-brown-500">Crear cuenta</Button>
                                <Button bgColor="bg-charcoal-600" bgColorHover="hover:bg-charcoal-400" textColor="text-white" borderColor="border-charcoal-600" borderColorHover="hover:border-charcoal-400">Ingresar</Button>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
                   
    );
  }
  
  export default Navbar;