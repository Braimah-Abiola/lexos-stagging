import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Cta = () => {
    return (
        <section className=" w-full bg-gradient-to-b from-white to-[#E8E2FF]">
            <Wrapper>
                <div className=" w-full flex flex-col items-center z-10 relative">
                    <Image width={60} height={60} src="/assets/logo-icon.svg" quality={100} alt="Lexos icon" />
                    <h1 className=" mt-2 font-manrope text-5xl leading-[60px] font-bold text-center">Automate Your <br />
                        <span className=" relative ml-2 pl-2 pr-2">
                            Inventory With AI
                            <div className=" bg-primary/40 border-2 border-primary -z-1 absolute inset-0">
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -left-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -right-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -left-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -right-[5px]" />
                            </div>
                        </span>{" "} </h1>
                    <p className=" text-base max-w-[42ch] text-foreground opacity-70 text-center mt-2">Unlock unparalleled efficiency. AI transforms photos into precise, volumetric, CRM-synced inventories.</p>

                    <Button className=" mt-6">Get Started Now</Button>

                </div>
            </Wrapper>
            <div className=" w-full h-[38rem] relative -mt-40 z-1">
                <Image fill quality={100} src="/assets/cta-img.png" className=" object-contain" alt="Cta" />
            </div>
        </section>
    );
}

export default Cta;