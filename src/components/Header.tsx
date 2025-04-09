import logo from '../assets/icons/kingz_logo.png'

// Header For Porfolio Website 
function Header() {
    return(
        // Header Container 
        <header className=" sticky bg-blue-100/70 flex justify-between">
            <img src={logo} className="h-12 w-auto animate-spin-custom"/>

            <nav className=" space-x-6">
                <a>Home</a>
                <a>About</a>
                <a>Career</a>
                <a>Projects</a>
            </nav>   
        </header>

        
    )
}

export default Header