import Title from "./HomeTitle"
import Sunny from "../../common/3d-models/Sunny"

function Home() {
    return (
        <section id="home" className="h-112 relative overflow-hidden">
            <Title/>

            <Sunny/>
        </section>
    )
}

export default Home