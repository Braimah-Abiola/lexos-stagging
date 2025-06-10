import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Cta2 = () => {
    return (
        <section className=" h-[72vh] overflow-clip mb-40">
            <Wrapper className="w-full h-full">
                <div className=" h-full w-full relative flex z-10">
                    <div className=" w-[60%]">
                        <div className=" h-full flex flex-col justify-center pl-20 max-w-lg z-20 relative">
                            <Image width={60} height={60} src="/assets/logo-icon.svg" className=" ml-4" quality={100} alt="Lexos icon" />
                            <h2 className=" mt-2 font-manrope text-5xl leading-[60px] font-bold text-start">
                                <span className=" ml-4">Automate Your</span> <br />
                                <span className=" relative ml-2 pl-2 pr-2">
                                    Inventory With AI
                                    <div className=" bg-primary/40 border-2 border-primary  absolute inset-0 z-1">
                                        <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -left-[5px]" />
                                        <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -right-[5px]" />
                                        <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -left-[5px]" />
                                        <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -right-[5px]" />
                                    </div>
                                </span>{" "}
                            </h2>
                            <p className=" ml-4 mt-2 text-base text-foreground opacity-70">Unlock unparalleled efficiency. AI transforms photos into precise, volumetric, CRM-synced inventories.</p>
                            <Button className=" w-fit ml-4 mt-4">Get Started Today <ArrowUpRight /></Button>

                            <div className=" grid grid-cols-2 w-full ml-4 mt-8">
                                <div className="flex flex-col gap-2">
                                    <span className=" text-foreground opacity-70">Items Purchased</span>
                                    <h6 className=" font-semibold text-4xl text-foreground">1M +</h6>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className=" text-foreground opacity-70">Data Points Synced</span>
                                    <h6 className=" font-semibold text-4xl text-foreground">1B +</h6>
                                </div>

                                <div className=" inline-flex items-center -space-x-3 mt-8">
                                    <Image width={52} height={52} src="/assets/company-1.png" className="" quality={100} alt="Rexton Movers" />
                                    <Image width={52} height={52} src="/assets/company-2.png" className="" quality={100} alt="Olympia" />
                                    <Image width={52} height={52} src="/assets/company-3.png" className="" quality={100} alt="Armstrong" />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-[100%] h-[48rem] relative">
                        <Image fill src="/assets/happy-client.png" className="object-contain" alt="Happy client" />
                    </div>

                    <Image fill quality={100} priority src="/assets/cta-bg.svg" className=" border rounded-2xl object-cover object-top z-[-1]" alt="Hero background" />
                </div>
            </Wrapper>
        </section >
    );
}

export default Cta2;