import Cta from "@/sections/cta";
import Faq from "@/sections/faq";
import Hero from "@/sections/hero";
import Pricing from "@/sections/pricing";
import SocialProof from "@/sections/social-proof";
import Solutions from "@/sections/solutions";

const HomePage = () => {
    return (
        <main>
            <Hero />
            <SocialProof />
            <Solutions />
            <Pricing />
            <Faq />
            <Cta />
        </main>
    );
}

export default HomePage;