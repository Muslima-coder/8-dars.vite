import { ProjectImg } from "../assets/image"
import Heading from "../components/Heading"
import ProjectItem from "../components/ProjectItem"


function Projects(){
    const ProjectList = [
        {
            id:1,
            img: ProjectImg,
            title: "Project",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
         {
            id:2,
            img:ProjectImg ,
            title: "Project 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
         {
            id:3,
            img: ProjectImg,
            title: "A bit longer title for 3rd project",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
         {
            id:4,
            img: ProjectImg,
            title: "Project 4",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
    return(
        <section className="sm:pb-[320px] pb-[100px]">
            <div className="containers">
                <Heading extraClass={"!sm:mb-[93px] !mb-[40px]  text-center "} title={"Projects"}/>
                <div className="flex-col gap-[20px] sm:mx-0 flex sm:flex-row sm:justify-between flex-wrap sm:gap-[97px]">
                {ProjectList.map(item => <ProjectItem key={item.id} item={item} /> )}
                </div>
            </div>
        </section>
    )
}
export default Projects