import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Works() {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem className="flex flex-col justify-between items-center">
                    <img className="w-[50vw] h-[50vw] xl:w-[600px] xl:h-[600px] " src="https://images.unsplash.com/photo-1649290098499-f4148542f2e0?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <div className="w-[50vw] xl:w-[600px] flex flex-col justify-between items-start">
                        <h3 className="text-white">Title</h3>
                        <p className="text-[gray]">Describe</p>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
