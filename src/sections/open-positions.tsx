"use client";

import CareerCard from "@/components/common/career-card";
import Wrapper from "@/components/common/wrapper";
import { motion } from "framer-motion";

const OpenPositions = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className=" -mt-[40rem] z-20 relative mb-20">
            <Wrapper className="flex flex-col gap-16">
                <motion.div
                    className=" w-full flex flex-col md:flex-row items-start justify-between px-6 max-w-5xl mx-auto gap-8 md:gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <motion.div variants={itemVariants} className="w-full md:w-1/3">
                        <h6 className=" text-xl font-semibold ">Design</h6>
                        <p className=" text-foreground opacity-70 mt-1">Open positions in our design team.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-4 w-full md:w-2/3" variants={itemVariants}>
                        <CareerCard category="Design" title="Product Designer" description="We’re looking for a mid-level product designer to join our team." location="Boston, MA" type="Full Time" compensation="$80k - 100k" />
                        <CareerCard category="Design" title="UX Researcher" description="Help us understand our users and shape product strategy." location="Remote" type="Full Time" compensation="$90k - 110k" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className=" w-full flex flex-col md:flex-row items-start justify-between px-6 max-w-5xl mx-auto gap-8 md:gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <motion.div variants={itemVariants} className="w-full md:w-1/3">
                        <h6 className=" text-xl font-semibold ">Software Development</h6>
                        <p className=" text-foreground opacity-70 mt-1">Open positions in our software team.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-4 w-full md:w-2/3" variants={itemVariants}>
                        <CareerCard category="Software" title="Senior Frontend Engineer" description="Lead the development of our cutting-edge user interfaces." location="Boston, MA" type="Full Time" compensation="$120k - 150k" />
                        <CareerCard category="Software" title="AI/ML Engineer" description="Develop and deploy machine learning models for inventory analysis." location="Remote" type="Full Time" compensation="$130k - 160k" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className=" w-full flex flex-col md:flex-row items-start justify-between px-6 max-w-5xl mx-auto gap-8 md:gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <motion.div variants={itemVariants} className="w-full md:w-1/3">
                        <h6 className=" text-xl font-semibold ">Other</h6>
                        <p className=" text-foreground opacity-70 mt-1">Other open positions in our core team.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-4 w-full md:w-2/3" variants={itemVariants}>
                        <CareerCard category="Marketing" title="Digital Marketing Manager" description="Drive our online presence and customer acquisition strategies." location="Boston, MA" type="Full Time" compensation="$90k - 110k" />
                        <CareerCard category="Customer Success" title="Customer Success" description="Ensure our clients achieve maximum value from Lexos." location="Remote" type="Full Time" compensation="$75k - 95k" />
                    </motion.div>
                </motion.div>
            </Wrapper>
        </section>
    );
}

export default OpenPositions;