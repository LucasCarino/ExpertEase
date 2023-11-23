import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth } from "../firebase";
import { faUserPen, faDoorOpen, faGear } from '@fortawesome/free-solid-svg-icons';
import { signOut } from "firebase/auth";

import { NavLink } from "react-router-dom";

const ProfileDropdown = (props) => {

    const { children } = props;

    let Links = [
        { name: "Mi perfíl", link: "/Perfil", icon: faUserPen },
        { name: "Admin", link: "/Admin", icon: faGear },
        { name: "Salir", link: "/", icon: faDoorOpen },
    ];
    
    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("Sign out");
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    const [open, setOpen] = useState(false);

    const handleHover = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return ( 
        <div 
            className="relative rounded-lg lg:mr-0 mr-8 my-7 lg:ml-8 lg:my-0"
            onMouseEnter={handleHover}
            onMouseLeave={handleClose}
        >
            <button className="flex items-center justify-between text-m lg:text-sm rounded-lg tracking-wider text-black hover:text-gray-800 duration-500">
                {children}
            </button>
            <div className={`bg-zinc-100 absolute lg:right-0 top-8 lg:w-[200px] rounded  w-full ease-in-out duration-300 overflow-hidden shadow-inner ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-50'}`}>
                <ul className="w-full">
                    {Links.map((link, key) => (
                        <NavLink className="text-gray-700" to={link.link}>
                            <li className="flex items-center hover:bg-charcoal-200 cursor-pointer rounded-r-sm border-l-transparent hover:border-charcoal-600 border-l-4 py-1.5 px-4 duration-500" key={key} onClick={link.name === "Salir" ? userSignOut : undefined} >
                                <p className="flex-grow lg:text-sm">{link.name}</p>
                                <FontAwesomeIcon className="mr-2" icon={link.icon} />
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfileDropdown;
