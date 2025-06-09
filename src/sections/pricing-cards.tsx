"use client";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function PricingCards() {
  const [selected, setSelected] = useState<"M" | "A">("A");

  return (
    <section className="w-full relative overflow-hidden">
      <Heading selected={selected} setSelected={setSelected} />
      <PriceCards selected={selected} />
    </section>
  );
}

interface HeadingProps {
  selected: "M" | "A";
  setSelected: React.Dispatch<React.SetStateAction<"M" | "A">>;
}

const Heading = ({ selected, setSelected }: HeadingProps) => {
  const pathname = usePathname();
  return (
    <div
      className={`${pathname !== "/pricing" ? "mb-12 lg:mb-16" : "mb-4 md:mb-10"
        } relative z-10`}
    >
      <div className="flex items-center justify-center gap-4 mt-2">
        <div className="flex items-center justify-center gap-4 relative">
          <Label
            htmlFor="billing-toggle"
            className={`text-base font-normal ${selected === "M" ? "text-foreground" : "text-foreground"
              }`}
          >
            Monthly
          </Label>

          <div className="relative -mb-1">
            <Switch
              id="billing-toggle"
              checked={selected === "A"}
              onCheckedChange={(checked) => setSelected(checked ? "A" : "M")}
              className="data-[state=checked]:bg-primary"
            />
            {selected === "M" && pathname !== "/pricing" && (
              <div className="absolute right-[-110px] top-0">
                <CTAArrow />
              </div>
            )}
          </div>

          <Label
            htmlFor="billing-toggle"
            className={`text-base font-normal ${selected === "A" ? "text-foreground" : "text-foreground"
              }`}
          >
            Yearly
          </Label>
        </div>
      </div>
    </div>
  );
};

const CTAArrow = () => (
  <div className="absolute -right-[60px] -top-2">
    <motion.svg
      width="44"
      height="80"
      viewBox="0 0 37 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="scale-50 sm:scale-75"
      initial={{ scale: 0.7, rotate: 5 }}
      animate={{ scale: 0.75, rotate: 0 }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeOut",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.0924 20.3867C35.0376 23.865 36.1899 27.9896 36.2406 31.6022C36.2749 34.4625 35.593 37.8245 34.3321 41.0599C33.2628 43.8014 31.8506 46.6358 30.5977 48.5626C29.289 50.5677 27.8665 52.2961 25.5085 54.7622C22.7399 57.6613 21.8345 58.3798 20.994 58.3573C20.7047 58.3522 20.6115 58.306 20.4767 58.0957L20.3081 57.833L20.9122 57.3713C21.5136 56.922 21.7629 56.6667 24.5806 53.5137C26.9842 50.8381 28.2402 49.1636 29.6091 46.8232C31.9645 42.801 33.7292 37.9074 34.0828 34.3638C34.4332 30.8648 33.7818 27.3726 32.0871 23.5746C31.8726 23.1082 31.3226 22.1682 30.5714 20.9971C29.2637 18.9748 28.6102 18.1542 27.2211 16.8306C24.3598 14.12 21.8275 12.8304 15.6671 10.9536C14.4444 10.5829 11.7894 9.94413 11.6993 10.0019C11.6768 10.0163 11.8341 10.2121 12.0504 10.4337C12.636 11.0329 12.8474 11.3954 12.8882 11.8885C12.9313 12.4014 12.6463 12.9974 12.2336 13.2621C11.6108 13.6616 10.8931 13.5498 9.9051 12.9011C9.64124 12.7209 8.18742 11.8413 6.67959 10.9436C3.65147 9.14528 3.12843 8.79216 2.05945 7.83554C0.756368 6.67914 0.334351 5.77354 0.625987 4.79175C0.885901 3.92558 1.62299 3.35751 2.62909 3.24184C2.91893 3.21487 3.89025 3.25968 4.79385 3.34748C6.70735 3.54023 7.2045 3.53924 8.40994 3.33814C9.54851 3.14834 10.9508 2.72571 13.1611 1.91167C17.0247 0.471984 16.8307 0.532765 16.7555 0.877722C16.6641 1.29667 14.2009 3.41713 12.6552 4.40862C11.5671 5.10653 10.8463 5.45234 9.63208 5.87087C9.15679 6.03801 8.77089 6.17943 8.76829 6.19193C8.76553 6.20409 9.27165 6.25017 9.88949 6.28871C12.6316 6.46883 17.809 7.96905 21.7725 9.73955C24.9996 11.1877 27.244 12.821 29.6264 15.4785C30.9196 16.9166 32.0417 18.5175 33.0924 20.3867Z"
        fill="#877CF3"
      />
    </motion.svg>
    <span className="block -ml-2 text-sm w-fit bg-primary text-white px-1.5 py-0.5 rounded -mt-6 -rotate-2 font-light text-nowrap">
      Save $$$
    </span>
  </div>
);

interface PriceCardProps {
  selected: "M" | "A";
}

const PriceCards = ({ selected }: PriceCardProps) => (
  <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 lg:gap-4 max-w-5xl mx-auto w-full relative z-10 mt-8 md:mt-0">
    {/* GROWTH */}
    <div className="w-full bg-white p-5 border border-black/10 rounded-2xl">
      <p className="text-xl font-semibold font-manrope">Growth</p>
      <p className="text-base text-foreground opacity-70 mb-4">
        For teams expanding reach and increasing efficiency.
      </p>
      <Separator className=" w-full bg-foreground opacity-10" />
      <div className="overflow-hidden mt-4">
        <AnimatePresence mode="wait">
          {selected === "M" ? (
            <motion.p
              key="monthly1"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-3xl flex items-end gap-1 tracking-tight font-plex-sans font-medium text-foreground"
            >
              <span>$199</span>
              <span className="text-base text-foreground font-normal opacity-70">
                /month
              </span>
            </motion.p>
          ) : (
            <motion.p
              key="monthly2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-3xl flex items-end gap-1 tracking-tight font-plex-sans font-medium text-foreground"
            >
              <span>$159</span>
              <span className="text-base text-foreground font-normal opacity-70">
                /month
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <Link href="https://app.skillura.com/get-started">
        <motion.button
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="w-full h-11 text-base my-4 border flex justify-center items-center border-black/10 font-medium bg-white text-foreground rounded-full"
        >
          Get Started With Growth
        </motion.button>
      </Link>
      <Separator className=" w-full bg-foreground opacity-10" />

      <p className=" mb-4 mt-4 font-medium text-foreground">Notable features include:</p>
      <div className="flex items-start gap-2 mb-2">
        <div>
          <Check className=" text-primary" />
        </div>
        <span className="text-base">Access for up to 3 team members</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Check className=" text-primary" />
        <span className="text-base">Unlimited inventory usage</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Check className=" text-primary" />
        <span className="text-base">Unlimited guide survey usage</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Check className=" text-primary" />
        <span className="text-base">CRM integration</span>
      </div>
    </div>

    {/* Pro  */}
    <div className="w-full overflow-hidden bg-primary p-5 text-white rounded-2xl">
      <div className=" w-full flex items-center justify-between">
        <p className="text-xl font-semibold font-manrope text-white">Advanced</p>

        <div className=" w-fit text-sm bg-white rounded-full px-4 py-1 flex items-center justify-center uppercase text-primary">
          <p> {selected === "A" ? "Best Offer" : "Most Popular"}</p>
        </div>
      </div>
      <p className="text-base font-normal mb-4 text-white opacity-70">
        For teams running <br /> intricate, high-volume operations.
      </p>
      <Separator className=" w-full bg-white opacity-20" />
      <div className="overflow-hidden mt-4">
        <AnimatePresence mode="wait">
          {selected === "M" ? (
            <motion.p
              key="monthly1"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-3xl flex items-end gap-1 tracking-tight font-plex-sans font-medium text-white"
            >
              <span>$499</span>
              <span className="text-base text-white opacity-70 font-normal">
                /month
              </span>
            </motion.p>
          ) : (
            <motion.p
              key="monthly2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-3xl flex items-end gap-1 tracking-tight font-plex-sans font-medium text-white"
            >
              <span>$399</span>
              <span className="text-base text-white opacity-70 font-normal">
                /month
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <Link href="https://app.skillura.com/get-started">
        <motion.button
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="w-full my-4 z-20 relative flex justify-center items-center font-medium bg-white text-primary h-11 text-base rounded-full"
        >
          Get Started With Advanced
        </motion.button>
      </Link>
      <Separator className="w-full bg-white opacity-20" />

      <p className=" mb-4 mt-4 font-medium text-white">
        Everything in Growth, plus:
      </p>
      <div className="flex items-center gap-2 mb-2">
        <Check className=" text-white" />
        <span className="text-base">Access for up to 10 team members</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Check className=" text-white" />
        <span className="text-base">Quote automation</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Check className=" text-white" />
        <span className="text-base">Box count automation</span>
      </div>
      <div className="flex items-start gap-2 mb-2">
        <Check className=" text-white" />
        <span className="text-base">Fleet assignment automation</span>
      </div>
      <div className="flex items-start gap-2 mb-2">
        <Check className=" text-white" />
        <span className="text-base">Code widget integration</span>
      </div>
    </div>

    {/* Enterprise */}
    <div className="w-full bg-white p-5 border border-black/10 rounded-2xl">
      <p className="text-xl font-semibold font-manrope">Enterprise</p>
      <p className="text-base text-foreground font-normal opacity-70 mb-4">
        For organizations needing custom solutions and priority support.
      </p>
      <Separator className=" w-full bg-foreground opacity-10" />
      <div className="overflow-hidden mt-4">
        <AnimatePresence mode="wait">
          {selected === "M" ? (
            <motion.p
              key="yearly1"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-3xl flex items-end gap-1 tracking-tight font-plex-sans font-medium"
            >
              <span>Let&apos;s Talk!</span>
            </motion.p>
          ) : (
            <motion.p
              key="yearly2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-3xl flex items-end gap-1 tracking-tight font-plex-sans font-medium"
            >
              <span>Let&apos;s Talk!</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <Link href="https://calendly.com/skillura-enterprise">
        <motion.button
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="w-full my-4 h-11 text-base flex justify-center items-center font-medium bg-white border border-black/10 text-foreground rounded-full"
        >
          Contact Sales Team
        </motion.button>
      </Link>
      <Separator className=" w-full bg-foreground opacity-10" />

      <p className=" mb-4 mt-4 font-medium text-foreground">
        Everything in Advanced, plus:
      </p>
      <div className="flex items-center gap-2 mb-2">
        <Check className=" text-primary" />
        <span className="text-base">Flexible team member limits</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Check className=" text-primary" />
        <span className="text-base">SSO & SCIM</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Check className=" text-primary" />
        <span className="text-base">Custom Data Policies</span>
      </div>
      <div className="flex items-start gap-2 mb-2">
        <div>
          <Check className=" text-primary" />
        </div>
        <span className="text-base">Analytics overview</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Check className=" text-primary" />
        <span className="text-base">White-label branding</span>
      </div>
    </div>
  </div>
);
