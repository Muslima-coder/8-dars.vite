
const Heading = ({title, extraClass}) => {
    return(
        <h2 className={`font-normal sm:text-start text-[20px] mb-[20px] sm:font-semibold sm:text-[60px] text-[rgba(255,255,255,1)] sm:mb-[34px] ${extraClass}`} >{title}</h2>
    )
}

export default Heading