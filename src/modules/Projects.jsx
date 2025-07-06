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
        <section className="pb-[320px]">
            <div className="containers">
                <Heading extraClass={"!mb-[93px]"} title={"Projects"}/>
                <div className="flex justify-between flex-wrap gap-[97px]">
                {ProjectList.map(item => <ProjectItem key={item.id} item={item} /> )}
                </div>
            </div>
        </section>
    )
}
export default Projects