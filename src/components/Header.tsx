import logo from '../assets/icons/logo/kingz.png'
import PlayMusic from './common/audio/PlayMusic'

// Header For Porfolio Website 
function Header() {
    return(
        // Header Container 
        <header className="h-12 fixed z-50 inset-x-0 top-0 bg-blue-100/70 flex justify-between items-center">
            <a href="#home">
                <img src={logo} className="relative left-6 h-12 w-auto hover:scale-120 animate-spin-custom" alt="Kingz Logo"/>
            </a>

            <nav className="relative right-8 flex space-x-18">
                <a className="cursor-pointer" href="#home"><p className="hover:scale-110">Home</p></a>
                <a className="cursor-pointer" href="#about"><p className="hover:scale-110">About</p></a>
                <a className="cursor-pointer" href="#career"><p className="hover:scale-110">Career</p></a>
                <a className="cursor-pointer" href="#projects"><p className="hover:scale-110">Projects</p></a>
                <PlayMusic/>
            </nav>   
        </header>
    )
}

export default Header