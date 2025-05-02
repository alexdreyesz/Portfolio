import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollBehaviorProject() {
    useGSAP(() => {
        gsap.utils.toArray(".gsap-projects-left").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left",
                duration: 1.25,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    
        gsap.utils.toArray(".gsap-projects-right").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: 100,
                opacity: 0,
                transformOrigin: "right",
                duration: 1.25,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    
        gsap.utils.toArray(".gsap-projects-top").forEach((text) => {
            gsap.from(text as HTMLElement, {
                yPercent: 50,
                opacity: 0,
                transformOrigin: "bottom",
                duration: 1.25,
                ease: "power1.inOut",
                scrollTrigger: {
                trigger: text as HTMLElement,
                start: "top 90%",
                toggleActions: "play none none reverse",
                }
            });
        });
    }, []);
};