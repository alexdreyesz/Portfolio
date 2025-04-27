import { cards } from "../../../constants/index"
import CareerCards from "./CareerCard"

export default function Career() {
    return (
        <div id="career" className="h-fit border-2 border-amber-700">
            
            <div className="pt-20 pl-20">
                <CareerCards
                    imgUrl={cards.hillsborough.imgUrl}
                    date={cards.hillsborough.date}
                    title={cards.hillsborough.title}
                    location={cards.hillsborough.location}
                    description={cards.hillsborough.description}
                />
            </div>

            <div className="pt-20 pl-20">
                <CareerCards
                    imgUrl={cards.xime.imgUrl}
                    date={cards.xime.date}
                    title={cards.xime.title}
                    location={cards.xime.location}
                    description={cards.xime.description}
                />
            </div>

            <div className="pt-20 pl-20">
                <CareerCards
                    imgUrl={cards.ucf.imgUrl}
                    date={cards.ucf.date}
                    title={cards.ucf.title}
                    location={cards.ucf.location}
                    description={cards.ucf.description}
                />
            </div>

            <div className="pt-20 pl-20">
                <CareerCards
                    imgUrl={cards.spaceForce.imgUrl}
                    date={cards.spaceForce.date}
                    title={cards.spaceForce.title}
                    location={cards.spaceForce.location}
                    description={cards.spaceForce.description}
                />
            </div>
            
        </div>
    )
}