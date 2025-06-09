import Wrapper from "@/components/common/wrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";

const Faq = () => {
    return (
        <section className=" bg-white py-40">
            <Wrapper className="flex flex-col items-center">
                <span className=" bg-primary/10 text-primary rounded-full p-2 inline-flex items-center gap-2">
                    <MessageCircleQuestion />
                    <p>FAQs</p>
                </span>
                <h1 className="mt-2 font-manrope text-5xl font-bold text-center">Frequently Asked <br /> Questions</h1>
                <p className="text-base mt-2 text-foreground opacity-70">Your questions answered here.</p>
                <div className=" w-full max-w-3xl mt-8">
                    <Accordion className="flex flex-col gap-2" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Can I do a virtual walkthrough on my computer?</AccordionTrigger>
                            <AccordionContent>
                                Yes, you can do a virtual walkthrough on your computer, except instead of taking photos you will have to upload them. We recommend using your phone for an added level of convenience.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can I edit my inventory after it generates?</AccordionTrigger>
                            <AccordionContent>
                                You can edit or delete any specific item by clicking &apos;Edit&apos; on the &apos;View Inventory&apos; page and scrolling down to the item you wish to modify.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>How do I join a Guided Survey with my customer?</AccordionTrigger>
                            <AccordionContent>
                                When you start a new inventory from your Dashboard, you can either schedule a Guided Survey or begin one immediately. If you choose to start it right away, a link to join the survey call will appear in the confirmation pop-up. If you schedule it for later, you&apos;ll receive a calendar invite by email with the call details.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>If I send a &apos;Self-Survey&apos; to one of my customers, how will I know <br /> if they have completed the walkthrough?</AccordionTrigger>
                            <AccordionContent>
                                You&apos;ll receive an email notification whenever a new inventory is completed in your dashboard.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className=" w-full border border-black/5 rounded-xl mt-2 py-3 px-4 flex items-center justify-between">
                        <div className=" flex flex-col items-start gap-2">
                            <h4 className=" font-medium text-lg">Still have questions?</h4>
                            <p className=" text-base text-foreground opacity-70">We understand. Let’s get in touch directly with our team, then.</p>
                        </div>
                        <Button>Contact Us <ArrowRight /></Button>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Faq;