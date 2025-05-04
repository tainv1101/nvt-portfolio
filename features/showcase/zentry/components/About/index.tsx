/* eslint-disable @next/next/no-img-element */
"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useSibar } from "@/store/practice";
import AnimatedTitle from "./AnimateTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const isExpand = useSibar((state) => state.isExpand);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800",
        scrub: 0.5,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100%",
      height: "100vh",
      borderRadius: 0,
    });
  });

  // Cập nhật khi sidebar thay đổi
  useEffect(() => {
    console.log("refresh")
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  }, [isExpand]);

  useEffect(() => {
    const target = document.querySelector("#clip");
    if (!target) return;

    const observer = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });

    observer.observe(target);
    return () => observer.disconnect();
  }, []);


  return (
    <div className="size-full overflow-x-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-primary text-center"
        />

        <div className="absolute bottom-[-70dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-[calc(100dvh-var(--practice-header-height))] w-full min-w-full" id="clip">
        <div className="mask-clip-path absolute left-1/2 -translate-x-1/2 top-0 z-20 h-[60vh] w-96 origin-center rounded-3xl md:w-[30vw]">
          <img
            src="/assets/imgs/about.webp"
            alt="Background"
            className="size-full object-cover"
          />
        </div>
      </div>
      <div className="h-[40x] w-full bg-transparent" />
    </div>
  );
};

export default About;