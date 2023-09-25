const Button = (props) => {
    const { bgColor, bgColorHover, textColor, borderColor, borderColorHover, width, children } = props;

    return ( 
        <button className={`${bgColor} ${bgColorHover} ${textColor} ${borderColor} ${borderColorHover} ${width} border-2 flex-grow text-xs lg:text-sm font-[Poppins] py-2 px-6 rounded duration-500`}>
            {children}
        </button>
     );
}
 
export default Button;