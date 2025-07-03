"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "./_components/Navbar";
import ContentPanel from "./_components/ContentPanel";
import IntroSection from "./_components/Introsection";
import GreetingIntro from "./_components/Greeting";
import ExperientProjects from "./_components/ExperientProjects";
import SkillsAndEducation from "./_components/SkillsNEducation";


gsap.registerPlugin(ScrollTrigger);

export default function ScrollPinBannerStackContent() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".greeting", {
      opacity: 0,
      duration: 1.5,
      ease: "none",
      onComplete: () => {
        gsap.to(".greeting__wrapper", {
          display: "none"
        })
      }
    })
      .to(".introduce__info", {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "none"
      })
      .to(".introduce__photo", {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "none"
      })
      .to(".introduce__description", {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        ease: "none"
      })
      .to(".scroll__down", {
        opacity: 1
      }).to(".scroll__down", {
        y: 10,
        duration: 2,
        repeat: -1,
        ease: "none",
      })

  }, {})


  return (
    <div ref={pageRef} className="relative w-dvw bg-white text-white">
      <Navbar />
      <GreetingIntro />
      <IntroSection />

      <ContentPanel id="panel-1" spacingHeightClass="h-[100px]" triggerHeightClass="h-[100px]" className="xl:sticky top-0 xl:overflow-hidden overflow-auto" bgColorClass="bg-yellow-400">
        <SkillsAndEducation />
      </ContentPanel>

      <ContentPanel id="panel-2" bgColorClass="bg-primary" className="min-h-screen" triggerHeightClass="h-[100px]">
        <ExperientProjects />
      </ContentPanel>

      <div className="h-dvh relative flex py-32 justify-center z-10 bg-[#F5F0E6] font-bold text-[#333333]">
        <div className="container space-y-10 md:space-y-20 flex flex-col items-center justify-center px-5 sm:px-24 lg:px-44">
          <h1 className="text-[5vh] sm:text-[5vh] md:text-[8vh] xl:text-[10vh]">THANK YOU</h1>
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl">
            <h3>{`Thank you for taking the time to review my portfolio.`}</h3>
            <h3>{`I’m grateful for the opportunity, and I hope we’ll have the chance to create something meaningful together.`}</h3>
          </div>

          <div className="w-full text-end text-sm sm:text-base md:text-xl lg:text-2xl italic">
            <p>{`"We dream, we build, we sometimes fall,`}</p>
            <p>{`But rising is where we find it all."`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}