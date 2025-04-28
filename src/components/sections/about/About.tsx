import {languages, frameworks, libraries, developmentTools, designTools, databases, AILLM, professional} from "../../../constants/index"
import portrait from '/src/assets/images/portrait-casual.png'

export default function About() {
    return(
        <div id="about" className="h-500 mt-20 flex-col justify-items-center border-2 scroll-mt-12">
            <div className="relative h-[25%] w-[70%] overflow-hidden rounded-lg">
                <img src={portrait} className="w-full h-full object-fill relative"/>
            </div>

            <div className="w-250 h-fit mt-5 text-2xl text-white">
                <p className="text-center text-4xl pt-3 pb-5">Who am I?</p>
                <p className="flex-col text-2xl/9">I'm Alex D. Reyes, a computer science student at the University of Central Florida. I am currently working with U.S. Space Force on askPolaris. In my free time, I enjoy listening to music,  playing video games, and spending time with friends and family.</p>
            </div>

            <div className="w-250 h-fit flex-col mt-10 text-2xl text-white">
                <p>Languages:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {languages.map((language) => (
                        <img className="h-14 animation-rotate-y mt-2" src={language.iconPath}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>FrameWorks:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {frameworks.map((framework) => (
                        <img className="h-14 animation-rotate-y mt-2" src={framework.iconPath}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>Libraries:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {libraries.map((library) => (
                        <img className="h-14 animation-rotate-y mt-2" src={library.iconPath}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>Development Tools:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {developmentTools.map((tool) => (
                        <img className="h-14 animation-rotate-y mt-2" src={tool.iconPath}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>Design Tools:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {designTools.map((tool) => (
                        <img className="h-14 animation-rotate-y mt-2" src={tool.iconPath}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>Databases:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {databases.map((database) => (
                        <img className="h-14 animation-rotate-y mt-2" src={database.iconPath}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>AI & LLMs:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {AILLM.map((ai) => (
                        <img className="h-14 animation-rotate-y mt-2" src={ai.iconPath}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>Professional:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {professional.map((tool) => (
                        <img className="h-14 animation-rotate-y mt-2" src={tool.iconPath}/>
                    ))}
                </div>
            </div>
        </div>
    )
}