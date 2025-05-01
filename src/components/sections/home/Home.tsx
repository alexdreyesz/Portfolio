import Title from "./HomeTitle"
import Sunny from "../../common/3d-models/Sunny"
import Cherokee from "../../common/3d-models/Cherokee"
import Earth from "../../common/3d-models/Earth"

function Home() {
    return (
        <section id="home" className="h-screen pt-12 relative overflow-hidden scroll-mt-12">
            <Title/>
            <div className="pb-8"></div>
            <Sunny/>
            <div className="h-100 w- 100 absolute left-260 bottom-45 z-1">
                <Cherokee/>
            </div>

            <div className="h-100 w- 100 absolute left-275 bottom-65 z-[-1]">
                <Earth/>
            </div>
        </section>
    )
}

export default Home