import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"

const Photo = () => {
  return (
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
  )
}

export default Photo