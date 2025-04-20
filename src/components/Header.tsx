import logo from '../assets/icons/kingz_logo.png'
import PlayMusic from '../components/common/PlayMusic'

// Header For Porfolio Website 
function Header() {
    return(
        // Header Container 
        <header className="sticky inset-x-0 top-0 bg-blue-100/70 flex justify-between items-center">
            <a href="#home">
                <img src={logo} className="relative left-4 h-12 w-auto hover:scale-120 animate-spin-custom" alt="Kingz Logo"/>
            </a>

            <nav className="relative right-8 flex space-x-18">
                <a className="cursor-pointer "><p className="hover:scale-110">Home</p></a>
                <a className="cursor-pointer"><p className="hover:scale-110">About</p></a>
                <a className="cursor-pointer"><p className="hover:scale-110">Career</p></a>
                <a className="cursor-pointer"><p className="hover:scale-110">Projects</p></a>
                <PlayMusic/>
            </nav>   
        </header>

        
    )
}

export default Header