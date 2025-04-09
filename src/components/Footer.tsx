import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import resume from '../assets/icons/resume.png'
import resumePdf from '../assets/files/AlexReyes_Resume.pdf'

function Footer() {
    return(
        <footer className="h-24 bg-indigo-900 flex justify-between items-center">
            
            <p className="">Thanks for visiting</p>

            <div className="flex space-x-12">
                <a href="https://github.com/alexdreyesz">
                    <img src={github} className="h-8 w-auto invert" alt="Github Link"/>
                </a>

                <a href="https://www.linkedin.com/in/alexdreyesz/">
                    <img src={linkedin} className="h-8 w-auto invert" alt="LinkedIn Link"/>
                </a>

                <a href={resumePdf}>
                    <img src={resume} className="h-8 w-auto invert" alt="Resume Link"/>
                </a>
            </div>

            <p>C 2025 Alex Reyes</p>
            
        </footer>
    )
}

export default Footer