"use client";
import { Separator } from "@/components/ui/separator";
import styled from "styled-components";

const Icon = styled.img`
    width: 60px;
    height: 60px;
`;

export default function Page() {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center ">
            <h2 className="mt-20">My Skills</h2>
            <h4 className="w-full max-7xl px-10  my-10  text-left">Language</h4>
            <div className="w-full max-w-7xl px-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6  gap-x-5 gap-y-10">
                <div className="flex flex-col items-center">
                    <Icon src="./icons/c.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">C</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/c++.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">C++</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/java.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Java</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/js.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/ts.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/go.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Go</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/python.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Python</p>
                </div>
            </div>
            <Separator className="my-4" />
            <h4 className="w-full max-7xl px-10  my-10  text-left">Library</h4>
            <div className="w-full max-w-7xl px-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6  gap-x-5 gap-y-10">
                <div className="flex flex-col items-center">
                    <Icon src="./icons/firebase.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Firebase</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/react.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">React</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/vercel.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Next.js</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/three.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Three.js</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/p5.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">p5.js</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/tailwind.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/material-icon.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Material UI</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/shadcn.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">shadcn</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/gsap.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Gsap</p>
                </div>
            </div>
            <Separator className="my-4" />
            <h4 className="w-full max-7xl px-10  my-10  text-left">Tools</h4>
            <div className="w-full max-w-7xl px-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6  gap-x-5 gap-y-10">
                <div className="flex flex-col items-center">
                    <Icon src="./icons/figma.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Figma</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon src="./icons/blender.png"></Icon>
                    <p className="text-[gray] font-medium mt-2">Blender</p>
                </div>
            </div>
        </div>
    );
}
