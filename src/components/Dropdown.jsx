import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faUser, faChalkboardTeacher, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Dropdown = (props) => {

    const { children } = props;

    let Links = [
        { name: "Profesores", link: "/", icon: faUser },
        { name: "Tutorías", link: "/", icon: faChalkboardTeacher },
        { name: "Estudiantes", link: "/", icon: faUserGraduate },
    ];

    const [open, setOpen] = useState(false);

    const handleHover = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        if (window.innerWidth < 768) {
            setOpen((prev) => !prev);
        }
    };

    return ( 
        <div 
            className="relative rounded-lg lg:mr-0 mr-8 my-7 lg:ml-8 lg:my-0"
            onMouseEnter={handleHover}
            onMouseLeave={handleClose}
            onClick={handleClick}
        >
            <button className="flex items-center justify-between text-m lg:text-sm rounded-lg tracking-wider text-gray-500 hover:text-gray-800 duration-500">
                {children}
                <FontAwesomeIcon className={`ml-2 mt-0.5 duration-500 mb-[1px] ${open ? "rotate-0" : "rotate-180"} `} size='xl' icon={faAngleUp} />
            </button>
            <div className={`bg-zinc-100 absolute top-8 lg:w-[230px] rounded-sm w-full ease-in-out duration-300 overflow-hidden shadow-inner ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-50'}`}>
                <ul className="w-full">
                    {Links.map((link, key) => (
                        <li className="flex items-center hover:bg-sandy-brown-300 cursor-pointer rounded-r-sm border-l-transparent hover:border-l-sandy-brown-600 border-l-4 py-1.5 px-4 duration-500" key={key}>
                            <p className="flex-grow lg:text-sm">{link.name}</p>
                            <FontAwesomeIcon className="mr-2" icon={link.icon} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;
