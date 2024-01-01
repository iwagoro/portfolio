"use client";
import React, { useRef, useEffect } from "react";
import Ascii from "../components/ascii/p5";
import TopBar from "@/components/general/topBar";
import Gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const getScrollPosition = () => {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
};

Gsap.registerPlugin(ScrollTrigger);
Gsap.config({
    nullTargetWarn: false,
});

export default function Home() {
    const asciiRef = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    let height = window.innerHeight;
    const [flag, setFlag] = React.useState(0);

    useEffect(() => {
        Gsap.to(ref1.current, {
            opacity: 1,
            duration: 2,
            ease: "power1.inOut",
            once: 1,
        });
        Gsap.fromTo(
            ref2.current,
            {
                x: -200,
            },
            {
                scrollTrigger: {
                    toggleActions: "play none none reverse",
                    trigger: ref2.current,
                    start: `top bottom`,
                    markers: true,
                },
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.inOut",
            }
        );

        Gsap.fromTo(
            ref3.current,
            {
                x: 200,
            },
            {
                scrollTrigger: {
                    toggleActions: "play none none reverse",
                    trigger: ref3.current,
                    start: `top bottom`,
                    markers: true,
                },
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.inOut",
            }
        );
    }, [asciiRef, ref1, ref2, ref3, ref4, ref5]);

    useEffect(() => {
        const handleScroll = () => {
            const position = getScrollPosition();

            if (position > height * 8) {
                setFlag(2);
            } else if (position > height * 4) {
                setFlag(1);
            } else {
                setFlag(0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-screen   flex  flex-col items-center justify-center overflow-hidden">
            <div ref={asciiRef} className="w-screen h-screen fixed top-0 left-0 z-[-1]">
                <Ascii flag={flag} />
            </div>
            <main className="w-screen max-w-7xl flex flex-col items-center relative ">
                <TopBar />

                <div ref={ref1} className="w-full h-screen flex items-center justify-center opacity-0">
                    <h1>Rockwell</h1>
                </div>

                <div className=" h-[calc(100vh/2)]"></div>
                <div ref={ref2} className="h-screen flex items-center opacity-0">
                    <h1 className="text-left">
                        Make It <br /> More Fun
                    </h1>
                </div>
                <div className=" h-[calc(100vh/2)]"></div>
                <div ref={ref3} className="mx-10 h-screen flex flex-col justify-center items-start opacity-0">
                    <h2 className="text-left w-full whitespace-nowrap">
                        もっと楽しく、
                        <br /> もっと面白く。
                    </h2>
                    <h3 className="text-left w-full whitespace-nowrap">
                        些細なことから <br />
                        日々の生活を少しあざやかに、
                        <br />
                        毎日を少しでも楽しくする。
                    </h3>
                    <h4 className="text-left w-full ">More fun. More interesting. From the smallest details ,making everyday a little more bruising and a little more enjoyable. With these goals in mind, I create web apps and art.</h4>
                </div>
                <div className=" h-[calc(100vh/2)]"></div>
                <div ref={ref4} style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2 style={{ textAlign: "center", whiteSpace: "nowrap" }}>Works</h2>
                </div>
            </main>
        </div>
    );
}

/*


        Gsap.timeline({
            scrollTrigger: {
                toggleActions: "play none none reverse",
                trigger: ref2.current,
                start: `top top`,
                end: `top+=${height}  center`,
                scrub: true,
                pin: true,
            },
        }).fromTo(ref2.current, { opacity: 0 }, { opacity: 1 });


        Gsap.timeline({
            scrollTrigger: {
                toggleActions: "play none none reverse",
                trigger: ref3.current,
                start: `top top`,
                end: `top+=${height}  center`,
                scrub: true,
                pin: true,
            },
        }).fromTo(ref3.current, { opacity: 1 }, { opacity: 1, autoAlpha: 1 });

 */

/*


                <div ref={ref2} className="h-screen flex items-center">
                    <h1>
                        Make It <br /> More Fun
                    </h1>
                </div>
                <div className=" h-[calc(100vh/2)]"></div>
                <div ref={ref3} className="mx-10 h-screen flex flex-col justify-center items-start">
                    <h2 className="text-left w-full whitespace-nowrap">
                        もっと楽しく、
                        <br /> もっと面白く。
                    </h2>
                    <h3 className="text-left w-full whitespace-nowrap">
                        些細なことから <br />
                        日々の生活を少しあざやかに、
                        <br />
                        毎日を少しでも楽しくする。
                    </h3>
                    <h4 className="text-left w-full ">More fun. More interesting. From the smallest details ,making everyday a little more bruising and a little more enjoyable. With these goals in mind, I create web apps and art.</h4>
                </div>
                <div className=" h-screen"></div>
                <div ref={ref4} style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h1 style={{ textAlign: "center", whiteSpace: "nowrap" }}>Works</h1>
                </div>

 */
