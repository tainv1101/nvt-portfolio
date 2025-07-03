"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function ScrolltriggerChoreography() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });

    const cards = document.querySelectorAll(".card");
    const imgs = document.querySelectorAll(".img");
    const totalCards = cards.length;

    gsap.set(cards[0], { y: "0%", scale: 1, rotation: 0 });
    gsap.set(imgs[0], { scale: 1 });

    for (let i = 1; i < totalCards; i++) {
      gsap.set(cards[i], { y: "100%", scale: 1, rotation: 0 });
      gsap.set(imgs[i], { scale: 1 });
    }

    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky-cards",
        start: "top top",
        end: `+=${window.innerHeight * (totalCards - 1)}`,
        pin: true,
        scrub: 0.5,
      },
    });

    for (let i = 0; i < totalCards - 1; i++) {
      const currentCard = cards[i];
      const currentImg = imgs[i];
      const nextCard = cards[i + 1];
      const position = i;

      scrollTimeLine.to(currentCard, {
        scale: 0.5,
        rotation: 10,
        duration: 1,
        ease: "none",
      }, position)

      scrollTimeLine.to(
        currentImg,
        {
          scale: 1.5,
          duration: 1,
          ease: "none",
        },
        position
      )

      scrollTimeLine.to(
        nextCard,
        {
          y: "0%",
          ease: "none",
          duration: 1,
        },
        position
      )
    }

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, { scope: containerRef });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content relative">
        <div className="animate-container relative" ref={containerRef}>
          <section className="intro sticky top-0 h-svh w-vw p-12 overflow-hidden flex justify-center items-center">
            <h1 className="h1">Art is not what you see. It&apos;s what you  *feel* in the blur, the chaos, the motion - every pulse capture in color and form</h1>
          </section>

          <section className="sticky-cards h-svh w-vw p-12 overflow-hidden flex justify-center items-center">
            <div className="cards-container relative h-1/2 w-1/2 rounded-md overflow-hidden">

              <div className="card absolute size-full overflow-hidden rounded-lg">
                <div className="tag absolute top-4 left-4 p-2 z-[1]">
                  <p className="uppercase"> Raw emotion</p>
                </div>
                <div className="img relative h-dvh w-full bg-red-300"></div>
              </div>

              <div className="card absolute size-full overflow-hidden rounded-lg">
                <div className="tag absolute top-4 left-4 p-2 z-[1]">
                  <p className="uppercase"> Raw emotion 2</p>
                </div>
                <div className="img relative h-dvh w-full bg-yellow-300"></div>
              </div>

              <div className="card absolute size-full overflow-hidden rounded-lg">
                <div className="tag absolute top-4 left-4 p-2 z-[1]">
                  <p className="uppercase"> Raw emotion 2</p>
                </div>
                <div className="img relative h-dvh w-full bg-amber-300"></div>
              </div>

              <div className="card absolute size-full overflow-hidden rounded-lg">
                <div className="tag absolute top-4 left-4 p-2 z-[1]">
                  <p className="uppercase"> Raw emotion 2</p>
                </div>
                <div className="img relative h-dvh w-full bg-green-300"></div>
              </div>

              <div className="card absolute size-full overflow-hidden rounded-lg">
                <div className="tag absolute top-4 left-4 p-2 z-[1]">
                  <p className="uppercase"> Raw emotion 2</p>
                </div>
                <div className="img relative h-dvh w-full bg-slate-300"></div>
              </div>



            </div>
          </section>


          <section className="outro h-svh w-vw p-12 overflow-hidden flex justify-center items-center">
            <h1 className="h1">This isn&apos;t just motion. It&apos;s meaning in moment. In every blurred edge and amplified hue, we trace the shape of something deeper - truth in abstraction</h1>
          </section>

        </div>
      </div>
    </div>
  );
}

export default ScrolltriggerChoreography;
