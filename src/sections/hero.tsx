"use client";

import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
    const particlesRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: particlesRef,
        offset: ["start end", "end start"],
    });

    const backgroundPositionY = useTransform(
        scrollYProgress,
        [0, 1],
        [-300, 300]
    );

    const heroContentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const videoVariants = {
        hidden: { scale: 0.95, opacity: 0, y: 50 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.5,
            },
        },
    };


    return (
        <section className=" relative h-[92vh]">
            <Wrapper className="h-full w-full px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={heroContentVariants}
                    className=" pt-12 z-20 w-full flex flex-col items-center bg-gradient-to-b rounded-xl border border-input border-t-0 overflow-hidden from-white to-primary h-full relative"
                >
                    <motion.div variants={itemVariants} className=" pl-1.5 pr-3 py-1.5 inline-flex items-center gap-2 bg-white border border-black/10 rounded-full">
                        <Image width={24} height={24} src="/assets/olympia.png" alt="Olympia moving" />
                        <span className=" text-sm">Online Movers Miami: AI Transforms Inventory</span>
                        <ArrowRight className=" size-4" />
                    </motion.div>
                    <motion.h1 variants={itemVariants} className=" mt-2 font-manrope text-5xl leading-[60px] font-bold text-center">Replace manual inventory <br /> with
                        <span className=" relative ml-2 pl-2 pr-2">
                            AI technology
                            <div className=" bg-primary/40 border-2 border-primary -z-[1] absolute inset-0">
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -left-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -right-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -left-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -right-[5px]" />
                            </div>
                        </span>{" "} </motion.h1>
                    <motion.p variants={itemVariants} className=" text-base text-foreground opacity-70 text-center mt-2">Our AI transforms photos into inventories with weight and <br /> volume for each item, and syncs to your CRM in seconds.</motion.p>
                    <motion.div variants={itemVariants} className=" inline-flex items-center gap-4 mt-4">
                        <Link href="/demo">
                            <Button>Get Started Now</Button>
                        </Link>
                        <Link href="/demo">
                            <Button variant="outline">Book Demo</Button>
                        </Link>
                    </motion.div>
                    <motion.div variants={videoVariants} className=" mt-8 max-w-6xl w-full bg-white/40 border border-white/50 backdrop-blur-3xl rounded-t-3xl p-2 pb-0 h-[48rem] mx-auto">
                        <div className=" w-full h-full rounded-t-2xl">
                            <video
                                className="w-full h-full object-cover rounded-t-2xl"
                                src="/assets/demo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/assets/demo-poster.png"
                            />
                        </div>
                    </motion.div>
                    <div className="absolute inset-0 h-full w-full -z-1 rounded-xl bg-[linear-gradient(to_right,#B2B2B2_1px,transparent_1px),linear-gradient(to_bottom,#B2B2B2_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>

                    <motion.div
                        ref={particlesRef}
                        style={{
                            backgroundImage: 'url("/assets/particles.png")',
                            backgroundPositionY,
                        }}
                        animate={{
                            backgroundPositionX: "800px",
                        }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 120,
                        }}
                        className=" w-full h-40 bottom-20 -z-1 absolute">

                    </motion.div>
                </motion.div>
            </Wrapper>
        </section>
    );
}

export default Hero;