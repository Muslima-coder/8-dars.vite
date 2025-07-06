import Button from "../components/Button"
import Heading from "../components/Heading"
import Text from "../components/Text"

function Hero(){
    return(
        <section className="hero-section py-[100px]  sm:pt-[157px] sm:pb-[250px]">
            <div className="containers">
            <div className="sm:w-[850px] sm:mx-0 sm:text-start text-center mx-auto w-[400px] ">
            <Heading title={"Lorem ipsum dolor sit amet"}/>
            <Text title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
            <Button title={"Let’s begin"}/>
            </div>
            </div>
        </section>
    )
}


export default Hero