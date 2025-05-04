"use client";

import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP, ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }: { title: string, containerClass?: string }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "100 bottom",
        end: "center bottom",
        toggleActions: "play none none reverse",
      },
    });

    titleAnimation.to(
      ".zentry-animated-word",
      {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      },
      0
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={cn("zentry-animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="zentry-animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;