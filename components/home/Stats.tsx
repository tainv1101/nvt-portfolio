"use client"
import CountUp from "react-countup"

const stats = [
  {
    end: 12,
    text: "Work exprerients"
  },
  {
    end: 500,
    text: "Learning time"
  },
  {
    end: 50,
    text: "Courses"
  },
  {
    end: 300,
    text: "Code commits"
  }
]
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto pt-4 pb-12 xl:p-0">
        <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-[none]">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-1 gap-4 items-center justify-center xl:justify-start">
              <CountUp className="font-extrabold text-4xl xl:text-6xl" delay={2} end={stat.end} duration={4} />
              <span className={`${stat.text.length > 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug`}>{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats