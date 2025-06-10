import Cta from "@/sections/cta";
import Faq from "@/sections/faq";
import PricingHero from "@/sections/pricing-hero";
import PriceComparison from "@/sections/price-comparison";
import SocialProof from "@/sections/social-proof";

const Pricing = () => {
    return (
        <main>
            <PricingHero />
            <PriceComparison />
            <SocialProof />
            <Faq />
            <Cta />
        </main>
    );
}

export default Pricing;