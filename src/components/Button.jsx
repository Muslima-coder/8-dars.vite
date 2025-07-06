
const Button = ({title, extraClass}) => {
    return(
        <button className={`font-normal text-[15px] sm:font-semibold rounded-[83px] py-[8px] px-[12px] sm:py-[19px] sm:px-[63px] sm:text-[28px] text-white btn-bg ${extraClass} `}>{title}</button>
    )
} 

export default Button