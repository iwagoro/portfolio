import * as React from "react";

import { Button } from "@/components/ui/button";
import { Drawer as Drawer2, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import styled from "styled-components";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const Img = styled.img`
    width: 24px;
    height: 24px;
    aspect-ratio: 1/1;
`;

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
                                <div className="mx-5 flex flex-col justify-between items-start  gap-y-5 ">
                                    <div className="flex gap-x-5 justify-center">
                                        <Img src="./icons/logo-white.png"></Img>
                                        <p className="text-xl">X/Twitter</p>
                                    </div>
                                    <div className="flex gap-x-5 justify-center">
                                        <Img src="./icons/Instagram_Glyph_White.png"></Img>
                                        <p className="text-xl">Instagram</p>
                                    </div>
                                    <div className="flex gap-x-5 justify-center">
                                        <Img src="./icons/github-mark-white.png"></Img>
                                        <p className="text-xl">Github</p>
                                    </div>
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

                        <div className="flex gap-x-5 justify-center">
                                            <Img src="./icons/logo-white.png"></Img>
                                            <p className="text-xl">X/Twitter</p>
                                        </div>
                                        <div className="flex gap-x-5 justify-center">
                                            <Img src="./icons/Instagram_Glyph_White.png"></Img>
                                            <p className="text-xl">Instagram</p>
                                        </div>
                                        <div className="flex gap-x-5 justify-center">
                                            <Img src="./icons/github-mark-white.png"></Img>
                                            <p className="text-xl">Github</p>
                                        </div>
                            
 */
