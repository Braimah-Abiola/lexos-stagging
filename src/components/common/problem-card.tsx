import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ProblemCard = ({ title, description }: { title: string; description: string; }) => {
    return (
        <div className=" w-full border bg-white hover:bg-accent rounded-2xl border-black/10 flex flex-col items-start p-6">
            <Image width={60} height={60} src="/assets/challenge.svg" alt={title} />

            <h4 className=" mt-4 font-semibold text-2xl">{title}</h4>
            <p className=" text-base text-foreground opacity-70">{description}</p>
            <Button variant="ghost" className=" mt-6 text-primary hover:text-primary has-[>svg]:pl-0 has-[>svg]:pr-0">See Our Solution <ArrowRight /> </Button>
        </div>
    );
}

export default ProblemCard;