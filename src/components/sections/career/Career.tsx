import { cards } from "../../../constants/index"
import CareerCard from "./CareerCard"

export default function Career() {
    return (
        <div id="career" className="h-fit scroll-mt-12 pb-30">

            <div className="h-22 w-auto pb-30 flex-col justify-center text-center items-center content-center text-white">
                <p className="text-4xl pb-5">Career</p>
                <p className="w-[80%] text-2xl mx-auto text-center">Here are some of the most important milestones in my career. I have been fortunate to have had to work with some amazing companies and teams</p>
            </div>
            
            <div className="pt-20 pl-20">
                <CareerCard
                    imgUrl={cards.hillsborough.imgUrl}
                    date={cards.hillsborough.date}
                    title={cards.hillsborough.title}
                    location={cards.hillsborough.location}
                    description={cards.hillsborough.description}
                    size={"h-23"}
                />
            </div>

            <div className="pt-20 pr-20 flex justify-end">
                <CareerCard
                    imgUrl={cards.xime.imgUrl}
                    date={cards.xime.date}
                    title={cards.xime.title}
                    location={cards.xime.location}
                    description={cards.xime.description}
                    size={"h-12"}
                />
            </div>

            <div className="pt-20 pl-20">
                <CareerCard
                    imgUrl={cards.ucf.imgUrl}
                    date={cards.ucf.date}
                    title={cards.ucf.title}
                    location={cards.ucf.location}
                    description={cards.ucf.description}
                    size={"h-20"}
                />
            </div>

            <div className="pt-20 pr-20 flex justify-end">
                <CareerCard
                    imgUrl={cards.spaceForce.imgUrl}
                    date={cards.spaceForce.date}
                    title={cards.spaceForce.title}
                    location={cards.spaceForce.location}
                    description={cards.spaceForce.description}
                    size={"h-22"}
                />
            </div>
            
        </div>
    )
}