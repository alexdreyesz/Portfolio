import portrait from '/src/assets/images/portrait-casual.png'

import react from '../../../assets/icons/badges/frameworks/react.png'

import blender from '../../../assets/icons/badges/design-tools/blender.svg'

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

            <div className="w-250 h-fit mt-5 text-2xl text-white">
                <p>Languages:</p>
                <div className="flex pt-2">
                    <img className="h-12" src={react}/>
                </div>
            </div>

            <div className="w-250 h-fit mt-5 text-2xl text-white">
                <p>FrameWorks:</p>
                <div className="flex pt-2">
                    <img className="h-12" src={react}/>
                </div>
            </div>

            <div className="w-250 h-fit mt-5 text-2xl text-white">
                <p>Libraries:</p>
                <div className="flex pt-2">
                    <img className="h-12" src={react}/>
                </div>
            </div>

            <div className="w-250 h-fit mt-5 text-2xl text-white">
                <p>Development Tools:</p>
                <div className="flex pt-2">
                    <img className="h-12" src={react}/>
                </div>
            </div>

            <div className="w-250 h-fit mt-5 text-2xl text-white">
                <p>Design Tools</p>
                <div className="flex pt-2">
                    <img className="h-12" src={blender}/>
                </div>
            </div>

            <div className="w-250 h-fit mt-5 text-2xl text-white">
                <p>AI & LLMs</p>
                <div className="flex pt-2">
                    <img className="h-12" src={react}/>
                </div>
            </div>
        </div>
    )
}