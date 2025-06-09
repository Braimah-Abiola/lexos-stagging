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

                <Marquee pauseOnHover className="[--duration:20s]">
                    <div className="relative h-[60px] w-[220px]">
                        <Image fill src="/assets/1.png" className=" object-contain scale-90" quality={100} alt="Olympia" />
                    </div>
                    <div className="relative h-[60px] w-[278px]">
                        <Image fill src="/assets/2.png" className=" object-contain scale-90" quality={100} alt="Brave Movers" />
                    </div>
                    <div className="relative h-[60px] w-[236px]">
                        <Image fill src="/assets/3.png" className=" object-contain scale-90" quality={100} alt="Armstrong" />
                    </div>
                    <div className="relative h-[60px] w-[230px]">
                        <Image fill src="/assets/4.png" className=" object-contain scale-90" quality={100} alt="Worldwide Movers" />
                    </div>
                    <div className="relative h-[60px] w-[198px]">
                        <Image fill src="/assets/5.png" className=" object-contain scale-90" quality={100} alt="Maximoving" />
                    </div>
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:28s]">
                    <div className="relative h-[60px] w-[146px]">
                        <Image fill src="/assets/6.png" className=" object-contain scale-90" quality={100} alt="Do Star Moving" />
                    </div>
                    <div className="relative h-[60px] w-[218px]">
                        <Image fill src="/assets/7.png" className=" object-contain scale-90" quality={100} alt="Gentle Giant" />
                    </div>
                    <div className="relative h-[60px] w-[175px]">
                        <Image fill src="/assets/8.png" className=" object-contain scale-90" quality={100} alt="Solidarity Movers" />
                    </div>
                    <div className="relative h-[60px] w-[175px]">
                        <Image fill src="/assets/9.png" className=" object-contain scale-90" quality={100} alt="NYMM" />
                    </div>
                    <div className="relative h-[60px] w-[168px]">
                        <Image fill src="/assets/10.png" className=" object-contain scale-90" quality={100} alt="We Taco" />
                    </div>
                    <div className="relative h-[60px] w-[170px]">
                        <Image fill src="/assets/11.png" className=" object-contain scale-90" quality={100} alt="Pink Zebra Moving" />
                    </div>
                </Marquee>

                <Marquee pauseOnHover className="[--duration:36s]">
                    <div className="relative h-[60px] w-[140px]">
                        <Image fill src="/assets/12.png" className=" object-contain scale-90" quality={100} alt="MM Moving" />
                    </div>
                    <div className="relative h-[60px] w-[96px]">
                        <Image fill src="/assets/13.png" className=" object-contain scale-90" quality={100} alt="Moving Company" />
                    </div>
                    <div className="relative h-[60px] w-[140px]">
                        <Image fill src="/assets/14.png" className=" object-contain scale-90" quality={100} alt="Michaels Moving & Storage" />
                    </div>
                    <div className="relative h-[60px] w-[180px]">
                        <Image fill src="/assets/15.png" className=" object-contain scale-90" quality={100} alt="The Junk Movers" />
                    </div>
                    <div className="relative h-[60px] w-[140px]">
                        <Image fill src="/assets/16.png" className=" object-contain scale-90" quality={100} alt="Kobe Moving" />
                    </div>
                    <div className="relative h-[60px] w-[120px]">
                        <Image fill src="/assets/17.png" className=" object-contain scale-90" quality={100} alt="Rexton" />
                    </div>
                    <div className="relative h-[60px] w-[112px]">
                        <Image fill src="/assets/18.png" className=" object-contain scale-90" quality={100} alt="GoodMove Movers" />
                    </div>
                    <div className="relative h-[60px] w-[140px]">
                        <Image fill src="/assets/19.png" className=" object-contain scale-90" quality={100} alt="H2H Movers" />
                    </div>
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    <div className="relative h-[60px] w-[140px]">
                        <Image fill src="/assets/19.png" className=" object-contain scale-90" quality={100} alt="H2H Movers" />
                    </div>
                    <div className="relative h-[60px] w-[180px]">
                        <Image fill src="/assets/20.png" className=" object-contain scale-90" quality={100} alt="Five Star Movers" />
                    </div>
                    <div className="relative h-[60px] w-[208px]">
                        <Image fill src="/assets/21.png" className=" object-contain scale-90" quality={100} alt="On It Movers" />
                    </div>
                    <div className="relative h-[60px] w-[100px]">
                        <Image fill src="/assets/22.png" className=" object-contain scale-90" quality={100} alt="A Movers" />
                    </div>
                    <div className="relative h-[60px] w-[190px]">
                        <Image fill src="/assets/23.png" className=" object-contain scale-90" quality={100} alt="Allegiance Movers" />
                    </div>
                    <div className="relative h-[60px] w-[172px]">
                        <Image fill src="/assets/24.png" className=" object-contain scale-90" quality={100} alt="Amerisafe" />
                    </div>
                    <div className="relative h-[60px] w-[180px]">
                        <Image fill src="/assets/25.png" className=" object-contain scale-90" quality={100} alt="Dying Moving" />
                    </div>
                </Marquee>

                <div className="pointer-events-none absolute z-20 inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>

            </div>
        </section>
    );
}

export default SocialProof;