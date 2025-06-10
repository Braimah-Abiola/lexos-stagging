import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SolutionCard = ({ title, description }: { title: string; description: string; }) => {
    return (
        <div className=" w-full border bg-white hover:bg-accent rounded-2xl border-black/10 flex flex-col items-start p-6">
            <div className=" h-14 w-14 aspect-square rounded-xl border border-black/10 flex items-center justify-center">
                <Image width={32} height={32} src="/assets/solution.svg" alt={title} />
            </div>

            <h4 className=" mt-4 font-semibold text-2xl">{title}</h4>
            <p className=" text-base text-foreground opacity-70">{description}</p>
            <Link href="/demo">
                <Button variant="ghost" className=" mt-6 text-primary hover:text-primary has-[>svg]:pl-0 has-[>svg]:pr-0">Try Now <ArrowRight /> </Button>
            </Link>
        </div>
    );
}

export default SolutionCard;