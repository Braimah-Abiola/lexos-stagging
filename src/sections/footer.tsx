import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <section className=" bg-primary pt-8 pb-8">
            <Wrapper className="flex flex-col">
                <div className=" w-full flex items-center justify-between">
                    <div className=" relative h-10 w-[112px]">
                        <Image fill src="/assets/logo-white.svg" alt="Lexos logo" className="object-contain" quality={100} />
                    </div>

                    <aside className="inline-flex gap-3 text-sm">
                        <Button variant="ghost" className=" text-white/70 hover:text-white hover:bg-transparent hover:underline">Sign In</Button>
                        <Button className=" bg-white hover:bg-white text-primary hover:text-primary">Sign Up <ArrowUpRight /></Button>
                    </aside>
                </div>
                <Separator orientation="horizontal" className=" mt-8 opacity-20 w-full bg-white" />
                <div className=" w-full flex items-start gap-20 mt-12">
                    <div className="flex flex-col gap-4 text-white max-w-[320px]">
                        <span className=" text-base font-medium">Mailing List</span>
                        <div className="flex flex-col gap-3 text-sm">
                            <p>Unlock insights into the future of inventory. Subscribe for exclusive updates, industry trends, and efficiency strategies for your business.</p>
                        </div>

                        <div className=" relative w-full">
                            <Input className=" bg-white border-0 text-black placeholder:text-black/70 rounded-full h-11 w-full" placeholder="Enter your email address" />
                            <Button className=" absolute top-1/2 -translate-y-1/2 right-1">Subscribe</Button>
                        </div>
                    </div>
                    <div className=" grid grid-cols-5 gap-6 w-full">


                        <div className="flex flex-col gap-4 text-white">
                            <span className=" text-base font-medium">Product</span>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="">
                                    <p>AI-Powered Inventory Creation</p>
                                </Link>
                                <Link href="">
                                    <p>Instant CRM Sync</p>
                                </Link>
                                <Link href="">
                                    <p>Accurate Weight & Volume</p>
                                </Link>
                                <Link href="">
                                    <p>Real-time Tracking</p>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 text-white">
                            <span className=" text-base font-medium">Company</span>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="">
                                    <p>About Us</p>
                                </Link>
                                <Link href="">
                                    <p>Pricing</p>
                                </Link>
                                <Link href="">
                                    <p>Careers</p>
                                </Link>
                                <Link href="">
                                    <p>FAQs</p>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 text-white">
                            <span className=" text-base font-medium">Use Cases</span>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="">
                                    <p>Moving Companies</p>
                                </Link>
                                <Link href="">
                                    <p>Junk Movers</p>
                                </Link>
                                <Link href="">
                                    <p>Import Management</p>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 text-white">
                            <span className=" text-base font-medium">Resources</span>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="">
                                    <p>Changelog</p>
                                </Link>
                                <Link href="">
                                    <p>Login</p>
                                </Link>
                                <Link href="">
                                    <p>Getting Started</p>
                                </Link>
                                <Link href="">
                                    <p>+1 617 498 7863</p>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 text-white">
                            <span className=" text-base font-medium">Legals</span>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="">
                                    <p>Privacy Policy</p>
                                </Link>
                                <Link href="">
                                    <p>Terms & Conditions</p>
                                </Link>
                                <Link href="">
                                    <p>Sitemap</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full flex items-end justify-between mt-28">
                    <div className="flex flex-wrap gap-4">
                        <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                            <FaLinkedin size={20} />
                        </div>
                        <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                            <FaInstagram size={20} />
                        </div>
                        <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                            <FaFacebook size={20} />
                        </div>
                    </div>

                    <div className="flex flex-col text-white">
                        <span className=" text-sm">Smarter inventory starts here</span>
                        <div className=" inline-flex items-end gap-4">
                            <h4 className=" font-medium text-2xl">Schedule A Demo</h4>
                            <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
                <Separator orientation="horizontal" className=" mt-12 mb-8 opacity-20 w-full bg-white" />
                <span className=" text-sm text-white w-full text-center">Copyright © 2025 Lexos, Inc. All Rights Reserved. </span>
            </Wrapper>
        </section>
    );
}

export default Footer;