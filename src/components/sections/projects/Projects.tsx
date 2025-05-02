import { projects } from "../../../constants/index"
import ProjectCard from "./ProjectCard"

import GSAPScrollBehaviorProject from "../../../utils/gsapScrollBehaviorProject"

export default function Projects() {
    
    GSAPScrollBehaviorProject();
    
    return (
        <div id="projects" className="h-420 scroll-mt-12 max-sm:h-fit max-sm:pb-25">

            <div className="h-22 w-auto pb-30 flex-col justify-center text-center items-center content-center text-white gsap-projects-top max-sm:pb-70">
                <p className="text-4xl pb-5">Projects</p>
                <p className="w-[80%] text-2xl/9 mx-auto text-center">Below are some of the most impactful projects that reflect the skills and experience I’ve developed throughout my journey.</p>
            </div>

            <div className="flex justify-evenly max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <div className="pt-20 gsap-projects-left">
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

                <div className="pt-20 gsap-projects-top">
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

                <div className="pt-20 gsap-projects-right">
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

            <div className="flex justify-evenly max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <div className="pt-20 gsap-projects-left">
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

                <div className="pt-20 gsap-projects-right">
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