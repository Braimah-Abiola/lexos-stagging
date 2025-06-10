import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const Statistics = () => {
    return (
        <section className=" w-full py-20">
            <Wrapper>
                <div className=" max-w-7xl mx-auto flex items-start gap-32 justify-between">
                    <div className=" flex flex-col items-start w-full max-w-sm">
                        <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                            <TrendingUp />
                            <p>Statistics</p>
                        </span>
                        <h1 className="mt-2 font-manrope text-5xl font-bold text-start">Our Impact by the Numbers</h1>
                        <p className="text-base mt-2 text-foreground opacity-70 text-start">Our proven AI technology is transforming inventory management, delivering tangible results for businesses worldwide.</p>
                        <aside className="inline-flex items-center gap-4 mt-4">
                            <Button>Case Studies <ArrowUpRight /></Button>
                            <Button variant="outline">Book Demo</Button>
                        </aside>
                    </div>
                    <div className=" grid grid-cols-2 gap-y-12 w-full">
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

                        <div className="flex flex-col gap-4">
                            <div className=" flex flex-col gap-8 border-l pl-8">
                                <p className=" font-medium text-foreground text-lg">Efficiency Gain</p>
                                <h6 className=" font-semibold text-primary text-5xl">75%</h6>
                            </div>
                            <span className="text-[15px] text-foreground opacity-70">Average time saved on inventory creation <br /> compared  to traditional manual methods.</span>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Statistics;