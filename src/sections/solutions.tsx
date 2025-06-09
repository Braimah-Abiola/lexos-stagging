import Wrapper from "@/components/common/wrapper";
import { Stars } from "lucide-react";
import Image from "next/image";

const Solutions = () => {
    return (
        <section className=" py-40 bg-accent">
            <Wrapper className="flex flex-col items-center">
                <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                    <Stars />
                    <p>Lexos Solution</p>
                </span>
                <h1 className="mt-2 font-manrope text-5xl font-bold text-center">Simplify Your Surveys</h1>
                <p className="text-base mt-2 text-foreground opacity-70">For movers, junk removers, and supply chain management.</p>
                <div className=" max-w-7xl mx-auto w-full">
                    <div className=" w-full grid grid-cols-2 px-20 mt-12 gap-y-8">
                        <div className="flex flex-col items-start">
                            <Image width={80} height={80} src="/assets/solution-1.png" alt="Snap some photos" />
                            <h3 className=" font-plex-sans font-semibold text-2xl text-foreground">Snap some photos</h3>
                            <p className=" text-foreground text-base opacity-70">Your reps or clients take photos of items that need moving.</p>
                        </div>

                        <div className="flex flex-col items-start">
                            <Image width={80} height={80} src="/assets/solution-2.png" alt="Get an inventory list" />
                            <h3 className=" font-plex-sans font-semibold text-2xl text-foreground">Get an inventory list</h3>
                            <p className=" text-foreground text-base opacity-70">Lexos&apos; AI builds a full inventory with volume, weight, and notes.</p>
                        </div>

                        <div className="flex flex-col items-start">
                            <Image width={80} height={80} src="/assets/solution-3.png" alt="Sync to your CRM" />
                            <h3 className=" font-plex-sans font-semibold text-2xl text-foreground">Sync to your CRM</h3>
                            <p className=" text-foreground text-base opacity-70">The list flows straight into your CRM, matched to the customer.</p>
                        </div>

                        <div className="flex flex-col items-start">
                            <Image width={80} height={80} src="/assets/solution-4.png" alt="Follow up faster" />
                            <h3 className=" font-plex-sans font-semibold text-2xl text-foreground">Follow up faster</h3>
                            <p className=" text-foreground text-base opacity-70">Reps have everything they need to quote and close.</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Solutions;