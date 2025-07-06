import Heading from "../components/Heading";
import Text from "../components/Text";


function AboutMe (){
   return(
     <section className="pb-[428px]">
        <div className="containers">
        <Heading title={"About me"}/>

         <div className="mx-auto flex justify-between items-center w-[85%]">
            <Text extraClass={"!mb-0 !text-[rgba(255,255,255,1)] !text-center"} title={"2018"}/>
            <Text extraClass={"!mb-0 !text-[rgba(255,255,255,1)] !text-center"} title={"2018"}/>
            <Text extraClass={"!mb-0 !text-[rgba(255,255,255,1)] !text-center"} title={"2018"}/>
            <Text extraClass={"!mb-0 !text-[rgba(255,255,255,1)] !text-center"} title={"2018"}/>
         </div>

         <div className="flex items-center mx-auto bg-white h-[12px] w-[85%] ">
            <div className="w-full flex justify-between items-center">
               <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
               <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
               <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
               <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
            </div>
         </div>

         <div className="w-full  flex items-center justify-between gap-[10px] mx-auto ">
            <Text extraClass={"!mb-0 !text-[rgba(255,255,255,1)] !w-[347px] !text-center"} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}/>
            <Text extraClass={"!mb-0 !text-[rgba(255,255,255,1)] !w-[347px] !text-center"} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}/>
            <Text extraClass={"!mb-0 !text-[rgba(255,255,255,1)] !w-[347px] !text-center"} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}/>
            <Text extraClass={"!mb-0 !text-[rgba(255,255,255,1)] !w-[347px] !text-center"} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}/>
         </div>

        </div>
    </section>
   )
}

export default AboutMe