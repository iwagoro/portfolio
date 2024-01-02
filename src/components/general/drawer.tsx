import * as React from "react";

import { Button } from "@/components/ui/button";
import { Drawer as Drawer2, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

export default function Drawer() {
    return (
        <Drawer2>
            <DrawerTrigger asChild>
                <Button>
                    <MenuIcon fontSize="large"></MenuIcon>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-[#0f131a]">
                <div className="mx-auto w-full max-w-sm mb-10">
                    <div className="w-full flex justify-center ">
                        <div className="w-40 h-1 rounded-xl bg-gray-700"></div>
                    </div>
                    <DrawerHeader>
                        <DrawerTitle className="text-3xl">Menu</DrawerTitle>
                    </DrawerHeader>
                    <Carousel className="m-10">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="mx-5 flex flex-col justify-between  gap-y-5 ">
                                    <Link href="/">
                                        <DrawerClose asChild>
                                            <p className="text-2xl">Home</p>
                                        </DrawerClose>
                                    </Link>
                                    <Link href="/skills">
                                        <DrawerClose asChild>
                                            <p className="text-2xl">Skills</p>
                                        </DrawerClose>
                                    </Link>
                                    <Link href="/works">
                                        <DrawerClose asChild>
                                            <p className="text-2xl">Works</p>
                                        </DrawerClose>
                                    </Link>
                                    <Link href="/contact">
                                        <DrawerClose asChild>
                                            <p className="text-2xl">Contact</p>
                                        </DrawerClose>
                                    </Link>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="mx-5 h-full flex flex-col justify-between items-center   ">
                                    <a className="no-underline flex justify-start gap-x-5">
                                        <img className="w-6 h-6" src="./icons/logo-white.png"></img>
                                        <p className="text-xl">X/Twitter</p>
                                    </a>
                                    <a className="no-underline flex justify-start gap-x-5">
                                        <img className="w-6 h-6" src="./icons/Instagram_Glyph_White.png"></img>
                                        <p className="text-xl">Instagram</p>
                                    </a>
                                    <a className="no-underline flex justify-start gap-x-5">
                                        <img className="w-6 h-6" src="./icons/github-mark-white.png"></img>
                                        <p className="text-xl">Github</p>
                                    </a>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer2>
    );
}

/* 

                       <CarouselItem>
                                <div className="mx-5 flex flex-col justify-between items-start  gap-y-5 ">
                                    <div className="w-6 h-6 flex gap-x-5 justify-center">
                                        <img src="./icons/logo-white.png"></img>
                                        <p className="text-xl">X/Twitter</p>
                                    </div>
                                    <div className="w-6 h-6 flex gap-x-5 justify-center">
                                        <img src="./icons/Instagram_Glyph_White.png"></img>
                                        <p className="text-xl">Instagram</p>
                                    </div>
                                    <div className="w-6 h-6 flex gap-x-5 justify-center">
                                        <img src="./icons/github-mark-white.png"></img>
                                        <p className="text-xl">Github</p>
                                    </div>
                                </div>
                            </CarouselItem>
 */
