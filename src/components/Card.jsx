const Card = (props) => {

    const { bgColor, children } = props;

    return ( 
        <div className={`h-[100px] ${bgColor} rounded-sm md:mr-2 mt-2`}>
            {children}
        </div>
     );
}
 
export default Card;