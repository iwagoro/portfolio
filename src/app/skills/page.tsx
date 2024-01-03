"use client";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { v4 as uuid } from "uuid";

export default function Page() {
    const Languages = ["C", "C++", "Java", "JavaScript", "TypeScript", "Go", "Python"];

    const Library = ["Firebase", "React", "Next.js", "Three.js", "p5.js", "TailwindCSS", "Mui", "shadcn", "Gsap"];

    const Tools = ["Figma", "Blender"];

    const cards: { [key: string]: string[] } = {
        Language: Languages,
        Library: Library,
        Tools: Tools,
    };

    return (
        <div className="w-screen  min-h-screen flex justify-center items-center ">
            <div className="w-full  max-w-5xl h-full flex flex-col items-center rounded-[20px] py-20 ">
                <h2>Skills</h2>
                {Object.keys(cards).map((card) => {
                    const id = uuid();
                    return (
                        <Card key={id} className="w-[80%] rounded-[10px] mb-10  bg-[#0f131a] border-gray-500">
                            <CardHeader>
                                <CardTitle>{card}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="w-full grid grid-cols-3 sm:grid-cols-4  gap-x-5 gap-y-10">
                                    {cards[card].map((lang: string) => {
                                        const id2 = uuid();
                                        return (
                                            <div key={id2} className="flex flex-col items-center">
                                                <img className="w-14 h-14" src={`./icons/${lang.toLowerCase()}.png`}></img>
                                                <p className="text-[gray] font-medium mt-2">{lang}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
