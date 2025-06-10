import ProblemCard from "@/components/common/problem-card";
import SolutionCard from "@/components/common/solution-card";
import Wrapper from "@/components/common/wrapper";
import Cta from "@/sections/cta";
import Faq from "@/sections/faq";
import UseCaseHero1 from "@/sections/use-case-hero-1";
import { CircleCheck, Stars } from "lucide-react";
import Image from "next/image";

const MovingCompanies = () => {
    return (
        <div>
            <UseCaseHero1 />
            <Wrapper className=" py-20">
                <div className=" w-full flex flex-col items-center max-w-7xl mx-auto">
                    <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                        <Stars />
                        <p>The Problem</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-5xl font-bold text-center">Challenges</h2>

                    <div className="grid grid-cols-3 gap-6 mt-10">
                        <ProblemCard title="Challenge 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        <ProblemCard title="Challenge 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        <ProblemCard title="Challenge 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    </div>
                </div>
            </Wrapper>

            <Wrapper className=" py-20">
                <div className=" w-full flex flex-col items-center max-w-7xl mx-auto">
                    <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                        <CircleCheck />
                        <p>Solution</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-5xl font-bold text-center">How Lexos Solves <br /> These Challenges</h2>

                    <div className="grid grid-cols-3 gap-6 mt-10">
                        <SolutionCard title="Solution 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        <SolutionCard title="Solution 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        <SolutionCard title="Solution 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    </div>
                </div>
            </Wrapper>

            <Wrapper className=" w-full flex flex-col items-center py-12">
                <div className=" max-w-7xl mx-auto flex flex-col items-center">
                    <Image width={60} height={60} src="/assets/quote.svg" alt="Quote" />
                    <h5 className=" font-medium text-3xl leading-11 text-center max-w-3xl mt-6 mb-4">Just in the 2 surveys I have done, Lexos has helped me land two jobs for about <span className=" bg-primary text-white">$20k! Not to mention the amount of admin time the software eliminates.</span></h5>
                    <div className="flex items-center gap-4 mt-6">
                        <Image width={52} height={52} src="/assets/customer-1.png" className=" object-cover" alt="Lexos customer" />
                        <div className=" flex flex-col items-start gap-0">
                            <p className=" font-medium text-xl">John Doe</p>
                            <span className=" font-normal text-lg text-foreground opacity-70">Manager @Olympia</span>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-cols-3 max-w-7xl mx-auto mt-20 w-full">
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
            <Faq />
            <Cta />
        </div>
    );
}

export default MovingCompanies;