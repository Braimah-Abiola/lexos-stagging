"use client";

import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  const [height, setHeight] = useState("1050px");

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Define your mobile breakpoint here
      if (isMobile) {
        setHeight("1100px"); // Set mobile height
      } else {
        setHeight("900px"); // Set desktop height
      }
    };

    handleResize(); // Call on initial render
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="overflow-y-hidden px-3 md:px-0 -mt-[50rem] relative z-20">
      <InlineWidget
        styles={{
          height: height,
        }}
        url="https://calendly.com/dino-lexosmove/30min"
      />
    </div>
  );
};

export default Calendly;
