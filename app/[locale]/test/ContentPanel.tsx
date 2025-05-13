"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";
import { IdCard } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ContentPanelProps {
  bgColorClass?: string,
  id: string,
  spacing?: boolean | string | number,
  children: React.ReactNode,
  pin?: boolean | string,
  height?: string,
  className?: React.HTMLAttributes<HTMLDivElement>["className"],
}

function ContentPanel({ height, bgColorClass, id, spacing, children, pin = false, className }: ContentPanelProps) {

  useGSAP(() => {
    // content 1 animate
    const panel = gsap.timeline({
      scrollTrigger: {
        trigger: `.panel__scroll__trigger_${id}`,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
    });

    panel.to(`#${id}`, {
      x: 0,
      // y: 0,
      margin: 0,
      rotation: 0,
      ease: "none",
    })

  }, {})


  return (

    // <div className="relative">
    <>
      {!!spacing && (
        <div
          style={{
            height: typeof spacing === "string" ? spacing : `${spacing}dvh`,
          }}
          className="spacer bg-transparent"
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
        <div className={`panel__scroll__trigger_${id} bg-transparent absolute top-0 left-0 h-dvh]`} />

        <div className="container h-full">
          {children}
        </div>
      </section>
    </>
    // </div>
  );
}

export default ContentPanel;