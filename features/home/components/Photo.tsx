"use client"
import Image from "next/image"
import { motion } from "framer-motion"

function Photo() {
  return (
    <motion.div
      className="relative mb-14 xl:mb-0 size-[250px] xl:size-[500px] rounded-full overflow-hidden"
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

      <Image
        src={"/assets/imgs/cv.jpg"}
        fill
        alt=""
        className="object-cover"
      />
    </motion.div>
  )
}
export default Photo