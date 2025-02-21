"use client"
import { motion } from "motion/react"
import Image from "next/image"

const Photo = () => {
  return (
    <div>
      <div className="w-full h-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 0.5, ease: "easeIn" } }}
          className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] rounded-full mix-blend-lighten"
        >
          <Image
            src={"/assets/imgs/cv.jpg"}
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full"
          />

        </motion.div>
      </div>
      {/* <motion.svg
        className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] "
        fill="transparent"
        viewBox="0 0 550 550"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx={253}
          cy={253}
          r={250}
          stroke="#fff"
          strokeWidth={"4px"}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["28 65 3 12", "31 241 9 99", "91 23 31 12", "22 11 88 99"],
            rotate: [120, 360]
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.svg> */}
    </div>
  )
}

export default Photo