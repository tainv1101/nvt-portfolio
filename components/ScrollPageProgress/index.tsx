"use client"
import { useScrollProgress } from "@/hooks/use-scroll-process";

function ScrollPageProgress() {
  const scrollProgress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 h-1 bg-primary z-[100] transition-all" style={{ width: `${scrollProgress}%` }} />
  );
}

export default ScrollPageProgress;