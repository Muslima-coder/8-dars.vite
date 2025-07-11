import {  FigmaIcon2, GitHubIcon2, LinKedIcon2 } from "../assets/icons";
import Text from "../components/Text";


function Footer(){
    return(
        <footer className="pb-[80px]">
            <div className="containers">

            <div className="flex sm:w-full w-[200px] sm:gap-0 gap-[20px] !flex-wrap mx-auto sm:mx-0  justify-between items-center">
                <div>
                <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={"Call me:"}/>
                <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={"123-456-789"}/>
                </div>
                 <div>
                <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={"Email:"}/>
                <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={"xxx@xyz.com"}/>
                </div>
                <div className="sm:mx-0 mx-auto flex gap-[15px] sm:gap-[65px] items-center">
                    <GitHubIcon2/>
                    <LinKedIcon2/>
                    <FigmaIcon2/>
                </div>
            </div>

            </div>
        </footer>
    )
}

export default Footer