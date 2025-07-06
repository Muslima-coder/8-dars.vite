import Button from "../components/Button"
import Heading from "../components/Heading"
import Text from "../components/Text"

function Hero(){
    return(
        <section className="hero-section pt-[157px] pb-[250px]">
            <div className="containers">
            <div className="w-[850px]">
            <Heading title={"Lorem ipsum dolor sit amet"}/>
            <Text title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
            <Button title={"Let’s begin"}/>
            </div>
            </div>
        </section>
    )
}


export default Hero