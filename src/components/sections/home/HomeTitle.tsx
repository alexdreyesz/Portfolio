import Typewriter from 'typewriter-effect'
import { words } from '../../../constants/index'

function Home() {
    return (
        <div className="flex-col text-center items-center pt-6">
            
            <div className="w-full h-8 items-center justify-center text-center overflow-hidden">
                <p className="relative bottom-[5px] font-bold text-3xl text-white">
                    Welcome To My Potfolio! 
                    
                    Made With &nbsp;
                    <span className="slide">
                        <span className="wrapper">
                            {words.map((word) => (
                                <span key={word.text} className="flex items-center gap-2 pb-2">
                                    <img src={word.imgPath} className="h-6 invert" alt={word.text}>
                                    </img>

                                    <span>{word.text}</span>
                                </span>
                            ))}
                        </span>
                    </span>
                </p>
            </div>

            <div className="font-bold text-3xl text-white pt-5">
                <Typewriter
                    options={{
                        strings: ['Hello My Name Is Alex D. Reyes 😃', 'I will Be King Of The Software Engineers 👒'],
                        autoStart: true,
                        loop: true,
                        cursor: '|',
                        delay:50,
                        deleteSpeed:40,
                        
                    }}
                />
            </div>
        </div>
     
    )
}

export default Home