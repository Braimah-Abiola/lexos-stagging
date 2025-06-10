import Wrapper from "@/components/common/wrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CustomerStoryHero = () => {
    return (
        <section className=" w-full h-screen">
            <Wrapper className="px-4 md:px-6 w-full h-full">
                <div className=" h-full w-full relative flex flex-col items-center pt-32">
                    <span className=" pl-1.5 pr-3 py-1.5 inline-flex items-center gap-2 bg-white border border-black/10 rounded-full">
                        <Image width={24} height={24} src="/assets/olympia.png" alt="Olympia moving" />
                        <span className=" text-sm">Online Movers Miami: AI Transforms Inventory</span>
                        <ArrowRight className=" size-4" />
                    </span>
                    <h1 className=" mt-2 font-manrope text-5xl leading-[60px] font-bold text-center">
                        Your Next Success <br />
                        <span className=" relative ml-2 pl-2 pr-2">
                            Story Starts Here
                            <div className=" bg-primary/40 border-2 border-primary -z-[1] absolute inset-0">
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -left-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -right-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -left-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -right-[5px]" />
                            </div>
                        </span>
                    </h1>
                    <p className=" max-w-[40ch] mt-2 text-center text-base text-foreground opacity-70">
                        See how leading businesses achieve efficiency and growth with our AI inventory platform.
                    </p>
                    <div className=" grid grid-cols-3 max-w-xl w-full mt-8">
                        <div className="flex flex-col gap-2 items-center">
                            <h6 className=" font-semibold text-4xl text-foreground">1M +</h6>
                            <span className=" text-foreground opacity-70">Items Purchased</span>
                        </div>

                        <div className="flex flex-col gap-2 items-center">
                            <h6 className=" font-semibold text-4xl text-foreground">1B +</h6>
                            <span className=" text-foreground opacity-70">Data Points Synced</span>
                        </div>

                        <div className="flex flex-col gap-2 items-center">
                            <div className=" inline-flex items-center -space-x-3">
                                <Image width={40} height={40} src="/assets/company-1.png" className="" quality={100} alt="Rexton Movers" />
                                <Image width={40} height={40} src="/assets/company-2.png" className="" quality={100} alt="Olympia" />
                                <Image width={40} height={40} src="/assets/company-3.png" className="" quality={100} alt="Armstrong" />

                            </div>
                            <span className=" text-foreground opacity-70">Featured Companies</span>

                        </div>
                    </div>
                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" opacity-80 rounded-t-xl object-cover object-top z-[-1]" alt="Hero background" />
                </div>
            </Wrapper>
        </section>
    );
}

export default CustomerStoryHero;