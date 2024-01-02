import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
    return (
        <div className="w-screen  min-h-screen flex justify-center items-center ">
            <div className="w-[80%]  max-w-xl h-full flex flex-col items-center bg-[#0f131a] rounded-[20px] py-20 ">
                <h2>Contact</h2>

                <div className="grid w-[80%] max-w-md items-center gap-1.5 mb-20 ">
                    <Label htmlFor="name">Name</Label>
                    <Input type="name" id="name" placeholder="Name" className=" rounded-[5px] border-[gray] text-[gray] " />
                </div>
                <div className="grid w-[80%] max-w-md items-center gap-1.5 mb-20 ">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" className=" rounded-[5px] border-[gray] text-[gray] " />
                </div>
                <div className="grid w-[80%] max-w-md  gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea placeholder="Type your message here." className="rounded-[5px] border-[gray] text-[gray]" />
                    <Button className="bg-white text-black rounded-[5px]">Send message</Button>
                </div>
            </div>
        </div>
    );
}
