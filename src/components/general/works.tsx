import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Works() {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem className="flex flex-col justify-between items-center">
                    <div className=" flex flex-col justify-between items-center">
                        <img className="w-[90%] h-auto max-w-[600px] aspect-square object-cover " src="https://images.unsplash.com/photo-1649290098499-f4148542f2e0?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>

                        <h3 className="text-white w-[90%] text-start ">Title</h3>
                        <p className="text-[gray] w-[90%] text-start ">Describe</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="flex flex-col justify-between items-center">
                    <div className="flex flex-col justify-between items-center">
                        <img className="w-[90%] h-auto max-w-[600px] aspect-square object-cover " src="https://images.unsplash.com/photo-1658963654546-593c6ea57ce4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        <h3 className="text-white w-[90%] text-start">Title</h3>
                        <p className="text-[gray] w-[90%] text-start">Describe</p>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

/*

                    <Img src="https://images.unsplash.com/photo-1658963654546-593c6ea57ce4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Img>

                    */

//<Img src="https://images.unsplash.com/photo-1649290098499-f4148542f2e0?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Img>;
