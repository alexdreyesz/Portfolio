import Typewriter from 'typewriter-effect'

function Home() {
    const words = [
        {text: "React", imgPath: "src/assets/icons/react.png"},
        {text: "Tailwind", imgPath: "src/assets/icons/tailwind.png"},
        {text: "Threejs", imgPath: "src/assets/icons/threejs.png"},
        {text: "GSAP", imgPath: "src/assets/icons/gsap.png"},
    ];

    return (
        <div className="flex-col text-center items-center">
            <p className="relative font-bold text-3xl text-white">
                Welcome To My Potfolio! 
                
                Made With 
                <span className="slide">
                    <span className="wrapper flex-col">
                        {words.map((word) => (
                            <span key={word.text} className="text-white flex">
                                <img src={word.imgPath} className=" h-6 invert" alt={word.text}>
                                </img>
                            </span>
                        ))}
                    </span>
                </span>
            </p>

            <div className="font-bold text-3xl text-white">
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