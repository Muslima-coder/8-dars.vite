
const Text = ({title, extraClass}) => {
    return(
        <p className={`font-normal text-[14px] mb-[30px] sm:font-semibold sm:mb-[73px] sm:text-[34px] text-[rgba(188,188,188,1)] ${extraClass}`} >{title}</p>
    )
}

export default Text