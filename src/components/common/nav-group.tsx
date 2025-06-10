"use client"

import Link from "next/link"
import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"


export function NavGroup() {
    return (
        <NavigationMenu className=" lg:ml-40" viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                    <NavigationMenuContent className=" -ml-36 p-4">
                        <ul className="grid grid-cols-2 gap-4 md:w-[400px] lg:w-[780px]">
                            <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">Features</span>
                                <div>
                                    <ListItem href="/" title="AI-Powered Inventory Creation" icon="/assets/feature-1.svg" iconActive="/assets/feature-1-active.svg">
                                        AI transforms photos into precise, volumetric inventories.
                                    </ListItem>
                                    <ListItem href="/" title="Instant CRM Sync" icon="/assets/feature-2.svg" iconActive="/assets/feature-2-active.svg">
                                        Inventory data, weight, and volume sync directly to your CRM.
                                    </ListItem>
                                    <ListItem href="/" title="Accurate Weight & Volume" icon="/assets/feature-3.svg" iconActive="/assets/feature-3-active.svg">
                                        Get precise weight and volume estimates for every item.
                                    </ListItem>
                                    <ListItem href="/" title="Guided Surveys" icon="/assets/feature-4.svg" iconActive="/assets/feature-4-active.svg">
                                        Assist your customer on a live call as they use Lexos.
                                    </ListItem>
                                </div>

                            </div>

                            <li className="">
                                <div className=" bg-accent rounded-lg w-full h-full p-3">
                                    <h6 className=" text-[15px] font-medium ">We’ve just released a new update</h6>
                                    <p className=" text-sm">Faster processing, enhanced accuracy, and expanded item recognition are now even more powerful with our new QR code implementation from desktop to phone.</p>
                                    <div className=" relative w-full h-[12rem] my-3">
                                        <Image fill src="/assets/qr-update.png" className=" rounded-lg object-cover" alt="QR Code update" quality={100} />
                                    </div>
                                    <Link href="/changelog">
                                        <Button className=" px-0 md:px-0 has-[>svg]:pl-0 has-[>svg]:pr-0" variant="ghost">Version 1.0.2 <ArrowUpRight /></Button>
                                    </Link>
                                </div>
                            </li>
                            <div className=" col-span-2 mb-1">
                                <Separator orientation="horizontal" className=" w-full" />

                                <div className="flex flex-row items-center justify-between w-full mt-4">
                                    <div className=" flex flex-col items-start">
                                        <h6 className=" text-[15px] font-medium">Unlock the Future of Inventory Management</h6>
                                        <p className=" text-sm text-foreground opacity-70">Photos become itemized inventories with weight and volume, instantly syncing to your CRM. <br /> Experience unmatched accuracy and efficiency.</p>
                                    </div>
                                    <Button>Get Demo</Button>
                                </div>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/pricing">Pricing</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                    <NavigationMenuContent className=" -ml-[20rem] p-4">
                        <ul className="grid grid-cols-2 gap-4 md:w-[400px] lg:w-[780px]">
                            <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">Verticals</span>
                                <div>
                                    <ListItem href="/use-cases/moving-companies" title="Moving Companies" icon="/assets/use-case-1.svg" iconActive="/assets/use-case-1-active.svg">
                                        Replace manual inventory with AI photos to inventory with weight, volume, and CRM sync.
                                    </ListItem>
                                    <ListItem href="/use-cases/junk-removers" title="Junk Removers" icon="/assets/use-case-2.svg" iconActive="/assets/use-case-2-active.svg">
                                        AI transforms photos into detailed inventories with weight and volume for streamlined operations.
                                    </ListItem>
                                    <ListItem href="/use-cases/import-management" title="Import Management" icon="/assets/use-case-3.svg" iconActive="/assets/use-case-3-active.svg">
                                        Get accurate weight and volume for imports from photos using AI, syncing to your CRM.
                                    </ListItem>
                                </div>

                            </div>

                            <li className="">
                                <div className=" bg-accent rounded-lg w-full h-full p-3">
                                    <span className=" font-medium text-sm uppercase opacity-50 pt-2">Customer Story</span>
                                    <div className=" relative w-full h-[12rem] mb-3 mt-2">
                                        <Image fill src="/assets/case.png" className=" rounded-lg object-cover" alt="Customer story" quality={100} />
                                    </div>
                                    <h6 className=" font-medium text-[15px] ">Olympia: AI Transforms Inventory</h6>
                                    <p className=" text-sm">
                                        Olympia, a leading moving company, leveraged our AI to transform photos into detailed inventories, reducing manual effort and improving data accuracy.
                                    </p>
                                    <Link href="/customer-stories/olympia">
                                        <Button className=" text-primary px-0 md:px-0 has-[>svg]:pl-0 has-[>svg]:pr-0" variant="ghost">Read Customer Story<ArrowRight /></Button>
                                    </Link>
                                </div>
                            </li>
                            <div className=" col-span-2 mb-1">
                                <Separator orientation="horizontal" className=" w-full" />

                                <div className="flex flex-row items-center justify-between w-full mt-4">
                                    <div className=" flex flex-col items-start">
                                        <h6 className=" text-[15px] font-medium">Need a tailored solution?</h6>
                                        <p className=" text-sm text-foreground opacity-70">Custom solutions, dedicated support, and scalable solutions for complex enterprise inventory.</p>
                                    </div>
                                    <Button>Talk to Sales</Button>
                                </div>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/about">About Us</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent className=" -ml-[34rem] p-4">
                        <ul className="grid grid-cols-2 gap-4 md:w-[400px] lg:w-[780px]">
                            <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">Resources</span>
                                <div>
                                    <ListItem href="/customer-stories" title="Customer Stories" icon="/assets/resource-1.svg" iconActive="/assets/resource-1-active.svg">
                                        See how moving companies streamlined workflows with us.
                                    </ListItem>
                                    <ListItem href="/demo" title="Product Demo" icon="/assets/resource-2.svg" iconActive="/assets/resource-2-active.svg">
                                        See how our core platform works in a quick demo.
                                    </ListItem>
                                    <ListItem href="/faqs" title="FAQs" icon="/assets/resource-3.svg" iconActive="/assets/resource-3-active.svg">
                                        Find quick answers to the most common questions.
                                    </ListItem>
                                </div>

                            </div>

                            <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">Company</span>
                                <div>
                                    <ListItem href="/careers" title="Careers" icon="/assets/resource-4.svg" iconActive="/assets/resource-4-active.svg">
                                        Join our growing team & help us refine core platform.
                                    </ListItem>
                                    <ListItem href="/legals/privacy" title="Legals" icon="/assets/resource-5.svg" iconActive="/assets/resource-5-active.svg">
                                        View our terms, privacy policy, and other legal info.
                                    </ListItem>
                                    <ListItem href="/support" title="Support" icon="/assets/resource-6.svg" iconActive="/assets/resource-6-active.svg">
                                        Need help or want to learn more? Reach out to our support team.
                                    </ListItem>
                                </div>

                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    icon,
    iconActive,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; icon: string; iconActive: string }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <li
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <NavigationMenuLink asChild>
                <Link className=" flex flex-row items-start" href={href}>
                    <div
                        className={`h-12 w-12 aspect-square inline-flex items-center justify-center rounded-lg ${isHovered ? "bg-primary border border-primary" : "bg-white border border-black/20"
                            }`}
                    >
                        <Image priority width={26} height={26} src={isHovered ? iconActive : icon} alt={title || "Icon"} />
                    </div>
                    <div className=" ml-4">
                        <div className="text-[15px] leading-none font-medium">{title}</div>
                        <p className="text-muted-foreground line-clamp-3 mt-1 text-sm leading-snug">
                            {children}
                        </p>
                    </div>
                    <ArrowUpRight className={` shrink-0 size-5 text-primary ${isHovered ? " opacity-100" : " opacity-0"}`} />
                </Link>
            </NavigationMenuLink>
        </li>
    )
}