import logo from '../assets/icons/kingz_logo.png'

// Header For Porfolio Website 
function Header() {
    return(
        // Header Container 
        <header className="sticky inset-x-0 top-0 bg-blue-100/70 flex justify-between items-center">
            <a href="www.google.com">
                <img src={logo} className="relative left-4 h-12 w-auto hover:scale-120 animate-spin-custom" alt="Kingz Logo"/>
            </a>

            <nav className="relative right-8 space-x-18">
                <a>Home</a>
                <a>About</a>
                <a>Career</a>
                <a>Projects</a>
            </nav>   
        </header>

        
    )
}

export default Header