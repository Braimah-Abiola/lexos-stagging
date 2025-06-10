import Wrapper from "@/components/common/wrapper";
import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "lucide-react";

const PricingComparison = () => {
  return (
    <div className=" bg-accent py-20 -mt-24 mb-20">
      <Wrapper>
        <h2 className="mt-2 font-manrope text-5xl font-bold text-center">Compare Our Plans</h2>

        <div className=" grid grid-cols-4 max-w-5xl mx-auto w-full gap-0 mt-20">
          <div className=" flex flex-col gap-12 py-8 w-full">
            <h4 className="text-xl font-semibold font-manrope">Features</h4>

            <div className="flex flex-col items-start gap-8 w-full">
              <h6 className=" font-semibold text-lg">Accounts</h6>
              <div className=" flex flex-col items-start gap-6 font-plex-sans font-normal text-base text-foreground opacity-70">
                <p>Team Members</p>
                <p>Support</p>
                <p>Inventory Use</p>
                <p>Guided Surveys</p>
              </div>
            </div>


            <div className="flex flex-col items-start gap-8 w-full">
              <h6 className=" font-semibold text-lg">Core Platform</h6>
              <div className=" w-full flex flex-col items-start gap-4 font-plex-sans font-normal text-base text-foreground opacity-70">
                <p>CRM Integration</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>Quote Automation</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>Box Count Automation</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>Fleet Assignment Automation</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>Code Widget Integration</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>SSO & SCIM</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>Custom Data Policies</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>Analytics Overview</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>White-label Branding</p>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-12 py-8">
            <h4 className="text-xl font-semibold font-manrope">Growth</h4>

            <div className=" w-full flex flex-col items-start gap-8">
              <h6 className=" font-semibold text-lg text-accent">.</h6>
              <div className=" flex flex-col items-start gap-6 font-plex-sans font-normal text-base text-foreground opacity-70">
                <p>3</p>
                <p>Normal Support</p>
                <p>Unlimited Usage</p>
                <p>Unlimited Usage</p>
              </div>
            </div>


            <div className=" w-full flex flex-col items-start gap-8">
              <h6 className=" font-semibold text-lg text-accent">.</h6>
              <div className=" w-full flex flex-col items-start gap-4 font-plex-sans font-normal text-base text-foreground opacity-70">
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>—</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>—</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>—</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>—</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>—</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>—</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>—</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>—</p>
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-col gap-12 p-8 bg-primary rounded-2xl text-white">
            <h4 className="text-xl font-semibold font-manrope">Advanced</h4>

            <div className=" w-full flex flex-col items-start gap-8">
              <h6 className=" font-semibold text-lg text-primary">.</h6>
              <div className=" flex flex-col items-start gap-6 font-plex-sans font-normal text-base text-white">
                <p>10</p>
                <p>Normal Support</p>
                <p>Unlimited Usage</p>
                <p>Unlimited Usage</p>
              </div>
            </div>


            <div className=" w-full flex flex-col items-start gap-8">
              <h6 className=" font-semibold text-lg text-primary">.</h6>
              <div className=" w-full flex flex-col items-start gap-4 font-plex-sans font-normal text-base text-white">
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <p>—</p>
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <p>—</p>
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <p>—</p>
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <p>—</p>
              </div>
            </div>
          </div>


          <div className=" w-full flex flex-col gap-12 py-8">
            <h4 className="text-xl font-semibold font-manrope pl-8">Enterprise</h4>

            <div className=" w-full flex flex-col items-start gap-8 pl-8">
              <h6 className=" font-semibold text-lg text-accent">.</h6>
              <div className=" flex flex-col items-start gap-6 font-plex-sans font-normal text-base text-foreground opacity-70">
                <p>Custom</p>
                <p>Priority Support</p>
                <p>Unlimited Usage</p>
                <p>Unlimited Usage</p>
              </div>
            </div>


            <div className=" w-full flex flex-col items-start gap-8">
              <h6 className=" font-semibold text-lg text-accent">.</h6>
              <div className=" w-full flex flex-col items-start gap-4 font-plex-sans font-normal text-base text-foreground opacity-70">
                <CircleCheck className=" ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />

                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default PricingComparison;