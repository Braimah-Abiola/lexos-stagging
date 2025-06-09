import { AllChangelogs } from "@/sections/changelog";
import ChangelogHero from "@/sections/changelog-hero";
import Cta from "@/sections/cta";

const ChangelogPage = () => {
    return (
        <main>
            <ChangelogHero />
            <AllChangelogs />
            <Cta />
        </main>
    );
}

export default ChangelogPage;