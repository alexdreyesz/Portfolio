import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollBehaviorAbout() {
    useGSAP(() => {
        gsap.utils.toArray(".gsap-about-left").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left",
                duration: 1.5,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        gsap.utils.toArray(".gsap-about-right").forEach((card) => {
            gsap.from(card as HTMLElement, {
                xPercent: 100,
                opacity: 0,
                transformOrigin: "right",
                duration: 1.5,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        gsap.utils.toArray(".gsap-about-top").forEach((text) => {
            gsap.from(text as HTMLElement, {
                yPercent: 50,
                opacity: 0,
                transformOrigin: "bottom",
                duration: 1.5,
                ease: "power1.inOut",
                scrollTrigger: {
                trigger: text as HTMLElement,
                start: "top 110%",
                toggleActions: "play none none reverse",
                }
            });
        });

        gsap.utils.toArray(".gsap-about-down").forEach((text) => {
            gsap.from(text as HTMLElement, {
                yPercent: -40,
                opacity: 0,
                transformOrigin: "Top",
                duration: 1.5,
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