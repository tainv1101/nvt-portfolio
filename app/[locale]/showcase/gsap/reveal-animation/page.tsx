"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollPinBannerStackContent() {
  const contentRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    const fixedContentTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".spacer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    })

    fixedContentTL.to(".header-title", {
      rotation: 90,
      scale: 3,
      duration: 1
    })


    // content 1
    const content1TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".content1",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      }
    })
    content1TL.to(".content1", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    })

    // content 2
    const content2TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".content2-wrapper",
        start: "top 80%",
        end: "40% center",
        scrub: 1,
      }
    })

    content2TL
      .to(".content2-wrapper", { padding: 0 })
      .to(".content2", {
        rotation: 0,
        x: 0,
        y: 0,
        margin: 0,
      })


    // content 3
    const content3TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".content3-wrapper",
        start: "top 80%",
        end: "30% center",
        scrub: 1,
      }
    })

    content3TL
      .to(".content3-wrapper", { padding: 0 })
      .to(".content3", {
        rotation: 0,
        x: 0,
        y: 0,
        margin: 0,
        marginTop: 0,
      })

    // end
    gsap.to(".end-text", {
      rotationY: 360,
      rotationZ: 360,
      rotationX: 360,
      x: 50,
      y: 50,
      z: 50,
      duration: 4,
      scale: 2,
      repeat: -1,
      repeatDelay: 1,
      yoyoEase: true,
      yoyo: true,
      ease: "power1.out"
    })

  }, {})
  return (
    <div className="scontainer size-full">
      <section className="fixed z-0 top-0 left-0 w-dvw h-dvh bg-black">
        <nav className="absolute w-full p-2 flex justify-between items-center">
          <div className="logo uppercase">LOGO</div>
          <div className="links flex items-center gap-2">
            <p>link 1</p>
            <p>link 2</p>
          </div>
        </nav>

        <div className="header absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="header-title text-4xl md:text-6xl text-white font-bold uppercase">
            Header
          </h1>
        </div>
      </section>

      <div ref={contentRef} className="content relative top-[100vh] w-full bg-transparent">
        <div className="h-dvh bg-transparent spacer"></div>

        {/* CONTENT 1 */}
        <section className="content1 origin-top-left rotate-12 -translate-x-44 sticky top-0 bg-yellow-500 h-screen overflow-hidden">
          <div className="content-header w-full flex flex-col md:flex-row justify-between gap-4 p-4 mb-2">
            <h1 className="text-white text-[12vw] md:text-[8vw]">section1</h1>
            <p className="text-white max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis nemo sint aut...
            </p>
          </div>
          <div className="content-imgs space-y-4 p-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="row flex flex-col sm:flex-row gap-4">
                <div className="bg-red-500 w-full h-60 sm:h-96"></div>
                <div className="bg-violet-500 w-full h-60 sm:h-96"></div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT 2 */}
        <section className="content2-wrapper pt-40 sticky top-0">
          <div className="content2 origin-top-left rotate-12 -translate-x-44 bg-black h-screen overflow-hidden">
            <div className="content-header w-full flex flex-col md:flex-row justify-between gap-4 p-4 mb-2">
              <h1 className="text-white text-[12vw] md:text-[8vw]">section2</h1>
              <p className="text-white max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <div className="content-imgs space-y-4 p-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="row flex flex-col sm:flex-row gap-4">
                  <div className="bg-red-500 w-full h-60 sm:h-96"></div>
                  <div className="bg-violet-500 w-full h-60 sm:h-96"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT 3 */}
        <section className="content3-wrapper pt-40 sticky top-0">
          <div className="content3 origin-top-left rotate-12 -translate-x-44 bg-green-400 h-screen overflow-hidden">
            <div className="content-header w-full flex flex-col md:flex-row justify-between gap-4 p-4 mb-2">
              <h1 className="text-white text-[12vw] md:text-[8vw]">section3</h1>
              <p className="text-white max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <div className="content-imgs space-y-4 p-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="row flex flex-col sm:flex-row gap-4">
                  <div className="bg-red-500 w-full h-60 sm:h-96"></div>
                  <div className="bg-violet-500 w-full h-60 sm:h-96"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-dvh relative bg-red-200 flex items-center justify-center">
          <h1 className="font-bold text-6xl end-text text-white">END</h1>
        </div>
      </div>

    </div>
  );
}
