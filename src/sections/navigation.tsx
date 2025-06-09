"use client"; // Add this line

import { NavGroup } from "@/components/common/nav-group";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react"; // Import useState and useEffect

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add event listener
        window.addEventListener("scroll", handleScroll);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`w-full bg-white py-3 z-50 sticky top-0 transition-shadow duration-200 ease-in-out ${
                isScrolled ? "border-b border-b-black/10" : "border-b border-b-transparent"
            }`}
        >
            <Wrapper className="flex items-center justify-between">
                <Link className=" h-10 w-[112px]" href="/">
                    <div className=" relative h-10 w-[112px]">
                        <Image fill src="/assets/logo.svg" alt="Lexos logo" className="object-contain" quality={100} />
                    </div>
                </Link>
                <nav className=" w-full inline-flex items-center justify-center">
                    <NavGroup />
                </nav>
                <aside className="flex items-center gap-4">
                    <div className="shrink-0 flex-nowrap inline-flex items-center gap-2">
                        <Image height={20} width={20} src="/assets/us-flag.svg" className=" object-cover" alt="Us flag" quality={100} />
                        <ChevronDown className=" size-4 text-foreground" />
                    </div>
                    <span className=" h-5">
                        <Separator orientation="vertical" className="h-full bg-black opacity-20" />
                    </span>
                    <div className=" inline-flex gap-2">
                        <Button variant="ghost">Sign In</Button>
                        <Button>Join Lexos <ArrowUpRight /></Button>
                    </div>
                </aside>
            </Wrapper>
        </header>
    );
}

export default Navigation;