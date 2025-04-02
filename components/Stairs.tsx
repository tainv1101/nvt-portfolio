import { motion } from "framer-motion"

const stairAnimation = {
  initial: {
    top: "0%"
  },
  animate: {
    top: "100%"

  },
  exit: {
    top: ["100%", "0%"]
  }
}
// calculated the reverse index 
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1
}

function Stairs() {
  return (
    <>
      {/* render 6 divs, each representing a step of the stairs 
      Each div will have the same animation defined by the stairsAnimation object.
      The delay for each div is calculated dynamically base  an it's reversed index,
      creating a staggered effect with decreasing delay for each subseuqent step
    */}
      {
        Array(6).fill(null).map((_, index) => (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            exit="exit"
            animate="animate"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1
            }}
            className="h-full w-full bg-white relative"
          />
        ))
      }
    </>
  );
}

export default Stairs;