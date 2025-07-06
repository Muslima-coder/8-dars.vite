
const Text = ({title, extraClass}) => {
    return(
        <p className={`font-semibold mb-[73px] text-[34px] text-[rgba(188,188,188,1)] ${extraClass}`} >{title}</p>
    )
}

export default Text