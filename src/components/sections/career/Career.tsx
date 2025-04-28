import { cards } from "../../../constants/index"
import CareerCards from "./CareerCard"

export default function Career() {
    return (
        <div id="career" className="h-fit border-2 border-amber-700 scroll-mt-12">
            
            <div className="pt-20 pl-20">
                <CareerCards
                    imgUrl={cards.hillsborough.imgUrl}
                    date={cards.hillsborough.date}
                    title={cards.hillsborough.title}
                    location={cards.hillsborough.location}
                    description={cards.hillsborough.description}
                    size={"h-23"}
                />
            </div>

            <div className="pt-20 pl-20">
                <CareerCards
                    imgUrl={cards.xime.imgUrl}
                    date={cards.xime.date}
                    title={cards.xime.title}
                    location={cards.xime.location}
                    description={cards.xime.description}
                    size={"h-12"}
                />
            </div>

            <div className="pt-20 pl-20">
                <CareerCards
                    imgUrl={cards.ucf.imgUrl}
                    date={cards.ucf.date}
                    title={cards.ucf.title}
                    location={cards.ucf.location}
                    description={cards.ucf.description}
                    size={"h-20"}
                />
            </div>

            <div className="pt-20 pl-20">
                <CareerCards
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