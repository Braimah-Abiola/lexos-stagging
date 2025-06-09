import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const NotFound = () => {
    return (
        <main className=" w-full h-screen flex items-center justify-center">
            <Wrapper className=" flex flex-col items-center -mt-40">
                <div className="w-[620px] h-[280px] relative">
                    <Image fill src="/assets/404.svg" alt="404" />
                </div>
                <h3 className=" mt-12 font-manrope font-bold text-3xl text-foreground">Page Not Found</h3>
                <p className=" text-base text-foreground opacity-70 max-w-sm text-center mt-2">The page you are looking for may have been removed, renamed, or temporarily unavailable.</p>
                <Button className=" mt-4">Take Me Home <ArrowUpRight /></Button>
            </Wrapper>
        </main>
    );
}

export default NotFound;