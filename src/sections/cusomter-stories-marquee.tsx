import { Marquee } from "@/components/common/marquee";
import CustomerStoryCard from "@/components/common/customer-story-card";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CustomerStoriesMarquee = () => {
    return (
        <section className=" -mt-[30rem] mb-40">
            <Wrapper className=" md:px-6 flex flex-col items-center">
                <Marquee pauseOnHover className=" [--gap:1rem] [--duration:30s]">
                    <CustomerStoryCard
                        logo="/assets/olympia-logo.png"
                        detailedCase
                        name="John Doe"
                        picture="/assets/customer-1.png"
                        position="Manager of Olympia Moving"
                        review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates."
                        url="/customer-stories/olympia"
                    />
                    <CustomerStoryCard
                        logo="/assets/olympia-logo.png"
                        detailedCase={false}
                        name="John Doe"
                        picture="/assets/customer-2.png"
                        position="Manager of Olympia Moving"
                        review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates."
                        url="/"
                    />
                    <CustomerStoryCard
                        logo="/assets/olympia-logo.png"
                        detailedCase={false}
                        name="John Doe"
                        picture="/assets/customer-2.png"
                        position="Manager of Olympia Moving"
                        review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates."
                        url="/"
                    />
                    <CustomerStoryCard
                        logo="/assets/olympia-logo.png"
                        detailedCase={false}
                        name="John Doe"
                        picture="/assets/customer-2.png"
                        position="Manager of Olympia Moving"
                        review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates."
                        url="/"
                    />
                </Marquee>
                <div className=" w-full h-fit relative">
                    <div className="pointer-events-none absolute z-20 inset-y-0 left-0 w-[12%] bg-gradient-to-r from-background"></div>

                    <Marquee pauseOnHover reverse className=" [--gap:1rem] [--duration:42s]">
                        <CustomerStoryCard
                            logo="/assets/olympia-logo.png"
                            detailedCase={false}
                            name="John Doe"
                            picture="/assets/customer-1.png"
                            position="Manager of Olympia Moving"
                            review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates."
                            url="/customer-stories/olympia"
                        />
                        <CustomerStoryCard
                            logo="/assets/olympia-logo.png"
                            detailedCase={false}
                            name="John Doe"
                            picture="/assets/customer-2.png"
                            position="Manager of Olympia Moving"
                            review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates."
                            url="/"
                        />
                        <CustomerStoryCard
                            logo="/assets/olympia-logo.png"
                            detailedCase={false}
                            name="John Doe"
                            picture="/assets/customer-2.png"
                            position="Manager of Olympia Moving"
                            review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates."
                            url="/"
                        />
                        <CustomerStoryCard
                            logo="/assets/olympia-logo.png"
                            detailedCase={false}
                            name="John Doe"
                            picture="/assets/customer-2.png"
                            position="Manager of Olympia Moving"
                            review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates."
                            url="/"
                        />
                    </Marquee>

                    <div className="pointer-events-none absolute z-20 inset-y-0 right-0 w-[12%] bg-gradient-to-l from-background"></div>

                </div>
                <Button className=" mt-12">Read Customer Story <ArrowUpRight /></Button>
            </Wrapper>
        </section>
    );
}

export default CustomerStoriesMarquee;