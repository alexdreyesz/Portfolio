import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import resume from '../assets/icons/resume.png'
import resumePdf from '../assets/files/AlexReyes_Resume.pdf'

function Footer() {
    return(
        <footer className="h-24 bg-indigo-900 flex justify-between items-center">
            
            <p className="relative left-8 flex text-white">Thank you for visiting!! <p className="hover:scale-120 hover:animate-ping cursor-pointer">&nbsp;:D</p></p>

            <div className="relative right-1 flex space-x-12">
                <a href="https://github.com/alexdreyesz">
                    <img src={github} className="h-8 w-auto hover:scale-120 invert" alt="Github Link"/>
                </a>

                <a href="https://www.linkedin.com/in/alexdreyesz/">
                    <img src={linkedin} className="h-8 w-auto hover:scale-120 invert" alt="LinkedIn Link"/>
                </a>

                <a href={resumePdf}>
                    <img src={resume} className="h-8 w-auto hover:scale-120 invert" alt="Resume Link"/>
                </a>
            </div>

            <p className="relative right-8 flex text-white"><p className="hover:scale-80 hover:animate-spin cursor-pointer">©&nbsp;</p>2025 Alex<p className="hover:scale-120 hover:animate-bounce cursor-pointer">&nbsp;D.&nbsp;</p> Reyes</p>
            
        </footer>
    )
}

export default Footer