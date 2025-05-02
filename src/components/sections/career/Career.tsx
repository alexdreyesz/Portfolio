import { cards } from "../../../constants/index"
import CareerCard from "./CareerCard"

import MasterSword from "../../common/3d-models/3DBadge"
import StarCompass from "../../common/3d-models/3DBadge"
import GomuGomuNoMi from "../../common/3d-models/3DBadge"
import Digivice from "../../common/3d-models/3DBadge"

import GSAPScrollBehaviorCareer from "../../../utils/gsapScrollBehaviorCareer"

export default function Career() {

    GSAPScrollBehaviorCareer();

    return (
        <div id="career" className="h-fit scroll-mt-[-30px] pb-30 pt-20">

            <div className="h-22 w-auto pb-35 flex-col justify-center text-center items-center content-center text-white gsap-career-title max-sm:pb-90">
                <p className="text-4xl pb-5">Career</p>
                <p className="w-[80%] text-2xl/9 mx-auto text-center">These are some of the highlights of my career journey. I’ve been fortunate to pursue higher education and to collaborate with incredible companies, individuals, and teams.</p>
            </div>
            
            <div className="pt-20 pl-20 flex gsap-career-card-left max-sm:flex-col max-sm:justify-center max-sm:align-center max-sm:items-center">
                <CareerCard
                    imgUrl={cards.hillsborough.imgUrl}
                    date={cards.hillsborough.date}
                    title={cards.hillsborough.title}
                    location={cards.hillsborough.location}
                    description={cards.hillsborough.description}
                    size={"h-23"}
                />
                
                <div className="ml-auto mr-40 max-sm:pt-30  max-sm:pb-30">
                    <MasterSword
                        badge3DURL="models/badges/master-sword-compressed.glb"
                        positionXYZ={{ x: 0, y: 0, z: -1 }}
                        rotationXYZ={{ x: 1.4, y: -0.5, z: 0 }}
                        animationXYZ={{x: 0.00, y: 0.002, z: 0.005}}
                    />
                </div>
            </div>

            <div className="pt-20 pr-20 flex justify-end gsap-career-card-right max-sm:flex-col max-sm:justify-center max-sm:align-center max-sm:items-center">
                <div className="ml-30 mr-auto max-sm:order-1 max-sm:pt-30 max-sm:pb-15 max-sm:ml-20 max-sm:relative max-sm:right-3 max-sm:bottom-8">
                    <Digivice
                        badge3DURL="models/badges/digimon-digivice-compressed.glb"
                        positionXYZ={{ x: 0, y: 0, z: -430 }}
                        rotationXYZ={{ x: 0, y: 9.5, z: -0.005 }}
                        animationXYZ={{x: 0, y: 0.004, z: 0}}
                    />
                </div>
                
                <div className="max-sm:relative max-sm:left-20 max-sm:pb-20">
                    <CareerCard
                        imgUrl={cards.xime.imgUrl}
                        date={cards.xime.date}
                        title={cards.xime.title}
                        location={cards.xime.location}
                        description={cards.xime.description}
                        size={"h-12"}
                    />
                </div>
            </div>

            <div className="pt-20 pl-20 flex gsap-career-card-left max-sm:flex-col max-sm:justify-center max-sm:align-center max-sm:items-center max-sm:relative max-sm:right-20">
                
                <div className="max-sm:relative max-sm:left-20 max-sm:pb-20">
                    <CareerCard
                        imgUrl={cards.ucf.imgUrl}
                        date={cards.ucf.date}
                        title={cards.ucf.title}
                        location={cards.ucf.location}
                        description={cards.ucf.description}
                        size={"h-20"}
                    />
                </div>

      
                <div className="ml-auto mr-35 max-sm:pt-30 max-sm:pb-30 max-sm:relative max-sm:left-15">
                    <StarCompass
                        badge3DURL="models/badges/star-compass-compressed.glb"
                        positionXYZ={{ x: 0, y: 0, z: 1 }}
                        rotationXYZ={{ x: 0, y: 0, z: 0 }}
                        animationXYZ={{x: 0.003, y: 0.002, z: 0.001}}
                    />
                </div>
            </div>

            <div className="pt-20 pr-20 flex justify-end gsap-career-card-right max-sm:flex-col max-sm:justify-center max-sm:align-center max-sm:items-center">
                <div className="ml-30 mr-auto max-sm:order-1 max-sm:pt-30 max-sm:pb-15 max-sm:ml-20 max-sm:relative max-sm:right-4">
                    <GomuGomuNoMi
                        badge3DURL="models/badges/gomu-gomu-no-mi-compressed.glb"
                        positionXYZ={{ x: 0, y: -25, z: -240 }}
                        rotationXYZ={{ x: 0, y: 1, z: 0 }}
                        animationXYZ={{x: 0, y: 0.004, z: 0}}
                    />
                </div>

                <div className="max-sm:relative max-sm:left-20 max-sm:pb-20">
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

        </div>
    )
}