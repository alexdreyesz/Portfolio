import logo from '../../../assets/icons/logo-ussf.png'

export default function CareerCards() {
    return (
        <>
            <div className="h-fit w-150 rounded-2xl border-1 border-gray-800 glass-background">
                <div className="grid grid-rows-2 text-white content-center items-center">
                    
                    <div className="mt-5 flex">

                        <img src={logo} className="h-23 w-auto ml-6 mr-5"/>

                        <div className="w-fit">
                            <p className="">Present - Fall 2026</p>
                            <p className="text-[22px] font-bold mt-1 mb-1">B.S. in Computer Science</p>
                            <p className="">University Of Central Florida</p>
                        </div>

                
                    </div>

                    <p className="h-fit w-auto ml-6 mr-6 mb-3">Currently designing and developing an Al-powered recommendation system in collaboration with OpenAl, tailored to user input and technical skill levels. </p>
                </div>
            </div>
        </>   
    );
}