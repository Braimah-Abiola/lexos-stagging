import Cta2 from "@/sections/cta-2";
import CustomerStoriesMarquee from "@/sections/cusomter-stories-marquee";
import CustomerStoryHero from "@/sections/customer-story-hero";
import Statistics from "@/sections/statistics";

const CustomerStories = () => {
    return (
        <div>
            <CustomerStoryHero />
            <CustomerStoriesMarquee />
            <div className=" py-12 mb-40 bg-accent">
                <Statistics />
            </div>
            <Cta2 />
        </div>
    );
}

export default CustomerStories;