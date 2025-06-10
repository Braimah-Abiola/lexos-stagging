"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface ChangelogDialogProps {
  dialogId: string;
  title: string;
  description: string;
  imageSrc: string;
}

export function ChangelogDialog({
  dialogId,
  title,
  description,
  imageSrc,
}: ChangelogDialogProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Check if this specific changelog has been seen
  useEffect(() => {
    let timer: NodeJS.Timeout;
    // Only run on client side
    if (typeof window !== "undefined") {
      const seenChangelogs = JSON.parse(
        localStorage.getItem("seenChangelogs") || "{}"
      );

      // If this changelog hasn't been seen before, schedule it to show
      if (!seenChangelogs[dialogId]) {
        timer = setTimeout(() => {
          setOpen(true);
        }, 120000); // 2 minutes in milliseconds (2 * 60 * 1000)
      }
    }
    // Cleanup timeout if component unmounts or dialogId changes
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [dialogId]);

  const handleClose = () => {
    // Save to localStorage that this changelog has been seen
    if (typeof window !== "undefined") {
      const seenChangelogs = JSON.parse(
        localStorage.getItem("seenChangelogs") || "{}"
      );
      seenChangelogs[dialogId] = true;
      localStorage.setItem("seenChangelogs", JSON.stringify(seenChangelogs));
    }

    setOpen(false);
  };

  const handleViewChangelog = () => {
    router.push(`/changelog`);
    handleClose();
  };

  // If the dialog isn't open, don't render anything
  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-white border-black/5 rounded-2xl p-2 focus:border-none focus:outline-none">
        <DialogClose>
          <div className="bg-white hover:bg-secondary hover:text-primary cursor-pointer h-12 aspect-square rounded-full flex items-center justify-center border border-black/5 absolute -top-20 md:-top-16 right-1/2 translate-x-1/2 md:translate-x-0 md:right-[-4rem]">
            <X />
          </div>
        </DialogClose>
        <div className="relative w-full h-60 md:h-72 overflow-hidden rounded-t-xl -mt-4">
          <div className="inset-x-0 h-1/2 bottom-0 bg-gradient-to-b from-transparent to-white absolute z-10"></div>
          <Image
            src={imageSrc}
            alt="Changelog"
            fill
            className="object-cover"
            priority
          />
        </div>
        <DialogHeader className="space-y-0 -mt-4">
          <span className=" mx-auto mb-2 w-fit inline-flex items-center justify-center pl-4 border border-primary/5 bg-primary/10 rounded-full pr-4 py-1 transition ease-out hover:text-primary hover:duration-300">
            <span className="font-medium text-primary">What&apos;s New - June 2025</span>
          </span>
          <DialogTitle className="text-foreground text-center font-medium text-2xl tracking-tight">
            {title}
          </DialogTitle>
        </DialogHeader>
        <p className="text-base text-foreground/70 text-center px-4 -mt-4 font-normal">
          {description}
        </p>
        <DialogFooter className="sm:justify-between gap-4 px-4 pb-4 mt-0">
          <div
            className="w-full hover:scale-[1.025] ease-in-out transition-all duration-300"
            onClick={handleViewChangelog}
          >
            <Link href="/changelog">
              <Button className="w-full">
                Learn More
              </Button>
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
