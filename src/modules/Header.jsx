import {Logo} from "../assets/image"
import {GitHubIcon, LinKedIcon, FigmaIcon} from "../assets/icons"
import NavLink from "../components/NavLink"

function Header(){
  const navList = ["Projects", "Technologies", "About me"]
      return(
        <header>
            <div className="containers px-5 sm:px-0">
             <div className=" py-[44px] flex justify-between items-center">
               <a className="flex gap-[12px] items-center" href="/">
                 <img className="sm:w-[47px] sm:h-[47px] w-[30px] h-[30px] " src={Logo} alt="site logo" width={47} height={47}/>
                 <span className=" font-normal text-[20px] sm:font-medium sm:text-[30px] text-[rgba(255,255,255,1)]">Portfolio</span>
              </a>
              <nav className="hidden sm:flex gap-[40px] items-center">
               {navList.map((item, index) => <NavLink key={index} title={item}/>)}
              </nav>
              <div className="flex items-center gap-[10px] sm:gap-[20px]">
                <button><GitHubIcon/></button>
                <button><LinKedIcon/></button>
                <button><FigmaIcon/></button>
              </div>
             </div>
            </div>

        </header>
    )
}

export default Header