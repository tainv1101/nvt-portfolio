"use client";
import About from "@/features/showcase/zentry/components/About";
import Heros from "@/features/showcase/zentry/components/Heros";
import { usePracticeSize } from "@/store/practice";
import { useEffect, useRef } from "react";


function Gsap() {
  const setSize = usePracticeSize((state) => state.setSize);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (!!ref.current) observer.unobserve(ref?.current);
    };
  }, [setSize]);
  return (
    <div ref={ref} className="size-full">
      <Heros />
      <About />
    </div>
  );
}

export default Gsap;