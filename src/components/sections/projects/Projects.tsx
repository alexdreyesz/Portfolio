import { projects } from "../../../constants/index"
import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <div id="projects" className="h-440 border-2 scroll-mt-12">

            <div className="h-22 w-auto pt-20 pb-30 flex-col justify-center text-center items-center content-center text-white">
                <p className="text-4xl pb-5">Projects</p>
                <p className="w-[80%] text-2xl mx-auto text-center">Here are some of my most memorable projects that showcase my skill and experiences throught all of my journey.</p>
            </div>

            <div className="flex justify-evenly">
                <div className="pt-20">
                    <ProjectCard
                        imgUrl={projects.contactHub.imgUrl}
                        link={projects.contactHub.link}    
                        title={projects.contactHub.title}
                        date={projects.contactHub.date}
                        description={projects.contactHub.description}
                        technologies={projects.contactHub.technologies}
                        size={"h-20"}
                        extra={""}
                    />
                </div>

                <div className="pt-20">
                    <ProjectCard
                        imgUrl={projects.ucfGuessr.imgUrl}
                        link={projects.ucfGuessr.link}    
                        title={projects.ucfGuessr.title}
                        date={projects.ucfGuessr.date}
                        description={projects.ucfGuessr.description}
                        technologies={projects.ucfGuessr.technologies}
                        size={"h-20"}
                        extra={""}
                    />
                </div>

                <div className="pt-20">
                    <ProjectCard
                        imgUrl={projects.portfolio.imgUrl}
                        link={projects.portfolio.link}    
                        title={projects.portfolio.title}
                        date={projects.portfolio.date}
                        description={projects.portfolio.description}
                        technologies={projects.portfolio.technologies}
                        size={"h-28"}
                        extra={"invert"}
                    />
                </div>
            </div>

            <div className="flex justify-evenly">
                <div className="pt-20">
                    <ProjectCard
                        imgUrl={projects.codelaboration.imgUrl}
                        link={projects.codelaboration.link}    
                        title={projects.codelaboration.title}
                        date={projects.codelaboration.date}
                        description={projects.codelaboration.description}
                        technologies={projects.codelaboration.technologies}
                        size={"h-22"}
                        extra={""}
                    />
                </div>

                <div className="pt-20">
                    <ProjectCard
                        imgUrl={projects.askPolaris.imgUrl}
                        link={projects.askPolaris.link}    
                        title={projects.askPolaris.title}
                        date={projects.askPolaris.date}
                        description={projects.askPolaris.description}
                        technologies={projects.askPolaris.technologies}
                        size={"h-20"}
                        extra={""}
                    />
                </div>
            </div>

        </div>
    )
}