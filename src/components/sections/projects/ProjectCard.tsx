import linkIcon from "../../../assets/icons/icons/link.svg"

interface ProjectCardProps {
    imgUrl: string;
    link: string,
    title: string;
    date: string;
    description: string;
    technologies:  { text: string; badgeUrl: string }[];
    size: string;
    extra: string;
}

export default function ProjectCards({imgUrl, link, date, title, description, technologies, size, extra}: ProjectCardProps) {
    return (
        <div className="h-fit w-85 rounded-2xl border-1 border-gray-800 glass-background">
            <div className="relative left-1.5  text-white content-center items-center">
                
                <div className="mt-3 flex">
                    <div className="h-30 w-30 ml-2 mr-4 flex justify-center items-center content-center">
                        <img src={imgUrl} className={`${size} w-auto animation-rotate-y ${extra}`}/>
                    </div>

                    <div className="w-fit relative top-1 right-1 flex-col justify-center items-center content-center">
                        <p className="mb-2">{date}</p>
                        <p className="text-[22px] font-bold mt-1 mb-1 flex">{title}<a href={link} target="_blank" rel="noopener noreferrer"><img src={linkIcon} className="relative top-1.5 left-3 h-5 w-auto invert" /></a></p>
                    </div>
                </div>

                <p className="h-fit w-auto ml-6 mr-6 mb-1 text-base/7">{description}</p>

                <div className="flex flex-wrap flex-row pt-2 gap-3 ml-6 mr-6 mb-7">
                    {technologies.map((technology) => (
                        <img src={technology.badgeUrl} className="h-14 animation-rotate-y mt-5" alt={technology.text}/>
                    ))}
                </div>
            </div>
        </div>
    );
}