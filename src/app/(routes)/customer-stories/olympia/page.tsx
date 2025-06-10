import Cta2 from "@/sections/cta-2";
import CustomerStories from "@/sections/customer-stories";
import CustomerStoryDetails from "@/sections/customer-story-details";
import CustomerStoryHero from "@/sections/individual-customer-story-hero";

const CustomerStoryDetailPage = () => {
    return (
        <div>
            <CustomerStoryHero />
            <CustomerStoryDetails />
            <CustomerStories />
            <Cta2 />
        </div>
    );
}

export default CustomerStoryDetailPage;