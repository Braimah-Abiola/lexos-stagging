"use client";

import Wrapper from "@/components/common/wrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

// Define FAQ categories
const faqCategories = ["General", "Account & Technical", "For Moving Companies", "Other"];

// Define a type for your FAQ items
interface FaqItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

// Sample FAQ data with categories
const allFaqData: FaqItem[] = [
    {
        id: "item-1",
        question: "Can I do a virtual walkthrough on my computer?",
        answer: "Yes, you can do a virtual walkthrough on your computer, except instead of taking photos you will have to upload them. We recommend using your phone for an added level of convenience.",
        category: "General",
    },
    {
        id: "item-2",
        question: "Can I edit my inventory after it generates?",
        answer: "You can edit or delete any specific item by clicking 'Edit' on the 'View Inventory' page and scrolling down to the item you wish to modify.",
        category: "General",
    },
    {
        id: "item-3",
        question: "How do I join a Guided Survey with my customer?",
        answer: "When you start a new inventory from your Dashboard, you can either schedule a Guided Survey or begin one immediately. If you choose to start it right away, a link to join the survey call will appear in the confirmation pop-up. If you schedule it for later, you'll receive a calendar invite by email with the call details.",
        category: "For Moving Companies",
    },
    {
        id: "item-4",
        question: "If I send a 'Self-Survey' to one of my customers, how will I know if they have completed the walkthrough?",
        answer: "You'll receive an email notification whenever a new inventory is completed in your dashboard.",
        category: "For Moving Companies",
    },
    {
        id: "item-5",
        question: "What are the system requirements for Lexos?",
        answer: "Lexos is a web-based application and works on most modern browsers. For the mobile app, you'll need iOS 13 or Android 7.0 and above.",
        category: "Account & Technical",
    },
    {
        id: "item-6",
        question: "How is my data secured?",
        answer: "We use industry-standard encryption and security protocols to protect your data. All data is stored securely on cloud servers.",
        category: "Account & Technical",
    },
    {
        id: "item-7",
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started.",
        category: "Other",
    },
];

const AllFaq = () => {
    const [activeCategory, setActiveCategory] = useState<string>(faqCategories[0]);

    const filteredFaqs =
        activeCategory === "General"
            ? allFaqData
            : allFaqData.filter((faq) => faq.category === activeCategory);

    return (
        <section className="-mt-[42rem] relative z-20 mb-40">
            <Wrapper className="flex flex-col items-center">
                {/* Category Filter Buttons */}
                <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
                    {faqCategories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "rounded-full px-4 py-2 text-sm md:text-base md:px-6 md:py-2.5",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "bg-white text-foreground hover:bg-accent hover:text-accent-foreground border-black/10"
                            )}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className=" w-full max-w-3xl">
                    {filteredFaqs.length > 0 ? (
                        <Accordion className="flex flex-col gap-2" type="single" collapsible>
                            {filteredFaqs.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <p className="text-center text-foreground/70">
                            No FAQs found for this category.
                        </p>
                    )}
                    <div className=" w-full bg-white border border-black/5 rounded-xl mt-2 py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className=" flex flex-col items-center md:items-start gap-1 text-center md:text-left">
                            <h4 className=" font-medium text-lg">Still have questions?</h4>
                            <p className=" text-base text-foreground opacity-70">We understand. Let’s get in touch directly with our team, then.</p>
                        </div>
                        <Button className="shrink-0">Contact Us <ArrowRight className="ml-2 size-4" /></Button>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default AllFaq;