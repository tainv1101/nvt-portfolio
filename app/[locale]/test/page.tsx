"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { TbChevronCompactDown } from "react-icons/tb";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import ContentPanel from "./ContentPanel";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import Socials from "./Socials";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollPinBannerStackContent() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".greeting", {
      height: 0,
      opacity: 0,
      duration: 2,
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
      .to(".introduce__description", {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 2,
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

      <div className="greeting__wrapper flex itmes-center justify-center h-screen w-screen overflow-hidden fixed text-5xl font-bold top-0 left-0 z-[100] bg-amber-500">
        <div className="greeting size-full flex flex-col items-center justify-center gap-4">
          <h1>
            Hi there, welcome to
          </h1>
          <h1>Nguyen Van Tai Portfolio</h1>
        </div>
      </div>

      <section className="introduce__wrapper h-dvh w-dvw sticky top-0 bg-gray-50/50 text-primary">
        <div className="container relative h-full mx-auto">
          <div className="introduce__info absolute top-[20dvh] left-0 space-y-4 max-w-[600px] opacity-0 transition-all transform translate-y-32">
            <h1 className="text-5xl font-bold text-yellow-500">Nguyen Van Tai</h1>
            <h2 className="text-4xl">Frontend Developer</h2>

            <p className="text-xl">As a Frontend developer with 1+ year of hands-on experience, I thrive on crafting intuitive, high-performance user interfaces.</p>

            <dl className="text-xl space-y-2">

              <div>
                <p>I have experience in:
                  <strong className="ml-4">React.js, Next.js, Tailwindcss, Typescript.</strong>
                </p>
              </div>

              <div>
                <p>Other skills:
                  <strong className="ml-4">Git, Redux, Zustand, Axios,... </strong>
                </p>
              </div>
            </dl>

            <div className="space-y-2">
              <p className="text-xl flex items-center gap-2">
                <IoMail size={25} />
                <a href="https://mail.google.com/mail/?view=cm&to=taivn@gmail.com" target="_blank" className="hover:underline hover:text-accent">taivn@gmail.com</a>
              </p>

              <p className="text-xl flex items-center gap-2">
                <FaPhone size={22} />
                <a href="tel:0814499952" target="_blank" className="hover:underline hover:text-accent">0814499952</a>
              </p>

              <Socials
                containerClassName={cn("flex gap-6 items-center")}
                iconClassName={cn("w-9 h-9 border border-accent rounded-full flex  justify-center items-center hover:scale-125 hover:text-primary hover:transition-all durations-500")}
              />
            </div>
          </div>

          <div className="introduce__description absolute top-[70dvh] right-0 space-y-4 max-w-[500px] opacity-0 transition-all transform translate-y-32">
            <p className="text-xl">Life isn’t about waiting for the storm to pass. It’s about learning to dance in the rain.</p>
          </div>
        </div>


        <div className="scroll__down relative bottom-20 flex flex-col items-center justify-center opacity-0">
          <h1 className="text-lg">Scroll Down</h1>
          <TbChevronCompactDown size={30} className="-mt-1" />
        </div>
      </section>

      {/* <div className="content__wrapper content__1 relative"> */}
      {/* <ContentPanel id="panel-1" bgColorClass="bg-primary">
        <div className="relative size-full flex items-start gap-10">
          
          <div className="space-y-6 sticky py-20 h-full w-full pin__content">
            <h1 className="text-3xl font-bold inline-block border-b-2 border-yellow-500">Experience</h1>
            <div>
              <div className="flex items-end gap-2">
                <h1 className="text-2xl inline-block text-yellow-500">MEMBEE</h1>
                <p className="text-lg">(7/2023 - 3/2025)</p>
              </div>

              <div className="flex items-end gap-2">
                <h2 className="text-xl font-bold">Role:</h2>
                <p className="text-lg">Frontend Developer</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold">Project Summary</h2>
              <p className="text-lg max-w-[600px]">MemBee platform – a Loyalty as a Service solution, encompassing applications such as MemBee Web Admin, MemBee POS, and MemBee Wallet, assisting businesses in implementing customer loyalty programs and driving revenue growth.</p>
              <p className="text-lg max-w-[600px]">Helps businesses increase profits by leveraging existing customers and generating new business opportunities without requiring large investments in Marketing and Sales budgets.</p>
            </div>

          </div>

      
          <div className="relative py-20 space-y-6 w-full scroll__content">

            <h1 className="text-3xl font-bold inline-block border-b-2 border-yellow-500">Projects</h1>
            <div className="h-[200vh] bg-white border-red-500 border"></div>

          </div>
        </div>
      </ContentPanel> */}
      <ContentPanel id="panel-1" bgColorClass="bg-primary" height="min-h-[200vh]">
        <div className="relative w-full flex items-start gap-10">
          {/* LEFT: STICKY EXPERIENCE */}
          <div className="pin__content w-1/2 sticky top-0 self-start space-y-6 py-20">
            <h1 className="text-3xl font-bold inline-block border-b-2 border-yellow-500">Experience</h1>
            <div>
              <div className="flex items-end gap-2">
                <h1 className="text-2xl inline-block text-yellow-500">MEMBEE</h1>
                <p className="text-lg">(7/2023 - 3/2025)</p>
              </div>
              <div className="flex items-end gap-2">
                <h2 className="text-xl font-bold">Role:</h2>
                <p className="text-lg">Frontend Developer</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold">Project Summary</h2>
              <p className="text-lg max-w-[600px]">MemBee platform – a Loyalty as a Service solution...</p>
              <p className="text-lg max-w-[600px]">Helps businesses increase profits...</p>
            </div>
          </div>

          {/* RIGHT: SCROLLING PROJECTS */}
          <div className="scroll__content w-1/2 py-20 space-y-6">
            <h1 className="text-3xl font-bold inline-block border-b-2 border-yellow-500">Projects</h1>
            <div className="h-[200vh] bg-white border-red-500 border"></div>
          </div>

        </div>
      </ContentPanel>


      <ContentPanel id="panel-2" spacing="0px" className="sticky top-0 -mt-20" bgColorClass="bg-yellow-400" height="h-screen">
        <div className="py-20">
          <h1 className="text-5xl">Panel 1</h1>
        </div>
      </ContentPanel>

      {/* </div> */}
      <div className="h-dvh relative z-10 bg-pink-200">
        <h1 className="text-5xl">END</h1>
      </div>
    </div>
  )
}