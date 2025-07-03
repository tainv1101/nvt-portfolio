"use client";
import About from "@/features/showcase/zentry/components/About";
import Features from "@/features/showcase/zentry/components/Features";
import Heros from "@/features/showcase/zentry/components/Heros";

function Gsap() {

  return (
    <div className="size-full">
      <Heros />
      <About />
      <Features />
    </div>
  );
}

export default Gsap;