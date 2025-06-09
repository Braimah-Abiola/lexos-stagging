"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Separator } from "./separator";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      " bg-white cursor-pointer border border-black/5 rounded-xl px-4 md:px-4",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center cursor-pointer justify-between py-3 pr-2 md:pr-0 md:py-2 text-start text-lg font-medium transition-all [&[data-state=open]>div]:bg-primary [&[data-state=open]]:text-primary [&[data-state=open]>div]:text-white [&[data-state=open]>div]:rotate-45",
        className
      )}
      {...props}
    >
      {children}
      <div className="transition-transform duration-200 aspect-square ml-2 md:ml-0 h-10 md:h-11 bg-foreground rounded-full text-white flex items-center justify-center">
        <Plus className=" h-5 w-5 md:h-6 md:w-6 shrink-0" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden  cursor-pointer text-base md:text-lg text-forground opacity-80 font-montserrat transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-6 pt-0", className)}>
      <Separator className=" w-full mb-5" orientation="horizontal" />
      <p className=" max-w-[60ch]">
        {children}
      </p>
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
