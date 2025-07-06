
const Button = ({title, extraClass}) => {
    return(
        <button className={`font-semibold rounded-[83px] py-[19px] px-[63px] text-[28px] text-white btn-bg ${extraClass} `}>{title}</button>
    )
} 

export default Button