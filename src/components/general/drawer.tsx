import * as React from "react";

import { Drawer as Drawer2, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MenuIcon from "@mui/icons-material/Menu";

export default function Drawer() {
    return (
        <Drawer2>
            <DrawerTrigger>
                <MenuIcon fontSize="large" />
            </DrawerTrigger>
            <DrawerContent className="bg-[#0f131a]">
                <div className="mx-auto max-w-7xl   ">
                    <DrawerHeader>
                        <DrawerTitle>
                            <p className="text-5xl mx-5">Menu</p>
                        </DrawerTitle>
                    </DrawerHeader>
                    <DrawerFooter>
                        <div className="w-[50vw]">
                            <Carousel>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="mx-5 flex flex-col justify-between gap-y-5 ">
                                            <p className="text-3xl">About</p>
                                            <p className="text-3xl">Works</p>
                                            <p className="text-3xl">Contact</p>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div className="mx-5 flex flex-col justify-between items-start gap-y-5">
                                            <div className="flex gap-x-5 justify-center">
                                                <img src="./icons/logo-white.png" width="36px" height="36px"></img>
                                                <p className="text-xl">X/Twitter</p>
                                            </div>
                                            <div className="flex gap-x-5 justify-center">
                                                <img src="./icons/Instagram_Glyph_White.png" width="36px" height="36px"></img>
                                                <p className="text-xl">Instagram</p>
                                            </div>
                                            <div className="flex gap-x-5 justify-center">
                                                <img src="./icons/github-mark-white.png" width="36px" height="36px"></img>
                                                <p className="text-xl">Github</p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer2>
    );
}

/* 

                            
 */
