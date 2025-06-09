import CareerCard from "@/components/common/career-card";
import Wrapper from "@/components/common/wrapper";
import { Separator } from "@/components/ui/separator";

const OpenPositions = () => {
    return (
        <section className=" -mt-[40rem] z-20 relative">
            <Wrapper className="flex flex-col">
                <div className=" w-full flex items-start justify-between max-w-6xl mx-auto">
                    <div>
                        <h6 className=" text-xl font-semibold ">Design</h6>
                        <p className=" text-foreground opacity-70">Open positions in our design team.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <CareerCard category="Design" title="Product Designer" description="We’re looking for a mid-level product designer to join our team." location="Boston, MA" type="Full Time" compensation="$80k - 100k" />
                        <CareerCard category="Design" title="Product Designer" description="We’re looking for a mid-level product designer to join our team." location="Boston, MA" type="Full Time" compensation="$80k - 100k" />
                    </div>
                </div>

                <div className=" w-full flex items-start justify-between max-w-6xl mx-auto mt-12">
                    <div>
                        <h6 className=" text-xl font-semibold ">Software Development</h6>
                        <p className=" text-foreground opacity-70">Open positions in our software team.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <CareerCard category="Design" title="Product Designer" description="We’re looking for a mid-level product designer to join our team." location="Boston, MA" type="Full Time" compensation="$80k - 100k" />
                        <CareerCard category="Design" title="Product Designer" description="We’re looking for a mid-level product designer to join our team." location="Boston, MA" type="Full Time" compensation="$80k - 100k" />
                    </div>
                </div>
                
                <div className=" w-full flex items-start justify-between max-w-6xl mx-auto mt-12">
                    <div>
                        <h6 className=" text-xl font-semibold ">Other</h6>
                        <p className=" text-foreground opacity-70">Other open positions in our core team.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <CareerCard category="Design" title="Product Designer" description="We’re looking for a mid-level product designer to join our team." location="Boston, MA" type="Full Time" compensation="$80k - 100k" />
                        <CareerCard category="Design" title="Product Designer" description="We’re looking for a mid-level product designer to join our team." location="Boston, MA" type="Full Time" compensation="$80k - 100k" />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default OpenPositions;