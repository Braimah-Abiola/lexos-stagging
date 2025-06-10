import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const CustomerStoryHero = () => {
    return (
        <section className=" py-20">
            <Wrapper className="flex items-center max-w-[1480px]">
                <div className=" w-full">
                    <div className=" max-w-[31rem]">
                        <span className=" pl-1.5 pr-3 py-1.5 inline-flex items-center gap-2 bg-white border border-black/10 rounded-full">
                            <Image width={24} height={24} src="/assets/olympia.png" alt="Olympia moving" />
                            <span className=" text-sm">Olympia: AI Transforms Inventory</span>
                            <span className=" text-sm text-primary">- Case Study</span>
                        </span>
                        <h1 className=" mt-2 font-manrope text-5xl font-bold text-start">How John Doe Landed Two $20,000 Jobs with Lexos</h1>
                        <p className="mt-4 text-foreground opacity-70 text-base">
                            See how leading businesses achieve unparalleled efficiency, accuracy, and growth with our AI inventory platform. Explore their real transformations.
                        </p>
                        <Button className=" mt-6">Read Story <ArrowDown /> </Button>
                    </div>
                </div>
                <div className=" w-full h-[30rem] relative">
                    <Image fill src="/assets/story.png" className=" rounded-xl object-cover" alt="Olympia" />
                </div>
            </Wrapper>
            <Wrapper className="max-w-[1480px] mt-20">
                <div className=" grid grid-cols-3 gap-y-12 w-full">
                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">Operational Cost Reduction</p>
                            <h6 className=" font-semibold text-primary text-5xl">93%</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70">Average reduction in operational costs for <br /> clients, driven by optimized inventory.</span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">Time Saved</p>
                            <h6 className=" font-semibold text-primary text-5xl">800 +</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70">Cumulative hours saved by clients each year <br /> through automated inventory processes.</span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">Items Processed</p>
                            <h6 className=" font-semibold text-primary text-5xl">1M+</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70">AI-processed items, delivering unparalleled <br /> accuracy and detail for every inventory.</span>
                    </div>
                </div>
            </Wrapper>
            <Separator orientation="horizontal" className=" w-full mt-12" />
        </section>
    );
}

export default CustomerStoryHero;