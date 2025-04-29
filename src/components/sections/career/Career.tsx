import { cards } from "../../../constants/index"
import CareerCard from "./CareerCard"

import MasterSword from "../../common/3d-models/3DBadge"
import StarCompass from "../../common/3d-models/3DBadge"
import GomuGomuNoMi from "../../common/3d-models/3DBadge"
import Digivice from "../../common/3d-models/3DBadge"


export default function Career() {
    return (
        <div id="career" className="h-fit scroll-mt-12 pb-30">

            <div className="h-22 w-auto pb-30 flex-col justify-center text-center items-center content-center text-white">
                <p className="text-4xl pb-5">Career</p>
                <p className="w-[80%] text-2xl mx-auto text-center">Here are some of the most important milestones in my career. I have been fortunate to have had to work with some amazing companies and teams</p>
            </div>
            
            <div className="pt-20 pl-20 flex">
                <CareerCard
                    imgUrl={cards.hillsborough.imgUrl}
                    date={cards.hillsborough.date}
                    title={cards.hillsborough.title}
                    location={cards.hillsborough.location}
                    description={cards.hillsborough.description}
                    size={"h-23"}
                />
                
                <div className="ml-auto mr-40">
                    <MasterSword
                        badge3DURL="models/badges/master-sword.glb"
                        positionXYZ={{ x: 0, y: 0, z: -1 }}
                        rotationXYZ={{ x: 1.4, y: -0.5, z: 0 }}
                        animationXYZ={{x: 0.00, y: 0.002, z: 0.005}}
                    />
                </div>
            </div>

            <div className="pt-20 pr-20 flex justify-end">
                <div className="ml-30 mr-auto">
                    <Digivice
                        badge3DURL="models/badges/digimon-digivice.glb"
                        positionXYZ={{ x: 0, y: 0, z: -430 }}
                        rotationXYZ={{ x: 0, y: 9.5, z: -0.005 }}
                        animationXYZ={{x: 0, y: 0.004, z: 0}}
                    />
                </div>
                
                <CareerCard
                    imgUrl={cards.xime.imgUrl}
                    date={cards.xime.date}
                    title={cards.xime.title}
                    location={cards.xime.location}
                    description={cards.xime.description}
                    size={"h-12"}
                />
            </div>

            <div className="pt-20 pl-20 flex">
                <CareerCard
                    imgUrl={cards.ucf.imgUrl}
                    date={cards.ucf.date}
                    title={cards.ucf.title}
                    location={cards.ucf.location}
                    description={cards.ucf.description}
                    size={"h-20"}
                />

                <div className="ml-auto mr-40">
                    <StarCompass
                        badge3DURL="models/badges/star-compass.glb"
                        positionXYZ={{ x: 0, y: 0, z: 1 }}
                        rotationXYZ={{ x: 0, y: 0, z: 0 }}
                        animationXYZ={{x: 0.003, y: 0.002, z: 0.001}}
                    />
                </div>
            </div>

            <div className="pt-20 pr-20 flex justify-end">
                <div className="ml-30 mr-auto">
                    <GomuGomuNoMi
                        badge3DURL="models/badges/gomu-gomu-no-mi.glb"
                        positionXYZ={{ x: 0, y: -25, z: -240 }}
                        rotationXYZ={{ x: 0, y: 1, z: 0 }}
                        animationXYZ={{x: 0, y: 0.004, z: 0}}
                    />
                </div>


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