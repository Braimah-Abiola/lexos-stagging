import { Gem } from "lucide-react";
import PricingCards from "./pricing-cards";
import Wrapper from "@/components/common/wrapper";

const Pricing = () => {
    return (
        <section className=" py-40 bg-white">
            <Wrapper className=" flex flex-col items-center">
                <span className=" bg-primary/10 text-primary rounded-full p-2 inline-flex items-center gap-2">
                    <Gem />
                    <p>Pricing</p>
                </span>
                <h1 className="mt-2 font-manrope text-5xl font-bold text-center">Plans & Pricing</h1>
            </Wrapper>
            <PricingCards />
        </section>
    );
}

export default Pricing;