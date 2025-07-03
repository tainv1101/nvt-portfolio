"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ContentPanelProps {
  bgColorClass?: string,
  id: string,
  spacingHeightClass?: boolean | string | number,
  children: React.ReactNode,
  pin?: boolean | string,
  height?: string,
  className?: React.HTMLAttributes<HTMLDivElement>["className"],
  triggerHeightClass?: React.HTMLAttributes<HTMLDivElement>["className"]
}

function ContentPanel({ height, bgColorClass, id, spacingHeightClass, children, pin = false, className, triggerHeightClass }: ContentPanelProps) {

  useGSAP(() => {
    // content 1 animate
    const panel = gsap.timeline({
      scrollTrigger: {
        trigger: `.panel__scroll__trigger_${id}`,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        pin: pin,
        pinSpacing: false,
      },
    });

    panel.to(`#${id}`, {
      x: 0,
      y: 0,
      margin: 0,
      rotation: 0,
      ease: "none",
    })
    // .set(`#${id}`, { position: "sticky", top: 0 });

  }, {})


  return (

    // <div className="relative">
    <>
      {!!spacingHeightClass && (
        <div
          className={cn("spacer bg-transparent", spacingHeightClass)}
        />
      )}
      <section
        id={id}
        className={cn(
          "content__panel transition-transform transform -translate-x-20 w-full origin-top-left rotate-3",
          bgColorClass ? bgColorClass : "bg-red-950",
          height ? height : "min-h-screen",
          className

        )}
      >
        <div className={cn(`panel__scroll__trigger_${id} bg-transparent absolute top-0 left-0 h-screen w-screen]`, triggerHeightClass)} />

        <div className="h-full">
          {children}
        </div>
      </section>
    </>
    // </div>
  );
}

export default ContentPanel;