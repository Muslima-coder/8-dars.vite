import Heading from "../components/Heading"
import Text from "../components/Text"

function Technologies(){
    return(
        <section className="pb-[132px]">
            <div className="containers">
                <Heading extraClass={"!sm:mb-[133px] !mb-[30px] sm:text-start text-center"} title={"Technologies"}/>

                <div className="mx-auto sm:w-[1300px] w-[300px] flex flex-col gap-[54px] ">
                    <div>
                        <div className="px-[20px] flex justify-between mb-1">
                            <Text extraClass={"!mb-0"} title={"Html"}/>
                            <Text extraClass={"!mb-0"} title={"Advanced"}/>
                        </div>
                        <div className="w-full bg-[#1E293B] rounded-full h-[32px]">
                            <div className="html w-[70%]  rounded-full h-[32px]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="px-[20px] flex justify-between mb-1">
                            <Text extraClass={"!mb-0"} title={"CSS, Sass & Bootstrap"}/>
                            <Text extraClass={"!mb-0"} title={"Advanced"}/>
                        </div>
                        <div className="w-full bg-[#1E293B] rounded-full h-[32px]">
                            <div className="html w-[70%]  rounded-full h-[32px]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="px-[20px] flex justify-between mb-1">
                            <Text extraClass={"!mb-0"} title={"JavaScript, TypeScript, JQuery"}/>
                            <Text extraClass={"!mb-0"} title={"Advanced"}/>
                        </div>
                        <div className="w-full bg-[#1E293B] rounded-full h-[32px]">
                            <div className="html w-[70%]  rounded-full h-[32px]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="px-[20px] flex justify-between mb-1">
                            <Text extraClass={"!mb-0"} title={"UI design in Figma"}/>
                            <Text extraClass={"!mb-0"} title={"Regular"}/>
                        </div>
                        <div className="w-full bg-[#1E293B] rounded-full h-[32px]">
                            <div className="html w-[50%]  rounded-full h-[32px]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="px-[20px] flex justify-between mb-1">
                            <Text extraClass={"!mb-0"} title={"Angular"}/>
                            <Text extraClass={"!mb-0"} title={"Beginner"}/>
                        </div>
                        <div className="w-full bg-[#1E293B] rounded-full h-[32px]">
                            <div className="html w-[30%]  rounded-full h-[32px]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="px-[20px] flex justify-between mb-1">
                            <Text extraClass={"!mb-0"} title={"React"}/>
                            <Text extraClass={"!mb-0"} title={"Beginner"}/>
                        </div>
                        <div className="w-full bg-[#1E293B] rounded-full h-[32px]">
                            <div className="html w-[30%]  rounded-full h-[32px]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="px-[20px] flex justify-between mb-1">
                            <Text extraClass={"!mb-0"} title={"React Native"}/>
                            <Text extraClass={"!mb-0"} title={"Beginner"}/>
                        </div>
                        <div className="w-full bg-[#1E293B] rounded-full h-[32px]">
                            <div className="html w-[30%]  rounded-full h-[32px]"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Technologies
