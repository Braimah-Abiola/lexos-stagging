import { CircleDollarSign, Clock } from "lucide-react";
import Image from "next/image";

const CareerCard = (
    {
        title,
        description,
        category,
        location,
        type,
        compensation
    }: {
        title: string;
        description: string;
        category: string;
        location: string;
        type: string;
        compensation: string;
    }) => {
    return (
        <div className=" w-full bg-white max-w-2xl border border-black/10 rounded-2xl px-8 py-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h4 className=" font-semibold text-lg">{title}</h4>
                    <span className=" text-primary rounded-full bg-primary/10 py-0.5 px-3 border border-primary/20">● {category}</span>
                </div>
                <span className=" bg-primary/10 rounded-full py-0.5  pl-1 pr-4 border border-primary/50 text-primary flex items-center gap-2">
                    <Image width={24} height={24} src="/assets/us-flag.svg" alt="United States" />
                    <p>
                        {location}
                    </p>

                </span>
            </div>
            <p className=" text-base mt-4 ">{description}</p>
            <div className="flex flex-wrap gap-4 opacity-70 mt-6">
                <div className=" inline-flex gap-2 items-center">
                    <Clock /> <p>{type}</p>
                </div>
                <div className=" inline-flex gap-2 items-center">
                    <CircleDollarSign /> <p>{compensation}</p>
                </div>
            </div>
        </div>
    );
}

export default CareerCard;