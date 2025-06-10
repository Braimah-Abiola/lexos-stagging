"use client";

import Wrapper from "@/components/common/wrapper";
import { Gem } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const CareersHero = () => {
    const heroContentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className=" w-full h-screen">
            <Wrapper className="px-4 md:px-6 w-full h-full">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={heroContentVariants}
                    className=" h-full w-full relative flex flex-col items-center pt-20 z-20"
                >
                    <motion.span
                        variants={itemVariants}
                        className=" bg-white text-primary rounded-full pl-2 py-1.5 pr-3 inline-flex items-center gap-2"
                    >
                        <Gem />
                        <p className=" text-foreground">Careers</p>
                    </motion.span>
                    <motion.h1
                        variants={itemVariants}
                        className=" mt-2 font-manrope text-5xl leading-[60px] font-bold text-center"
                    >
                        Join Our Growing Team. <br /> Build the Future Of Lexos
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className=" max-w-[48ch] mt-2 text-center text-base text-foreground opacity-70"
                    >
                        We&apos;re seeking innovators ready to build cutting-edge AI solutions that transform how companies handle inventory.
                    </motion.p>

                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" rounded-t-xl object-cover object-top z-[-1]" alt="Hero background" />
                </motion.div>
            </Wrapper>
        </section>
    );
}

export default CareersHero;