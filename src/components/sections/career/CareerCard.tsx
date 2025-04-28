import { getAssetPathSRC } from '../../../utils/getAssetPathSRC'

interface CareerCardProps {
    imgUrl: string;
    date: string;
    title: string;
    location: string;
    description: string;
}

export default function CareerCards({imgUrl, date, title, location, description}: CareerCardProps) {
    return (
        <div className="h-fit w-150 rounded-2xl border-1 border-gray-800 glass-background">
            <div className="grid grid-rows-2 text-white content-center items-center">
                
                <div className="mt-5 flex">

                    <img src={getAssetPathSRC(imgUrl)} className="h-23 w-auto ml-6 mr-5"/>

                    <div className="w-fit">
                        <p className="">{date}</p>
                        <p className="text-[22px] font-bold mt-1 mb-1">{title}</p>
                        <p className="">{location}</p>
                    </div>

            
                </div>

                <p className="h-fit w-auto ml-6 mr-6 mb-3">{description}</p>
            </div>
        </div>
    );
}