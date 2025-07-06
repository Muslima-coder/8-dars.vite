import Heading from "../components/Heading"
import Text from "../components/Text"


function Additional(){
    return(
        <section className="pb-[329px]">
            <div className="containers">
            <Heading extraClass={"!mb-[82px]"} title={"Additional technologies and skills"}/>
            <div className="flex justify-between">

                <div className="flex flex-col gap-[32px]">
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

                 <div className="flex flex-col gap-[32px]">
                    <div className="flex items-center gap-[15px] ">
                        <div className="bg-[rgba(255,255,255,1)] w-[10px] h-[10px] rounded-full "></div>
                        <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={" Wordpress"}/>
                    </div>
                    <div className="flex items-center gap-[15px] ">
                        <div className="bg-[rgba(255,255,255,1)] w-[10px] h-[10px] rounded-full "></div>
                        <Text extraClass={"!text-[rgba(255,255,255,1)] !mb-0"} title={"Engagement"}/>
                    </div>
                </div>

                 <div className="flex flex-col gap-[32px]">
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