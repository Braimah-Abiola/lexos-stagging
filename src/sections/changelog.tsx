import { Timeline } from "@/components/common/timeline";
import Wrapper from "@/components/common/wrapper";
import Image from "next/image";
import React from "react";


export function AllChangelogs() {
  const data = [
    {
      title: "04 June 2025",
      content: (
        <div>
          <h2 className=" text-2xl font-semibold font-plex-sans text-foreground tracking-tight">
            QR Code Implementation
          </h2>
          <p className="text-foreground/70 text-base md:mt-4 mb-8">
            Faster processing, enhanced accuracy, and expanded item recognition are now even more powerful with our new QR code implementation from desktop to phone.
          </p>
          <div className=" w-full h-auto aspect-video md:aspect-auto md:h-[28rem] relative">
            <Image
              src="/assets/qr-update.png"
              alt="Changelog 1"
              fill
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "24 April 2025",
      content: (
        <div>
          <h2 className=" text-2xl font-semibold font-plex-sans text-foreground tracking-tight">
            Faster Processing & More Accurate Data
          </h2>
          <p className="text-foreground/70 text-base md:mt-4 mb-8">
            We&apos;ve significantly optimized our algorithms, resulting in quicker inventory processing times and more precise data extraction from your uploads. Experience a smoother, more reliable workflow.
          </p>
          <div className=" w-full h-auto aspect-video md:aspect-auto md:h-[28rem] relative">
            <Image
              src="/assets/update-2.png"
              alt="Changelog 2"
              fill
              className="rounded-xl object-cover border border-black/20 h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "",
      content: (
        <div className=" h-fit">
          <h2 className=" text-2xl font-semibold font-plex-sans text-foreground tracking-tight">
            That&apos;s all for now
          </h2>
        </div>
      ),
    },
  ];
  return (
    <Wrapper className="w-full -mt-[48rem] mb-40">
      <div className=" max-w-6xl mx-auto">
        <Timeline data={data} />
      </div>
    </Wrapper>
  );
}
