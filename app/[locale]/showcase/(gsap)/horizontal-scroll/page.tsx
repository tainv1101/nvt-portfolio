"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const sections = sectionsRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current!.offsetWidth,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div ref={containerRef} className="relative flex h-screen overflow-hidden">
        {["Section 1"].map((text, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sectionsRef.current[index] = el;
            }}
            className="flex h-screen w-screen flex-shrink-0 items-center justify-center text-5xl font-bold text-white"
            style={{
              background: `hsl(${index * 100}, 80%, 60%)`,
            }}
          >
            {text}
          </div>
        ))}
      </div>

      <div className="flex h-screen w-screen flex-shrink-0 items-center justify-center text-5xl font-bold text-white bg-primary"
      ></div>
    </div>
  );
};

export default HorizontalScroll;
