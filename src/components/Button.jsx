const Button = (props) => {
    const { bgColor, bgColorHover, textColor, borderColor, borderColorHover, children } = props;

    return ( 
        <button className={`${bgColor} ${bgColorHover} ${textColor} ${borderColor} ${borderColorHover} border-2 flex-grow text-xs md:text-sm font-[Poppins] py-2 px-6 w-6/12 md:w-auto rounded md:ml-6 duration-500`}>
            {children}
        </button>
     );
}
 
export default Button;