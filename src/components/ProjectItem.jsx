import Button from "./Button";
import Heading from "./Heading";
import Text from "./Text";


function ProjectItem ({item}) {
    return (
        <div className="w-[550px] shadow-lg shadow-slate-300 p-[25px] rounded-tl-[54px] rounded-br-[54px]">
            <img src={item.img} alt="img" width={500} height={286} />
            <Heading extraClass={"!text-center"} title={item.title}/>
            <Text title={item.content}/>
            <Button extraClass={"!py-[15px] !px-[52px] "} title={"Look it up"}/>
        </div>
    )
}
export default ProjectItem