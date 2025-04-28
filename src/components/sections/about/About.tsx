import {languages, frameworks, libraries, developmentTools, designTools, databases, AILLM, professional} from "../../../constants/index"
import { getAssetPathSRC } from '../../../utils/getAssetPathSRC'
import portrait from '/src/assets/images/portrait-casual.png'

export default function About() {
    return(
        <div id="about" className="h-500 mt-20 flex-col justify-items-center border-2 border-white">
            <div className="relative h-[25%] w-[70%]">
                <img src={portrait} className="w-full h-full object-cover rounded-lg"/>
            </div>

            <div className="w-250 h-fit mt-5 text-2xl text-white">
                <p className="text-center">Who am I?</p>
                <p className="flex-col">I'm Alex D. Reyes, a computer science student at the University of Central Florida, Knight Hacks Treasurer, and Researcher at the U.N.A.R.Y lab. In my free time, I enjoy hiking, photography, working on cars, playing video games, and spending time with friends and family.</p>
            </div>

            <div className="w-250 h-fit flex-col mt-10 text-2xl text-white">
                <p>Languages:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {languages.map((language) => (
                        <img className="h-14 animation-rotate-y mt-2" src={getAssetPathSRC(language.iconPath)}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>FrameWorks:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {frameworks.map((framework) => (
                        <img className="h-14 animation-rotate-y mt-2" src={getAssetPathSRC(framework.iconPath)}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>Libraries:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {libraries.map((library) => (
                        <img className="h-14 animation-rotate-y mt-2" src={getAssetPathSRC(library.iconPath)}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>Development Tools:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {developmentTools.map((tool) => (
                        <img className="h-14 animation-rotate-y mt-2" src={getAssetPathSRC(tool.iconPath)}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>Design Tools:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {designTools.map((tool) => (
                        <img className="h-14 animation-rotate-y mt-2" src={getAssetPathSRC(tool.iconPath)}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>Databases:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {databases.map((database) => (
                        <img className="h-14 animation-rotate-y mt-2" src={getAssetPathSRC(database.iconPath)}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>AI & LLMs:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {AILLM.map((ai) => (
                        <img className="h-14 animation-rotate-y mt-2" src={getAssetPathSRC(ai.iconPath)}/>
                    ))}
                </div>
            </div>

            <div className="w-250 h-fit mt-10 text-2xl text-white">
                <p>Professional:</p>
                <div className="flex flex-wrap flex-row pt-2 gap-2">
                    {professional.map((tool) => (
                        <img className="h-14 animation-rotate-y mt-2" src={getAssetPathSRC(tool.iconPath)}/>
                    ))}
                </div>
            </div>
        </div>
    )
}