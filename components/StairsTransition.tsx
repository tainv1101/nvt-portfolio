"use client"
// import { usePathname } from "@/i18n/routing"
import { usePathname } from "@/i18n/routing";
import { AnimatePresence, motion } from "motion/react"
import Stairs from "./Stairs";


function StairsTransition() {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
      </div>
      <motion.div
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { delay: 0.8, duration: 0.3, ease: "easeInOut" } }}
      />
    </AnimatePresence>
  );
}

export default StairsTransition;