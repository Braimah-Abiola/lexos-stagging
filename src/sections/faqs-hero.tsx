import Wrapper from "@/components/common/wrapper";
import { MessageCircleQuestion } from "lucide-react";
import Image from "next/image";

const FaqsHero = () => {
    return (
        <section className=" w-full h-screen">
            <Wrapper className="px-4 md:px-6 w-full h-full">
                <div className=" h-full w-full relative flex flex-col items-center pt-20">
                    <span className=" bg-white text-primary rounded-full pl-2 py-1.5 pr-3 inline-flex items-center gap-2">
                        <MessageCircleQuestion />
                        <p className=" text-foreground">FAQs</p>
                    </span>
                    <h1 className=" mt-2 font-manrope text-5xl leading-[60px] font-bold text-center">
                        All Frequently <br /> Asked Questions
                    </h1>
                    <p className=" max-w-[48ch] mt-2 text-center text-base text-foreground opacity-70">
                        Your questions answered here.
                    </p>

                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" opacity-80 rounded-t-xl object-cover object-top z-[-1]" alt="Hero background" />
                </div>
            </Wrapper>
        </section>
    );
}

export default FaqsHero;