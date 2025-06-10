import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UseCaseHero3 = () => {
    return (
        <section className=" w-full h-[80vh] relative">
            <Wrapper className=" max-w-[1480px]">
                <div className="flex flex-col items-start absolute top-1/2 -translate-y-1/2 z-20">
                    <span className=" pl-1.5 pr-3 py-1.5 inline-flex items-center gap-2 bg-white border border-black/10 rounded-full">
                        <Image width={24} height={24} src="/assets/olympia.png" alt="Olympia moving" />
                        <span className=" text-sm">Olympia: AI Transforms Inventory</span>
                        <ArrowRight className=" size-4" />
                    </span>
                    <h1 className=" text-5xl font-bold font-manrope text-white mt-2">
                        Your Next Success <br /> Story Starts Here.
                    </h1>
                    <p className=" text-base mt-2 text-white font-normal max-w-xl">
                        See how leading businesses achieve unparalleled efficiency, accuracy, and growth with our AI inventory platform. Explore their real transformations.
                    </p>
                    <Link className=" mt-6" href="/demo">
                        <Button>Book Demo <ArrowUpRight /></Button>
                    </Link>
                </div>
            </Wrapper>

            <div className=" w-full h-full relative">
                <Image fill src="/assets/import-management.png" className=" object-cover" alt="Import Management" />
            </div>
        </section>
    );
}

export default UseCaseHero3;