import Heading from "../components/Heading"
import Text from "../components/Text"


function Additional(){
    return(
        <section className="sm:pb-[329px] pb-[100px]">
            <div className="containers">
            <Heading extraClass={"!sm:mb-[82px] mb-[30px]"} title={"Additional technologies and skills"}/>
            <div className="flex flex-col items-center sm:items-start  gap-[32px] sm:gap-0 sm:flex-row justify-between">

                <div className="flex flex-col sm:mx mx-auto gap-[32px]">
                    <div className="flex items-center gap-[15px] ">
                        <div className="bg-[rgba(255,255,255,1)] w-[10px] h-[10px] rounded-full "></div>
                        <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={" Git"}/>
                    </div>
                    <div className="flex items-center gap-[15px] ">
                        <div className="bg-[rgba(255,255,255,1)] w-[10px] h-[10px] rounded-full "></div>
                        <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={" Quick learning"}/>
                    </div>
                    <div className="flex items-center gap-[15px] ">
                        <div className="bg-[rgba(255,255,255,1)] w-[10px] h-[10px] rounded-full "></div>
                        <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={" RWD"}/>
                    </div>
                </div>

                 <div className="flex flex-col sm:mx mx-auto gap-[32px]">
                    <div className="flex items-center gap-[15px] ">
                        <div className="bg-[rgba(255,255,255,1)] w-[10px] h-[10px] rounded-full "></div>
                        <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={" Wordpress"}/>
                    </div>
                    <div className="flex items-center gap-[15px] ">
                        <div className="bg-[rgba(255,255,255,1)] w-[10px] h-[10px] rounded-full "></div>
                        <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={"Engagement"}/>
                    </div>
                </div>

                 <div className="flex flex-col sm:mx mx-auto gap-[32px]">
                    <div className="flex items-center gap-[15px] ">
                        <div className="bg-[rgba(255,255,255,1)] w-[10px] h-[10px] rounded-full "></div>
                        <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={" Teamwork"}/>
                    </div>
                    <div className="flex items-center gap-[15px] ">
                        <div className="bg-[rgba(255,255,255,1)] w-[10px] h-[10px] rounded-full "></div>
                        <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={"B2 english"}/>
                    </div>
                </div>

            </div>

            </div>
        </section>
    )
}
export default Additional