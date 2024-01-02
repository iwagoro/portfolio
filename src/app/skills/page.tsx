"use client";
import { Separator } from "@/components/ui/separator";
export default function Page() {
    return (
        <div className="w-screen  min-h-screen flex flex-col items-center my-[120px]">
            <div className="w-[70%] max-w-7xl h-full flex flex-col items-center">
                <h2>My Skills</h2>
                <h4 className="w-full max-7xl px-10  my-10  text-left">Language</h4>
                <div className="w-full px-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6  gap-x-5 gap-y-10">
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/c.png"></img>
                        <p className="text-[gray] font-medium mt-2">C</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/c++.png"></img>
                        <p className="text-[gray] font-medium mt-2">C++</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/java.png"></img>
                        <p className="text-[gray] font-medium mt-2">Java</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/js.png"></img>
                        <p className="text-[gray] font-medium mt-2">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/ts.png"></img>
                        <p className="text-[gray] font-medium mt-2">TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/go.png"></img>
                        <p className="text-[gray] font-medium mt-2">Go</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/python.png"></img>
                        <p className="text-[gray] font-medium mt-2">Python</p>
                    </div>
                </div>
                <Separator className="my-4" />
                <h4 className="w-full max-7xl px-10  my-10  text-left">Library</h4>
                <div className="w-full  px-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6  gap-x-5 gap-y-10">
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/firebase.png"></img>
                        <p className="text-[gray] font-medium mt-2">Firebase</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/react.png"></img>
                        <p className="text-[gray] font-medium mt-2">React</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/vercel.png"></img>
                        <p className="text-[gray] font-medium mt-2">Next.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/three.png"></img>
                        <p className="text-[gray] font-medium mt-2">Three.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/p5.png"></img>
                        <p className="text-[gray] font-medium mt-2">p5.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/tailwind.png"></img>
                        <p className="text-[gray] font-medium mt-2">Tailwind CSS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/material-icon.png"></img>
                        <p className="text-[gray] font-medium mt-2">Material UI</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/shadcn.png"></img>
                        <p className="text-[gray] font-medium mt-2">shadcn</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/gsap.png"></img>
                        <p className="text-[gray] font-medium mt-2">Gsap</p>
                    </div>
                </div>
                <Separator className="my-4" />
                <h4 className="w-full max-7xl px-10  my-10  text-left">Tools</h4>
                <div className="w-full px-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6  gap-x-5 gap-y-10">
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/figma.png"></img>
                        <p className="text-[gray] font-medium mt-2">Figma</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14" src="./icons/blender.png"></img>
                        <p className="text-[gray] font-medium mt-2">Blender</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
