interface CareerCardProps {
    imgUrl: string;
    date: string;
    title: string;
    location: string;
    description: string;
    size: string;
}

export default function CareerCards({imgUrl, date, title, location, description, size}: CareerCardProps) {
    return (
        <div className="h-fit w-150 rounded-2xl border-1 border-gray-800 glass-background">
            <div className="relative left-1.5 grid grid-rows-2 text-white content-center items-center">
                
                <div className="mt-5 flex">
                    <div className="h-30 w-30 ml-2 mr-4 flex justify-center items-center content-center">
                        <img src={imgUrl} className={`${size} w-auto`}/>
                    </div>

                    <div className="w-fit flex-col justify-center items-center content-center">
                        <p className="">{date}</p>
                        <p className="text-[22px] font-bold mt-1 mb-1">{title}</p>
                        <p className="">{location}</p>
                    </div>
                </div>

                <p className="h-fit w-auto ml-6 mr-6 mb-6 text-base/7">{description}</p>
            </div>
        </div>
    );
}