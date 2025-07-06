
const Heading = ({title, extraClass}) => {
    return(
        <h2 className={`font-semibold text-[60px] text-[rgba(255,255,255,1)] mb-[34px] ${extraClass}`} >{title}</h2>
    )
}

export default Heading