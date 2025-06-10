import { Marquee } from "@/components/common/marquee";
import Wrapper from "@/components/common/wrapper";
import Image from "next/image";

const SocialProof = () => {
    return (
        <section className=" w-full py-20">
            <Wrapper className="flex flex-col items-center">
                <h1 className="mt-2 font-manrope text-4xl font-bold text-center">Trusted By 30+ Leading Companies</h1>
                <p className="text-base mt-2 text-foreground opacity-70">Movers, junk removers, and importers from around the world use Lexos in their day to day workflow.</p>
            </Wrapper>
            <div className=" max-w-7xl mx-auto relative w-full flex flex-col -space-y-3 mt-8">
                <div className="pointer-events-none absolute z-20 inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>

                <Marquee pauseOnHover className="[--duration:30s]">
                    <div className="relative h-[60px] w-[220px]">
                        <Image fill src="/assets/1.png" className=" object-contain scale-90" quality={100} alt="Olympia" />
                    </div>
                    <div className="relative h-[60px] w-[218px]">
                        <Image fill src="/assets/2.png" className=" object-contain scale-90" quality={100} alt="Gentle Gaint" />
                    </div>
                    <div className="relative h-[60px] w-[236px]">
                        <Image fill src="/assets/3.png" className=" object-contain scale-90" quality={100} alt="Armstrong" />
                    </div>
                    <div className="relative h-[60px] w-[140px]">
                        <Image fill src="/assets/4.png" className=" object-contain scale-90" quality={100} alt="Michaels Moving" />
                    </div>
                    <div className="relative h-[60px] w-[226px]">
                        <Image fill src="/assets/5.png" className=" object-contain scale-90" quality={100} alt="Moving Of America" />
                    </div>
                    <div className="relative h-[60px] w-[102px]">
                        <Image fill src="/assets/6.png" className=" object-contain scale-90" quality={100} alt="Movers Chigago" />
                    </div>
                    <div className="relative h-[60px] w-[128px]">
                        <Image fill src="/assets/7.png" className=" object-contain scale-90" quality={100} alt="Online Movers Miami" />
                    </div>
                    <div className="relative h-[60px] w-[176px]">
                        <Image fill src="/assets/8.png" className=" object-contain scale-90" quality={100} alt="NYMM" />
                    </div>
                    <div className="relative h-[60px] w-[200px]">
                        <Image fill src="/assets/9.png" className=" object-contain scale-90" quality={100} alt="Flash Moving" />
                    </div>
                    <div className="relative h-[60px] w-[138px]">
                        <Image fill src="/assets/10.png" className=" object-contain scale-90" quality={100} alt="Royal Moving & Storage" />
                    </div>
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:34s]">
                    <div className="relative h-[60px] w-[164px]">
                        <Image fill src="/assets/11.png" className=" object-contain scale-90" quality={100} alt="All Service Moving" />
                    </div>
                    <div className="relative h-[60px] w-[168px]">
                        <Image fill src="/assets/12.png" className=" object-contain scale-90" quality={100} alt="We Taco" />
                    </div>
                    <div className="relative h-[60px] w-[164px]">
                        <Image fill src="/assets/13.png" className=" object-contain scale-90" quality={100} alt="Amanat" />
                    </div>
                    <div className="relative h-[60px] w-[180px]">
                        <Image fill src="/assets/14.png" className=" object-contain scale-90" quality={100} alt="The Junk Removers" />
                    </div>
                    <div className="relative h-[60px] w-[170px]">
                        <Image fill src="/assets/15.png" className=" object-contain scale-90" quality={100} alt="Pink Zebra" />
                    </div>
                    <div className="relative h-[60px] w-[176px]">
                        <Image fill src="/assets/16.png" className=" object-contain scale-90" quality={100} alt="Solidarity Movers" />
                    </div>
                    <div className="relative h-[60px] w-[120px]">
                        <Image fill src="/assets/17.png" className=" object-contain scale-90" quality={100} alt="Kobe" />
                    </div>
                    <div className="relative h-[60px] w-[156px]">
                        <Image fill src="/assets/18.png" className=" object-contain scale-90" quality={100} alt="Dyno Moving" />
                    </div>
                    <div className="relative h-[60px] w-[158px]">
                        <Image fill src="/assets/19.png" className=" object-contain scale-90" quality={100} alt="Best Quality Movers" />
                    </div>
                    <div className="relative h-[60px] w-[120px]">
                        <Image fill src="/assets/20.png" className=" object-contain scale-90" quality={100} alt="Safe Responsible Movers" />
                    </div>
                </Marquee>

                <Marquee pauseOnHover className="[--duration:36s]">
                    <div className="relative h-[60px] w-[120px]">
                        <Image fill src="/assets/21.png" className=" object-contain scale-90" quality={100} alt="Rexton Moving & Storage" />
                    </div>
                    <div className="relative h-[60px] w-[208px]">
                        <Image fill src="/assets/22.png" className=" object-contain scale-90" quality={100} alt="On It Movers" />
                    </div>
                    <div className="relative h-[60px] w-[92px]">
                        <Image fill src="/assets/23.png" className=" object-contain scale-90" quality={100} alt="Moving Company" />
                    </div>
                    <div className="relative h-[60px] w-[252px]">
                        <Image fill src="/assets/24.png" className=" object-contain scale-90" quality={100} alt="Move Solutions" />
                    </div>

                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    <div className="relative h-[60px] w-[130px]">
                        <Image fill src="/assets/25.png" className=" object-contain scale-90" quality={100} alt="Best Rate Movers Boston" />
                    </div>
                    <div className="relative h-[60px] w-[142px]">
                        <Image fill src="/assets/26.png" className=" object-contain scale-90" quality={100} alt="Move Mate" />
                    </div>
                    <div className="relative h-[60px] w-[126px]">
                        <Image fill src="/assets/27.png" className=" object-contain scale-90" quality={100} alt="Chicago Marathon Movers" />
                    </div>
                    <div className="relative h-[60px] w-[196px]">
                        <Image fill src="/assets/28.png" className=" object-contain scale-90" quality={100} alt="Maximoving" />
                    </div>
                    <div className="relative h-[60px] w-[112px]">
                        <Image fill src="/assets/29.png" className=" object-contain scale-90" quality={100} alt="GoodMove Movers" />
                    </div>
                    <div className="relative h-[60px] w-[112px]">
                        <Image fill src="/assets/30.png" className=" object-contain scale-90" quality={100} alt="Maple Trail Movers" />
                    </div>
                </Marquee>

                <div className="pointer-events-none absolute z-20 inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>

            </div>
        </section>
    );
}

export default SocialProof;