"use client"
import Image from "next/image"
import { motion } from "framer-motion";

function Photo() {


  return (
    <motion.div
      className=""
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
          delay: 0.5,
        },
      }}
    >
      <motion.div
        className="relative mb-14 xl:mb-0 size-[250px] xl:size-[500px] rounded-full overflow-hidden backdrop-blur-md"
        animate={{
          x: [0, -60, -80, -60, 0, 60, 80, 60, 50, 0],
          y: [0, -10, -5, 15, 30, 60, 80, 100, 70, 40],
          scale: [1, 1.05, 0.97, 1.02, 1, 1.05, 0.9, 1.02, 1],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          src={"/assets/imgs/cv.jpg"}
          fill
          alt=""
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  )
}
export default Photo